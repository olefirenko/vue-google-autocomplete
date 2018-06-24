#!/usr/bin/env node

'use strict';

/**
* Code adapted from vue-gh-pages
* @see {@link https://github.com/KieferSivitz/vue-gh-pages/blob/master/index.js}
*/
const execSync = require('child_process').execSync;
const fs = require('fs');
const ghpages = require('gh-pages');
const ncp = require('ncp').ncp;
const packageJson = require('./package.json');
const path = require('path');
const repository = packageJson['homepage'] || null;
const webpackSimpleTemplate = packageJson['wst'] || null;
const rimraf = require('rimraf');
const argv = require('minimist')(process.argv.slice(2));

let outputDirectory = './docs-publish';

function copyFiles(originalFile, newFile, callback) {
    ncp.limit = 16;
    ncp(originalFile, newFile, function(error) {
        if (error) {
            return console.error(error);
        }
        if (typeof(callback) !== 'undefined') {
            return callback();
        }
    });
}

function editForProduction() {
    console.log('Preparing files for github pages...');
    if (!fs.existsSync(outputDirectory + '/index.html')) {
        fs.createReadStream('index.html').pipe(fs.createWriteStream(outputDirectory + '/index.html'));
    }
    fs.readFile(outputDirectory + '/index.html', 'utf-8', function(error, data) {
        if (error) {
            return console.error(error);
        }
        const removeLeadingSlash = data.replace(/(src|href)=\//g, '$1=');
        let removeWebpackSimpleTemplate = removeLeadingSlash;
        if (webpackSimpleTemplate) {
            removeWebpackSimpleTemplate = data.replace(webpackSimpleTemplate, '');
        }
        fs.writeFileSync(outputDirectory + '/index.html', removeWebpackSimpleTemplate);
        if (repository !== null) {
            // Copy fiels over....
            console.log('Generating and copying over JSDocs...');
            execSync('npm run docs', { 'stdio': [0, 1, 2] });
            ncp('docs', 'docs-publish/docs', function (err) {
                if (err) {
                    console.log('Error copying docs over: ', error);
                    return console.error(err);
                }
                console.log('JSDocs Copied!');
            });

            // Publish to Github Pages.
            console.log('Publishing docs to gh-pages branch...');

            let publishOptions = {
                src: '**/*',
                message: 'Github pages updates.'
            }

            ghpages.publish('docs-publish', publishOptions, function(error) {
                if (error) {
                    console.log('Push to remote gh-pages branch failed: ', error);
                    return console.error(error);
                }
                console.log(`The production build is ready and has been pushed to the remote branch.`);
            });
        }
    });
}

function runBuild() {
    let packageManagerName = 'npm';
    execSync('npm run build', { 'stdio': [0, 1, 2] });
    copyFiles('dist', path.resolve(outputDirectory), function() {
        console.log('Build Complete.');
        const pathToBuild = 'dist';
        rimraf(pathToBuild, function() {
            const filesToInclude = ['CNAME', 'favicon.ico', '404.html'];
            filesToInclude.forEach((file) => {
                if (fs.existsSync(file)) {
                    copyFiles(file, outputDirectory + `/${file}`);
                }
            });
            editForProduction();
        });
    });
}

runBuild();

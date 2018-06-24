const jsdoc2md = require('jsdoc-to-markdown');
const fsPath = require('fs-path');

jsdoc2md.render({ files: './src/vga/VuetifyGoogleAutocomplete.js' }).then((result) => {
  let header = '# Vuetify Google Autocomplete\n\n[![Build Status](https://travis-ci.org/MadimetjaShika/vuetify-google-autocomplete.svg?branch=dev)](https://travis-ci.org/MadimetjaShika/vuetify-google-autocomplete)\n\nFor more detailed HTML output of the JSDocs, refer to the \`\`./docs\`\` directory.\n\n';

  const finalResult = `${header}${result}`;
  fsPath.writeFile('./JSDOCS.md', finalResult, (writeError) => {
    if (writeError) {
      console.error('Error updating JSDocs: ', writeError);
    }
    console.log('✅', ' JSDOCS.md Updated Successfully!');
  });
});

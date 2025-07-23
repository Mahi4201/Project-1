const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({

  //"retries":1,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 100000,
  

  e2e: {
    setupNodeEvents(on, config) {

      on('task', {downloadFile})
      // implement node event listeners here
      
    },
  },
});

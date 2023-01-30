
//import { defineConfig } from 'cypress';

//const { defineConfig } = require('cypress');



const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



/*
  module.exports = defineConfig({
        video: false,
        reporter: 'cypress-multi-reporters',
        reporterOptions: {
          configFile: 'reporter-config.json',
        },

          e2e: {
            setupNodeEvents(on, config){
              console.log(config)
              return require('./cypress/plugins/index.js')(on, config) 
          },
          baseUrl: 'https://serverest.dev',
        },
  });



*/



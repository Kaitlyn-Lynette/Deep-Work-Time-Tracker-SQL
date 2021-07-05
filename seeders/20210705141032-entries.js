'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Entries', [{
      description: "I set a new model without created_at since this is produce in Sequelize already.",
      createdAt: new Date,
      updatedAt: new Date()
    },
    {
      description: "My goal is to simpley generate a log of how I spend my time coding.",
      createdAt: new Date,
      updatedAt: new Date()
    },
    {
      description: "I do want this to be mobile friendly as well",
      createdAt: new Date,
      updatedAt: new Date()
    },
    {
      description: "I do want the logs to change according to the week",
      createdAt: new Date,
      updatedAt: new Date()
    },
    
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Entries',null, {})
  }
};

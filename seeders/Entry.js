'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Entry',[{
      hour: 9 ,
      description: "Reviewed SQL and Sequelize videos from the bootcamp",
      created_at: new Date()
    },
    {
      hour: 10 ,
      description: "Practiced algorithms on LeetCode",
      created_at: new Date()
    },
    {
      hour: 11 ,
      description: "Continued working on the Deep Work Time Tracker",
      created_at: new Date()
    },
    {
      hour: 12 ,
      description: "Continued working on the Deep Work Time Tracker",
      created_at: new Date()
    },
    {
      hour: 1 ,
      description: "Reviewed networking emails",
      created_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Entry', null, {});
  }
};

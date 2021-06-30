'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Entries',[{
      hour: 9 ,
      description: "Reviewed SQL and Sequelize videos from the bootcamp",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      hour: 10 ,
      description: "Practiced algorithms on LeetCode",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      hour: 11 ,
      description: "Continued working on the Deep Work Time Tracker",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      hour: 12 ,
      description: "Continued working on the Deep Work Time Tracker",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      hour: 1 ,
      description: "Reviewed networking emails",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Entries', null, {});
  }
};

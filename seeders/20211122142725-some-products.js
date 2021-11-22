"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "coffee",
          price: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TV",
          price: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "elephant",
          price: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "phone",
          price: 1200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "book",
          price: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};

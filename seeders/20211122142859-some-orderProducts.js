"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orderProducts",
      [
        {
          orderId: 1,
          productId: 4,
          quantity: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 3,
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 1,
          productId: 2,
          quantity: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          productId: 3,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          productId: 1,
          quantity: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          productId: 5,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orderProducts", null, {});
  },
};

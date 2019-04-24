'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Contacts', 'email', {
<<<<<<< HEAD
        type: Sequelize.STRING
=======
        type: Sequelize.STRING,
>>>>>>> 8be2f75b2b262f5236a94b7cfa96cae7c8f9832a
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts', 'email');
  }
};

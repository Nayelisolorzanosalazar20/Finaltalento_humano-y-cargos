'use strict';

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('unidad_cargo', {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          
          cargo_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: { model: 'cargos', key: 'id' },
          },
          unidad_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'unidad', key: 'id' },
          },
          encargado: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          periodo_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'periodo', key: 'id' },
          },
  
  });

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('unidad_cargo');
  }
};
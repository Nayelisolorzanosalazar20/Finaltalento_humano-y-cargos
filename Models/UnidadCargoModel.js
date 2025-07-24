import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { CargosModel } from "./CargosModel.js"; // <-- AGREGA ESTA LÍNEA
import { UnidadModel } from "./UnidadModel.js"; // <-- AGREGA ESTA LÍNE
import { PeriodoModel } from "./PeriodoModel.js"; // <-- AGREGA ESTA LÍNEA
export const UnidadCargoModel = sequelize.define('unidad_cargo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
  cargo_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  unidad_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  encargado: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  periodo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
 
}, {
  tableName: 'unidad_cargo',
  timestamps: false,
});
// ASOCIACIONES
UnidadCargoModel.belongsTo(CargosModel, {
  foreignKey: 'cargo_id',
  as: 'cargo'
});
UnidadCargoModel.belongsTo(UnidadModel, {
  foreignKey: 'unidad_id',
  as: 'unidad'
});
UnidadCargoModel.belongsTo(PeriodoModel, {
  foreignKey: 'periodo_id',
  as: 'periodo'
});

// Si quieres la relación inversa (opcional):
CargosModel.hasMany(UnidadCargoModel, { foreignKey: 'cargo_id', as: 'unidades_cargo' });
UnidadModel.hasMany(UnidadCargoModel, { foreignKey: 'unidad_id', as: 'unidades_cargo' });
PeriodoModel.hasMany(UnidadCargoModel, { foreignKey: 'periodo_id', as: 'unidades_cargo' });
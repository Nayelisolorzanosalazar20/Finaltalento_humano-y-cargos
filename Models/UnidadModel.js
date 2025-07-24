import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { PeriodoModel } from "./PeriodoModel.js"; // <-- AGREGA ESTA LÍNEA
export const UnidadModel = sequelize.define('unidad', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unidad_padre_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  periodo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'ACTIVO',
  },
}, {
  tableName: 'unidad',
  timestamps: false,
});

// ASOCIACIÓN UNIDAD PADRE (auto-relación)
UnidadModel.belongsTo(UnidadModel, {
  foreignKey: 'unidad_padre_id',
  as: 'unidad_padre'
});
UnidadModel.hasMany(UnidadModel, {
  foreignKey: 'unidad_padre_id',
  as: 'subunidades'
});

// ASOCIACIÓN CON PERIODO
UnidadModel.belongsTo(PeriodoModel, {
  foreignKey: 'periodo_id',
  as: 'periodo'
});
PeriodoModel.hasMany(UnidadModel, {
  foreignKey: 'periodo_id',
  as: 'unidades'
});
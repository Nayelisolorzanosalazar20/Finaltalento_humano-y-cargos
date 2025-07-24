import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { FuncionariosModel } from "./FuncionariosModel.js"; // <-- AGREGA ESTA LÍNEA
import { UnidadCargoModel } from "./UnidadCargoModel.js"; // <-- AGREGA ESTA LÍNEA
export const CargoAsignadoModel = sequelize.define('cargo_asignado', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
  unidad_cargo_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  funcionario_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
   fecha_fin: {
    type: DataTypes.DATE,
    allowNull: true
  },
  
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'ACTIVO',
  },
}, {
  tableName: 'cargo_asignado',
  timestamps: false,
});
// CargoAsignado pertenece a Funcionario
CargoAsignadoModel.belongsTo(FuncionariosModel, {
  foreignKey: 'funcionario_id',
  as: 'funcionario'
});

// CargoAsignado pertenece a UnidadCargo
CargoAsignadoModel.belongsTo(UnidadCargoModel, {
  foreignKey: 'unidad_cargo_id',
  as: 'unidad_cargo'
});
FuncionariosModel.hasMany(CargoAsignadoModel, {
  foreignKey: 'funcionario_id',
  as: 'cargos_asignados'
});
UnidadCargoModel.hasMany(CargoAsignadoModel, {
  foreignKey: 'unidad_cargo_id',
  as: 'cargos_asignados'
});
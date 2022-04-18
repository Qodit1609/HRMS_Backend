const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atten_regularization', {
    atten_reg_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    atten_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'attendance',
        key: 'atten_id'
      }
    },
    correction_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    previous_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    update_reason: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    update_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'atten_regularization',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "atten_reg_id" },
        ]
      },
      {
        name: "atten_reg_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "atten_reg_id" },
        ]
      },
      {
        name: "atten_id_idx",
        using: "BTREE",
        fields: [
          { name: "atten_id" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leave_detail', {
    leave_detail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    leave_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'leave',
        key: 'leave_id'
      }
    },
    emp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'leave',
        key: 'emp_id'
      }
    },
    leave_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    leave_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'leave_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "leave_detail_id" },
        ]
      },
      {
        name: "leave_id_idx",
        using: "BTREE",
        fields: [
          { name: "leave_id" },
        ]
      },
      {
        name: "emp_id_idx",
        using: "BTREE",
        fields: [
          { name: "emp_id" },
        ]
      },
    ]
  });
};

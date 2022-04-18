const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attendance', {
    atten_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'projects',
        key: 'project_id'
      }
    },
    leave_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'leave',
        key: 'leave_id'
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    total_days: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    present_days: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    week_off: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    punch_in: {
      type: DataTypes.DATE,
      allowNull: false
    },
    punch_out: {
      type: DataTypes.DATE,
      allowNull: false
    },
    login_duration: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lat_l: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    long_l: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    break_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    break_counts: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    break_reason: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'attendance',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "atten_id" },
        ]
      },
      {
        name: "project_id_idx",
        using: "BTREE",
        fields: [
          { name: "project_id" },
        ]
      },
      {
        name: "leave_id_idx",
        using: "BTREE",
        fields: [
          { name: "leave_id" },
        ]
      },
    ]
  });
};

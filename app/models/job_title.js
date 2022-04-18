const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_title', {
    job_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    designation: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    department: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    job_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Intern_mentor: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'job_title',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "job_id" },
        ]
      },
    ]
  });
};

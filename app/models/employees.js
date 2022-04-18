const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees', {
    emp_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    email_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    joining_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    permanent_number: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    alternate_number: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    emergency_number: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    emergency_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    adhaar_number: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    pan_number: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    passport_avail: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    passport_number: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    address_permanent: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    address_temp: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    marital_status: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    marriage_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    father_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mother_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    spouse_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    no_of_children: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employees',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "emp_id" },
        ]
      },
    ]
  });
};

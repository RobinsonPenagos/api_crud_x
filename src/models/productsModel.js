const { DataTypes } = require("sequelize");
import sequelize from "../database";

const Product = sequelize.define(
  "products",
  {
    name: { 
      type: DataTypes.STRING, 
      allowNull: false },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Product;

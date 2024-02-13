const express = require("express");
const app = express.Router();
const util = require("util");
const { connection } = require("../config/database.js");
const { resolve } = require("path");
const { rejects } = require("assert");

exports.getProducts = async (req, res, next) => {
  function getInternalProductData() {
    let productPromise = new Promise((resolve, rejects) => {
      connection.query(
        "SELECT * FROM eCommerceProject.Product",
        (error, rows, fields) => {
          if (error) {
            rejects(error);
          }
          resolve(rows);
        }
      );
    });
    return productPromise;
  }

  try {
    let data = await getInternalProductData();
    res.status(200).json({
       data: data,
      message: "Done",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createProducts = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;
  const rating = req.body.rating;
  // Basic validation
  if (!name || !price || !description || !rating) {
    return res.status(400).json({
      success: false,
      message:
        "Please provide all required fields (name, price, description, rating).",
    });
  }
  const query = `INSERT INTO eCommerceProject.Product (name, price, description,rating) VALUES (?, ?, ?, ?);`;
  const values = [name, price, description, rating];
  connection.query(query, values);

  // console.log(allDataProduct);
  res.status(200).json({
    success: true,
    message: "You added the products successfully",
  });
};

exports.updateProducts = function (req, res, next) {
  // Basic Validations
  if (req.body) {
    res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }
  data = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    rating: req.body.rating,
  };
  console.log(req.params.id);
  // Basic query
  const query = `UPDATE eCommerceProject.Product SET name 
  name = ?, price = ?, description = ?, rating = ?; WHERE id = ?`;
  connection.query(query);
};

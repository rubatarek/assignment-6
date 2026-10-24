import e from "express";
import { db } from "../../database/connection.js";

export const createProductTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS product (
      ProductID INT PRIMARY KEY AUTO_INCREMENT,
      ProductName TEXT NOT NULL,
      Price DECIMAL(10,2),
      StockQuantity INT,
      SupplierID INT,
      FOREIGN KEY (SupplierID) REFERENCES supplier(SupplierID)
    )`;
  db.query(query, (err) => {
    if (err){
         console.log(err)
    }
    else 
        {
            console.log(" product table created ");
        }
  });
};
 
//  Add Category column
export const addCategoryColumn = () => {
  const query = `ALTER TABLE product ADD COLUMN Category varchar(255)`;
  db.query(query, (err) => {
    if (err) {
        console.log(err)
    }
    else 
        {
            console.log(" Category column added ");
        }
  });
};
 
// Remove Category column
export const removeCategoryColumn = () => {
  const query = `ALTER TABLE product DROP COLUMN Category`;
  db.query(query, (err) => {
    if (err) 
       {
        console.log(err)
       }
    else 
        {
            console.log(" Category column removed ");
        }
  });
};
 
//  Add NOT NULL to ProductName
export const addNotNullToProductName = () => {
  const query = `ALTER TABLE product MODIFY COLUMN ProductName varchar(255) NOT NULL`;
  db.query(query, (err) => {
    if (err) {
        console.log(err)
    }
    else
        {
            console.log(" NOT NULL added to ProductName ");
        }
  });
};
 
//  6b Insert Milk, Bread, Eggs
export const insertProducts = (supplierID) => {
  const query = `
    INSERT INTO product (ProductName, Price, StockQuantity, SupplierID) VALUES
    ('Milk',  15.00, 50, 1),
    ('Bread', 10.00, 30, 1),
    ('Eggs',  20.00, 40, 1)`;
  db.query(query, (err) => {
    if (err) console.error("Task 6b error:", err.message);
    else
        {
            console.log("Task 6b: Milk, Bread, Eggs inserted ");
        }
  });
};
 
//  Update Bread price to 25.00
export const updateBreadPrice = () => {
  const query = `UPDATE product SET Price = 25.00 WHERE ProductName = 'Bread'`;
  db.query(query, (err) => {
    if (err) {
        console.log(err)
    }
    else{ console.log(" Bread price updated to 25.00 ");
    }
  });
};
 
// Delete Eggs
export const deleteEggs = () => {
  const query = `DELETE FROM product WHERE ProductName = 'Eggs'`;
  db.query(query, (err) => {
    if (err) {
        console.log(err)
    }
    else
        {

        console.log(" Eggs deleted ");
        }
  });
};
 
//  Product with highest stock
export const getHighestStockProduct = () => {
  const query = `SELECT ProductName, StockQuantity FROM product ORDER BY StockQuantity DESC LIMIT 1`;
  db.query(query, (err, results) => {
    if (err) {
        console.log(err)
    }
    else 
        {
            console.log("Task 10: Highest stock product:", results);
        }
        });
};
 
//  Products never sold
export const getProductsNeverSold = () => {
  const query = `
    SELECT p.ProductName 
    FROM product p
    LEFT JOIN sales s ON p.ProductID = s.ProductID
    WHERE s.SaleID IS NULL`;
  db.query(query, (err, results) => {
    if (err) {
        console.log(err)
    }
    else 
        {
            console.log("Products never sold:", results);
        }
  });
};
 

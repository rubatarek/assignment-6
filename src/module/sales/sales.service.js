import { db } from "../../database/connection.js";


// Create sales table
export const createSalesTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS sales (
      SaleID INT PRIMARY KEY AUTO_INCREMENT,
      ProductID INT,
      QuantitySold INT,
      SaleDate DATE,
      FOREIGN KEY (ProductID) REFERENCES product(ProductID)
    )`;
  db.query(query, (err) => {
    if (err) {
        console.log(err)
    }
    else { console.log(" sales table created "); }
  });
};
 
//  Insert sale of 2 units of Milk
export const insertMilkSale = () => {
  const query = `
    INSERT INTO sales (ProductID, QuantitySold, SaleDate)
    SELECT ProductID, 2, '2025-05-20' FROM product WHERE ProductName = 'Milk' LIMIT 1`;
  db.query(query, (err) => {
    if (err) {
        console.log(err)
    }
    else {console.log(" Sale of 2 Milk units inserted ");}
  });
};
 
//  Total quantity sold per product
export const getTotalQuantitySold = () => {
  const query = `
    SELECT p.ProductName, SUM(s.QuantitySold) AS TotalSold
    FROM sales s
    JOIN product p ON s.ProductID = p.ProductID
    GROUP BY p.ProductName`;
  db.query(query, (err, results) => {
    if (err) 
    {
        console.log(err)
    }
    else{ console.log("Total quantity sold per product:", results);}
  });
};
 
//  All sales with product name and sale date
export const getAllSales = () => {
  const query = `
    SELECT p.ProductName, s.SaleDate
    FROM sales s
    JOIN product p ON s.ProductID = p.ProductID`;
  db.query(query, (err, results) => {
    if (err) {
        console.log(err)
    }
    else
        {

         console.log(" All sales:", results);
        }
  });
};
 
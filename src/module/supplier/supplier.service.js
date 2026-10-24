import { db } from "../../database/connection.js";



//  Create supplier table

export const createSupplierTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS supplier (
      SupplierID INT PRIMARY KEY AUTO_INCREMENT,
      SupplierName TEXT,
      ContactNumber TEXT
    )`;
  db.query(query, (err) => {
    if (err) 
    {
        console.log(err)
    }
    else console.log("supplier table created ");
  });
};
 
//  Change ContactNumber to VARCHAR(15)
export const changeContactNumber = () => {
  const query = `ALTER TABLE supplier MODIFY COLUMN ContactNumber VARCHAR(15)`;
  db.query(query, (err) => {
    if (err) {
        console.log(err)
    }
    else console.log("ContactNumber changed to VARCHAR(15) ");
  });
};
 
// Task 6a Insert FreshFoods supplier
export const insertSupplier = () => {
  const query = `INSERT INTO supplier (SupplierName, ContactNumber) VALUES ('FreshFoods', '01001234567')`;
  db.query(query, (err, result) => {
    if (err) {
        console.log(err)
    }
    else console.log(" FreshFoods supplier inserted ");
  });
};
 
//  Find suppliers starting with 'F'
export const getSuppliersStartingWithF = () => {
  const query = `SELECT * FROM supplier WHERE SupplierName LIKE 'F%'`;
  db.query(query, (err, results) => {
    if (err) {
        console.log(err)
    }
    else console.log(" Suppliers starting with F:", results);
  });
};
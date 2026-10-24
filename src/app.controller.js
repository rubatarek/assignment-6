import express from "express"
import{db} from './database/connection.js'
export const bootstrap = () => {

const app = express();

import { db } from "./database/connection.js";

//  Create store_manager user with SELECT, INSERT, UPDATE
export const createStoreManager = () => {
  const createUser = `CREATE USER IF NOT EXISTS 'store_manager'@'localhost' IDENTIFIED BY 'password123'`;
  db.query(createUser, (err) => {
    if (err) {
        console.log(err)
    }
    else 
        {
            console.log("Task 14: store_manager user created ✓");
        }
  });

  const grantPerms = `GRANT SELECT, INSERT, UPDATE ON \`retail store\`.* TO 'store_manager'@'localhost'`;
  db.query(grantPerms, (err) => {
    if (err) {
        console.log(err)
    }
    else console.log(" SELECT, INSERT, UPDATE granted ");
  });
};

// Task 15: Revoke UPDATE from store_manager
export const revokeUpdate = () => {
  const query = `REVOKE UPDATE ON \`retail store\`.* FROM 'store_manager'@'localhost'`;
  db.query(query, (err) => {
    if (err) {
        console.log(err)
    }
    else
        {

         console.log(" UPDATE permission revoked ");
        }
  });
};

//  Grant DELETE on Sales only
export const grantDeleteOnSales = () => {
  const query = `GRANT DELETE ON \`retail store\`.sales TO 'store_manager'@'localhost'`;
  db.query(query, (err) => {
    if (err) 
    {
        console.log(err)
    }
    else
        {

         console.log("DELETE on sales granted ");
        }
  });
};





app.get('/health-check', (req, res) => {
db.query("select 1+1 as result", (err, result) => {
    if (err) {  
        console.log(err);
    }
    else{
        res.json({ message: "Server is healthy", result });
    }
});
});

app.listen(3000, () => {

  console.log("server is running on port 3000");

});
}

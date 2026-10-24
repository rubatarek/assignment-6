import mysql2 from "mysql2"


const databaseConnection = () => {
   return mysql2.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    database: "retail store"
  });
};

export const db= databaseConnection()
db.connect((err) => {
  if (err) {
    console.log(err);
  }
  else{
console.log("connected to database");
  }
  })

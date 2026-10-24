
import{db} from "../../database/connection.js";

import {
  createSalesTable,
  insertMilkSale,
  getTotalQuantitySold,
  getAllSales,
} from "./sales.service.js";
 
export const runSalesTasks = () => {
  createSalesTable();
  insertMilkSale();
  getTotalQuantitySold();
  getAllSales();
};
 
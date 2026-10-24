import{db} from "../../database/connection.js";
import {
  createProductTable,
  addCategoryColumn,
  removeCategoryColumn,
  addNotNullToProductName,
  insertProducts,
  updateBreadPrice,
  deleteEggs,
  getHighestStockProduct,
  getProductsNeverSold,
} from "./product.service.js";
 
export const runProductTasks = (supplierID) => {
  createProductTable();
  addCategoryColumn();
  removeCategoryColumn();
  addNotNullToProductName();
  insertProducts(supplierID);
  updateBreadPrice();
  deleteEggs();
  getHighestStockProduct();
  getProductsNeverSold();
};
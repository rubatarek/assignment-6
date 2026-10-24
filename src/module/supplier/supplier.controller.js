
import{db} from "../../database/connection.js";
import { createSupplierTable,changeContactNumber,insertSupplier,
  getSuppliersStartingWithF,
} from "./supplier.service.js";
 
export const runSupplierTasks = () => {
  createSupplierTable();
  changeContactNumber();
  insertSupplier();
  getSuppliersStartingWithF();
};
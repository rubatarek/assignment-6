import { bootstrap } from "./app.controller.js";
import { runSupplierTasks } from "./module/supplier/supplier.controller.js";
import { runProductTasks } from "./module/product/product.controller.js";
import { runSalesTasks } from "./module/sales/sales.controller.js";
import { createStoreManager, revokeUpdate, grantDeleteOnSales } from "./app.controller.js";

runSupplierTasks();


runProductTasks(1);

runSalesTasks();
createStoreManager();
revokeUpdate();
grantDeleteOnSales();
bootstrap()
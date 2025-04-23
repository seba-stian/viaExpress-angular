import { Presupuesto } from "./presupuesto.model";
import { Producto } from "../productoModel/producto.model";

export interface PresupuestoProducto {
    idVePresupuestoProductos: number;
    idVePresupuesto: number;
    idVeProductos: number;
    cantidad: number;

    PresupuestoNavigation: Presupuesto;
    ProductosNavigation: Producto;
}

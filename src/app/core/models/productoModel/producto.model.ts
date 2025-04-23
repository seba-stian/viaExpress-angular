import { CategoriaProducto } from "./categoriaProducto.model";
import { PresupuestoProducto } from "../presupuestoModel/presupuestoProducto.model";
import { FotosProducto } from "./fotoProducto.model";

export interface Producto {
    idVeProductos: number;
    idVeCategoria: number;
    nombreProducto: string;
    precio: number;
    stockInicial: number;
    descripcion?: string;
    fabricante?: string;

    CategoriaNavigation: CategoriaProducto;

    FotosProductos: FotosProducto[];
    PresupuestoProductos: PresupuestoProducto[];
}
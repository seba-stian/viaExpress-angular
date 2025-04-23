import { Producto } from "./producto.model";

export interface CategoriaProducto {
    idVeCategoriasProductos: number;
    nombreCategoria: string;

    Productos: Producto[];
}
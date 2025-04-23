import { Producto } from "./producto.model";

export interface FotosProducto {
    idVeFotosProductos: number;
    idVeProductos: number;
    nombreImagen: string;
    imagenData: Uint8Array;

    ProductosNavigation: Producto;
}
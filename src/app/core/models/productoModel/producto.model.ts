export class Producto {
    Id_VE_Productos: number;
    Id_VE_Categoria: number;
    NombreProducto: string;
    Precio: number;
    StockInicial: number  = 1;
    Descripcion?: string;
    Fabricante?: string;
    ImagenData: string | File | null = null;
    NombreImagen?: string;
    NombreCategoria?: string;
}
import { Producto } from "../productoModel/producto.model";
import { Usuario } from "../usuarioModel/usuario.model";
import { MarcaVehiculo } from "../vehiculoModel/marcaVehiculo.model";
import { ModeloVehiculo } from "../vehiculoModel/modeloVehiculo.model";
import { Vehiculo } from "../vehiculoModel/vehiculo.model";

export class Presupuesto {
    Id_Ve_Presupuesto: number;
    Id_Ve_Usuario: number;
    Id_Ve_Vehiculo: number;

    descuento?: number;
    fechaCreacion?: Date;
    fechaModificacion?: Date;
    iva: number;
    nombrePresupuesto: string;
    precio: number;
    totalPresupuesto?: number;

    // modeloVehiculo?: ModeloVehiculo;
    // marcaVehiculo?: MarcaVehiculo;
    usuarioRecepcionista?: Usuario;
    fileFotoVehiculo?: File[] = [];
    vehiculo?: Vehiculo;
    productos?: Producto[]; 
    usuarioCliente?: Usuario;
}
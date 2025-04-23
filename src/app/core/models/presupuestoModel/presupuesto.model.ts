import { PresupuestoProducto } from "./presupuestoProducto.model";
import { Usuario } from "../usuarioModel/usuario.model";
import { Vehiculo } from "../vehiculoModel/vehiculo.model";

export class Presupuesto{
    idVePresupuesto: number;
    idVeUsuario: number;
    idVeVehiculo: number;

    descuento?: number;
    fechaCreacion?: Date;
    fechaModificacion?: Date;
    iva: number;
    nombrePresupuesto: string;
    precio: number;
    totalPresupuesto?: number;

    UsuarioNavigation: Usuario;
    VehiculoNavigation: Vehiculo;

    PresupuestoProductos: PresupuestoProducto[];
}
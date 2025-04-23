import { FotoVehiculo } from "./fotoVehiculo.model";
import { ModeloVehiculo } from "./modeloVehiculo.model";
import { Presupuesto } from "../presupuestoModel/presupuesto.model";

export interface Vehiculo {
    idVeVehiculo: number;
    idVeModeloVehiculo: number;
    kilometraje: number;
    numeroChasis: string;
    numeroMotor: string;
    patente: string;
    falla?: string;

    ModeloVehiculoNavigation: ModeloVehiculo;

    FotosVehiculos: FotoVehiculo[];
    Presupuestos: Presupuesto[];
}
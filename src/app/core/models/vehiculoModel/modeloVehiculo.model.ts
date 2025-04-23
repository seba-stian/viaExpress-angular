import { MarcaVehiculo } from "./marcaVehiculo.model";
import { Vehiculo } from "./vehiculo.model";

export interface ModeloVehiculo {
    idVeModeloVehiculo: number;
    idVeMarcaVehiculo: number;
    nombreModelo: string;

    MarcaVehiculoNavigation: MarcaVehiculo;

    Vehiculos: Vehiculo[];
}
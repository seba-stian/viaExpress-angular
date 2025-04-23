import { Vehiculo } from "./vehiculo.model";

export interface FotoVehiculo {
    idVeFotosVehiculo: number;
    idVeVehiculo: number;
    nombreImagen: string;
    imagenData: Uint8Array;

    VehiculoNavigation: Vehiculo;
}
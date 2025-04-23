import { ModeloVehiculo } from "./modeloVehiculo.model";

export interface MarcaVehiculo {
    idVeMarcaVehiculo: number;
    nombreMarca: string;
    
    ModeloVehiculos: ModeloVehiculo[];
}

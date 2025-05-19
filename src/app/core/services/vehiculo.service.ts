import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../../../environments/environment";
import { Usuario } from "../models/usuarioModel/usuario.model";
import { UtilsService } from "./utils.service";
import { MarcaVehiculo } from "../models/vehiculoModel/marcaVehiculo.model";
import { ModeloVehiculo } from "../models/vehiculoModel/modeloVehiculo.model";

@Injectable({
    providedIn: 'root',
})

export class VehiculoService {

    urlApi = environment.apiAccesoViaExpress;
    
    constructor(private httpClient: HttpClient, private utilsService: UtilsService) {}

    async obtenerMarcas() {
        const url = this.urlApi + `/api/Vehiculo/ObtenerMarcas`;
    
        // const headers = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${token}`,
        // });
    
        try {                
            const resp = await firstValueFrom(
                this.httpClient.get<Array<MarcaVehiculo>>(url)
            );

            return resp;
        } catch (error: any) {
            //guardar log en archivo o BD y retornar valor para no botar la app
            console.log(this.utilsService.obtenerErrorGenerico(error));
            return new MarcaVehiculo();
        }
    }

    async obtenerModelos(idMarca: number) {
        const url = this.urlApi + `/api/Vehiculo/ObtenerModelosPorMarca?idMarca=${idMarca}`;
    
        // const headers = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${token}`,
        // });
    
        try {                
            const resp = await firstValueFrom(
                this.httpClient.get<Array<ModeloVehiculo>>(url)
            );

            return resp;
        } catch (error: any) {
            //guardar log en archivo o BD y retornar valor para no botar la app
            console.log(this.utilsService.obtenerErrorGenerico(error));
            return new ModeloVehiculo();
        }
    }
}

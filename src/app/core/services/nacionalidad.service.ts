import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Presupuesto } from "../models/presupuestoModel/presupuesto.model";
import { UtilsService } from "./utils.service";
import { environment } from "../../../environments/environment";
import { Comuna } from "../models/direccionModel/comuna.model";
import { Region } from "../models/direccionModel/region.model";

@Injectable({
    providedIn: 'root',
})

export class NacionalidadService {
    urlApi = environment.apiAccesoViaExpress;

    constructor(private httpClient: HttpClient, private utilsService: UtilsService) {}


    async obtenerComunas() {
        const url = this.urlApi + `/api/Nacionalidad/ObtenerComuna`;
    
        // const headers = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${token}`,
        // });
    
        try {                
            const resp = await firstValueFrom(
                this.httpClient.get<Array<Comuna>>(url)
            );

            return resp;
        } catch (error: any) {
            //guardar log en archivo o BD y retornar valor para no botar la app
            console.log(this.utilsService.obtenerErrorGenerico(error));
            return new Comuna();
        }
    }

    async obtenerRegion(idRegion: number)
    {
        const url = this.urlApi + `/api/Nacionalidad/ObtenerRegionPorId?idRegion=${idRegion}`;

        try {                
            const resp = await firstValueFrom(
                this.httpClient.get<Region>(url)
            );

            return resp;
        } catch (error: any) {
            //guardar log en archivo o BD y retornar valor para no botar la app
            console.log(this.utilsService.obtenerErrorGenerico(error));
            return new Region();
        }
    }
}
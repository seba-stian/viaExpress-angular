import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UtilsService } from "./utils.service";
import { Presupuesto } from "../models/presupuestoModel/presupuesto.model";
import { firstValueFrom } from "rxjs";
import { PresupuestoFiltrado } from "../models/presupuestoModel/presupuestoFiltrado.model";

@Injectable({
    providedIn: 'root',
})

export class PresupuestoService {
    urlApi = environment.apiAccesoViaExpress;
    tokenUnico = environment.tokenIniFij;
    token = '';
    //httpClient para conecciones y UtilService para validaciones transversales
    constructor(private httpClient: HttpClient, private utilsService: UtilsService) {
        // this.token = this.utilsService.decodeBase64(sessionStorage.getItem('token'));
    }

    async obtenerPresupuestos(token: any) {
        const url = this.urlApi + `/api/presupuesto/ObtenerPresupuesto`;
    
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        });
    
        try {
            // const resp = await this.httpClient
            // .get<Presupuesto>(url, {
            //     headers,
            // })
            // .toPromise();
            
            const resp = await firstValueFrom(
                this.httpClient.get<Presupuesto>(url)
            );

            return resp;
        } catch (error: any) {
            return this.utilsService.obtenerErrorGenerico(error);
        }
    }

    async obtenerPresupuestoFiltrado(
        NombrePresupuesto?: string, 
        Pagina?: string, 
        Tamanio?: string,
        Orden?: string, 
        AscDesc?: string) {
        let url = this.urlApi;
        url += `/api/presupuesto/ObtenerPresupuestoFiltrado?Orden=${Orden}&AscDesc=${AscDesc}&Pagina=${Pagina
        }&Tamanio=${Tamanio}&NombrePresupuesto=${NombrePresupuesto}`;

        // const headers = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${token}`,
        // });
    
        try {
            // const resp = await this.httpClient
            // .get<Presupuesto>(url, {
            //     headers,
            // })
            // .toPromise();
            
            const resp = await firstValueFrom(
                this.httpClient.get<PresupuestoFiltrado>(url)
            );

            return resp;
        } catch (error: any) {
            return this.utilsService.obtenerErrorGenerico(error);
        }
    }

}
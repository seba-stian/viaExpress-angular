import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpHeaders } from "@angular/common/http";
import { UtilsService } from "./utils.service";
import { ValidaAccesoReq } from "../models/accesoModel/acceso.model";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class AccesoService {
    urlApi = environment.apiAccesoViaExpress;
    token = environment.tokenIniFij;

    //httpClient para conecciones y UtilService para validaciones transversales
    constructor( private utilsService: UtilsService) {}

    obtenerTokenInicio() {
        let headers: any = {};
    
        headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'token-Init': this.token,
        });

        return headers;
    }

    // async validaAccesoMultiple(dataBodyReq: ValidaAccesoReq) {
    //     const url = this.urlApi + '/api/acceso/ValidaAcceso';
    //     try {
    //     //   const resp = await this.httpClient
    //     //     .post<any>(url, dataBodyReq, {
    //     //       headers: this.obtenerTokenInicio(),
    //     //     })
    //     //     .toPromise();
    //         const resp = await firstValueFrom(
    //             this.httpClient.post<any>(url, dataBodyReq)
    //         );
    //         return resp;
    //     } catch (error: any) {
    //         return this.utilsService.obtenerErrorGenerico(error);
    //     }
    // }
    
    // async refreshToken(tokenParam: any) {
    //     const url = this.urlApi + '/api/session/RenovarToken';
    //     const headers = new HttpHeaders({
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${tokenParam}`,
    //     });
    //     try {
    //         const resp = await this.httpClient
    //         .post<any>(
    //             url,
    //             {},
    //         {
    //             headers,
    //         }
    //         )
    //         .toPromise();
    
    //         return resp;
    //     } catch (error: any) {
    //         return this.utilsService.obtenerErrorGenerico(error);
    //     }
    // }

}
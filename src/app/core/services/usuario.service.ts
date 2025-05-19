import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../../../environments/environment";
import { UtilsService } from "./utils.service";
import { Usuario } from "../models/usuarioModel/usuario.model";

@Injectable({
    providedIn: 'root',
})

export class UsuarioService {
    urlApi = environment.apiAccesoViaExpress;
    
        constructor(private httpClient: HttpClient, private utilsService: UtilsService) {}
    
        async obtenerUsuarios() {
            const url = this.urlApi + `/api/Usuario/ObtenerUsuarios`;
        
            // const headers = new HttpHeaders({
            //     'Content-Type': 'application/json',
            //     Authorization: `Bearer ${token}`,
            // });
        
            try {                
                const resp = await firstValueFrom(
                    this.httpClient.get<Array<Usuario>>(url)
                );
    
                return resp;
            } catch (error: any) {
                //guardar log en archivo o BD y retornar valor para no botar la app
                console.log(this.utilsService.obtenerErrorGenerico(error));
                return new Usuario();
            }
        }
    
        async obtenerUsuarioRut(rut:string) {
            const url = this.urlApi + `/api/Usuario/ObtenerUsuarioRut?rutCliente=${rut}`;
        
            // const headers = new HttpHeaders({
            //     'Content-Type': 'application/json',
            //     Authorization: `Bearer ${token}`,
            // });
        
            try {                
                const resp = await firstValueFrom(
                    this.httpClient.get<Usuario>(url)
                );
    
                return resp;
            } catch (error: any) {
                //guardar log en archivo o BD y retornar valor para no botar la app
                console.log(this.utilsService.obtenerErrorGenerico(error));
                return new Usuario();
            }
        }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../../../environments/environment";
import { UtilsService } from "./utils.service";
import { CategoriaProducto } from "../models/productoModel/categoriaProducto.model";

@Injectable({
    providedIn: 'root',
})

export class ProductoService {

    urlApi = environment.apiAccesoViaExpress;
    
    constructor(private httpClient: HttpClient, private utilsService: UtilsService) {}

    async obtenerCategoriasProductos() {
        const url = this.urlApi + `/api/Producto/ObtenerCategorias`;
    
        // const headers = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${token}`,
        // });
    
        try {                
            const resp = await firstValueFrom(
                this.httpClient.get<Array<CategoriaProducto>>(url)
            );

            return resp;
        } catch (error: any) {
            //guardar log en archivo o BD y retornar valor para no botar la app
            console.log(this.utilsService.obtenerErrorGenerico(error));
            return new CategoriaProducto();
        }
    }
}

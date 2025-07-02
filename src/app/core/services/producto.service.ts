import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { UtilsService } from "./utils.service";
import { CategoriaProducto } from "../models/productoModel/categoriaProducto.model";
import { Producto } from "../models/productoModel/producto.model";

@Injectable({
    providedIn: 'root',
})

export class ProductoService {

    urlApi = environment.apiAccesoViaExpress;
    
    constructor(private httpClient: HttpClient, private utilsService: UtilsService) {}

    async GuardarProducto(producto: FormData): Promise<any>{
        // return this.http.post(this.apiUrl, producto);
        const url = this.urlApi + `/api/Producto/GuardarProducto`;
        try {                
            // const resp = await firstValueFrom(
            //     this.httpClient.post<any>(url,producto)
            // );
            return await firstValueFrom(this.httpClient.post<Producto>(url, producto));

        } catch (error: any) {
            //guardar log en archivo o BD y retornar valor para no botar la app
            console.log(this.utilsService.obtenerErrorGenerico(error));
            return false;
        }
    }

    async EditarProducto(producto: FormData): Promise<any>{
        // return this.http.post(this.apiUrl, producto);
        const url = this.urlApi + `/api/Producto/ActualizarProducto`;
        try {                
            // const resp = await firstValueFrom(
            //     this.httpClient.post<any>(url,producto)
            // );
            return await firstValueFrom(this.httpClient.put<Producto>(url, producto));

        } catch (error: any) {
            //guardar log en archivo o BD y retornar valor para no botar la app
            console.log(this.utilsService.obtenerErrorGenerico(error));
            return false;
        }
    }

    async ObtenerCategoriasProductos() {
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

    async ObtenerProductosNombre(nombreProducto:string, idCategoria:number | null) {
        const url = this.urlApi + `/api/Producto/ObtenerProductosFiltrado?nombreProducto=${nombreProducto}&idCategoria=${idCategoria}`;
    
        // const headers = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${token}`,
        // });
    
        try {                
            const resp = await firstValueFrom(
                this.httpClient.get<Array<Producto>>(url)
            );

            return resp;
        } catch (error: any) {
            //guardar log en archivo o BD y retornar valor para no botar la app
            console.log(this.utilsService.obtenerErrorGenerico(error));
            return new Producto();
        }
    }
}

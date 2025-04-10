export class RutaNav {

    NombreRuta: string = '';
    UrlNav: string = '';
    Activo: boolean = false;

    constructor(nombreRuta: string, urlNav: string, activo: boolean){
        this.NombreRuta = nombreRuta;
        this.UrlNav = urlNav;
        this.Activo = activo;
    }
}
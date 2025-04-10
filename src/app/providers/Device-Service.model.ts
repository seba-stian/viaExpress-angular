import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DeviceService {
    //Metodo para saber el ingreso es desde un dispositivo móvil
    isMobile(): boolean {
        const userAgent = navigator.userAgent || navigator.vendor;
        return /android|iphone|ipad|ipod|windows phone/i.test(userAgent);
    }
    //Metodo para saber el ingreso es desde una computadora
    isDesktop(): boolean {
        return !this.isMobile();
    }
}

// presupuesto-form.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Presupuesto } from '../models/presupuestoModel/presupuesto.model';

@Injectable({ providedIn: 'root' })
export class PresupuestoFormService {

    // Usamos Partial para ir llenando por partes y guardar los datos en memoria con el BehaviorSubject
    private presupuestoDataSubject = new BehaviorSubject<Partial<Presupuesto>>({});
    // Observable para leer cambios
    presupuestoData$ = this.presupuestoDataSubject.asObservable();

    private ejecutarFormRecepcionistaSubject = new Subject<void>();
    ejecutarFormRecepcionista$ = this.ejecutarFormRecepcionistaSubject.asObservable();
    private formRecepcionistaValidoSubject = new Subject<boolean>();
    formRecepcionistaValido$ = this.formRecepcionistaValidoSubject.asObservable();    

    private ejecutarFormClienteSubject = new Subject<void>();
    ejecutarFormCliente$ = this.ejecutarFormClienteSubject.asObservable();
    private formClienteValidoSubject = new Subject<boolean>();
    formClienteValido$ = this.formClienteValidoSubject.asObservable(); 
    
    private ejecutarFormVehiculoSubject = new Subject<void>();
    ejecutarFormVehiculo$ = this.ejecutarFormVehiculoSubject.asObservable();
    private formVehiculoValidoSubject = new Subject<boolean>();
    formVehiculoValido$ = this.formVehiculoValidoSubject.asObservable();  

    constructor() {
        const stored = localStorage.getItem('presupuestoData');
        if (stored) {
            this.presupuestoDataSubject.next(JSON.parse(stored));
        }
        this.presupuestoData$.subscribe(data => {
            localStorage.setItem('presupuestoData', JSON.stringify(data));
        });
    }

    solicitarEjecutarFormCliente() {
    this.ejecutarFormClienteSubject.next();
    }
    informarResultadoClienteFormulario(esValido: boolean) {
        this.formClienteValidoSubject.next(esValido);
    }

    solicitarEjecutarFormRecepcionista() {
        this.ejecutarFormRecepcionistaSubject.next();
    }
    informarResultadoRecepcionistaFormulario(esValido: boolean) {
        this.formRecepcionistaValidoSubject.next(esValido);
    }

    solicitarEjecutarFormVehiculo() {
        this.ejecutarFormVehiculoSubject.next();
    }
    informarResultadoVehiculoFormulario(esValido: boolean) {
        this.formVehiculoValidoSubject.next(esValido);
    }

     // Obtener el valor actual (útil en submit final)
    getPresupuesto(): Partial<Presupuesto> {
        return this.presupuestoDataSubject.getValue();
    }

    // Actualizar con nuevos datos, mantiene los anteriores
    updatePresupuesto(data: Partial<Presupuesto>) {
        const current = this.getPresupuesto();
        //se crea un nuevo objeto combinando los datos actuales con los nuevos
        const updated = { ...current, ...data };
        this.presupuestoDataSubject.next(updated);
    }

    resetPresupuesto() {
        // Elimina del localStorage
        localStorage.removeItem('presupuestoData');
    
        // Reinicia el BehaviorSubject con estado vacío
        this.presupuestoDataSubject.next({});
    }
}

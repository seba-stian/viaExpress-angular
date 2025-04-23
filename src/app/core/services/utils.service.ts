import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
// import * as CryptoNJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  @Output() disparadorAppChange: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {
    // this.primengConfig.ripple = true;
  }

  cerrarSesion() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  // encodeBase64(value: any) {
  //   try {
  //     const encodedWord = CryptoNJS.enc.Utf8.parse(value); // encodedWord Array object
  //     const encoded = CryptoNJS.enc.Base64.stringify(encodedWord); // string: 'NzUzMjI1NDE='
  //     return encoded;
  //   } catch (error) {
  //     return '';
  //   }
  // }

  // decodeBase64(value: any) {
  //   try {
  //     const encodedWord = CryptoNJS.enc.Base64.parse(value); // encodedWord via Base64.parse()
  //     const decoded = CryptoNJS.enc.Utf8.stringify(encodedWord); // decode encodedWord via Utf8.stringify() '75322541'
  //     return decoded;
  //   } catch (error) {
  //     return '';
  //   }
  // }

  // async obtenerSexosFormularios() {
  //   try {
  //     const resp: any = await this.httpClient.get('assets/recursos_json/sexos.json').toPromise();
  //     return resp;
  //   } catch (error) {}
  // }

  obtenerErrorGenerico(e: any) {
    let respError = {
      ok: false,
      message: '',
    };

    let errorString = '';

    if (e.error?.errors) {
      const errors = e.error.errors;
      for (const clave in errors) {
        if (errors.hasOwnProperty(clave)) {
          errors[clave].forEach((error: any) => {
            errorString += ', ' + error;
          });
        }
      }

      respError = {
        ok: false,
        message: errorString.slice(1), // Quito el primer ', '
      };
      return respError;
    } else if (typeof e.error === 'string') {
      return this.setErrorsString(e, respError);
    } else if (e.error && !e.error.error) {
      respError = {
        ok: false,
        message: 'Se ha generado un error de conexión',
      };
      return respError;
    } else if (e.message.substr(0, 12) === 'Http failure') {
      respError = {
        ok: false,
        message: 'El servidor no esta disponible en este momento, por favor vuelva a intentar en unos minutos.',
      };
      return respError;
    } else {
      respError = {
        ok: false,
        message: 'Error desconocido',
      };
      return respError;
    }
  }

  setErrorsString(e: any, respError: any) {
    if (e.error === 'Failure sending mail.') {
      respError = {
        ok: false,
        message: 'Falló el envío del correo electrónico.',
      };
      return respError;
    } else if (e.error.substr(0, 23) === 'Violation of UNIQUE KEY') {
      respError = {
        ok: false,
        message: 'El registro que intenta agregar ya existe, verifique los datos e intente nuevamente.',
      };
      return respError;
    } else if (e.error.substr(0, 37) === 'Microsoft.e.SqlClient.SqlException') {
      respError = {
        ok: false,
        message: 'Error de conexión a la base de datos.',
      };
      return respError;
    } else {
      respError = {
        ok: false,
        message: e.error,
      };
      return respError;
    }
  }

  validarTelefonoCl(telefono: any) {
    const pattern = /\A(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}\z/;
    if (!pattern.test(telefono)) {
      return false;
    }

    return true;
  }

  validarTelefonofijo(telefono: any) {
    const pattern = /\A(\+?56)?(\s?)(0?2)(\s?)[1234567]\d{7}\z/;
    if (!pattern.test(telefono)) {
      return false;
    }

    return true;
  }

  validarCorreo(email: any) {
    const pattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!pattern.test(email)) {
      return false;
    }

    return true;
  }

  validarCodigoSexo(codigoSexo: number) {
    return codigoSexo === 0 || codigoSexo === 1 || codigoSexo === 2;
  }

  formatFechaDdMmYyyyHhMm(fecha: any) {
    fecha = new Date(fecha);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    const dateTimeFormateada =
      (dia.toString().length === 1 ? '0' + dia : dia) +
      '/' +
      (mes.toString().length === 1 ? '0' + mes : mes) +
      '/' +
      anio +
      ' ' +
      (hora.toString().length === 1 ? '0' + hora : hora) +
      ':' +
      (minutos.toString().length === 1 ? '0' + minutos : minutos) +
      ':' +
      (segundos.toString().length === 1 ? '0' + segundos : segundos);

    return dateTimeFormateada;
  }

  restarDiaFecha(fecha: Date, horas: number) {
    const numberOfMlSeconds = fecha.getTime();
    const addMlSeconds = horas * 60 * 60000;
    const newDateObj = new Date(numberOfMlSeconds - addMlSeconds);

    return newDateObj;
  }

  sumarHorasFecha(fecha: Date, horas: number) {
    const numberOfMlSeconds = fecha.getTime();
    const addMlSeconds = horas * 60 * 60000;
    const newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

    return newDateObj;
  }

  formatFechaYYYYMMDD(fecha: Date) {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();

    return (
      anio + '-' + (mes.toString().length < 2 ? '0' + mes : mes) + '-' + (dia.toString().length < 2 ? '0' + dia : dia)
    );
  }

  decamelize(str: string, separator: string) {
    separator = typeof separator === 'undefined' ? '_' : separator;
    const texto = str ? str : '';
    return texto
      .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
      .toLowerCase();
  }

  // La contraseña debe tener mínimo 8 caracteres, al menos una letra, un número y un carácter especial (.,_,-,@,$,%,&)
  // NO puede tener otros símbolos.
  validarPassword(password: any) {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[._\-@$%&])[\w._\-@$%&]{8,}$/;
    if (!pattern.test(password)) {
      return false;
    }

    return true;
  }

  generadorDePassword(nombre: string, rut: any) {
    const rutLimpi = this.limpiarRut(rut);
    const rutSinDv = this.quitarDigitoVerificadorARut(rutLimpi);
    const yearActual = new Date().getFullYear();
    return nombre?.substring(0, 1).toUpperCase() + rutSinDv + '.' + yearActual;
  }

  limpiarRut(rutEntrada: string) {
    const rut = rutEntrada?.toString();

    const rutLimpio = rut?.replace(/\./g, '').replace(/^0+/, '').replace(/-/g, '');
    return rutLimpio;
  }

  limpiarRutPeruano(rutEntrada: string) {
    const rut = rutEntrada?.toString();

    const rutLimpio = rut?.replace(/-/g, '');
    return rutLimpio;
  }

  quitarDigitoVerificadorARut(rut: string) {
    const rutLimpio = this.limpiarRut(rut);
    const rutSinDigito = rutLimpio?.substring(0, rutLimpio.length - 1);
    return rutSinDigito;
  }

  excelDateToJSDate(serial: any) {
    const utc_days = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400;
    const date_info = new Date(utc_value * 1000);

    const fractional_day = serial - Math.floor(serial) + 0.0000001;

    let total_seconds = Math.floor(86400 * fractional_day);

    const seconds = total_seconds % 60;

    total_seconds -= seconds;

    const hours = Math.floor(total_seconds / (60 * 60));
    const minutes = Math.floor(total_seconds / 60) % 60;

    return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate() + 1, hours, minutes, seconds);
  }

  obtenerExtensionDeArchivo(nombreArchivo: string) {
    if (nombreArchivo.lastIndexOf('.') === -1) {
      return 'PDF';
    }

    const extension = nombreArchivo.substring(nombreArchivo.lastIndexOf('.') + 1, nombreArchivo.length);
    return extension;
  }

  formatearRutAny(rut: any, esExtranjero?: boolean): string {
    if (esExtranjero !== undefined && esExtranjero) {
      return rut;
    }

    return this.formatearRut(rut);
  }

  formatearDniPeru(dni: any) {
    const rutInput = this.quitarPuntosGuionRut(dni);

    return rutInput;
  }

  formatearRut(rutInput: string) {
    if (rutInput === undefined || rutInput === null) {
      return '';
    }

    const rut = rutInput;
    let rutPuntos = '';
    const rutEnProceso = rut.replace(/^0+/, '');
    if (rutEnProceso != '' && rutEnProceso.length > 1) {
      const rutSinPuntos = rutEnProceso.replace(/\./g, '');
      const rutEnProcesoLimpio = rutSinPuntos.replace(/-/g, '');
      const inicio = rutEnProcesoLimpio.substring(0, rutEnProcesoLimpio.length - 1);

      let i = 0;
      let j = 1;
      for (i = inicio.length - 1; i >= 0; i--) {
        let letra = inicio.charAt(i);
        rutPuntos = letra + rutPuntos;
        if (j % 3 == 0 && j <= inicio.length - 1) {
          rutPuntos = '.' + rutPuntos;
        }
        j++;
      }
      let dv = rutEnProcesoLimpio.substring(rutEnProcesoLimpio.length - 1);
      rutPuntos = rutPuntos + '-' + dv;
    }
    return rutPuntos.toUpperCase();
  }

  validarRut(rut: string): boolean {
    return !this.validarRutModulo11(rut);
  }

  validarRutModulo11(rutEntrada: string) {
    const rut = rutEntrada?.replace(/\s/g, '');
    const rutSinPuntos = rut?.replace(/\./g, '');
    const rutEnProceso = rutSinPuntos.replace(/-/g, '');
    const rutSinDv: any = rutEnProceso.substring(0, rutEnProceso.length - 1);
    const dv = rutEnProceso.substring(rutEnProceso.length - 1);
    let suma = 0;
    let multiplo = 2;
    for (let i = 1; i <= rutSinDv.length; i++) {
      const index = multiplo * rutSinDv.charAt(rutSinDv.length - i);
      suma = suma + index;
      if (multiplo < 7) {
        multiplo = multiplo + 1;
      } else {
        multiplo = 2;
      }
    }
    const dvCalculado: any = 11 - (suma % 11);
    return this.parseDV(dvCalculado, dv);
  }

  private parseDV(dvCalculado: any, dv: any) {
    if (dvCalculado == 11) {
      if (dv.toUpperCase() == '0') {
        return true;
      } else {
        return false;
      }
    } else if (dvCalculado == 10) {
      if (dv.toUpperCase() == 'K') {
        return true;
      } else {
        return false;
      }
    } else {
      if (dvCalculado == dv) {
        return true;
      } else {
        return false;
      }
    }
  }

  anteponerCeroNumeroDeUnDigito(numero: string) {
    if (numero.length === 1) {
      return '0' + numero;
    }

    return numero;
  }

  quitarPrefijoTelefonoValidar(numeroEntrada: any) {
    numeroEntrada = numeroEntrada?.toString();
    const numero = numeroEntrada ? numeroEntrada?.toString() : '';
    return numero.replace(/^(\+?56)?/, '');
  }

  validarObjetoSinUndefined(objeto: any) {
    for (const clave in objeto) {
      if (objeto.hasOwnProperty(clave)) {
        if (objeto[clave] === undefined) {
          return false;
        }
      }
    }
    return true;
  }

  async copiarAlPortapapeles(textToCopy: any) {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      }
    } catch (err) {
      console.error(err);
    }
  }

  quitarPuntosGuionRut(rutInput: string) {
    const rut = rutInput;
    const rutEnProceso = rut.replace(/^0+/, '');
    if (rutEnProceso != '' && rutEnProceso.length > 1) {
      const rutSinPuntos = rutEnProceso.replace(/\./g, '');
      const rutEnProcesoLimpio = rutSinPuntos.replace(/-/g, '');
      return rutEnProcesoLimpio;
    } else {
      return rutEnProceso;
    }
  }

  validacionDniPeru(dni: any) {
    if (dni.length === 8) {
      return true;
    } else {
      return false;
    }
  }

  validarLetras(inputString: string) {
    // Expresión regular que solo permite letras mayúsculas o minúsculas con acentos y espacios en blanco
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]*$/;

    // Comprobar si el string cumple con la expresión regular
    if (regex.test(inputString)) {
      return true;
    } else {
      return false;
    }
  }

  formateoHTML(html: any) {
    return html.replace(/></g, '>\n<');
  }

  agregarSaltosDeLinea(texto: string, longitudLinea: number): string {
    const partes: string[] = [];
    for (let i = 0; i < texto.length; i += longitudLinea) {
      partes.push(texto.substring(i, longitudLinea));
    }
    return partes.join('\n');
  }

  validarFormatoMas56(cadena: any) {
    // Expresión regular que verifica si la cadena contiene solo números y el signo + al comienzo
    const regex = /^[+]?\d+$/;

    // Verificar si la cadena cumple con la expresión regular
    return regex.test(cadena);
  }

  datoStringNullToVacio(dato: any) {
    if (dato === null || dato === undefined) {
      return '';
    }

    return dato;
  }
}

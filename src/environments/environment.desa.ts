export const environment = {
  production: false,
  apiControlAccesoUrl: 'https://apirestcontrolacceso.desa.bciseguros.cl',
  appOrigen: 0,
  CodigoControlAccesoBciAppApi: 'CTACCESO',
  CodigoControlAccesoZenitAppApi: 'CTRLACCAPI',
  CodigoAplicacionOrigen: 'CTRLACCWEB',
  RolAdmistradorBciCA: 'ROLADMCABCI',
  RolAdmistradorZenitCA: 'ROLADMCAZENIT',
  RolCotratantePadre: 'CTRTEPAOV',
  RolCotratanteHijo: 'CTRTEHIOV',
  RolEjecutivoOfiVir: 'EJECOMOFVIR',
  RolCorredorPadreOfiVir: 'CORRPADREOFVIR',
  tokenCaZenit:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmUiOiJUb2tlbl9Db250cm9sX0FjY2VzbyIsIkVtcHJlc2EiOiJ6IiwibmJmIjoxNjUyOTA1NzM0LCJleHAiOjI1MzQwMjMwMDgwMCwiaWF0IjoxNjUyOTA1NzM0fQ.J735NUoKrN0QIA1Dt8pkl2trguRpUh6VKssQkRXobc4',
  tokenCaBci:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOb21icmUiOiJUb2tlbl9Db250cm9sX0FjY2VzbyIsIkVtcHJlc2EiOiJiIiwibmJmIjoxNjUyOTA1ODg4LCJleHAiOjI1MzQwMjMwMDgwMCwiaWF0IjoxNjUyOTA1ODg4fQ.XzuwE9WhQnMlAu6wmrw14zh4Shh1VSy04MFND0uynCA',
  recaptcha: {
    siteKey: '6Lfgq6ohAAAAAFJ_mp6lQBQ0cg_m1BRXU0DUcSpi',
    secretKey: '6Lfgq6ohAAAAAHWqmV_s48kpHU9c8RBwJ-2EN0dH',
  },
  permisosOpciones: [
    {
      id: 1,
      permiso: 'read',
      label: 'Ver',
    },
    {
      id: 2,
      permiso: 'write',
      label: 'Editar',
    },
  ],
  limiteOpcionesUsuariosExcel: 100000,
  limiteOpcionesReportesExcel: 1000000,
};

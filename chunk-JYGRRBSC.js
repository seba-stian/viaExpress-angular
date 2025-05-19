import{$ as le,A as e,B as W,C as T,D as Le,E as I,F,G as A,H as ie,I as b,K as ke,L as ne,M as P,N as q,O as E,P as Be,S as V,U as re,V as oe,W as Q,X as Z,Y as ae,Z as K,_ as Ne,a as C,aa as L,b as k,ba as B,c as X,ca as Re,d as Oe,da as S,e as x,ea as je,f as M,fa as He,g as O,ga as Ue,h as m,i as p,j as we,ja as Te,k as Pe,ka as Ge,l as ee,la as We,m as s,ma as N,n as _,na as R,o as v,p as te,q as f,r as Ce,s as c,t as Ve,u as i,v as t,w as l,x as U,y as h,z as y}from"./chunk-FPVU3LD3.js";import{F as ze,c as g}from"./chunk-PYP3OXPM.js";var j=a=>({stepperActive:a}),qe=a=>({hidden:a});function Ke(a,r){if(a&1){let n=U();i(0,"button",43),h("click",function(){M(n);let u=y();return O(u.volver())}),e(1,`
                            `),i(2,"span",23),e(3,`
                            `),m(),i(4,"svg",24),e(5,`
                                `),l(6,"path",44),e(7,`
                            `),t(),e(8,`
                                Volver
                            `),t(),e(9,`
                        `),t()}}var se=class a{constructor(r){this.router=r}mostrarBoton=!0;mostrarBotonSiguiente=!0;mostrarBotonFinal=!1;selectStepperPersona=!1;selectStepperVehiculo=!1;selectStepperProductos=!1;selectStepperFinal=!1;ngOnInit(){ze(),this.router.url=="/Presupuesto/Persona"&&(this.mostrarBoton=!1,this.resetStepper(),this.selectStepperPersona=!0,console.log("stepper persona")),this.router.url=="/Presupuesto/Productos"&&(this.mostrarBoton=!0,this.mostrarBotonSiguiente=!1,this.mostrarBotonFinal=!0,this.resetStepper(),this.selectStepperProductos=!0,console.log("stepper Productos"))}resetStepper(){this.selectStepperPersona=!1,this.selectStepperVehiculo=!1,this.selectStepperProductos=!1,this.selectStepperFinal=!1}volver(){this.router.url=="/Presupuesto/Vehiculo"&&(this.mostrarBoton=!1,this.resetStepper(),this.selectStepperPersona=!0,this.router.navigate(["Presupuesto/Persona"])),this.router.url=="/Presupuesto/Productos"&&(this.mostrarBotonSiguiente=!0,this.mostrarBotonFinal=!1,this.mostrarBoton=!0,this.resetStepper(),this.selectStepperVehiculo=!0,this.router.navigate(["Presupuesto/Vehiculo"]))}cancelar(){this.router.navigate(["Home"])}continuar(){console.log(this.router.url),this.router.url=="/Presupuesto/Persona"&&(this.mostrarBoton=!0,this.resetStepper(),this.selectStepperVehiculo=!0,this.router.navigate(["Presupuesto/Vehiculo"])),this.router.url=="/Presupuesto/Vehiculo"&&(this.mostrarBoton=!0,this.mostrarBotonSiguiente=!1,this.mostrarBotonFinal=!0,this.resetStepper(),this.selectStepperProductos=!0,this.router.navigate(["Presupuesto/Productos"]))}static \u0275fac=function(n){return new(n||a)(_(Ue))};static \u0275cmp=v({type:a,selectors:[["app-crud-presupuestos-view"]],decls:204,vars:31,consts:[[1,"relative","overflow-x-auto","shadow-md","sm:rounded-lg"],[2,"border-left","ridge","margin-top","1%","margin-bottom","3%"],["_ngcontent-ng-c57272926","",1,"mb-4","text-xl","font-semibold","text-gray-900","dark:text-white","sm:text-2xl","md:mb-6",2,"font-size","xx-large","margin-left","10px"],[1,"bg-white","antialiased","dark:bg-gray-900"],[1,"mx-auto","max-w-screen-xl","px-4","2xl:px-0"],["action","#",1,"w-full","space-y-6","lg:space-y-8"],[1,"space-y-6","sm:space-y-8"],[1,"flex","flex-col","gap-4","rounded-lg","border","border-gray-200","bg-gray-50","p-4","dark:border-gray-700","dark:bg-gray-800","sm:justify-center","md:flex-row","md:items-center","lg:gap-6"],[1,"flex","items-center","gap-2","md:flex-1","md:flex-col","md:gap-1.5","lg:flex-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"h-5","w-5","text-gray-500","dark:text-gray-400",3,"ngClass"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],[1,"text-sm","font-medium","leading-tight","text-gray-500","dark:text-gray-400",3,"ngClass"],[1,"hidden","h-px","w-8","shrink-0","bg-gray-200","dark:bg-gray-700","md:block","xl:w-16"],[1,"space-y-6"],["role","alert",1,"mb-4","rounded-lg","bg-primary-50","p-4","text-sm","text-primary-800","dark:bg-gray-800","dark:text-primary-400","sm:text-base"],[1,"mb-3","font-medium"],[1,"mb-3","list-outside","list-decimal","space-y-2","ps-4"],[1,"text-xl","font-semibold","text-gray-900","dark:text-white"],[1,"divide-y","divide-gray-200","overflow-hidden","rounded-lg","border","border-gray-200","bg-white","shadow-sm","dark:divide-gray-700","dark:border-gray-700","dark:bg-gray-800",2,"text-align","-webkit-center"],[1,"gap-4","flex","sm:items-center","sm:justify-between"],[1,"gap-4","sm:items-center"],["class","relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",3,"click",4,"ngIf"],[1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-pink-500","to-orange-400","group-hover:from-pink-500","group-hover:to-orange-400","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-pink-200","dark:focus:ring-pink-800",3,"click"],[1,"relative","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0",2,"padding-right","15px","padding-left","10px"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"me-1","-ms-0","inline"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-purple-600","to-blue-500","group-hover:from-purple-600","group-hover:to-blue-500","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:focus:ring-blue-800",3,"click","ngClass"],[1,"relative","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0",2,"padding-left","15px"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m9 5 7 7-7 7"],["data-modal-target","popup-modal","data-modal-toggle","popup-modal",1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-green-400","to-blue-600","group-hover:from-green-400","group-hover:to-blue-600","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-green-200","dark:focus:ring-green-800",3,"ngClass"],["id","popup-modal",1,"modal","hidden"],[1,"relative","w-full","max-w-md","max-h-full"],[1,"relative","bg-white","rounded-lg","shadow","dark:bg-gray-700"],["type","button","data-modal-hide","popup-modal",1,"absolute","top-3","end-2.5","text-gray-400","bg-transparent","hover:bg-gray-200","hover:text-gray-900","rounded-lg","text-sm","w-8","h-8","ms-auto","inline-flex","justify-center","items-center","dark:hover:bg-gray-600","dark:hover:text-white"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 14 14",1,"w-3","h-3"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"],[1,"sr-only"],[1,"p-4","md:p-5","text-center"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"mx-auto","mb-4","text-gray-400","w-12","h-12","dark:text-gray-200"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 3v4a1 1 0 0 1-1 1H5m4 6 2 2 4-4m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"],[1,"text-base","leading-relaxed","text-gray-500","dark:text-gray-400"],["data-modal-hide","popup-modal",1,"relative","m-5","inline-flex","items-center","justify-center","p-0.5","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-green-400","to-blue-600","group-hover:from-green-400","group-hover:to-blue-600","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-green-200","dark:focus:ring-green-800"],["data-modal-hide","popup-modal",1,"relative","m-5","inline-flex","items-center","justify-center","p-0.5","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-pink-500","to-orange-400","group-hover:from-pink-500","group-hover:to-orange-400","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-pink-200","dark:focus:ring-pink-800"],[1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-purple-600","to-blue-500","group-hover:from-purple-600","group-hover:to-blue-500","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:focus:ring-blue-800",3,"click"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m15 19-7-7 7-7"]],template:function(n,o){n&1&&(i(0,"div",0),e(1,`
        
        `),i(2,"div",1),e(3,`
            `),i(4,"h2",2),e(5,"Creaci\xF3n de Presupuesto"),t(),e(6,`
        `),t(),e(7,`

`),i(8,"section",3),e(9,`
    `),i(10,"div",4),e(11,`
        `),i(12,"div",5),e(13,`
            `),i(14,"div",6),e(15,`
                `),i(16,"ol",7),e(17,`
                    `),i(18,"li",8),e(19,`
                    `),m(),i(20,"svg",9),e(21,`
                        `),l(22,"path",10),e(23,`
                    `),t(),e(24,`
                    `),p(),i(25,"p",11),e(26,"Datos cliente"),t(),e(27,`
                    `),t(),e(28,`

                    `),l(29,"div",12),e(30,`

                    `),i(31,"li",8),e(32,`
                    `),m(),i(33,"svg",9),e(34,`
                        `),l(35,"path",10),e(36,`
                    `),t(),e(37,`
                    `),p(),i(38,"p",11),e(39,"Datos del veh\xEDculo"),t(),e(40,`
                    `),t(),e(41,`

                    `),l(42,"div",12),e(43,`

                    `),i(44,"li",8),e(45,`
                    `),m(),i(46,"svg",9),e(47,`
                        `),l(48,"path",10),e(49,`
                    `),t(),e(50,`
                    `),p(),i(51,"p",11),e(52,"Seleccion de productos"),t(),e(53,`
                    `),t(),e(54,`

                    `),l(55,"div",12),e(56,`

                    `),i(57,"li",8),e(58,`
                    `),m(),i(59,"svg",9),e(60,`
                        `),l(61,"path",10),e(62,`
                    `),t(),e(63,`
                    `),p(),i(64,"p",11),e(65,"Detalle y confirmaci\xF3n"),t(),e(66,`
                    `),t(),e(67,`
                `),t(),e(68,`
            `),t(),e(69,`

            `),i(70,"div",13),e(71,`
                `),i(72,"div",14),e(73,`
                    `),i(74,"p",15),e(75,"Lo que necesita saber para qu\xE9 el proceso de creaci\xF3n de presupuesto se realice sin problemas es:"),t(),e(76,`
                    `),i(77,"ol",16),e(78,`
                        `),i(79,"li"),e(80,"Debe ingresar los datos del encargado del presupuesto y del cliente."),t(),e(81,`
                        `),i(82,"li"),e(83,"Debe ingresar los datos del veh\xEDculo para el que se creara el presupuesto."),t(),e(84,`
                        `),i(85,"li"),e(86,"Debe seleccionar los productos necesarios a utilizar para la reparaci\xF3n del veh\xEDculo."),t(),e(87,`
                    `),t(),e(88,`
                    `),e(89,`
                `),t(),e(90,`
                `),i(91,"h3",17),e(92,"1. Ingrese los datos solicitados:"),t(),e(93,`

                `),i(94,"div",18),e(95,`

                    `),l(96,"router-outlet"),e(97,`

                `),t(),e(98,`
                `),i(99,"div",19),e(100,`
                    `),i(101,"div",20),e(102,`
                        `),f(103,Ke,10,0,"button",21),e(104,`
                        `),i(105,"button",22),h("click",function(){return o.cancelar()}),e(106,`
                            `),i(107,"span",23),e(108,`
                            `),m(),i(109,"svg",24),e(110,`
                                `),l(111,"path",25),e(112,`
                            `),t(),e(113,`
                                Cancelar
                            `),t(),e(114,`
                        `),t(),e(115,`                        
                    `),t(),e(116,`
                    `),p(),i(117,"button",26),h("click",function(){return o.continuar()}),e(118,`
                        `),i(119,"span",27),e(120,`
                            Siguiente
                        `),m(),i(121,"svg",24),e(122,`
                            `),l(123,"path",28),e(124,`
                        `),t(),e(125,`
                        `),t(),e(126,`
                    `),t(),e(127,`
                    `),p(),i(128,"button",29),e(129,`
                        `),i(130,"span",27),e(131,`
                            Finalizar
                        `),m(),i(132,"svg",24),e(133,`
                            `),l(134,"path",28),e(135,`
                        `),t(),e(136,`
                        `),t(),e(137,`
                    `),t(),e(138,`
                `),t(),e(139,`
            `),t(),e(140,`
        `),t(),e(141,`
    `),t(),e(142,`
`),t(),e(143,`
`),t(),e(144,`

`),p(),i(145,"div",30),e(146,`
    `),i(147,"div",31),e(148,`
        `),i(149,"div",32),e(150,`
            `),i(151,"button",33),e(152,`
                `),m(),i(153,"svg",34),e(154,`
                    `),l(155,"path",35),e(156,`
                `),t(),e(157,`
                `),p(),i(158,"span",36),e(159,"Close modal"),t(),e(160,`
            `),t(),e(161,`
            `),i(162,"div",37),e(163,`
                `),e(164,`
                `),m(),i(165,"svg",38),e(166,`
                    `),l(167,"path",39),e(168,`
                `),t(),e(169,`
                `),p(),i(170,"p",40),e(171,`
                El presupuesto se guardar\xE1 y podr\xE1s ver las opciones de ver y editar en el men\xFA principal.
                `),t(),e(172,`
                `),i(173,"p",40),e(174,`
                Antes de continuar, aseg\xFArate de que los datos ingresados sean correctos.
                `),t(),e(175,`
                `),i(176,"h3",17),e(177,"\xBFEst\xE1 seguro que desa continuar?"),t(),e(178,`
                `),i(179,"button",41),e(180,`
                    `),i(181,"span",27),e(182,`
                        S\xED, estoy seguro
                    `),m(),i(183,"svg",24),e(184,`
                        `),l(185,"path",28),e(186,`
                    `),t(),e(187,`
                    `),t(),e(188,`
                `),t(),e(189,`
                `),p(),i(190,"button",42),e(191,`
                    `),i(192,"span",23),e(193,`
                    `),m(),i(194,"svg",24),e(195,`
                        `),l(196,"path",25),e(197,`
                    `),t(),e(198,`
                        No, Cancelar
                    `),t(),e(199,`
                `),t(),e(200,`
            `),t(),e(201,`
        `),t(),e(202,`
    `),t(),e(203,`
`),t()),n&2&&(s(20),c("ngClass",b(11,j,o.selectStepperPersona)),s(5),c("ngClass",b(13,j,o.selectStepperPersona)),s(8),c("ngClass",b(15,j,o.selectStepperVehiculo)),s(5),c("ngClass",b(17,j,o.selectStepperVehiculo)),s(8),c("ngClass",b(19,j,o.selectStepperProductos)),s(5),c("ngClass",b(21,j,o.selectStepperProductos)),s(8),c("ngClass",b(23,j,o.selectStepperFinal)),s(5),c("ngClass",b(25,j,o.selectStepperFinal)),s(39),c("ngIf",o.mostrarBoton),s(14),c("ngClass",b(27,qe,!o.mostrarBotonSiguiente)),s(11),c("ngClass",b(29,qe,!o.mostrarBotonFinal)))},dependencies:[He,S,E,ne,q],styles:[".stepperActive[_ngcontent-%COMP%]{color:#346bc6}.stepperInActive[_ngcontent-%COMP%]{color:#7d8491}.modal[_ngcontent-%COMP%]{position:fixed;z-index:1050;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#00000080}.modal.is-active[_ngcontent-%COMP%]{display:block}.modal-content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 6px #0000001a}.modal-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.modal-close[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;border:none;background:transparent;font-size:1.5em;cursor:pointer}"]})};var z=class{Rut;IdVeUsuario;Apellido;Celular;Direccion;Email;IdVeComuna;IdVeRegion;IdVeTipoUsuario;Nombre};var Je=/[&<>"']/g,yi=RegExp(Je.source);function Xe(){return new Ie}var Ie=class{constructor(){this._selected=[]}get value(){return this._selected}select(r,n,o){if(r.selected=!0,(!r.children||!n&&o)&&this._selected.push(r),n)if(r.parent){let u=r.parent.children.length,d=r.parent.children.filter(H=>H.selected).length;r.parent.selected=u===d}else r.children&&(this._setChildrenSelectedState(r.children,!0),this._removeChildren(r),o&&this._activeChildren(r)?this._selected=[...this._selected.filter(u=>u.parent!==r),r]:this._selected=[...this._selected,...r.children.filter(u=>!u.disabled)])}unselect(r,n){if(this._selected=this._selected.filter(o=>o!==r),r.selected=!1,n)if(r.parent&&r.parent.selected){let o=r.parent.children;this._removeParent(r.parent),this._removeChildren(r.parent),this._selected.push(...o.filter(u=>u!==r&&!u.disabled)),r.parent.selected=!1}else r.children&&(this._setChildrenSelectedState(r.children,!1),this._removeChildren(r))}clear(r){this._selected=r?this._selected.filter(n=>n.disabled):[]}_setChildrenSelectedState(r,n){for(let o of r)o.disabled||(o.selected=n)}_removeChildren(r){this._selected=[...this._selected.filter(n=>n.parent!==r),...r.children.filter(n=>n.parent===r&&n.disabled&&n.selected)]}_removeParent(r){this._selected=this._selected.filter(n=>n!==r)}_activeChildren(r){return r.children.every(n=>!n.disabled||n.selected)}};var et=new Oe("ng-select-selection-model");var Qe=(()=>{class a{static{this.\u0275fac=function(o){return new(o||a)}}static{this.\u0275mod=te({type:a})}static{this.\u0275inj=X({providers:[{provide:et,useValue:Xe}]})}}return a})();var de=class{IdVeComuna;IdVeRegion;NombreComuna};var ue=class{IdVeRegion;NombreRegion};var ce=class a{constructor(r,n){this.httpClient=r;this.utilsService=n}urlApi=N.apiAccesoViaExpress;obtenerComunas(){return g(this,null,function*(){let r=this.urlApi+"/api/Nacionalidad/ObtenerComuna";try{return yield C(this.httpClient.get(r))}catch(n){return console.log(this.utilsService.obtenerErrorGenerico(n)),new de}})}obtenerRegion(r){return g(this,null,function*(){let n=this.urlApi+`/api/Nacionalidad/ObtenerRegionPorId?idRegion=${r}`;try{return yield C(this.httpClient.get(n))}catch(o){return console.log(this.utilsService.obtenerErrorGenerico(o)),new ue}})}static \u0275fac=function(n){return new(n||a)(x(V),x(R))};static \u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"})};var me=class a{constructor(r,n){this.httpClient=r;this.utilsService=n}urlApi=N.apiAccesoViaExpress;obtenerUsuarios(){return g(this,null,function*(){let r=this.urlApi+"/api/Usuario/ObtenerUsuarios";try{return yield C(this.httpClient.get(r))}catch(n){return console.log(this.utilsService.obtenerErrorGenerico(n)),new z}})}obtenerUsuarioRut(r){return g(this,null,function*(){let n=this.urlApi+`/api/Usuario/ObtenerUsuarioRut?rutCliente=${r}`;try{return yield C(this.httpClient.get(n))}catch(o){return console.log(this.utilsService.obtenerErrorGenerico(o)),new z}})}static \u0275fac=function(n){return new(n||a)(x(V),x(R))};static \u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"})};var De=()=>({standalone:!0});function nt(a,r){if(a&1&&(i(0,"option",51),e(1),t()),a&2){let n=r.$implicit;c("value",n.IdVeUsuario),s(),Le(`
                                `,n.Rut," - ",n.Nombre," ",n.Apellido,`
                            `)}}function rt(a,r){if(a&1&&(i(0,"option",51),e(1),t()),a&2){let n=y();c("value",n.regionSelect.IdVeRegion),s(),T(`
                        `,n.regionSelect.NombreRegion,`
                    `)}}function ot(a,r){if(a&1&&(i(0,"option",51),e(1),t()),a&2){let n=r.$implicit;c("value",n.IdVeRegion+"-"+n.IdVeComuna),s(),T(`
                        `,n.NombreComuna,`
                    `)}}var pe=class a{constructor(r,n,o){this.nacionalidadService=r;this.usuarioService=n;this.cdr=o}comunaSelect=[];usuarioRecepcionistaSelect=[];regionSelect=null;regionSelectId="";usuarioRecepcionista={Rut:null,Apellido:"",Email:"",Nombre:"",IdVeUsuario:0,Celular:0,IdVeComuna:0,IdVeRegion:0,IdVeTipoUsuario:0};ngOnInit(){this.ObtenerComunas(),this.ObtenerUsuarios()}setRegion(r){return g(this,null,function*(){let o=r.target.value;if(!o){this.regionSelect=null,this.regionSelectId="";return}let u=parseInt(o.split("-")[0]);this.regionSelect=yield this.nacionalidadService.obtenerRegion(u),this.regionSelectId=this.regionSelect?.IdVeRegion})}ObtenerComunas(){return g(this,null,function*(){let r=yield this.nacionalidadService.obtenerComunas();console.log(r),this.comunaSelect=r})}ObtenerUsuarios(){return g(this,null,function*(){let r=yield this.usuarioService.obtenerUsuarios();this.usuarioRecepcionistaSelect=r,console.log(this.usuarioRecepcionistaSelect)})}setUsuario(r){let o=r.target.value;o?this.usuarioRecepcionista=this.usuarioRecepcionistaSelect.filter(u=>u.IdVeUsuario==o)[0]:this.usuarioRecepcionista=new z}static \u0275fac=function(n){return new(n||a)(_(ce),_(me),_(ke))};static \u0275cmp=v({type:a,selectors:[["app-datos-personas"]],decls:277,vars:13,consts:[[1,"relative","z-0","w-full","group"],[1,"mt-5","text-xl","font-semibold","text-gray-900","dark:text-white"],[1,"relative"],[1,"flex","pl-80","pr-80","pt-5"],[1,"inline-flex","items-center","px-3","text-sm","text-gray-900","bg-gray-200","border","border-e-0","border-gray-300","rounded-s-md","dark:bg-gray-600","dark:text-gray-400","dark:border-gray-600"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-[27px]","h-[27px]","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linejoin","round","stroke-width","2","d","M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z"],["type","text","id","website-admin","placeholder","Cambio completo de tren delantero para Toyota",1,"rounded-none","rounded-e-lg","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"grid","md:grid-cols-2","md:gap-6"],[1,"relative","z-0","w-full"],[1,"max-w-md",2,"margin","3%"],[1,"relative","z-0","w-full","mb-5"],[1,"flex"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],["id","countries",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-e-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"change"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"w-full","mb-5","group"],[1,"inline-flex","items-center","px-3","text-sm","text-gray-900","bg-gray-200","border","border-e-0","border-gray-300","rounded-s-md","dark:bg-gray-600","dark:text-white","dark:border-gray-600"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["d","M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"],["type","text","placeholder","Nombre","id","nombre","name","nombre","disabled","",1,"rounded-none","rounded-e-lg","bg-gray-100","border","border-gray-300","text-gray-900","text-sm","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5","cursor-not-allowed","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngModelChange","ngModel","ngModelOptions"],["type","text","id","website-admin","placeholder","Apellido","nombre","Apellido","disabled","",1,"rounded-none","rounded-e-lg","cursor-not-allowed","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngModelChange","ngModel","ngModelOptions"],[1,"relative","w-full","mb-5","group"],[1,"absolute","inset-y-0","start-0","flex","items-center","ps-3.5","pointer-events-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 16",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["d","m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"],["d","M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"],["type","text","id","email-address-icon","nombre","email-address-icon","placeholder","Correo (name@flowbite.com)","disabled","",1,"bg-gray-50","border","cursor-not-allowed","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngModelChange","ngModel","ngModelOptions"],["disabled","",1,"cursor-not-allowed","relative","inline-flex","items-center","justify-center","p-0.5","mb-2","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-green-400","to-blue-600","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-green-200","dark:focus:ring-green-800"],[1,"relative","px-5","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md"],[1,"relative","z-0","w-full","mb-5","group"],["type","text","id","website-admin","placeholder","Rut",1,"rounded-none","rounded-e-lg","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","text","id","website-admin","placeholder","Nombre",1,"rounded-none","rounded-e-lg","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","text","id","website-admin","placeholder","Apellido",1,"rounded-none","rounded-e-lg","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-5","h-5","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-width","2","d","M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],["disabled","","id","countries","name","countries",1,"cursor-not-allowed","bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngModelChange","ngModel"],["value",""],[3,"value",4,"ngIf"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"],["id","countries",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"change"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"],["type","text","id","address-icon","placeholder","Maria Pinto 46",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","text","id","email-address-icon","placeholder","name@flowbite.com",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"],["type","text","id","email-address-icon","placeholder","Nombre Empresa",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 14h2m3 0h4m2 2h2m0 0h2m-2 0v2m0-2v-2m-5 4H4c-.55228 0-1-.4477-1-1V7c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 10h18"],["type","text","id","email-address-icon","placeholder","Id Empresa",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[3,"value"]],template:function(n,o){n&1&&(i(0,"div",0),e(1,`
`),i(2,"h3",1),e(3,"Nombre del proyecto:"),t(),e(4,`
        `),i(5,"div",2),e(6,`
            `),i(7,"div",3),e(8,`
                `),i(9,"span",4),e(10,`
                `),m(),i(11,"svg",5),e(12,`
                    `),l(13,"path",6),e(14,`
                `),t(),e(15,`
                `),t(),e(16,`
                `),p(),l(17,"input",7),e(18,`
            `),t(),e(19,`
        `),t(),e(20,`
    `),t(),e(21,` 
`),i(22,"div",8),e(23,`
    `),i(24,"div",9),e(25,`
        `),i(26,"h3",1),e(27,"Datos del recepcionista:"),t(),e(28,`
        `),i(29,"form",10),e(30,`
            `),i(31,"div",11),e(32,`
                `),i(33,"div",2),e(34,`
                    `),i(35,"div",12),e(36,`
                        `),i(37,"span",4),e(38,`
                            `),m(),i(39,"svg",13),e(40,`
                                `),l(41,"path",14),e(42,`
                            `),t(),e(43,`
                        `),t(),e(44,`
                        `),p(),i(45,"select",15),h("change",function(d){return o.setUsuario(d)}),e(46,`
                            `),i(47,"option",16),e(48,"Seleccione Usuario"),t(),e(49,`
                            `),f(50,nt,2,4,"option",17),e(51,`
                        `),t(),e(52,`
                        `),e(53,`
                    `),t(),e(54,`
                `),t(),e(55,`
            `),t(),e(56,` 
            `),i(57,"div",18),e(58,`
                `),i(59,"div",12),e(60,`
                    `),i(61,"span",19),e(62,`
                    `),m(),i(63,"svg",20),e(64,`
                        `),l(65,"path",21),e(66,`
                    `),t(),e(67,`
                    `),t(),e(68,`
                    `),p(),i(69,"input",22),A("ngModelChange",function(d){return F(o.usuarioRecepcionista.Nombre,d)||(o.usuarioRecepcionista.Nombre=d),d}),t(),e(70,`
                `),t(),e(71,`
            `),t(),e(72,` 
            `),i(73,"div",18),e(74,`
                `),i(75,"div",12),e(76,`
                    `),i(77,"span",4),e(78,`
                    `),m(),i(79,"svg",20),e(80,`
                        `),l(81,"path",21),e(82,`
                    `),t(),e(83,`
                    `),t(),e(84,`
                    `),p(),i(85,"input",23),A("ngModelChange",function(d){return F(o.usuarioRecepcionista.Apellido,d)||(o.usuarioRecepcionista.Apellido=d),d}),t(),e(86,`
                `),t(),e(87,`
            `),t(),e(88,`
            `),i(89,"div",24),e(90,`
                `),i(91,"div",25),e(92,`
                    `),m(),i(93,"svg",26),e(94,`
                        `),l(95,"path",27),e(96,`
                        `),l(97,"path",28),e(98,`
                    `),t(),e(99,`
                `),t(),e(100,`
                `),p(),i(101,"input",29),A("ngModelChange",function(d){return F(o.usuarioRecepcionista.Email,d)||(o.usuarioRecepcionista.Email=d),d}),t(),e(102,`
            `),t(),e(103,`
        `),t(),e(104,`
        `),i(105,"button",30),e(106,`
            `),i(107,"span",31),e(108,`
                Nuevo recepcionista
            `),t(),e(109,`
        `),t(),e(110,`
        `),e(111,`
    `),t(),e(112,`
    `),i(113,"div",0),e(114,`
        `),i(115,"h3",1),e(116,"Datos del cliente:"),t(),e(117,`
        `),i(118,"form",10),e(119,`
            `),i(120,"div",32),e(121,`
                `),i(122,"div",2),e(123,`
                    `),i(124,"div",12),e(125,`
                        `),i(126,"span",4),e(127,`
                        `),m(),i(128,"svg",20),e(129,`
                            `),l(130,"path",21),e(131,`
                        `),t(),e(132,`
                        `),t(),e(133,`
                        `),p(),l(134,"input",33),e(135,`
                    `),t(),e(136,`
                `),t(),e(137,`
            `),t(),e(138,` 
            `),i(139,"div",32),e(140,`
                `),i(141,"div",2),e(142,`
                    `),i(143,"div",12),e(144,`
                        `),i(145,"span",4),e(146,`
                        `),m(),i(147,"svg",20),e(148,`
                            `),l(149,"path",21),e(150,`
                        `),t(),e(151,`
                        `),t(),e(152,`
                        `),p(),l(153,"input",34),e(154,`
                    `),t(),e(155,`
                `),t(),e(156,`
            `),t(),e(157,` 
            `),i(158,"div",32),e(159,`
                `),i(160,"div",2),e(161,`
                    `),i(162,"div",12),e(163,`
                        `),i(164,"span",4),e(165,`
                        `),m(),i(166,"svg",20),e(167,`
                            `),l(168,"path",21),e(169,`
                        `),t(),e(170,`
                        `),t(),e(171,`
                        `),p(),l(172,"input",35),e(173,`
                    `),t(),e(174,`
                `),t(),e(175,`
            `),t(),e(176,` 
            
            
            `),i(177,"div",32),e(178,`
                `),i(179,"div",25),e(180,`
                    `),m(),i(181,"svg",36),e(182,`
                        `),l(183,"path",37),e(184,`
                    `),t(),e(185,`
                `),t(),e(186,`
                `),p(),i(187,"select",38),A("ngModelChange",function(d){return F(o.regionSelectId,d)||(o.regionSelectId=d),d}),e(188,`
                    `),i(189,"option",39),e(190,`
                        Seleccione Regi\xF3n
                    `),t(),e(191,`
                    `),f(192,rt,2,2,"option",40),e(193,`
                `),t(),e(194,`
            `),t(),e(195,`

            `),i(196,"div",32),e(197,`
                `),i(198,"div",25),e(199,`
                    `),m(),i(200,"svg",36),e(201,`
                        `),l(202,"path",41),e(203,`
                    `),t(),e(204,`
                `),t(),e(205,`
                `),p(),i(206,"select",42),h("change",function(d){return o.setRegion(d)}),e(207,`
                    `),i(208,"option",16),e(209,"Seleccione Comuna"),t(),e(210,`
                    `),f(211,ot,2,2,"option",17),e(212,`
                `),t(),e(213,`
            `),t(),e(214,`

            `),i(215,"div",32),e(216,`
                `),i(217,"div",25),e(218,`
                `),m(),i(219,"svg",36),e(220,`
                    `),l(221,"path",43),e(222,`
                    `),l(223,"path",44),e(224,`
                `),t(),e(225,`
                `),t(),e(226,`
                `),p(),l(227,"input",45),e(228,`
            `),t(),e(229,`
            `),i(230,"div",32),e(231,`
                `),i(232,"div",25),e(233,`
                    `),m(),i(234,"svg",26),e(235,`
                        `),l(236,"path",27),e(237,`
                        `),l(238,"path",28),e(239,`
                    `),t(),e(240,`
                `),t(),e(241,`
                `),p(),l(242,"input",46),e(243,`
            `),t(),e(244,`
            `),i(245,"div",8),e(246,`
                `),i(247,"div",32),e(248,`
                    `),i(249,"div",25),e(250,`
                    `),m(),i(251,"svg",36),e(252,`
                        `),l(253,"path",47),e(254,`
                    `),t(),e(255,`
                    `),t(),e(256,`
                    `),p(),l(257,"input",48),e(258,`
                `),t(),e(259,`
                `),i(260,"div",32),e(261,`
                    `),i(262,"div",25),e(263,`
                    `),m(),i(264,"svg",36),e(265,`
                        `),l(266,"path",49),e(267,`
                    `),t(),e(268,`
                    `),t(),e(269,`
                    `),p(),l(270,"input",50),e(271,`
                `),t(),e(272,`
            `),t(),e(273,`
        `),t(),e(274,`  
    `),t(),e(275,`
`),t(),e(276,`
`)),n&2&&(s(50),c("ngForOf",o.usuarioRecepcionistaSelect),s(19),I("ngModel",o.usuarioRecepcionista.Nombre),c("ngModelOptions",ie(10,De)),s(16),I("ngModel",o.usuarioRecepcionista.Apellido),c("ngModelOptions",ie(11,De)),s(16),I("ngModel",o.usuarioRecepcionista.Email),c("ngModelOptions",ie(12,De)),s(86),I("ngModel",o.regionSelectId),s(5),c("ngIf",o.regionSelect),s(19),c("ngForOf",o.comunaSelect))},dependencies:[S,K,L,B,re,le,oe,Q,ae,Z,E,P,q,je,Qe],styles:[".ng-select-bottom[_ngcontent-%COMP%]{position:relative!important;justify-content:center!important;align-items:center;height:40px;color:#fff;font-size:14px;text-align:center}[_nghost-%COMP%]     .ng-dropdown-panel{position:relative!important;box-sizing:border-box;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}[_nghost-%COMP%]     .ng-dropdown-panel-items{margin-top:4%;background-color:#1f2937;border-bottom:1px solid #374151;transition:background-color .2s ease}[_nghost-%COMP%]     .ng-dropdown-panel-items .ng-option{background-color:#2f3a4a;border-bottom:1px solid #e5e7eb;padding:2%}[_nghost-%COMP%]     .ng-dropdown-panel-items .ng-option:hover{background-color:#f9fafb}@media (prefers-color-scheme: dark){[_nghost-%COMP%]     .ng-dropdown-panel-items{background-color:#1f2937;border-bottom:1px solid #374151}[_nghost-%COMP%]     .ng-dropdown-panel-items .ng-option:hover{background-color:#4b5563}}"]})};var he=class{IdVeMarcaVehiculo;NombreMarca};var ge=class{IdVeModeloVehiculo;IdVeMarcaVehiculo;NombreModelo};var fe=class a{constructor(r,n){this.httpClient=r;this.utilsService=n}urlApi=N.apiAccesoViaExpress;obtenerMarcas(){return g(this,null,function*(){let r=this.urlApi+"/api/Vehiculo/ObtenerMarcas";try{return yield C(this.httpClient.get(r))}catch(n){return console.log(this.utilsService.obtenerErrorGenerico(n)),new he}})}obtenerModelos(r){return g(this,null,function*(){let n=this.urlApi+`/api/Vehiculo/ObtenerModelosPorMarca?idMarca=${r}`;try{return yield C(this.httpClient.get(n))}catch(o){return console.log(this.utilsService.obtenerErrorGenerico(o)),new ge}})}static \u0275fac=function(n){return new(n||a)(x(V),x(R))};static \u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"})};var xe=class a{constructor(r){this.platformId=r}loadFlowbite(r){Be(this.platformId)&&import("./chunk-55GR7BQK.js").then(n=>{r(n)})}static \u0275fac=function(n){return new(n||a)(x(Pe))};static \u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"})};function st(a,r){if(a&1&&(i(0,"option",32),e(1),t()),a&2){let n=r.$implicit;c("value",n.IdVeMarcaVehiculo),s(),T(`
                                `,n.NombreMarca,`
                            `)}}function dt(a,r){if(a&1&&(i(0,"option",32),e(1),t()),a&2){let n=r.$implicit;c("value",n.IdVeModeloVehiculo),s(),W(n.NombreModelo)}}function ut(a,r){if(a&1){let n=U();i(0,"div",44),e(1,`
                        `),i(2,"button",45),h("click",function(){let u=M(n).index,d=y(2);return O(d.removeImage(u))}),e(3,`
                            `),i(4,"span",39),e(5,`
                                `),m(),i(6,"svg",46),e(7,`
                                    `),l(8,"path",47),e(9,`
                                `),t(),e(10,`
                            `),t(),e(11,`
                        `),t(),e(12,`   
                        `),p(),l(13,"img",48),e(14,`
                    `),t()}if(a&2){let n=r.$implicit,o=r.index;c("id","carousel-item-"+o),s(13),c("src",n,ee)}}function ct(a,r){if(a&1&&(i(0,"button",49),e(1,`
                    `),t()),a&2){let n=r.index;c("id","carousel-indicator-"+n),Ce("aria-label","Slide "+(n+1))("data-carousel-slide-to",n)}}function mt(a,r){if(a&1&&(i(0,"div",33),e(1,`
                `),e(2,`
                `),i(3,"div",34),e(4,`
                    `),f(5,ut,15,2,"div",35),e(6,`
                `),t(),e(7,`

                `),e(8,`
                `),i(9,"div",36),e(10,`
                    `),f(11,ct,2,3,"button",37),e(12,`
                `),t(),e(13,`

                `),e(14,`
                `),i(15,"button",38),e(16,`
                    `),i(17,"span",39),e(18,`
                        `),m(),i(19,"svg",40),e(20,`
                            `),l(21,"path",41),e(22,`
                        `),t(),e(23,`
                    `),t(),e(24,`
                `),t(),e(25,`
                `),p(),i(26,"button",42),e(27,`
                    `),i(28,"span",39),e(29,`
                        `),m(),i(30,"svg",40),e(31,`
                            `),l(32,"path",43),e(33,`
                        `),t(),e(34,`
                    `),t(),e(35,`
                `),t(),e(36,`
            `),t()),a&2){let n=y();s(5),c("ngForOf",n.previewImages),s(6),c("ngForOf",n.previewImages)}}var be=class a{constructor(r,n){this.vehiculoService=r;this.flowbiteService=n}marcasSelect=[];modelosSelect=[];previewImages=["https://flowbite.com/docs/images/carousel/carousel-1.svg"];selectedFiles=[];carouselInstance;ngOnInit(){this.ObtenerMarcas()}ObtenerMarcas(){return g(this,null,function*(){let r=yield this.vehiculoService.obtenerMarcas();this.marcasSelect=r})}setModelos(r){return g(this,null,function*(){let o=r.target.value,u=yield this.vehiculoService.obtenerModelos(o);this.modelosSelect=u})}onFileSelected(r){let n=r.target;if(!n.files)return;this.previewImages=[],this.selectedFiles=Array.from(n.files);let o=[];for(let u of this.selectedFiles){let d=new FileReader,H=new Promise(G=>{d.onload=D=>{this.previewImages.push(D.target.result),G()}});d.readAsDataURL(u),o.push(H)}Promise.all(o).then(()=>{this.initCarousel()})}ngAfterViewInit(){this.initCarousel()}removeImage(r){this.previewImages.splice(r,1),setTimeout(()=>this.reinicializarCarousel(),0)}reinicializarCarousel(){this.flowbiteService.loadFlowbite(r=>{let n=document.getElementById("carousel-example");if(!n)return;let o=this.previewImages.map((D,$)=>({position:$,el:document.getElementById(`carousel-item-${$}`)})),d={defaultPosition:0,interval:0,indicators:{activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",items:this.previewImages.map((D,$)=>({position:$,el:document.getElementById(`carousel-indicator-${$}`)}))}},H={id:"carousel-example",override:!0},G=new r.Carousel(n,o,d,H);document.getElementById("data-carousel-prev")?.addEventListener("click",()=>G.prev()),document.getElementById("data-carousel-next")?.addEventListener("click",()=>G.next())})}initCarousel(){this.flowbiteService.loadFlowbite(r=>{let n=document.getElementById("carousel-example");n&&setTimeout(()=>{let o=this.previewImages.map((G,D)=>({position:D,el:document.getElementById(`carousel-item-${D}`)})),d={defaultPosition:0,interval:0,indicators:{activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",items:this.previewImages.map((G,D)=>({position:D,el:document.getElementById(`carousel-indicator-${D}`)}))}},H={id:"carousel-example",override:!0};this.carouselInstance&&this.carouselInstance.destroy(),this.carouselInstance=new r.Carousel(n,o,d,H),document.getElementById("data-carousel-prev")?.addEventListener("click",()=>this.carouselInstance.prev()),document.getElementById("data-carousel-next")?.addEventListener("click",()=>this.carouselInstance.next())},0)})}static \u0275fac=function(n){return new(n||a)(_(fe),_(xe))};static \u0275cmp=v({type:a,selectors:[["app-datos-vehiculos"]],decls:121,vars:3,consts:[[1,"gap-16","py-8","px-4","mx-auto","max-w-screen-xl","lg:grid","lg:grid-cols-2","items-start"],[1,"font-light","text-gray-500","sm:text-lg","dark:text-gray-400"],[1,"mb-10","font-semibold","text-gray-900","dark:text-white",2,"font-size","x-large"],["action","#"],[1,"grid","gap-4","sm:grid-cols-2","sm:gap-6"],[1,"text-left"],["for","category",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","category",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"change"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],["id","category",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[1,"w-full","text-left"],["for","brand",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","text","name","brand","id","brand","placeholder","BAjk-81","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["type","text","name","brand","id","brand","placeholder","1HGCM82633A123456","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","price",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","text","name","price","id","price","placeholder","K20A123456789","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["type","number","name","price","id","price","placeholder","185.000","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[1,"sm:col-span-2","text-left"],["for","description",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","description","rows","8","placeholder","Escriba su descripci\xF3n aqu\xED.",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-primary-500","focus:border-primary-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",2,"height","320px"],[1,"block","items-center","justify-center","w-full","mt-16"],[1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["for","dropzone-file",1,"flex","flex-col","items-center","justify-center","w-full","h-64","border-2","border-gray-300","border-dashed","rounded-lg","cursor-pointer","bg-gray-50","dark:hover:bg-gray-800","dark:bg-gray-700","hover:bg-gray-100","dark:border-gray-600","dark:hover:border-gray-500"],[1,"flex","flex-col","items-center","justify-center","pt-5","pb-6"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 16",1,"w-8","h-8","mb-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"],[1,"mb-2","text-sm","text-gray-500","dark:text-gray-400"],[1,"font-semibold"],[1,"text-xs","text-gray-500","dark:text-gray-400"],["id","dropzone-file","type","file","accept","image/*","multiple","",1,"hidden",3,"change"],["id","carousel-example","class","relative w-full mt-8",4,"ngIf"],[3,"value"],["id","carousel-example",1,"relative","w-full","mt-8"],[1,"relative","h-56","overflow-hidden","rounded-lg","sm:h-64","xl:h-80","2xl:h-94"],["class","hidden duration-700 ease-in-out",3,"id",4,"ngFor","ngForOf"],[1,"absolute","z-30","flex","-translate-x-1/2","space-x-3","rtl:space-x-reverse","bottom-5","left-1/2"],["type","button","class","w-3 h-3 rounded-full",3,"id",4,"ngFor","ngForOf"],["type","button","id","data-carousel-prev","data-carousel-prev","",1,"absolute","top-0","start-0","z-30","flex","items-center","justify-center","h-full","px-4","cursor-pointer","group","focus:outline-none"],[1,"inline-flex","items-center","justify-center","w-10","h-10","rounded-full","bg-white/30","dark:bg-gray-800/30","group-hover:bg-white/50","group-focus:ring-4","group-focus:ring-white","group-focus:outline-none"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 6 10",1,"w-4","h-4","text-white","rtl:rotate-180"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M5 1 1 5l4 4"],["type","button","id","data-carousel-next","data-carousel-next","",1,"absolute","top-0","end-0","z-30","flex","items-center","justify-center","h-full","px-4","cursor-pointer","group","focus:outline-none"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 9 4-4-4-4"],[1,"hidden","duration-700","ease-in-out",3,"id"],[1,"absolute","top-0","center","z-30","h-20","cursor-pointer","group","focus:outline-none",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-[35px]","h-[35px]","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","1.9","d","m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],[1,"w-full","h-full","object-cover",3,"src"],["type","button",1,"w-3","h-3","rounded-full",3,"id"]],template:function(n,o){n&1&&(e(0,`
`),i(1,"section"),e(2,`
    `),i(3,"div",0),e(4,`
        `),i(5,"div",1),e(6,`
            `),e(7,`
            `),i(8,"h3",2),e(9,"Datos del Veh\xEDculo:"),t(),e(10,`
            `),i(11,"form",3),e(12,`
                `),i(13,"div",4),e(14,`
                    `),i(15,"div",5),e(16,`
                        `),i(17,"label",6),e(18,"Marca del Veh\xEDculo:"),t(),e(19,`
                        `),i(20,"select",7),h("change",function(d){return o.setModelos(d)}),e(21,`
                            `),i(22,"option",8),e(23,"Seleccionar Marca"),t(),e(24,`
                            `),f(25,st,2,2,"option",9),e(26,`
                        `),t(),e(27,`
                    `),t(),e(28,`
                    `),i(29,"div",5),e(30,`
                        `),i(31,"label",6),e(32,"Modelo del Veh\xEDculo:"),t(),e(33,`
                        `),i(34,"select",10),e(35,`
                            `),i(36,"option",8),e(37,"Seleccionar Modelo"),t(),e(38,`
                            `),f(39,dt,2,2,"option",9),e(40,`
                        `),t(),e(41,`
                    `),t(),e(42,`
                    `),i(43,"div",11),e(44,`
                        `),i(45,"label",12),e(46,"N\xFAmero de Matricula:"),t(),e(47,`
                        `),l(48,"input",13),e(49,`
                    `),t(),e(50,`
                    `),i(51,"div",11),e(52,`
                        `),i(53,"label",12),e(54,"N\xFAmero de Chasis:"),t(),e(55,`
                        `),l(56,"input",14),e(57,`
                    `),t(),e(58,`
                    `),i(59,"div",11),e(60,`
                        `),i(61,"label",15),e(62,"N\xFAmero de Motor:"),t(),e(63,`
                        `),l(64,"input",16),e(65,`
                    `),t(),e(66,`
                    `),i(67,"div",11),e(68,`
                        `),i(69,"label",15),e(70,"Kilometraje:"),t(),e(71,`
                        `),l(72,"input",17),e(73,`
                    `),t(),e(74,`
                    `),i(75,"div",18),e(76,`
                        `),i(77,"label",19),e(78,"Descripci\xF3n de la falla"),t(),e(79,`
                        `),l(80,"textarea",20),e(81,`
                    `),t(),e(82,`
                    
                `),t(),e(83,`
            `),t(),e(84,`
            `),e(85,`
        `),t(),e(86,`

        `),i(87,"div",21),e(88,`

            `),i(89,"div",18),e(90,`
                `),i(91,"label",22),e(92,"Cargar Imagenes del veh\xEDculo:"),t(),e(93,`

                `),i(94,"label",23),e(95,`
                    `),i(96,"div",24),e(97,`
                        `),m(),i(98,"svg",25),e(99,`
                            `),l(100,"path",26),e(101,`
                        `),t(),e(102,`
                        `),p(),i(103,"p",27)(104,"span",28),e(105,"Click para actualizar"),t(),e(106," o arrastrar y soltar"),t(),e(107,`
                        `),i(108,"p",29),e(109,"SVG, PNG, JPG or GIF (MAX. 800x400px)"),t(),e(110,`
                    `),t(),e(111,`
                    `),i(112,"input",30),h("change",function(d){return o.onFileSelected(d)}),t(),e(113,`
                `),t(),e(114,`
            `),t(),e(115,`

            `),f(116,mt,37,2,"div",31),e(117,`
        `),t(),e(118,`
    `),t(),e(119,`
`),t(),e(120,`
`)),n&2&&(s(25),c("ngForOf",o.marcasSelect),s(14),c("ngForOf",o.modelosSelect),s(77),c("ngIf",o.previewImages.length))},dependencies:[S,K,L,B,Q,Z,E,P,q],styles:[".zoom[_ngcontent-%COMP%]{width:100%;transition:transform .5s ease}.zoom[_ngcontent-%COMP%]:hover{transform:scale(1.2)}"]})};var pt=a=>({"is-active":a}),_e=class a{formData={NombreProducto:"",Precio:"",Categoria:"Seleccione la Categoria",Descripcion:""};isVisible=!0;closeModal=new we;ngOnInit(){}close(){console.log("modal se cierra: "+this.isVisible),this.resetForm(),this.closeModal.emit(!1)}resetForm(){this.formData={NombreProducto:"",Precio:"",Categoria:"Seleccione la Categoria",Descripcion:""}}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=v({type:a,selectors:[["app-modal-productos"]],inputs:{isVisible:"isVisible"},outputs:{closeModal:"closeModal"},decls:123,vars:7,consts:[["id","defaultModal",1,"modal","hidden",3,"ngClass"],[1,"relative","p-4","w-full","max-w-2xl","h-full","md:h-auto"],[1,"relative","p-4","bg-white","rounded-lg","shadow","dark:bg-gray-800","sm:p-5"],[1,"flex","justify-between","items-center","pb-4","mb-4","rounded-t","border-b","sm:mb-5","dark:border-gray-600"],[1,"text-lg","font-semibold","text-gray-900","dark:text-white"],["type","button","data-modal-toggle","defaultModal",1,"text-gray-400","bg-transparent","hover:bg-gray-200","hover:text-gray-900","rounded-lg","text-sm","p-1.5","ml-auto","inline-flex","items-center","dark:hover:bg-gray-600","dark:hover:text-white",3,"click"],["fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"w-5","h-5"],["fill-rule","evenodd","d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule","evenodd"],[1,"sr-only"],["action","#"],[1,"grid","gap-4","mb-4","sm:grid-cols-2"],["for","name",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","text","name","name","id","name","placeholder","Filtro de Aire","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"ngModelChange","ngModel"],["for","price",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","number","name","price","id","price","placeholder","$2999","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"ngModelChange","ngModel"],["for","category",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","category","name","category",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"ngModelChange","ngModel"],["selected",""],["value","TV"],["value","PC"],["value","GA"],["value","PH"],[1,"sm:col-span-2"],["for","description",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","description","name","description","rows","4","placeholder","Escribe aqu\xED la descripci\xF3n de tu producto",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-primary-500","focus:border-primary-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"ngModelChange","ngModel"],["type","submit",1,"text-white","inline-flex","items-center","bg-primary-700","hover:bg-primary-800","focus:ring-4","focus:outline-none","focus:ring-primary-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-primary-600","dark:hover:bg-primary-700","dark:focus:ring-primary-800"],["fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"mr-1","-ml-1","w-6","h-6"],["fill-rule","evenodd","d","M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule","evenodd"]],template:function(n,o){n&1&&(i(0,"div",0),e(1,`
    `),i(2,"div",1),e(3,`
        `),i(4,"div",2),e(5,`

            `),i(6,"div",3),e(7,`
                `),i(8,"h3",4),e(9,`
                    Crear Producto
                `),t(),e(10,`
                `),i(11,"button",5),h("click",function(){return o.close()}),e(12,`
                    `),m(),i(13,"svg",6),l(14,"path",7),t(),e(15,`
                    `),p(),i(16,"span",8),e(17,"Cerrar Modal"),t(),e(18,`
                `),t(),e(19,`
            `),t(),e(20,`

            `),i(21,"form",9),e(22,`
                `),i(23,"div",10),e(24,`
                    `),i(25,"div"),e(26,`
                        `),i(27,"label",11),e(28,"Nombre Producto o Servicio"),t(),e(29,`
                        `),i(30,"input",12),A("ngModelChange",function(d){return F(o.formData.NombreProducto,d)||(o.formData.NombreProducto=d),d}),t(),e(31,`
                    `),t(),e(32,`
                    `),i(33,"div"),e(34,`
                        `),i(35,"label",13),e(36,"Precio"),t(),e(37,`
                        `),i(38,"input",14),A("ngModelChange",function(d){return F(o.formData.Precio,d)||(o.formData.Precio=d),d}),t(),e(39,`
                    `),t(),e(40,`
                    `),i(41,"div"),e(42,`
                        `),i(43,"label",15),e(44,"Categoria"),t(),e(45,`
                        `),i(46,"select",16),A("ngModelChange",function(d){return F(o.formData.Categoria,d)||(o.formData.Categoria=d),d}),e(47,`
                            `),i(48,"option",17),e(49,"Seleccione la Categoria"),t(),e(50,`
                            `),i(51,"option",18),e(52,"Cambio de Aceite "),t(),e(53,`
                            `),i(54,"option",19),e(55,"Sistema de Alimentaci\xF3n"),t(),e(56,`
                            `),i(57,"option",20),e(58,"Motor de Partida y Alternador"),t(),e(59,`
                            `),i(60,"option",21),e(61,"Filtros"),t(),e(62,`
                            `),i(63,"option",21),e(64,"Embragues y Transmisi\xF3n"),t(),e(65,`
                            `),i(66,"option",21),e(67,"Carrocer\xEDa"),t(),e(68,`
                            `),i(69,"option",21),e(70,"Rodamiento y Retenes"),t(),e(71,`
                            `),i(72,"option",21),e(73,"Frenos"),t(),e(74,`
                            `),i(75,"option",21),e(76,"Motor"),t(),e(77,`
                            `),i(78,"option",21),e(79,"Supensi\xF3n y Direcci\xF3n"),t(),e(80,`
                            `),i(81,"option",21),e(82,"Distribuci\xF3n"),t(),e(83,`
                            `),i(84,"option",21),e(85,"Afinamiento y Encendido"),t(),e(86,`
                            `),i(87,"option",21),e(88,"Sistema de Escape"),t(),e(89,`
                            `),i(90,"option",21),e(91,"Sensores y El\xE9ctrica"),t(),e(92,`
                            `),i(93,"option",21),e(94,"Refrigeraci\xF3n y Calefacci\xF3n"),t(),e(95,`
                            `),i(96,"option",21),e(97,"Correa de Accesorios y Servicios"),t(),e(98,`
                            `),i(99,"option",21),e(100,"Mano de Obra"),t(),e(101,`
                        `),t(),e(102,`
                    `),t(),e(103,`
                    `),i(104,"div",22),e(105,`
                        `),i(106,"label",23),e(107,"Descripci\xF3n"),t(),e(108,`
                        `),i(109,"textarea",24),A("ngModelChange",function(d){return F(o.formData.Descripcion,d)||(o.formData.Descripcion=d),d}),t(),e(110,`                    
                    `),t(),e(111,`
                `),t(),e(112,`
                `),i(113,"button",25),e(114,`
                    `),m(),i(115,"svg",26),l(116,"path",27),t(),e(117,`
                    Guardar Producto
                `),t(),e(118,`
            `),t(),e(119,`
        `),t(),e(120,`
    `),t(),e(121,`
`),t(),e(122,`
    `)),n&2&&(c("ngClass",b(5,pt,o.isVisible)),s(30),I("ngModel",o.formData.NombreProducto),s(8),I("ngModel",o.formData.Precio),s(8),I("ngModel",o.formData.Categoria),s(63),I("ngModel",o.formData.Descripcion))},dependencies:[S,K,L,B,re,Ne,le,oe,Q,Re,ae,Z,E,ne],styles:[".modal[_ngcontent-%COMP%]{position:fixed;z-index:1050;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#00000080}.modal.is-active[_ngcontent-%COMP%]{display:block}.modal-content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 6px #0000001a}.modal-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.modal-close[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;border:none;background:transparent;font-size:1.5em;cursor:pointer}"]})};function ht(a,r){if(a&1){let n=U();i(0,"div",2),e(1,`
        `),l(2,"img",3),e(3,`
    
        `),i(4,"h2",4),e(5),t(),e(6,`
    
        `),i(7,"div",5),e(8,`
            `),i(9,"span"),e(10,"Cantidad:"),t(),e(11,`
            `),i(12,"div",6),e(13,`
            `),i(14,"button",7),h("click",function(){M(n);let u=y();return O(u.qty=u.Math.max(1,u.qty-1))}),e(15,"-"),t(),e(16,`
            `),i(17,"span",8),e(18),t(),e(19,`
            `),i(20,"button",7),h("click",function(){M(n);let u=y();return O(u.qty=u.qty+1)}),e(21,"+"),t(),e(22,`
            `),t(),e(23,`
        `),t(),e(24,`
    
        `),i(25,"div",9),e(26,`
            `),i(27,"button",10),e(28,`
                `),i(29,"span",11),e(30,`
                    `),m(),i(31,"svg",12),e(32,`
                        `),l(33,"path",13),e(34,`
                    `),t(),e(35,`                                 
                    Eliminar
                `),t(),e(36,`
            `),t(),e(37,` 

            `),p(),i(38,"p",14),e(39),t(),e(40,`
        `),t(),e(41,`
    `),t()}if(a&2){let n=y();s(2),c("src",n.image,ee),s(3),W(n.title),s(13),W(n.qty),s(21),T("$",n.price,"")}}var ve=class a{title;price;image;qty=5;selectedColor="";Math=Math;products=[{title:"PlayStation\xAE5 Console \u2013 1TB",price:499,image:"https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"},{title:"Apple Watch SE [GPS 40mm]",price:699,image:"https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"},{title:"PlayStation\xAE5 Console \u2013 1TB",price:499,image:"https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"},{title:"Apple Watch SE [GPS 40mm]",price:699,image:"https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"},{title:"PlayStation\xAE5 Console \u2013 1TB",price:499,image:"https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"},{title:"Apple Watch SE [GPS 40mm]",price:699,image:"https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"}];ngOnInit(){}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=v({type:a,selectors:[["app-producto-carrusel"]],inputs:{title:"title",price:"price",image:"image"},decls:4,vars:1,consts:[[1,"mt-4","grid","gap-4","sm:grid-cols-1","lg:grid-cols-3","xl:grid-cols-3"],["style","height: fit-content;","class","bg-gray-800 text-white rounded-xl p-4",4,"ngFor","ngForOf"],[1,"bg-gray-800","text-white","rounded-xl","p-4",2,"height","fit-content"],["alt","Product image",1,"rounded-lg","mx-auto","mb-4","w-48","h-48","object-contain",3,"src"],[1,"text-lg","font-bold"],[1,"flex","items-center","mb-4","mt-4","space-x-4"],[1,"flex","items-center"],[1,"px-2","py-1","bg-gray-700","rounded",3,"click"],[1,"px-3"],[1,"mt-4","flex","items-center","justify-between","gap-4"],[1,"relative","inline-flex","items-center","justify-center","p-0.5","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-pink-500","to-orange-400","group-hover:from-pink-500","group-hover:to-orange-400","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-pink-200","dark:focus:ring-pink-800"],[1,"relative","p-2","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 24 24",1,"inline"],["fill-rule","evenodd","d","M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z","clip-rule","evenodd"],[1,"text-2xl","font-semibold"]],template:function(n,o){n&1&&(i(0,"div",0),e(1,`
    `),f(2,ht,42,4,"div",1),e(3,`
`),t()),n&2&&(s(2),c("ngForOf",o.products))},dependencies:[S,E,P],encapsulation:2})};var ye=class{IdVeCategoriasProductos;NombreCategoria};var Ee=class a{constructor(r,n){this.httpClient=r;this.utilsService=n}urlApi=N.apiAccesoViaExpress;obtenerCategoriasProductos(){return g(this,null,function*(){let r=this.urlApi+"/api/Producto/ObtenerCategorias";try{return yield C(this.httpClient.get(r))}catch(n){return console.log(this.utilsService.obtenerErrorGenerico(n)),new ye}})}static \u0275fac=function(n){return new(n||a)(x(V),x(R))};static \u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"})};function ft(a,r){if(a&1&&(i(0,"option",40),e(1),t()),a&2){let n=r.$implicit;c("value",n.IdVeCategoriasProductos),s(),T(`
                            `,n.NombreCategoria,`
                        `)}}function xt(a,r){if(a&1&&(i(0,"div",41),e(1,`
                        `),i(2,"app-producto-carrusel",42),e(3,`
                        `),t(),e(4,`
                    `),t()),a&2){let n=r.$implicit;s(2),c("title",n.title)("price",n.price)("image",n.image)}}var Se=class a{constructor(r,n){this.productoService=r;this.deviceService=n}isModalVisible=!1;isModalFinalVisible=!1;categoriasSelect=[];ngOnInit(){this.ObtenerCategoriasProductos()}currentIndex=0;products=[{title:"PlayStation\xAE5 Console \u2013 1TB",price:499,image:"https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"},{title:"Apple Watch SE [GPS 40mm]",price:699,image:"https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"}];next(){this.currentIndex=(this.currentIndex+1)%this.products.length}prev(){this.currentIndex=(this.currentIndex-1+this.products.length)%this.products.length}ObtenerCategoriasProductos(){return g(this,null,function*(){let r=yield this.productoService.obtenerCategoriasProductos();this.categoriasSelect=r})}cantidadColumnas(){(this.deviceService.isMobile()?"M\xF3vil":"Computadora")=="M\xF3vil"}openModal(){console.log("estado modal: "+this.isModalVisible),this.isModalVisible=!0}closeModal(){console.log("se cierra el modal en al lista"),this.isModalVisible=!1}static \u0275fac=function(n){return new(n||a)(_(Ee),_(We))};static \u0275cmp=v({type:a,selectors:[["app-lista-productos"]],decls:143,vars:5,consts:[[1,"flex","items-center","mx-auto","p-4","pb-0"],[1,"md:gap-14","lg:flex","lg:items-start","xl:gap-14"],[1,"mx-auto","w-full","flex-none","lg:max-w-2xl","xl:max-w-4xl","pb-4"],[1,"md:block","lg:flex"],["id","category",1,"flex-shrink-0","z-10","inline-flex","py-2.5","px-4","text-sm","font-medium","text-gray-900","bg-gray-100","border","border-gray-300","rounded-s-lg","hover:bg-gray-200","focus:ring-4","focus:outline-none","focus:ring-gray-100","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700","dark:text-white","dark:border-gray-600"],["value","","selected",""],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 10 6",1,"w-2.5","h-2.5","ms-2.5"],[3,"value",4,"ngFor","ngForOf"],[1,"relative","w-full"],["type","search","id","search-dropdown","placeholder","Buscar productos por su nombre","required","",1,"block","p-2.5","w-full","z-20","text-sm","text-gray-900","bg-gray-50","rounded-e-lg","border-s-gray-50","border-s-2","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-s-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:border-blue-500"],[1,"w-full","flex-none","lg:max-w-2xl","xl:max-w-4xl","pb-4",2,"text-align","-webkit-right"],["id","defaultModalButton","data-modal-target","defaultModal","data-modal-toggle","defaultModal",1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-purple-600","to-blue-500","group-hover:from-purple-600","group-hover:to-blue-500","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:focus:ring-blue-800",3,"click"],[1,"relative","px-5","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"me-1","-ms-0","inline"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],[3,"closeModal","isVisible"],[1,"mx-auto","max-w-screen-xl","p-4","pt-0"],[1,"md:gap-6","lg:flex","lg:items-start","xl:gap-8"],[1,"mx-auto","w-full","flex-none","lg:max-w-2xl","xl:max-w-4xl"],[1,"text-white","bg-gray-900","rounded-lg"],[1,"relative"],[1,"overflow-hidden","rounded-xl"],[1,"flex","transition-transform","duration-500","ease-in-out"],["class","w-full flex-shrink-0 px-4","style","min-width: 100%; max-width: 100%;",4,"ngFor","ngForOf"],[1,"mt-12","left-0","transform","-translate-y-1/2","bg-gray-700","hover:bg-gray-600","p-2","rounded-full",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-[35px]","h-[35px]","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","1.9","d","M5 12h14M5 12l4-4m-4 4 4 4"],[1,"mt-12","right-0","transform","-translate-y-1/2","bg-gray-700","hover:bg-gray-600","p-2","rounded-full",3,"click"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","1.9","d","M19 12H5m14 0-4 4m4-4-4-4"],[1,"mx-auto","mt-6","max-w-4xl","flex-1","space-y-6","lg:mt-0","lg:w-full"],[1,"space-y-4","rounded-lg","border","border-gray-200","bg-white","p-4","shadow-sm","dark:border-gray-700","dark:bg-gray-800","sm:p-6"],[1,"text-xl","font-semibold","text-gray-900","dark:text-white"],[1,"space-y-4"],[1,"space-y-2"],[1,"flex","items-center","justify-between","gap-4"],[1,"text-base","font-normal","text-gray-500","dark:text-gray-400"],[1,"text-base","font-medium","text-gray-900","dark:text-white"],[1,"text-base","font-medium","text-green-600"],[1,"flex","items-center","justify-between","gap-4","border-t","border-gray-200","pt-2","dark:border-gray-700"],[1,"text-base","font-bold","text-gray-900","dark:text-white"],[3,"value"],[1,"w-full","flex-shrink-0","px-4",2,"min-width","100%","max-width","100%"],[3,"title","price","image"]],template:function(n,o){n&1&&(i(0,"div",0),e(1,`
    `),i(2,"div",1),e(3,`
        `),i(4,"div",2),e(5,`
            `),i(6,"div",3),e(7,`
                `),e(8,`
                `),i(9,"select",4),e(10,`
                        `),i(11,"option",5),e(12,"Todas las Categorias "),m(),l(13,"svg",6),t(),e(14,`
                        `),f(15,ft,2,2,"option",7),e(16,`
                `),t(),e(17,`
                `),p(),i(18,"div",8),e(19,`
                    `),l(20,"input",9),e(21,`
                `),t(),e(22,`
            `),t(),e(23,`
        `),t(),e(24,`
        `),i(25,"div",10),e(26,`      
            `),i(27,"button",11),h("click",function(){return o.openModal()}),e(28,`
                `),i(29,"span",12),e(30,`
                `),m(),i(31,"svg",13),e(32,`
                    `),l(33,"path",14),e(34,`
                `),t(),e(35,`
                Crear Producto
                `),t(),e(36,`
            `),t(),e(37,`
            
        `),t(),e(38,`
    `),t(),e(39,`
`),t(),e(40,`

`),p(),i(41,"app-modal-productos",15),h("closeModal",function(){return o.closeModal()}),t(),e(42,`

`),i(43,"section"),e(44,`
    `),i(45,"div",16),e(46,`
        `),e(47,`
        `),i(48,"div",17),e(49,`
        `),i(50,"div",18),e(51,`
            `),i(52,"div",19),e(53,`

                `),i(54,"div",20),e(55,`
                `),i(56,"div",21),e(57,`
                    `),i(58,"div",22),e(59,`
            
                    `),f(60,xt,5,3,"div",23),e(61,`
                    `),t(),e(62,`
                `),t(),e(63,`
            
                `),e(64,`
                `),i(65,"button",24),h("click",function(){return o.prev()}),e(66,`
                    `),m(),i(67,"svg",25),e(68,`
                        `),l(69,"path",26),e(70,`
                    `),t(),e(71,`
                `),t(),e(72,`
                `),p(),i(73,"button",27),h("click",function(){return o.next()}),e(74,`
                    `),m(),i(75,"svg",25),e(76,`
                        `),l(77,"path",28),e(78,`
                    `),t(),e(79,`
                `),t(),e(80,`
                `),t(),e(81,`
            `),t(),e(82,`

        `),t(),e(83,`
    
        `),p(),i(84,"div",29),e(85,`
            `),i(86,"div",30),e(87,`
            `),i(88,"p",31),e(89,"Resumen de valores"),t(),e(90,`
    
            `),i(91,"div",32),e(92,`
                `),i(93,"div",33),e(94,`
                `),i(95,"dl",34),e(96,`
                    `),i(97,"dt",35),e(98,"Precio original"),t(),e(99,`
                    `),i(100,"dd",36),e(101,"$150.000"),t(),e(102,`
                `),t(),e(103,`
    
                `),i(104,"dl",34),e(105,`
                    `),i(106,"dt",35),e(107,"Ahorros"),t(),e(108,`
                    `),i(109,"dd",37),e(110,"-$50.000"),t(),e(111,`
                `),t(),e(112,`
    
                `),i(113,"dl",34),e(114,`
                    `),i(115,"dt",35),e(116,"Iva"),t(),e(117,`
                    `),i(118,"dd",36),e(119,"$28.500"),t(),e(120,`
                `),t(),e(121,`
                `),t(),e(122,`
    
                `),i(123,"dl",38),e(124,`
                `),i(125,"dt",39),e(126,"Total"),t(),e(127,`
                `),i(128,"dd",39),e(129,"$128.500"),t(),e(130,`
                `),t(),e(131,`
            `),t(),e(132,`
    
            `),t(),e(133,`
        `),t(),e(134,`
        `),t(),e(135,`
    `),t(),e(136,`
    `),t(),e(137,`


`),e(138,`

`),e(139,`
`),e(140,`

`),e(141,`
`),e(142,`
`)),n&2&&(s(15),c("ngForOf",o.categoriasSelect),s(26),c("isVisible",o.isModalVisible),s(17),Ve("transform","translateX(-"+o.currentIndex*100+"%)"),s(2),c("ngForOf",o.products))},dependencies:[S,L,B,E,P,_e,ve],encapsulation:2})};var bt=[{path:"",component:Ge,children:[{path:"",component:se,children:[{path:"",redirectTo:"Persona",pathMatch:"full"},{path:"Persona",component:pe},{path:"Vehiculo",component:be},{path:"Productos",component:Se}]}]}],Ze=class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=te({type:a});static \u0275inj=X({imports:[Te.forChild(bt),Te]})};export{Ze as PresupuestoRoutingModule};

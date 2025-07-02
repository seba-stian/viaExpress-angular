import{$ as h,A as Dn,Aa as ve,Ab as st,B as Et,Bb as at,C as p,Cb as Pt,D as ui,Da as un,Db as xe,Ea as U,Eb as Dt,F as an,Fa as et,Fb as Gn,G as D,Ga as Hn,Gb as Kn,H as M,Ha as dn,I as _e,Ia as vt,J as Ce,Ja as tt,Jb as mn,K as ln,Ka as pe,Kb as Qn,L as J,La as be,Lb as bi,M as _,Ma as ne,Mb as lt,N as F,Na as Tt,Nb as ct,O as d,Oa as it,P as Xe,Q as cn,Qa as fi,R as _t,Ra as q,S as X,Sa as Ve,T as a,Ta as zn,U as l,V as y,W as te,X as ie,Y as le,Ya as nt,Z as H,_ as w,_a as jn,a as li,aa as Ne,b as Ae,ba as Be,bb as ot,c as Ln,ca as Y,cb as Pe,d as he,da as re,e as Vn,ea as I,eb as ce,fa as O,fb as He,g as sn,ga as Fe,gb as gi,h as P,ha as r,hb as _i,i as fe,ia as ye,ib as It,j as ci,ja as ee,jb as pn,k as ge,l as B,la as Mn,m as Ke,ma as di,n as x,na as pi,nb as Un,o as C,oa as mi,ob as Ot,p as E,pa as ue,pb as Q,q as A,qa as hi,qb as Wn,r as G,ra as z,rb as rt,s as Pn,sa as Le,sb as kt,t as L,ta as yt,u as qe,ua as Rn,ub as yi,v as wt,va as $e,vb as At,w as Te,wa as Nn,wb as vi,x as Je,xa as Bn,xb as Ft,ya as Wt,yb as Lt,za as $n,zb as Vt}from"./chunk-QTEI6VHE.js";import{G as qn,a as R,b as rn,d as W}from"./chunk-5GM7MXKE.js";var ut=class t{presupuestoDataSubject=new Ln({});presupuestoData$=this.presupuestoDataSubject.asObservable();ejecutarFormRecepcionistaSubject=new Ae;ejecutarFormRecepcionista$=this.ejecutarFormRecepcionistaSubject.asObservable();formRecepcionistaValidoSubject=new Ae;formRecepcionistaValido$=this.formRecepcionistaValidoSubject.asObservable();ejecutarFormClienteSubject=new Ae;ejecutarFormCliente$=this.ejecutarFormClienteSubject.asObservable();formClienteValidoSubject=new Ae;formClienteValido$=this.formClienteValidoSubject.asObservable();ejecutarFormVehiculoSubject=new Ae;ejecutarFormVehiculo$=this.ejecutarFormVehiculoSubject.asObservable();formVehiculoValidoSubject=new Ae;formVehiculoValido$=this.formVehiculoValidoSubject.asObservable();constructor(){let n=localStorage.getItem("presupuestoData");n&&this.presupuestoDataSubject.next(JSON.parse(n)),this.presupuestoData$.subscribe(e=>{localStorage.setItem("presupuestoData",JSON.stringify(e))})}solicitarEjecutarFormCliente(){this.ejecutarFormClienteSubject.next()}informarResultadoClienteFormulario(n){this.formClienteValidoSubject.next(n)}solicitarEjecutarFormRecepcionista(){this.ejecutarFormRecepcionistaSubject.next()}informarResultadoRecepcionistaFormulario(n){this.formRecepcionistaValidoSubject.next(n)}solicitarEjecutarFormVehiculo(){this.ejecutarFormVehiculoSubject.next()}informarResultadoVehiculoFormulario(n){this.formVehiculoValidoSubject.next(n)}getPresupuesto(){return this.presupuestoDataSubject.getValue()}updatePresupuesto(n){let e=this.getPresupuesto(),i=R(R({},e),n);this.presupuestoDataSubject.next(i)}resetPresupuesto(){localStorage.removeItem("presupuestoData"),this.presupuestoDataSubject.next({})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})};var Mt=t=>({stepperActive:t}),Zn=t=>({hidden:t});function sr(t,n){if(t&1){let e=H();a(0,"button",43),w("click",function(){x(e);let o=h();return C(o.volver())}),r(1,`
                            `),a(2,"span",23),r(3,`
                            `),E(),a(4,"svg",24),r(5,`
                                `),y(6,"path",44),r(7,`
                            `),l(),r(8,`
                                Volver
                            `),l(),r(9,`
                        `),l()}}var xi=class t{constructor(n,e){this.router=n;this.formService=e}esperandoValidacionCliente=!1;esperandoValidacionRecepcionista=!1;esperandoValidacionVehiculo=!1;mostrarBoton=!0;mostrarBotonSiguiente=!0;mostrarBotonFinal=!1;selectStepperPersona=!1;selectStepperVehiculo=!1;selectStepperProductos=!1;selectStepperFinal=!1;ngOnInit(){qn(),Vn([this.formService.formClienteValido$,this.formService.formRecepcionistaValido$]).subscribe(([n,e])=>{if(console.log("Validaci\xF3n del formulario cliente:",n),console.log("Validaci\xF3n del formulario recepcionista:",e),this.esperandoValidacionCliente&&this.esperandoValidacionRecepcionista){if(this.esperandoValidacionCliente=!1,this.esperandoValidacionRecepcionista=!1,!n||!e){console.warn("Formulario padre cliente y recepcionista inv\xE1lido");return}this.mostrarBoton=!0,this.resetStepper(),this.selectStepperVehiculo=!0,this.router.navigate(["Presupuesto/Vehiculo"])}}),this.formService.formVehiculoValido$.subscribe(n=>{if(console.log("Validando formulario Vehiculo"),this.esperandoValidacionVehiculo){if(this.esperandoValidacionVehiculo=!1,!n){console.warn("Formulario padre cliente y recepcionista inv\xE1lido");return}console.log("formulario Vehiculo validado"),this.mostrarBoton=!0,this.resetStepper(),this.selectStepperPersona=!0,this.router.navigate(["Presupuesto/Productos"])}}),this.router.url=="/Presupuesto/Productos"&&(this.mostrarBoton=!0,this.mostrarBotonSiguiente=!1,this.mostrarBotonFinal=!0,this.resetStepper(),this.selectStepperProductos=!0,console.log("stepper Productos"))}resetStepper(){this.selectStepperPersona=!1,this.selectStepperVehiculo=!1,this.selectStepperProductos=!1,this.selectStepperFinal=!1}volver(){this.router.url=="/Presupuesto/Vehiculo"&&(this.mostrarBoton=!1,this.resetStepper(),this.selectStepperPersona=!0,this.router.navigate(["Presupuesto/Persona"])),this.router.url=="/Presupuesto/Productos"&&(this.mostrarBotonSiguiente=!0,this.mostrarBotonFinal=!1,this.mostrarBoton=!0,this.resetStepper(),this.selectStepperVehiculo=!0,this.router.navigate(["Presupuesto/Vehiculo"]))}cancelar(){this.router.navigate(["Home"])}continuar(){if(this.router.url=="/Presupuesto/Persona"){this.esperandoValidacionCliente=!0,this.esperandoValidacionRecepcionista=!0,this.formService.solicitarEjecutarFormCliente(),this.formService.solicitarEjecutarFormRecepcionista();return}if(this.router.url=="/Presupuesto/Vehiculo"){this.esperandoValidacionVehiculo=!0,this.formService.solicitarEjecutarFormVehiculo();return}}static \u0275fac=function(e){return new(e||t)(D(Kn),D(ut))};static \u0275cmp=M({type:t,selectors:[["app-crud-presupuestos-view"]],decls:189,vars:25,consts:[[1,"relative","overflow-x-auto","shadow-md","sm:rounded-lg"],[2,"border-left","ridge","margin-top","1%","margin-bottom","3%"],["_ngcontent-ng-c57272926","",1,"mb-4","text-xl","font-semibold","text-gray-900","dark:text-white","sm:text-2xl","md:mb-6",2,"font-size","xx-large","margin-left","10px"],[1,"bg-white","antialiased","dark:bg-gray-900"],[1,"mx-auto","max-w-screen-xl","px-4","2xl:px-0"],["action","#",1,"w-full","space-y-6","lg:space-y-8"],[1,"space-y-6","sm:space-y-8"],[1,"flex","flex-col","gap-4","rounded-lg","border","border-gray-200","bg-gray-50","p-4","dark:border-gray-700","dark:bg-gray-800","sm:justify-center","md:flex-row","md:items-center","lg:gap-6"],[1,"flex","items-center","gap-2","md:flex-1","md:flex-col","md:gap-1.5","lg:flex-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"h-5","w-5","text-gray-500","dark:text-gray-400",3,"ngClass"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],[1,"text-sm","font-medium","leading-tight","text-gray-500","dark:text-gray-400",3,"ngClass"],[1,"hidden","h-px","w-8","shrink-0","bg-gray-200","dark:bg-gray-700","md:block","xl:w-16"],[1,"space-y-6"],["role","alert",1,"mb-4","rounded-lg","bg-primary-50","p-4","text-sm","text-primary-800","dark:bg-gray-800","dark:text-primary-400","sm:text-base"],[1,"mb-3","font-medium"],[1,"mb-3","list-outside","list-decimal","space-y-2","ps-4"],[1,"text-xl","font-semibold","text-gray-900","dark:text-white"],[1,"divide-y","divide-gray-200","overflow-hidden","rounded-lg","border","border-gray-200","bg-white","shadow-sm","dark:divide-gray-700","dark:border-gray-700","dark:bg-gray-800",2,"text-align","-webkit-center"],[1,"gap-4","flex","sm:items-center","sm:justify-between"],[1,"gap-4","sm:items-center"],["class","relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",3,"click",4,"ngIf"],[1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-pink-500","to-orange-400","group-hover:from-pink-500","group-hover:to-orange-400","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-pink-200","dark:focus:ring-pink-800",3,"click"],[1,"relative","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0",2,"padding-right","15px","padding-left","10px"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"me-1","-ms-0","inline"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-purple-600","to-blue-500","group-hover:from-purple-600","group-hover:to-blue-500","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:focus:ring-blue-800",3,"click","ngClass"],[1,"relative","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0",2,"padding-left","15px"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m9 5 7 7-7 7"],["data-modal-target","popup-modal","data-modal-toggle","popup-modal",1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-green-400","to-blue-600","group-hover:from-green-400","group-hover:to-blue-600","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-green-200","dark:focus:ring-green-800",3,"ngClass"],["id","popup-modal",1,"modal","hidden"],[1,"relative","w-full","max-w-md","max-h-full"],[1,"relative","bg-white","rounded-lg","shadow","dark:bg-gray-700"],["type","button","data-modal-hide","popup-modal",1,"absolute","top-3","end-2.5","text-gray-400","bg-transparent","hover:bg-gray-200","hover:text-gray-900","rounded-lg","text-sm","w-8","h-8","ms-auto","inline-flex","justify-center","items-center","dark:hover:bg-gray-600","dark:hover:text-white"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 14 14",1,"w-3","h-3"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"],[1,"sr-only"],[1,"p-4","md:p-5","text-center"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"mx-auto","mb-4","text-gray-400","w-12","h-12","dark:text-gray-200"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 3v4a1 1 0 0 1-1 1H5m4 6 2 2 4-4m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"],[1,"text-base","leading-relaxed","text-gray-500","dark:text-gray-400"],["data-modal-hide","popup-modal",1,"relative","m-5","inline-flex","items-center","justify-center","p-0.5","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-green-400","to-blue-600","group-hover:from-green-400","group-hover:to-blue-600","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-green-200","dark:focus:ring-green-800"],["data-modal-hide","popup-modal",1,"relative","m-5","inline-flex","items-center","justify-center","p-0.5","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-pink-500","to-orange-400","group-hover:from-pink-500","group-hover:to-orange-400","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-pink-200","dark:focus:ring-pink-800"],[1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-purple-600","to-blue-500","group-hover:from-purple-600","group-hover:to-blue-500","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:focus:ring-blue-800",3,"click"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m15 19-7-7 7-7"]],template:function(e,i){e&1&&(a(0,"div",0),r(1,`
        
        `),a(2,"div",1),r(3,`
            `),a(4,"h2",2),r(5,"Creaci\xF3n de Presupuesto"),l(),r(6,`
        `),l(),r(7,`

`),a(8,"section",3),r(9,`
    `),a(10,"div",4),r(11,`
        `),a(12,"div",5),r(13,`
            `),a(14,"div",6),r(15,`
                `),a(16,"ol",7),r(17,`
                    `),a(18,"li",8),r(19,`
                    `),E(),a(20,"svg",9),r(21,`
                        `),y(22,"path",10),r(23,`
                    `),l(),r(24,`
                    `),A(),a(25,"p",11),r(26,"Datos cliente"),l(),r(27,`
                    `),l(),r(28,`

                    `),y(29,"div",12),r(30,`

                    `),a(31,"li",8),r(32,`
                    `),E(),a(33,"svg",9),r(34,`
                        `),y(35,"path",10),r(36,`
                    `),l(),r(37,`
                    `),A(),a(38,"p",11),r(39,"Datos del veh\xEDculo"),l(),r(40,`
                    `),l(),r(41,`

                    `),y(42,"div",12),r(43,`

                    `),a(44,"li",8),r(45,`
                    `),E(),a(46,"svg",9),r(47,`
                        `),y(48,"path",10),r(49,`
                    `),l(),r(50,`
                    `),A(),a(51,"p",11),r(52,"Productos, detalle y confirmaci\xF3n"),l(),r(53,`
                    `),l(),r(54,`
                `),l(),r(55,`
            `),l(),r(56,`

            `),a(57,"div",13),r(58,`
                `),a(59,"div",14),r(60,`
                    `),a(61,"p",15),r(62,"Lo que necesita saber para qu\xE9 el proceso de creaci\xF3n de presupuesto se realice sin problemas es:"),l(),r(63,`
                    `),a(64,"ol",16),r(65,`
                        `),a(66,"li"),r(67,"Debe ingresar los datos del encargado del presupuesto y del cliente."),l(),r(68,`
                        `),a(69,"li"),r(70,"Debe ingresar los datos del veh\xEDculo para el que se creara el presupuesto."),l(),r(71,`
                        `),a(72,"li"),r(73,"Debe seleccionar los productos necesarios a utilizar para la reparaci\xF3n del veh\xEDculo."),l(),r(74,`
                    `),l(),r(75,`
                `),l(),r(76,`
                `),a(77,"h3",17),r(78,"1. Ingrese los datos solicitados:"),l(),r(79,`

                `),a(80,"div",18),r(81,`

                    `),y(82,"router-outlet"),r(83,`

                `),l(),r(84,`
                `),a(85,"div",19),r(86,`
                    `),a(87,"div",20),r(88,`
                        `),_(89,sr,10,0,"button",21),r(90,`
                        `),a(91,"button",22),w("click",function(){return i.cancelar()}),r(92,`
                            `),a(93,"span",23),r(94,`
                            `),E(),a(95,"svg",24),r(96,`
                                `),y(97,"path",25),r(98,`
                            `),l(),r(99,`
                                Cancelar
                            `),l(),r(100,`
                        `),l(),r(101,`                        
                    `),l(),r(102,`
                    `),A(),a(103,"button",26),w("click",function(){return i.continuar()}),r(104,`
                        `),a(105,"span",27),r(106,`
                            Siguiente
                        `),E(),a(107,"svg",24),r(108,`
                            `),y(109,"path",28),r(110,`
                        `),l(),r(111,`
                        `),l(),r(112,`
                    `),l(),r(113,`
                    `),A(),a(114,"button",29),r(115,`
                        `),a(116,"span",27),r(117,`
                            Finalizar
                        `),E(),a(118,"svg",24),r(119,`
                            `),y(120,"path",28),r(121,`
                        `),l(),r(122,`
                        `),l(),r(123,`
                    `),l(),r(124,`
                `),l(),r(125,`
            `),l(),r(126,`
        `),l(),r(127,`
    `),l(),r(128,`
`),l(),r(129,`
`),l(),r(130,`

`),A(),a(131,"div",30),r(132,`
    `),a(133,"div",31),r(134,`
        `),a(135,"div",32),r(136,`
            `),a(137,"button",33),r(138,`
                `),E(),a(139,"svg",34),r(140,`
                    `),y(141,"path",35),r(142,`
                `),l(),r(143,`
                `),A(),a(144,"span",36),r(145,"Close modal"),l(),r(146,`
            `),l(),r(147,`
            `),a(148,"div",37),r(149,`
                `),E(),a(150,"svg",38),r(151,`
                    `),y(152,"path",39),r(153,`
                `),l(),r(154,`
                `),A(),a(155,"p",40),r(156,`
                El presupuesto se guardar\xE1 y podr\xE1s ver las opciones de ver y editar en el men\xFA principal.
                `),l(),r(157,`
                `),a(158,"p",40),r(159,`
                Antes de continuar, aseg\xFArate de que los datos ingresados sean correctos.
                `),l(),r(160,`
                `),a(161,"h3",17),r(162,"\xBFEst\xE1 seguro que desa continuar?"),l(),r(163,`
                `),a(164,"button",41),r(165,`
                    `),a(166,"span",27),r(167,`
                        S\xED, estoy seguro
                    `),E(),a(168,"svg",24),r(169,`
                        `),y(170,"path",28),r(171,`
                    `),l(),r(172,`
                    `),l(),r(173,`
                `),l(),r(174,`
                `),A(),a(175,"button",42),r(176,`
                    `),a(177,"span",23),r(178,`
                    `),E(),a(179,"svg",24),r(180,`
                        `),y(181,"path",25),r(182,`
                    `),l(),r(183,`
                        No, Cancelar
                    `),l(),r(184,`
                `),l(),r(185,`
            `),l(),r(186,`
        `),l(),r(187,`
    `),l(),r(188,`
`),l()),e&2&&(p(20),d("ngClass",z(9,Mt,i.selectStepperPersona)),p(5),d("ngClass",z(11,Mt,i.selectStepperPersona)),p(8),d("ngClass",z(13,Mt,i.selectStepperVehiculo)),p(5),d("ngClass",z(15,Mt,i.selectStepperVehiculo)),p(8),d("ngClass",z(17,Mt,i.selectStepperProductos)),p(5),d("ngClass",z(19,Mt,i.selectStepperProductos)),p(38),d("ngIf",i.mostrarBoton),p(14),d("ngClass",z(21,Zn,!i.mostrarBotonSiguiente)),p(11),d("ngClass",z(23,Zn,!i.mostrarBotonFinal)))},dependencies:[Gn,xe,q,pe,ne],styles:[".stepperActive[_ngcontent-%COMP%]{color:#346bc6}.stepperInActive[_ngcontent-%COMP%]{color:#7d8491}.modal[_ngcontent-%COMP%]{position:fixed;z-index:1050;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#00000080}.modal.is-active[_ngcontent-%COMP%]{display:block}.modal-content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 6px #0000001a}.modal-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.modal-close[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;border:none;background:transparent;font-size:1.5em;cursor:pointer}"]})};var ar=/[&<>"']/g,Kc=RegExp(ar.source);function lr(){return new fn}var fn=class{constructor(){this._selected=[]}get value(){return this._selected}select(n,e,i){if(n.selected=!0,(!n.children||!e&&i)&&this._selected.push(n),e)if(n.parent){let o=n.parent.children.length,s=n.parent.children.filter(c=>c.selected).length;n.parent.selected=o===s}else n.children&&(this._setChildrenSelectedState(n.children,!0),this._removeChildren(n),i&&this._activeChildren(n)?this._selected=[...this._selected.filter(o=>o.parent!==n),n]:this._selected=[...this._selected,...n.children.filter(o=>!o.disabled)])}unselect(n,e){if(this._selected=this._selected.filter(i=>i!==n),n.selected=!1,e)if(n.parent&&n.parent.selected){let i=n.parent.children;this._removeParent(n.parent),this._removeChildren(n.parent),this._selected.push(...i.filter(o=>o!==n&&!o.disabled)),n.parent.selected=!1}else n.children&&(this._setChildrenSelectedState(n.children,!1),this._removeChildren(n))}clear(n){this._selected=n?this._selected.filter(e=>e.disabled):[]}_setChildrenSelectedState(n,e){for(let i of n)i.disabled||(i.selected=e)}_removeChildren(n){this._selected=[...this._selected.filter(e=>e.parent!==n),...n.children.filter(e=>e.parent===n&&e.disabled&&e.selected)]}_removeParent(n){this._selected=this._selected.filter(e=>e!==n)}_activeChildren(n){return n.children.every(e=>!e.disabled||e.selected)}};var cr=new ci("ng-select-selection-model");var Yn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=_e({type:t})}static{this.\u0275inj=fe({providers:[{provide:cr,useValue:lr}]})}}return t})();var Ci=class t{constructor(n){this.control=n}onInput(n){let e=n.replace(/[^\dkK]/gi,"").toUpperCase(),i=this.formatRut(e);this.control.control?.setValue(i,{emitEvent:!1})}formatRut(n){if(!n||n.length<2)return n;let e=n.slice(0,-1).replace(/\D/g,""),i=n.slice(-1);return`${e.split("").reverse().join("").replace(/(\d{3})(?=\d)/g,"$1.").split("").reverse().join("")}-${i}`}static \u0275fac=function(e){return new(e||t)(D(Wn))};static \u0275dir=Ce({type:t,selectors:[["","appRutFormat",""]],hostBindings:function(e,i){e&1&&w("input",function(s){return i.onInput(s.target.value)})}})};function Jn(t){let n=t.value;if(!n)return null;let e=n.replace(/\./g,"").replace("-","").toUpperCase();if(!/^\d{7,8}[0-9K]$/.test(e))return{rutFormatoInvalido:!0};let i=e.slice(0,-1),o=e.slice(-1),s=ur(i);return o!==s?{rutInvalido:!0}:null}function ur(t){let n=0,e=2;for(let s=t.length-1;s>=0;s--)n+=parseInt(t.charAt(s))*e,e=e===7?2:e+1;let o=11-n%11;return o===11?"0":o===10?"K":o.toString()}var Si=class{IdVeComuna;IdVeRegion;NombreComuna};var wi=class{IdVeRegion;NombreRegion};var Ei=class t{constructor(n,e){this.httpClient=n;this.utilsService=e}urlApi=lt.apiAccesoViaExpress;obtenerComunas(){return W(this,null,function*(){let n=this.urlApi+"/api/Nacionalidad/ObtenerComuna";try{return yield he(this.httpClient.get(n))}catch(e){return console.log(this.utilsService.obtenerErrorGenerico(e)),new Si}})}obtenerRegion(n){return W(this,null,function*(){let e=this.urlApi+`/api/Nacionalidad/ObtenerRegionPorId?idRegion=${n}`;try{return yield he(this.httpClient.get(e))}catch(i){return console.log(this.utilsService.obtenerErrorGenerico(i)),new wi}})}static \u0275fac=function(e){return new(e||t)(ge(nt),ge(ct))};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})};var Kt=class{Rut;IdVeUsuario;Apellido;Celular;Direccion;Email;IdVeComuna;IdVeRegion;IdVeTipoUsuario;Nombre};var Ti=class t{constructor(n,e){this.httpClient=n;this.utilsService=e}urlApi=lt.apiAccesoViaExpress;obtenerUsuarios(){return W(this,null,function*(){let n=this.urlApi+"/api/Usuario/ObtenerUsuarios";try{return yield he(this.httpClient.get(n))}catch(e){return console.log(this.utilsService.obtenerErrorGenerico(e)),new Kt}})}obtenerUsuarioRut(n){return W(this,null,function*(){let e=this.urlApi+`/api/Usuario/ObtenerUsuarioRut?rutCliente=${n}`;try{return yield he(this.httpClient.get(e))}catch(i){return console.log(this.utilsService.obtenerErrorGenerico(i)),new Kt}})}static \u0275fac=function(e){return new(e||t)(ge(nt),ge(ct))};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})};function mr(t,n){t&1&&(a(0,"span"),r(1,"El nombre del proyecto es un campo obligatorio.."),l())}function hr(t,n){t&1&&(a(0,"span"),r(1,"El nombre del proyecto debe contente mas de 5 caracteres."),l())}function fr(t,n){if(t&1&&(a(0,"div",53),r(1,`
                    `),_(2,mr,2,0,"span",54),r(3,`
                    `),_(4,hr,2,0,"span",54),r(5,`
                `),l()),t&2){let e,i,o=h();p(2),d("ngIf",(e=o.formNombreProyect.get("nombreProyecto"))==null||e.errors==null?null:e.errors.required),p(2),d("ngIf",(i=o.formNombreProyect.get("nombreProyecto"))==null||i.errors==null?null:i.errors.minlength)}}function gr(t,n){if(t&1&&(a(0,"option",55),r(1),l()),t&2){let e=n.$implicit;d("value",e.IdVeUsuario),p(),Mn(`
                        `,e.Rut," - ",e.Nombre," ",e.Apellido,`
                    `)}}function _r(t,n){t&1&&(a(0,"div",53),r(1,`
                    Este campo es obligatorio.
                `),l())}function yr(t,n){t&1&&(a(0,"span"),r(1,"El RUT es obligatorio."),l())}function vr(t,n){t&1&&(a(0,"span"),r(1,"El RUT excede el largo permitido."),l())}function br(t,n){t&1&&(a(0,"span"),r(1,"El formato del RUT no es v\xE1lido."),l())}function xr(t,n){t&1&&(a(0,"span"),r(1,"El RUT ingresado no es v\xE1lido."),l())}function Cr(t,n){if(t&1&&(a(0,"div",56),r(1,`
                        `),_(2,yr,2,0,"span",54),r(3,`
                        `),_(4,vr,2,0,"span",54),r(5,`
                        `),_(6,br,2,0,"span",54),r(7,`
                        `),_(8,xr,2,0,"span",54),r(9,`
                    `),l()),t&2){let e,i,o,s,c=h();p(2),d("ngIf",(e=c.formUsuarioCliente.get("Rut"))==null||e.errors==null?null:e.errors.required),p(2),d("ngIf",(i=c.formUsuarioCliente.get("Rut"))==null||i.errors==null?null:i.errors.maxlength),p(2),d("ngIf",(o=c.formUsuarioCliente.get("Rut"))==null||o.errors==null?null:o.errors.rutFormatoInvalido),p(2),d("ngIf",(s=c.formUsuarioCliente.get("Rut"))==null||s.errors==null?null:s.errors.rutInvalido)}}function Sr(t,n){t&1&&(a(0,"div",56),r(1,`
                        El nombre es obligatorio.
                    `),l())}function wr(t,n){t&1&&(a(0,"div",56),r(1,`
                        El apellido es obligatorio.
                    `),l())}function Er(t,n){if(t&1&&(a(0,"option",55),r(1),l()),t&2){let e=n.$implicit;d("value",e.IdVeComuna),p(),ee(`
                            `,e.NombreComuna,`
                        `)}}function Tr(t,n){t&1&&(a(0,"div",53),r(1,`
                    La comuna es un campo obligatorio.
                `),l())}function Ir(t,n){if(t&1&&(a(0,"option",55),r(1),l()),t&2){let e=h();d("value",e.regionSelect.IdVeRegion),p(),ee(`
                            `,e.regionSelect.NombreRegion,`
                        `)}}function Or(t,n){t&1&&(a(0,"div",53),r(1,`
                    La region es un campo obligatorio.
                `),l())}function kr(t,n){t&1&&(a(0,"span"),r(1,"Formato de email inv\xE1lido."),l())}function Ar(t,n){t&1&&(a(0,"span"),r(1,"El email es obligatorio."),l())}function Fr(t,n){if(t&1&&(a(0,"div",56),r(1,`
                    `),_(2,kr,2,0,"span",54),r(3,`
                    `),_(4,Ar,2,0,"span",54),r(5,`                    
                `),l()),t&2){let e,i,o=h();p(2),d("ngIf",(e=o.formUsuarioCliente.get("Email"))==null||e.errors==null?null:e.errors.email),p(2),d("ngIf",(i=o.formUsuarioCliente.get("Email"))==null||i.errors==null?null:i.errors.required)}}var Ii=class t{constructor(n,e,i,o){this.nacionalidadService=n;this.usuarioService=e;this.fb=i;this.formService=o}comunaSelect=[];usuarioRecepcionistaSelect=[];formUsuarioCliente;formRecepcionista;formNombreProyect;regionSelect;subs=new li;nombreProyect="";usuarioRecepcionista={Rut:null,Apellido:"",Email:"",Nombre:"",IdVeUsuario:0,Celular:0,IdVeComuna:0,IdVeRegion:0,IdVeTipoUsuario:0};ngOnInit(){this.ObtenerComunas(),this.ObtenerUsuarios(),this.formService.ejecutarFormCliente$.subscribe(()=>this.ejecutarFormCliente()),this.formService.ejecutarFormRecepcionista$.subscribe(()=>this.ejecutarFormRecepcionista()),this.formRecepcionista=this.fb.group({IdVeUsuario:[{value:"",disabled:!0},[Q.required]],Nombre:["",{disabled:!0}],Apellido:["",{disabled:!0}],Email:["",{disabled:!0}]}),this.formUsuarioCliente=this.fb.group({Rut:["",[Q.required,Q.maxLength(12),Jn]],Nombre:["",Q.required],Apellido:["",Q.required],Email:["",[Q.required,Q.email]],Direccion:[""],IdVeComuna:["",[Q.required,Q.min(0)]],IdVeRegion:[{value:"",disabled:!0},[Q.required]]}),this.formNombreProyect=this.fb.group({nombreProyecto:["",[Q.required,Q.minLength(5)]]}),this.formRecepcionista.get("IdVeUsuario")?.valueChanges.subscribe(e=>{let i=this.usuarioRecepcionistaSelect.find(o=>o.IdVeUsuario==e);i?this.formRecepcionista.patchValue({Nombre:i.Nombre,Apellido:i.Apellido,Email:i.Email}):this.formRecepcionista.patchValue({Nombre:"",Apellido:"",Email:""})}),this.subs.add(this.formService.ejecutarFormCliente$.subscribe(()=>{let e=this.formUsuarioCliente.valid;e||this.formUsuarioCliente.markAllAsTouched(),this.formService.informarResultadoClienteFormulario(e)})),this.subs.add(this.formService.ejecutarFormRecepcionista$.subscribe(()=>{let e=this.formRecepcionista.valid;console.log("Validando formulario recepcionista",this.formRecepcionista.value),e||this.formRecepcionista.markAllAsTouched(),this.formService.informarResultadoRecepcionistaFormulario(e)})),this.formNombreProyect.get("nombreProyecto")?.valueChanges.subscribe(e=>{e&&e.length>5?this.formRecepcionista.get("IdVeUsuario")?.enable({emitEvent:!1}):(this.formRecepcionista.patchValue({IdVeUsuario:"",Nombre:"",Apellido:"",Email:""}),this.formRecepcionista.get("IdVeUsuario")?.disable({emitEvent:!1}))});let n=this.formService.getPresupuesto();if(console.log("Datos del presupuesto al cargar persona el componente:",n),n.usuarioCliente){let e=n.usuarioCliente,i=n.usuarioRecepcionista,o=n.nombrePresupuesto;i&&(this.formRecepcionista.get("IdVeUsuario")?.enable({emitEvent:!1}),this.formRecepcionista.patchValue({IdVeUsuario:i?.IdVeUsuario||"",Nombre:i?.Nombre,Apellido:i?.Apellido,Email:i?.Email})),this.formUsuarioCliente.patchValue({Rut:e.Rut||"",Nombre:e.Nombre||"",Apellido:e.Apellido||"",Email:e.Email||"",Direccion:e.Direccion||"",IdVeComuna:e.IdVeComuna||"",IdVeRegion:e.IdVeRegion||"",idveusuario:e.IdVeUsuario||""}),console.log("Formulario de veh\xEDculo cargado con datos:",this.formUsuarioCliente.value)}else console.warn("No hay datos de usaurio en el formulario de presupuesto")}ejecutarFormCliente(){this.formUsuarioCliente.valid&&this.formRecepcionista.valid?(console.log("Cliente v\xE1lido:",this.formUsuarioCliente.value),this.formService.updatePresupuesto({usuarioCliente:this.formUsuarioCliente.value,nombrePresupuesto:this.nombreProyect})):(this.formUsuarioCliente.markAllAsTouched(),this.formNombreProyect.markAllAsTouched(),console.warn("Formulario uno cliente inv\xE1lido"))}ejecutarFormRecepcionista(){this.formUsuarioCliente.valid&&this.formRecepcionista.valid?(console.log("Recepcionista v\xE1lido:",this.formRecepcionista.value),this.formService.updatePresupuesto({usuarioRecepcionista:this.formRecepcionista.value})):(this.formRecepcionista.markAllAsTouched(),console.warn("Formulario recepcionista inv\xE1lido"))}onComunaChange(n){return W(this,null,function*(){let e=Number(n.target.value),i=this.comunaSelect.find(o=>o.IdVeComuna===e);i?(this.regionSelect=yield this.nacionalidadService.obtenerRegion(i.IdVeRegion),this.formUsuarioCliente.get("IdVeRegion")?.setValue(this.regionSelect?.IdVeRegion)):(this.regionSelect=void 0,this.formUsuarioCliente.get("region")?.setValue(""))})}ObtenerComunas(){return W(this,null,function*(){let n=yield this.nacionalidadService.obtenerComunas();this.comunaSelect=n})}ObtenerUsuarios(){return W(this,null,function*(){let n=yield this.usuarioService.obtenerUsuarios();this.usuarioRecepcionistaSelect=n})}ngOnDestroy(){this.subs.unsubscribe()}static \u0275fac=function(e){return new(e||t)(D(Ei),D(Ti),D(Pt),D(ut))};static \u0275cmp=M({type:t,selectors:[["app-datos-personas"]],decls:303,vars:14,consts:[[1,"relative","z-0","w-full","group"],[1,"mt-5","text-xl","font-semibold","text-gray-900","dark:text-white"],[1,"relative"],[3,"formGroup"],[1,"flex","pl-80","pr-80","pt-5"],[1,"inline-flex","items-center","px-3","text-sm","text-gray-900","bg-gray-200","border","border-e-0","border-gray-300","rounded-s-md","dark:bg-gray-600","dark:text-gray-400","dark:border-gray-600"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-[27px]","h-[27px]","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linejoin","round","stroke-width","2","d","M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z"],["type","text","name","descripcion","id","descripcion","formControlName","nombreProyecto","placeholder","Cambio completo de tren delantero para Toyota",1,"rounded-none","rounded-e-lg","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["class","text-red-500 text-sm mt-1",4,"ngIf"],[1,"grid","md:grid-cols-2","md:gap-6"],[1,"relative","z-0","w-full"],[1,"max-w-md",2,"margin","3%",3,"formGroup"],[1,"relative","z-0","w-full","mb-5"],[1,"flex"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],["formControlName","IdVeUsuario","name","usuario","id","usuario",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-e-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"w-full","mb-5","group"],[1,"inline-flex","items-center","px-3","text-sm","text-gray-900","bg-gray-200","border","border-e-0","border-gray-300","rounded-s-md","dark:bg-gray-600","dark:text-white","dark:border-gray-600"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["d","M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"],["formControlName","Nombre","type","text","placeholder","Nombre","id","nombre","name","nombre",1,"rounded-none","rounded-e-lg","bg-gray-100","border","border-gray-300","text-gray-900","text-sm","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5","cursor-not-allowed","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","text","id","website-admin","placeholder","Apellido","nombre","Apellido","formControlName","Apellido",1,"rounded-none","rounded-e-lg","cursor-not-allowed","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"relative","w-full","mb-5","group"],[1,"absolute","inset-y-0","start-0","flex","items-center","ps-3.5","pointer-events-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 16",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["d","m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"],["d","M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"],["type","text","id","email-address-icon","nombre","email-address-icon","placeholder","Correo (name@flowbite.com)","formControlName","Email",1,"bg-gray-50","border","cursor-not-allowed","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["disabled","",1,"cursor-not-allowed","relative","inline-flex","items-center","justify-center","p-0.5","mb-2","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-green-400","to-blue-600","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-green-200","dark:focus:ring-green-800"],[1,"relative","px-5","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md"],[1,"relative","z-0","w-full","mb-5","group"],["formControlName","Rut","appRutFormat","","type","text","id","RutCli","placeholder","Rut",1,"rounded-none","rounded-e-lg","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["class","text-red-500 text-sm",4,"ngIf"],["type","text","formControlName","Nombre","id","website-admin","placeholder","Nombre",1,"rounded-none","rounded-e-lg","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","text","formControlName","Apellido","id","website-admin","placeholder","Apellido",1,"rounded-none","rounded-e-lg","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-5","h-5","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-width","2","d","M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],["formControlName","IdVeComuna","id","comuna",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"change"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"],["formControlName","IdVeRegion","id","region",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[3,"value",4,"ngIf"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"],["formControlName","Direccion","type","text","id","address-icon","placeholder","Maria Pinto 46",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","text","formControlName","Email","id","email-address-icon","placeholder","name@flowbite.com",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"],["type","text","id","email-address-icon","placeholder","Nombre Empresa",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 14h2m3 0h4m2 2h2m0 0h2m-2 0v2m0-2v-2m-5 4H4c-.55228 0-1-.4477-1-1V7c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 10h18"],["type","text","id","email-address-icon","placeholder","Id Empresa",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"text-red-500","text-sm","mt-1"],[4,"ngIf"],[3,"value"],[1,"text-red-500","text-sm"]],template:function(e,i){if(e&1&&(a(0,"div",0),r(1,`
`),a(2,"h3",1),r(3,"Nombre del proyecto:"),l(),r(4,`
        `),a(5,"div",2),r(6,`
            `),a(7,"form",3),r(8,`
            `),a(9,"div",4),r(10,`
                `),a(11,"span",5),r(12,`
                `),E(),a(13,"svg",6),r(14,`
                    `),y(15,"path",7),r(16,`
                `),l(),r(17,`
                `),l(),r(18,`
                `),A(),y(19,"input",8),r(20,`
            `),l(),r(21,`
                `),_(22,fr,6,2,"div",9),r(23,`
            `),l(),r(24,`
        `),l(),r(25,`
    `),l(),r(26,` 
`),a(27,"div",10),r(28,`
    `),a(29,"div",11),r(30,`
        `),a(31,"h3",1),r(32,"Datos del recepcionista:"),l(),r(33,`
        `),a(34,"form",12),r(35,`
            `),a(36,"div",13),r(37,`
                `),a(38,"div",14),r(39,`
                    `),a(40,"span",5),r(41,`
                        `),E(),a(42,"svg",15),r(43,`
                            `),y(44,"path",16),r(45,`
                        `),l(),r(46,`
                    `),l(),r(47,`
                    `),A(),a(48,"select",17),r(49,`
                    `),a(50,"option",18),r(51,"Seleccione Usuario"),l(),r(52,`
                        `),_(53,gr,2,4,"option",19),r(54,`
                    `),l(),r(55,`
                `),l(),r(56,`
                `),_(57,_r,2,0,"div",9),r(58,`
            `),l(),r(59,` 
            `),a(60,"div",20),r(61,`
                `),a(62,"div",14),r(63,`
                    `),a(64,"span",21),r(65,`
                    `),E(),a(66,"svg",22),r(67,`
                        `),y(68,"path",23),r(69,`
                    `),l(),r(70,`
                    `),l(),r(71,`
                    `),A(),y(72,"input",24),r(73,`
                `),l(),r(74,`
            `),l(),r(75,` 
            `),a(76,"div",20),r(77,`
                `),a(78,"div",14),r(79,`
                    `),a(80,"span",5),r(81,`
                    `),E(),a(82,"svg",22),r(83,`
                        `),y(84,"path",23),r(85,`
                    `),l(),r(86,`
                    `),l(),r(87,`
                    `),A(),y(88,"input",25),r(89,`
                `),l(),r(90,`
            `),l(),r(91,`
            `),a(92,"div",26),r(93,`
                `),a(94,"div",27),r(95,`
                    `),E(),a(96,"svg",28),r(97,`
                        `),y(98,"path",29),r(99,`
                        `),y(100,"path",30),r(101,`
                    `),l(),r(102,`
                `),l(),r(103,`
                `),A(),y(104,"input",31),r(105,`
            `),l(),r(106,`
        `),l(),r(107,`
        `),a(108,"button",32),r(109,`
            `),a(110,"span",33),r(111,`
                Nuevo recepcionista
            `),l(),r(112,`
        `),l(),r(113,`
        `),r(114,`
    `),l(),r(115,`
    `),a(116,"div",0),r(117,`
        `),a(118,"h3",1),r(119,"Datos del cliente:"),l(),r(120,`
        `),a(121,"form",12),r(122,`
            `),a(123,"div",34),r(124,`
                `),a(125,"div",2),r(126,`
                    `),a(127,"div",14),r(128,`
                        `),a(129,"span",5),r(130,`
                        `),E(),a(131,"svg",22),r(132,`
                            `),y(133,"path",23),r(134,`
                        `),l(),r(135,`
                        `),l(),r(136,`
                        `),A(),y(137,"input",35),r(138,`
                    `),l(),r(139,`
                    `),_(140,Cr,10,4,"div",36),r(141,`
                `),l(),r(142,`
            `),l(),r(143,` 
            `),a(144,"div",34),r(145,`
                `),a(146,"div",2),r(147,`
                    `),a(148,"div",14),r(149,`
                        `),a(150,"span",5),r(151,`
                        `),E(),a(152,"svg",22),r(153,`
                            `),y(154,"path",23),r(155,`
                        `),l(),r(156,`
                        `),l(),r(157,`
                        `),A(),y(158,"input",37),r(159,`
                    `),l(),r(160,`
                    `),_(161,Sr,2,0,"div",36),r(162,`
                `),l(),r(163,`
            `),l(),r(164,` 
            `),a(165,"div",34),r(166,`
                `),a(167,"div",2),r(168,`
                    `),a(169,"div",14),r(170,`
                        `),a(171,"span",5),r(172,`
                        `),E(),a(173,"svg",22),r(174,`
                            `),y(175,"path",23),r(176,`
                        `),l(),r(177,`
                        `),l(),r(178,`
                        `),A(),y(179,"input",38),r(180,`
                    `),l(),r(181,`
                    `),_(182,wr,2,0,"div",36),r(183,`
                `),l(),r(184,`
            `),l(),r(185,` 
            
            
            `),r(186,`
            `),a(187,"div",34),r(188,`
                `),a(189,"div",2),r(190,`
                    `),a(191,"div",27),r(192,`
                    `),E(),a(193,"svg",39),r(194,`
                        `),y(195,"path",40),r(196,`
                    `),l(),r(197,`
                    `),l(),r(198,`
                    `),A(),a(199,"select",41),w("change",function(s){return i.onComunaChange(s)}),r(200,`
                        `),a(201,"option",18),r(202,"Seleccione Comuna"),l(),r(203,`
                        `),_(204,Er,2,2,"option",19),r(205,`
                    `),l(),r(206,`
                `),l(),r(207,`
                `),_(208,Tr,2,0,"div",9),r(209,`
            `),l(),r(210,`
            

            `),r(211,`
            `),a(212,"div",34),r(213,`
                `),a(214,"div",2),r(215,`
                    `),a(216,"div",27),r(217,`
                    `),E(),a(218,"svg",39),r(219,`
                        `),y(220,"path",42),r(221,`
                    `),l(),r(222,`
                    `),l(),r(223,`
                    `),A(),a(224,"select",43),r(225,`
                        `),a(226,"option",18),r(227,"Seleccione Regi\xF3n"),l(),r(228,`
                        `),_(229,Ir,2,2,"option",44),r(230,`
                    `),l(),r(231,`
                `),l(),r(232,`
                `),_(233,Or,2,0,"div",9),r(234,`
            `),l(),r(235,`

            `),a(236,"div",34),r(237,`
                `),a(238,"div",27),r(239,`
                `),E(),a(240,"svg",39),r(241,`
                    `),y(242,"path",45),r(243,`
                    `),y(244,"path",46),r(245,`
                `),l(),r(246,`
                `),l(),r(247,`
                `),A(),y(248,"input",47),r(249,`
            `),l(),r(250,`
            `),a(251,"div",34),r(252,`
                `),a(253,"div",2),r(254,`
                    `),a(255,"div",27),r(256,`
                        `),E(),a(257,"svg",28),r(258,`
                            `),y(259,"path",29),r(260,`
                            `),y(261,"path",30),r(262,`
                        `),l(),r(263,`
                    `),l(),r(264,`
                    `),A(),y(265,"input",48),r(266,`
                `),l(),r(267,`
                `),_(268,Fr,6,2,"div",36),r(269,`
            `),l(),r(270,`
            `),a(271,"div",10),r(272,`
                `),a(273,"div",34),r(274,`
                    `),a(275,"div",27),r(276,`
                    `),E(),a(277,"svg",39),r(278,`
                        `),y(279,"path",49),r(280,`
                    `),l(),r(281,`
                    `),l(),r(282,`
                    `),A(),y(283,"input",50),r(284,`
                `),l(),r(285,`
                `),a(286,"div",34),r(287,`
                    `),a(288,"div",27),r(289,`
                    `),E(),a(290,"svg",39),r(291,`
                        `),y(292,"path",51),r(293,`
                    `),l(),r(294,`
                    `),l(),r(295,`
                    `),A(),y(296,"input",52),r(297,`
                `),l(),r(298,`
            `),l(),r(299,`
        `),l(),r(300,`  
    `),l(),r(301,`
`),l(),r(302,`
`)),e&2){let o,s,c,u,m,f,g,v;p(7),d("formGroup",i.formNombreProyect),p(15),d("ngIf",((o=i.formNombreProyect.get("nombreProyecto"))==null?null:o.invalid)&&((o=i.formNombreProyect.get("nombreProyecto"))==null?null:o.touched)),p(12),d("formGroup",i.formRecepcionista),p(19),d("ngForOf",i.usuarioRecepcionistaSelect),p(4),d("ngIf",((s=i.formRecepcionista.get("IdVeUsuario"))==null?null:s.invalid)&&((s=i.formRecepcionista.get("IdVeUsuario"))==null?null:s.touched)),p(64),d("formGroup",i.formUsuarioCliente),p(19),d("ngIf",((c=i.formUsuarioCliente.get("Rut"))==null?null:c.touched)&&((c=i.formUsuarioCliente.get("Rut"))==null?null:c.invalid)),p(21),d("ngIf",((u=i.formUsuarioCliente.get("Nombre"))==null?null:u.touched)&&((u=i.formUsuarioCliente.get("Nombre"))==null?null:u.invalid)),p(21),d("ngIf",((m=i.formUsuarioCliente.get("Apellido"))==null?null:m.touched)&&((m=i.formUsuarioCliente.get("Apellido"))==null?null:m.invalid)),p(22),d("ngForOf",i.comunaSelect),p(4),d("ngIf",((f=i.formUsuarioCliente.get("IdVeComuna"))==null?null:f.invalid)&&((f=i.formUsuarioCliente.get("IdVeComuna"))==null?null:f.touched)),p(21),d("ngIf",i.regionSelect),p(4),d("ngIf",((g=i.formUsuarioCliente.get("IdVeRegion"))==null?null:g.invalid)&&((g=i.formUsuarioCliente.get("IdVeRegion"))==null?null:g.touched)),p(35),d("ngIf",((v=i.formUsuarioCliente.get("Email"))==null?null:v.touched)&&((v=i.formUsuarioCliente.get("Email"))==null?null:v.invalid))}},dependencies:[xe,At,st,at,Ot,Vt,rt,kt,q,be,ne,Dt,Ft,Lt,Yn,Ci],styles:[".ng-select-bottom[_ngcontent-%COMP%]{position:relative!important;justify-content:center!important;align-items:center;height:40px;color:#fff;font-size:14px;text-align:center}[_nghost-%COMP%]     .ng-dropdown-panel{position:relative!important;box-sizing:border-box;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}[_nghost-%COMP%]     .ng-dropdown-panel-items{margin-top:4%;background-color:#1f2937;border-bottom:1px solid #374151;transition:background-color .2s ease}[_nghost-%COMP%]     .ng-dropdown-panel-items .ng-option{background-color:#2f3a4a;border-bottom:1px solid #e5e7eb;padding:2%}[_nghost-%COMP%]     .ng-dropdown-panel-items .ng-option:hover{background-color:#f9fafb}@media (prefers-color-scheme: dark){[_nghost-%COMP%]     .ng-dropdown-panel-items{background-color:#1f2937;border-bottom:1px solid #374151}[_nghost-%COMP%]     .ng-dropdown-panel-items .ng-option:hover{background-color:#4b5563}}"]})};var Oi=class{IdVeMarcaVehiculo;NombreMarca};var ki=class{IdVeModeloVehiculo;IdVeMarcaVehiculo;NombreModelo};var Ai=class t{constructor(n,e){this.httpClient=n;this.utilsService=e}urlApi=lt.apiAccesoViaExpress;obtenerMarcas(){return W(this,null,function*(){let n=this.urlApi+"/api/Vehiculo/ObtenerMarcas";try{return yield he(this.httpClient.get(n))}catch(e){return console.log(this.utilsService.obtenerErrorGenerico(e)),new Oi}})}obtenerModelos(n){return W(this,null,function*(){let e=this.urlApi+`/api/Vehiculo/ObtenerModelosPorMarca?idMarca=${n}`;try{return yield he(this.httpClient.get(e))}catch(i){return console.log(this.utilsService.obtenerErrorGenerico(i)),new ki}})}static \u0275fac=function(e){return new(e||t)(ge(nt),ge(ct))};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})};var Fi=class t{constructor(n){this.platformId=n}loadFlowbite(n){Ve(this.platformId)&&import("./chunk-SJ2YAMFQ.js").then(e=>{n(e)})}static \u0275fac=function(e){return new(e||t)(ge(Je))};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})};function Pr(t,n){if(t&1&&(a(0,"option",35),r(1),l()),t&2){let e=n.$implicit;d("value",e.IdVeMarcaVehiculo),p(),ee(`
                                `,e.NombreMarca,`
                            `)}}function Dr(t,n){t&1&&(a(0,"div",36),r(1,`
                            La marca es un campo obligatorio.
                        `),l())}function Mr(t,n){if(t&1&&(a(0,"option",35),r(1),l()),t&2){let e=n.$implicit;d("value",e.IdVeModeloVehiculo),p(),ye(e.NombreModelo)}}function Rr(t,n){t&1&&(a(0,"div",36),r(1,`
                            El modelo es un campo obligatorio.
                        `),l())}function Nr(t,n){t&1&&(a(0,"div",36),r(1,`
                            La patente es un campo obligatorio.
                        `),l())}function Br(t,n){t&1&&(a(0,"div",36),r(1,`
                            El n\xFAmero de chasis es un campo obligatorio.
                        `),l())}function $r(t,n){t&1&&(a(0,"div",36),r(1,`
                            El n\xFAmero de motor es un campo obligatorio.
                        `),l())}function Hr(t,n){t&1&&(a(0,"div",36),r(1,`
                            El kilometraje es un campo obligatorio.
                        `),l())}function zr(t,n){t&1&&(a(0,"div",36),r(1,`
                            Escriba una descripci\xF3n de la falla.
                        `),l())}function jr(t,n){if(t&1){let e=H();a(0,"div",48),r(1,`
                            `),a(2,"button",49),w("click",function(){let o=x(e).index,s=h(2);return C(s.removeImage(o))}),r(3,`
                                `),a(4,"span",43),r(5,`
                                    `),E(),a(6,"svg",50),r(7,`
                                        `),y(8,"path",51),r(9,`
                                    `),l(),r(10,`
                                `),l(),r(11,`
                            `),l(),r(12,`   
                            `),A(),y(13,"img",52),r(14,`
                        `),l()}if(t&2){let e=n.$implicit,i=n.index;d("id","carousel-item-"+i),p(13),d("src",e,Et)}}function Ur(t,n){if(t&1&&(a(0,"button",53),r(1,`
                        `),l()),t&2){let e=n.index;d("id","carousel-indicator-"+e),F("aria-label","Slide "+(e+1))("data-carousel-slide-to",e)}}function Wr(t,n){if(t&1&&(a(0,"div",37),r(1,`
                    `),r(2,`
                    `),a(3,"div",38),r(4,`
                        `),_(5,jr,15,2,"div",39),r(6,`
                    `),l(),r(7,`

                    `),r(8,`
                    `),a(9,"div",40),r(10,`
                        `),_(11,Ur,2,3,"button",41),r(12,`
                    `),l(),r(13,`

                    `),r(14,`
                    `),a(15,"button",42),r(16,`
                        `),a(17,"span",43),r(18,`
                            `),E(),a(19,"svg",44),r(20,`
                                `),y(21,"path",45),r(22,`
                            `),l(),r(23,`
                        `),l(),r(24,`
                    `),l(),r(25,`
                    `),A(),a(26,"button",46),r(27,`
                        `),a(28,"span",43),r(29,`
                            `),E(),a(30,"svg",44),r(31,`
                                `),y(32,"path",47),r(33,`
                            `),l(),r(34,`
                        `),l(),r(35,`
                    `),l(),r(36,`
                `),l()),t&2){let e=h();p(5),d("ngForOf",e.previewImages),p(6),d("ngForOf",e.previewImages)}}var Li=class t{constructor(n,e,i,o){this.vehiculoService=n;this.flowbiteService=e;this.fb=i;this.formService=o}marcasSelect=[];modelosSelect=[];formVehiculo;previewImages=["https://flowbite.com/docs/images/carousel/carousel-1.svg"];selectedFiles=[];carouselInstance;subs=new li;ngOnInit(){return W(this,null,function*(){this.ObtenerMarcas(),this.formService.ejecutarFormVehiculo$.subscribe(()=>this.ejecutarFormCliente()),this.formVehiculo=this.fb.group({IdVeMarcaVehiculo:["",Q.required],IdVeModeloVehiculo:["",Q.required],Kilometraje:["",Q.required],NumeroChasis:["",[Q.required]],NumeroMotor:["",[Q.required]],Patente:["",[Q.required]],Falla:["",[Q.required]]}),this.subs.add(this.formService.ejecutarFormVehiculo$.subscribe(()=>{let e=this.formVehiculo.valid;e||this.formVehiculo.markAllAsTouched(),this.formService.informarResultadoVehiculoFormulario(e)}));let n=this.formService.getPresupuesto();if(console.log("Datos del presupuesto al cargar el componente:",n),n.vehiculo){let e=n.vehiculo;yield this.cargarModelosPorMarca(e.IdVeMarcaVehiculo),this.formVehiculo.patchValue({IdVeMarcaVehiculo:Number(e.IdVeMarcaVehiculo??""),IdVeModeloVehiculo:Number(e.IdVeModeloVehiculo||""),Kilometraje:e.Kilometraje||"",NumeroChasis:e.NumeroChasis||"",NumeroMotor:e.NumeroMotor||"",Patente:e.Patente||"",Falla:e.Falla||""}),console.log("Formulario de veh\xEDculo cargado con datos:",this.formVehiculo.value)}else console.warn("No hay datos de veh\xEDculo en el formulario de presupuesto")})}ejecutarFormCliente(){Object.keys(this.formVehiculo.controls).forEach(n=>{let e=this.formVehiculo.get(n);console.log(`${n}: valid=${e?.valid}, value=${e?.value}`)}),this.formVehiculo.valid?this.formService.updatePresupuesto({vehiculo:this.formVehiculo.value,fileFotoVehiculo:this.selectedFiles}):(this.formVehiculo.markAllAsTouched(),console.warn("Formulario vehiculo inv\xE1lido")),console.log(this.formService.getPresupuesto())}ObtenerMarcas(){return W(this,null,function*(){let n=yield this.vehiculoService.obtenerMarcas();this.marcasSelect=n})}setModelos(n){return W(this,null,function*(){let i=n.target.value,o=yield this.vehiculoService.obtenerModelos(i);this.modelosSelect=o})}cargarModelosPorMarca(n){return W(this,null,function*(){if(n)try{let e=yield this.vehiculoService.obtenerModelos(n);this.modelosSelect=e}catch(e){console.error("Error al cargar modelos:",e)}})}onFileSelected(n){let e=n.target;if(!e.files)return;this.previewImages=[],this.selectedFiles=Array.from(e.files);let i=[];for(let o of this.selectedFiles){let s=new FileReader,c=new Promise(u=>{s.onload=m=>{this.previewImages.push(m.target.result),u()}});s.readAsDataURL(o),i.push(c)}Promise.all(i).then(()=>{this.initCarousel()})}ngAfterViewInit(){this.initCarousel()}removeImage(n){this.previewImages.splice(n,1),setTimeout(()=>this.reinicializarCarousel(),0)}reinicializarCarousel(){this.flowbiteService.loadFlowbite(n=>{let e=document.getElementById("carousel-example");if(!e)return;let i=this.previewImages.map((m,f)=>({position:f,el:document.getElementById(`carousel-item-${f}`)})),s={defaultPosition:0,interval:0,indicators:{activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",items:this.previewImages.map((m,f)=>({position:f,el:document.getElementById(`carousel-indicator-${f}`)}))}},c={id:"carousel-example",override:!0},u=new n.Carousel(e,i,s,c);document.getElementById("data-carousel-prev")?.addEventListener("click",()=>u.prev()),document.getElementById("data-carousel-next")?.addEventListener("click",()=>u.next())})}initCarousel(){this.flowbiteService.loadFlowbite(n=>{let e=document.getElementById("carousel-example");e&&setTimeout(()=>{let i=this.previewImages.map((u,m)=>({position:m,el:document.getElementById(`carousel-item-${m}`)})),s={defaultPosition:0,interval:0,indicators:{activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",items:this.previewImages.map((u,m)=>({position:m,el:document.getElementById(`carousel-indicator-${m}`)}))}},c={id:"carousel-example",override:!0};this.carouselInstance&&this.carouselInstance.destroy(),this.carouselInstance=new n.Carousel(e,i,s,c),document.getElementById("data-carousel-prev")?.addEventListener("click",()=>this.carouselInstance.prev()),document.getElementById("data-carousel-next")?.addEventListener("click",()=>this.carouselInstance.next())},0)})}ngOnDestroy(){this.subs.unsubscribe()}static \u0275fac=function(e){return new(e||t)(D(Ai),D(Fi),D(Pt),D(ut))};static \u0275cmp=M({type:t,selectors:[["app-datos-vehiculos"]],decls:136,vars:11,consts:[[1,"gap-16","py-8","px-4","mx-auto","max-w-screen-xl","lg:grid","lg:grid-cols-2","items-start"],[1,"font-light","text-gray-500","sm:text-lg","dark:text-gray-400"],[2,"margin","3%",3,"formGroup"],[1,"mb-10","font-semibold","text-gray-900","dark:text-white",2,"font-size","x-large"],[1,"grid","gap-4","sm:grid-cols-2","sm:gap-6"],[1,"text-left"],["for","category",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","IdVeMarcaVehiculo","id","category",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"change"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],["class","text-red-500 text-sm mt-1",4,"ngIf"],["formControlName","IdVeModeloVehiculo","id","category",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[1,"w-full","text-left"],["for","brand",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","Patente","type","text","name","brand","id","brand","placeholder","BAjk-81",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","chasis",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","NumeroChasis","type","text","name","chasis","id","chasis","placeholder","1HGCM82633A123456",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","price",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","NumeroMotor","type","text","name","price","id","price","placeholder","K20A123456789",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","kilometer",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","Kilometraje","type","number","name","kilometer","id","kilometer","placeholder","185.000",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[1,"sm:col-span-2","text-left"],["for","description",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","Falla","id","description","rows","8","placeholder","Escriba su descripci\xF3n aqu\xED.",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-primary-500","focus:border-primary-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",2,"height","320px"],[1,"block","items-center","justify-center","w-full","mt-20"],[1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["for","dropzone-file",1,"flex","flex-col","items-center","justify-center","w-full","h-64","border-2","border-gray-300","border-dashed","rounded-lg","cursor-pointer","bg-gray-50","dark:hover:bg-gray-800","dark:bg-gray-700","hover:bg-gray-100","dark:border-gray-600","dark:hover:border-gray-500"],[1,"flex","flex-col","items-center","justify-center","pt-5","pb-6"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 16",1,"w-8","h-8","mb-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"],[1,"mb-2","text-sm","text-gray-500","dark:text-gray-400"],[1,"font-semibold"],[1,"text-xs","text-gray-500","dark:text-gray-400"],["id","dropzone-file","type","file","accept","image/*","multiple","",1,"hidden",3,"change"],["id","carousel-example","class","relative w-full mt-8",4,"ngIf"],[3,"value"],[1,"text-red-500","text-sm","mt-1"],["id","carousel-example",1,"relative","w-full","mt-8"],[1,"relative","h-56","overflow-hidden","rounded-lg","sm:h-64","xl:h-80","2xl:h-94"],["class","hidden duration-700 ease-in-out",3,"id",4,"ngFor","ngForOf"],[1,"absolute","z-30","flex","-translate-x-1/2","space-x-3","rtl:space-x-reverse","bottom-5","left-1/2"],["type","button","class","w-3 h-3 rounded-full",3,"id",4,"ngFor","ngForOf"],["type","button","id","data-carousel-prev","data-carousel-prev","",1,"absolute","top-0","start-0","z-30","flex","items-center","justify-center","h-full","px-4","cursor-pointer","group","focus:outline-none"],[1,"inline-flex","items-center","justify-center","w-10","h-10","rounded-full","bg-white/30","dark:bg-gray-800/30","group-hover:bg-white/50","group-focus:ring-4","group-focus:ring-white","group-focus:outline-none"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 6 10",1,"w-4","h-4","text-white","rtl:rotate-180"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M5 1 1 5l4 4"],["type","button","id","data-carousel-next","data-carousel-next","",1,"absolute","top-0","end-0","z-30","flex","items-center","justify-center","h-full","px-4","cursor-pointer","group","focus:outline-none"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 9 4-4-4-4"],[1,"hidden","duration-700","ease-in-out",3,"id"],[1,"absolute","top-0","center","z-30","h-20","cursor-pointer","group","focus:outline-none",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-[35px]","h-[35px]","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","1.9","d","m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],[1,"w-full","h-full","object-cover",3,"src"],["type","button",1,"w-3","h-3","rounded-full",3,"id"]],template:function(e,i){if(e&1&&(r(0,`
`),a(1,"section"),r(2,`
    `),a(3,"div",0),r(4,`

        `),a(5,"div",1),r(6,`
            `),a(7,"form",2),r(8,`
                `),r(9,`
                `),a(10,"h3",3),r(11,"Datos del Veh\xEDculo:"),l(),r(12,`
                `),a(13,"div",4),r(14,`
                    `),a(15,"div",5),r(16,`
                        `),a(17,"label",6),r(18,"Marca del Veh\xEDculo:"),l(),r(19,`
                        `),a(20,"select",7),w("change",function(s){return i.setModelos(s)}),r(21,`
                            `),a(22,"option",8),r(23,"Seleccionar Marca"),l(),r(24,`
                            `),_(25,Pr,2,2,"option",9),r(26,`
                        `),l(),r(27,`
                        `),_(28,Dr,2,0,"div",10),r(29,`
                    `),l(),r(30,`
                    `),a(31,"div",5),r(32,`
                        `),a(33,"label",6),r(34,"Modelo del Veh\xEDculo:"),l(),r(35,`
                        `),a(36,"select",11),r(37,`
                            `),a(38,"option",8),r(39,"Seleccionar Modelo"),l(),r(40,`
                            `),_(41,Mr,2,2,"option",9),r(42,`
                        `),l(),r(43,`
                        `),_(44,Rr,2,0,"div",10),r(45,`
                    `),l(),r(46,`
                    `),a(47,"div",12),r(48,`
                        `),a(49,"label",13),r(50,"N\xFAmero de Matricula:"),l(),r(51,`
                        `),y(52,"input",14),r(53,`
                        `),_(54,Nr,2,0,"div",10),r(55,`
                    `),l(),r(56,`
                    `),a(57,"div",12),r(58,`
                        `),a(59,"label",15),r(60,"N\xFAmero de Chasis:"),l(),r(61,`
                        `),y(62,"input",16),r(63,`
                        `),_(64,Br,2,0,"div",10),r(65,`
                    `),l(),r(66,`
                    `),a(67,"div",12),r(68,`
                        `),a(69,"label",17),r(70,"N\xFAmero de Motor:"),l(),r(71,`
                        `),y(72,"input",18),r(73,`
                         `),_(74,$r,2,0,"div",10),r(75,`
                    `),l(),r(76,`
                    `),a(77,"div",12),r(78,`
                        `),a(79,"label",19),r(80,"Kilometraje:"),l(),r(81,`
                        `),y(82,"input",20),r(83,`
                         `),_(84,Hr,2,0,"div",10),r(85,`
                    `),l(),r(86,`
                    `),a(87,"div",21),r(88,`
                        `),a(89,"label",22),r(90,"Descripci\xF3n de la falla"),l(),r(91,`
                        `),y(92,"textarea",23),r(93,`
                         `),_(94,zr,2,0,"div",10),r(95,`
                    `),l(),r(96,`
                `),l(),r(97,`
            `),l(),r(98,`
        `),l(),r(99,`
            
            
        `),a(100,"div",24),r(101,`
            `),r(102,`
                `),a(103,"div",21),r(104,`
                    `),a(105,"h1",25),r(106,"Cargar Imagenes del veh\xEDculo:"),l(),r(107,`

                    `),a(108,"label",26),r(109,`
                        `),a(110,"div",27),r(111,`
                            `),E(),a(112,"svg",28),r(113,`
                                `),y(114,"path",29),r(115,`
                            `),l(),r(116,`
                            `),A(),a(117,"p",30)(118,"span",31),r(119,"Click para actualizar"),l(),r(120," o arrastrar y soltar"),l(),r(121,`
                            `),a(122,"p",32),r(123,"SVG, PNG, JPG or GIF (MAX. 800x400px)"),l(),r(124,`
                        `),l(),r(125,`
                        `),a(126,"input",33),w("change",function(s){return i.onFileSelected(s)}),l(),r(127,`
                    `),l(),r(128,`
                `),l(),r(129,`

                `),_(130,Wr,37,2,"div",34),r(131,`
            `),r(132,`
        `),l(),r(133,`
    `),l(),r(134,`
`),l(),r(135,`
`)),e&2){let o,s,c,u,m,f,g;p(7),d("formGroup",i.formVehiculo),p(18),d("ngForOf",i.marcasSelect),p(3),d("ngIf",((o=i.formVehiculo.get("IdVeMarcaVehiculo"))==null?null:o.invalid)&&((o=i.formVehiculo.get("IdVeMarcaVehiculo"))==null?null:o.touched)),p(13),d("ngForOf",i.modelosSelect),p(3),d("ngIf",((s=i.formVehiculo.get("IdVeModeloVehiculo"))==null?null:s.invalid)&&((s=i.formVehiculo.get("IdVeModeloVehiculo"))==null?null:s.touched)),p(10),d("ngIf",((c=i.formVehiculo.get("Patente"))==null?null:c.invalid)&&((c=i.formVehiculo.get("Patente"))==null?null:c.touched)),p(10),d("ngIf",((u=i.formVehiculo.get("NumeroChasis"))==null?null:u.invalid)&&((u=i.formVehiculo.get("NumeroChasis"))==null?null:u.touched)),p(10),d("ngIf",((m=i.formVehiculo.get("NumeroMotor"))==null?null:m.invalid)&&((m=i.formVehiculo.get("NumeroMotor"))==null?null:m.touched)),p(10),d("ngIf",((f=i.formVehiculo.get("Kilometraje"))==null?null:f.invalid)&&((f=i.formVehiculo.get("Kilometraje"))==null?null:f.touched)),p(10),d("ngIf",((g=i.formVehiculo.get("Falla"))==null?null:g.invalid)&&((g=i.formVehiculo.get("Falla"))==null?null:g.touched)),p(36),d("ngIf",i.previewImages.length)}},dependencies:[xe,At,st,at,Ot,vi,Vt,rt,kt,q,be,ne,Dt,Ft,Lt],styles:[".zoom[_ngcontent-%COMP%]{width:100%;transition:transform .5s ease}.zoom[_ngcontent-%COMP%]:hover{transform:scale(1.2)}"]})};function Gr(t,n){if(t&1&&(a(0,"div",1),r(1,`
    `),y(2,"div",2),r(3,`
    `),a(4,"span"),r(5),l(),r(6,`
`),l()),t&2){let e=h();d("ngClass",e.toastClases),p(2),d("innerHTML",e.toastIcon,Dn),p(3),ye(e.toastMensaje)}}var pt=class t{constructor(n){this.sanitizer=n}toastDuracion=5;toastMensaje="";toastTipo="success";mostrarToast=!1;contador=3;intervalId;mostrar(n,e){this.toastTipo=n,this.toastMensaje=e,this.contador=this.toastDuracion,this.mostrarToast=!0,clearInterval(this.intervalId),this.intervalId=setInterval(()=>{this.contador--,this.contador<=0&&(this.mostrarToast=!1,clearInterval(this.intervalId))},1e3)}get toastClases(){switch(this.toastTipo){case"success":return"bg-green-100 text-green-800";case"warning":return"bg-yellow-100 text-yellow-800";case"error":return"bg-red-100 text-red-800";default:return""}}get toastIcon(){let n="";switch(this.toastTipo){case"success":n=`<svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4l5-5-1.414-1.414L9 11.172 7.414 9.586 6 11l3 3z" clip-rule="evenodd"/>
        </svg>`;break;case"warning":n=`<svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l6.518 11.591c.75 1.335-.213 2.985-1.742 2.985H3.48c-1.53 0-2.492-1.65-1.742-2.985L8.257 3.1zM9 7a1 1 0 112 0v4a1 1 0 11-2 0V7zm1 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
        </svg>`;break;case"error":n=`<svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10A8 8 0 112 10a8 8 0 0116 0zm-4.707-2.707a1 1 0 00-1.414-1.414L10 8.586 8.121 6.707a1 1 0 10-1.414 1.414L8.586 10l-1.879 1.879a1 1 0 101.414 1.414L10 11.414l1.879 1.879a1 1 0 001.414-1.414L11.414 10l1.879-1.879z" clip-rule="evenodd"/>
        </svg>`;break}return this.sanitizer.bypassSecurityTrustHtml(n)}static \u0275fac=function(e){return new(e||t)(D(jn))};static \u0275cmp=M({type:t,selectors:[["app-toast-producto"]],inputs:{toastDuracion:"toastDuracion"},decls:2,vars:1,consts:[["class","fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-full text-sm rounded-lg shadow-lg p-4 flex items-center space-x-4 transition-opacity duration-500",3,"ngClass",4,"ngIf"],[1,"fixed","top-4","left-1/2","transform","-translate-x-1/2","z-50","max-w-sm","w-full","text-sm","rounded-lg","shadow-lg","p-4","flex","items-center","space-x-4","transition-opacity","duration-500",3,"ngClass"],[3,"innerHTML"]],template:function(e,i){e&1&&(_(0,Gr,7,3,"div",0),r(1,`
`)),e&2&&d("ngIf",i.mostrarToast)},dependencies:[q,pe,ne],encapsulation:2})};var Kr=(t,n,e)=>({"text-red-800 bg-red-100":t,"text-yellow-800 bg-yellow-100":n,"text-green-800 bg-green-100":e});function qr(t,n){if(t&1&&(a(0,"div",1),r(1,`
    `),a(2,"span",2),r(3),l(),r(4),l()),t&2){let e=h();d("ngClass",yt(3,Kr,e.tipo==="error",e.tipo==="warning",e.tipo==="success")),p(3),ee("",e.titulo,":"),p(),ee(" ",e.mensaje,`
`)}}var Vi=class t{tipo="error";titulo="Error";mensaje="Algo sali\xF3 mal.";mostrar=!1;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-alertas-forms"]],inputs:{tipo:"tipo",titulo:"titulo",mensaje:"mensaje",mostrar:"mostrar"},decls:1,vars:1,consts:[["class","p-4 mb-4 text-sm rounded-lg",3,"ngClass",4,"ngIf"],[1,"p-4","mb-4","text-sm","rounded-lg",3,"ngClass"],[1,"font-medium"]],template:function(e,i){e&1&&_(0,qr,5,7,"div",0),e&2&&d("ngIf",i.mostrar)},dependencies:[xe,q,pe,ne],encapsulation:2})};var Pi=class{IdVeCategoriasProductos;NombreCategoria};var Di=class{Id_VE_Productos;Id_VE_Categoria;NombreProducto;Precio;StockInicial=1;Descripcion;Fabricante;ImagenData=null;NombreImagen;NombreCategoria};var Rt=class t{constructor(n,e){this.httpClient=n;this.utilsService=e}urlApi=lt.apiAccesoViaExpress;GuardarProducto(n){return W(this,null,function*(){let e=this.urlApi+"/api/Producto/GuardarProducto";try{return yield he(this.httpClient.post(e,n))}catch(i){return console.log(this.utilsService.obtenerErrorGenerico(i)),!1}})}EditarProducto(n){return W(this,null,function*(){let e=this.urlApi+"/api/Producto/ActualizarProducto";try{return yield he(this.httpClient.put(e,n))}catch(i){return console.log(this.utilsService.obtenerErrorGenerico(i)),!1}})}ObtenerCategoriasProductos(){return W(this,null,function*(){let n=this.urlApi+"/api/Producto/ObtenerCategorias";try{return yield he(this.httpClient.get(n))}catch(e){return console.log(this.utilsService.obtenerErrorGenerico(e)),new Pi}})}ObtenerProductosNombre(n,e){return W(this,null,function*(){let i=this.urlApi+`/api/Producto/ObtenerProductosFiltrado?nombreProducto=${n}&idCategoria=${e}`;try{return yield he(this.httpClient.get(i))}catch(o){return console.log(this.utilsService.obtenerErrorGenerico(o)),new Di}})}static \u0275fac=function(e){return new(e||t)(ge(nt),ge(ct))};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})};var Qr=["fileInput"],Zr=t=>({"is-active":t});function Yr(t,n){t&1&&(a(0,"div",38),r(1,`
                            Este campo es obligatorio.
                        `),l())}function Jr(t,n){t&1&&(a(0,"div",38),r(1,`
                            Este campo es obligatorio.
                        `),l())}function Xr(t,n){if(t&1&&(a(0,"option",39),r(1),l()),t&2){let e=n.$implicit;d("value",e.IdVeCategoriasProductos),p(),ee(`
                                    `,e.NombreCategoria,`
                                `)}}function es(t,n){t&1&&(a(0,"div",38),r(1,`
                            Este campo es obligatorio.
                        `),l())}function ts(t,n){t&1&&(a(0,"div",38),r(1,`
                            Este campo es obligatorio.
                        `),l())}function is(t,n){t&1&&(a(0,"div",38),r(1,`
                            Este campo es obligatorio.
                        `),l())}var Mi=class t{constructor(n,e){this.productoService=n;this.fb=e;this.productoForm=this.fb.group({IdVeProducto:[null],NombreProducto:["",Q.required],Precio:["",[Q.required,Q.min(0)]],Descripcion:["",Q.required],NombreImagen:[""],IdVeCategoriasProductos:["",Q.required],Fabricante:["",Q.required]})}fileInput;toast;closeModal=new L;productoParaEditar=new L;productoParaGuardar=new L;productoModalEditar=null;isVisible=!0;tituloModal="";selectedFile=null;categoriasSelect=[];productoForm;nombreArchivoExistente="";mostrarAlerta=!1;mensajeAlerta="";tipoAlerta="error";ngOnInit(){this.ObtenerCategoriasProductos()}ObtenerCategoriasProductos(){return W(this,null,function*(){let n=yield this.productoService.ObtenerCategoriasProductos();this.categoriasSelect=n})}onSelectCategoria(n){let e=n.target.value;this.productoForm.patchValue({IdVeCategoriasProductos:e})}ngOnChanges(n){n.productoModalEditar&&this.productoModalEditar&&this.mapearProductoAFormData()}mapearProductoAFormData(){this.productoModalEditar&&this.productoForm.patchValue({IdVeProducto:this.productoModalEditar.Id_VE_Productos,NombreProducto:this.productoModalEditar.NombreProducto,Precio:this.productoModalEditar.Precio,Descripcion:this.productoModalEditar.Descripcion,NombreImagen:this.productoModalEditar.NombreImagen||"",IdVeCategoriasProductos:this.productoModalEditar.Id_VE_Categoria,Fabricante:this.productoModalEditar.Fabricante})}onFileSelected(n){let e=n.target.files[0],i=20*1024*1024;if(e&&e.size<=i){let o=e.name.split(".").pop()?.toLowerCase();o&&["jpg","jpeg","png","gif","svg"].includes(o)?this.selectedFile=e:alert("Extensi\xF3n no permitida")}else alert("Archivo demasiado grande (m\xE1x 20MB)")}guardarProducto(){return W(this,null,function*(){if(this.productoForm.invalid){this.mensajeAlerta="Por favor, completa todos los campos obligatorios.",this.productoForm.markAllAsTouched(),this.tipoAlerta="warning",this.mostrarAlerta=!0,console.log("Formulario: "+JSON.stringify(this.productoForm.value)),setTimeout(()=>this.mostrarAlerta=!1,5e3);return}let n=new FormData,e=this.productoForm.value;n.append("IdVeProducto",e.IdVeProducto),n.append("NombreProducto",e.NombreProducto),n.append("Fabricante",e.Fabricante||""),n.append("Precio",e.Precio.toString()),n.append("IdVeCategoria",e.IdVeCategoriasProductos.toString()),n.append("Descripcion",e.Descripcion||""),n.append("NombreImagen",this.selectedFile?.name||""),this.selectedFile&&n.append("ImagenData",this.selectedFile),this.tituloModal=="Editar Producto"&&this.productoModalEditar?this.productoParaEditar.emit(n):this.productoParaGuardar.emit(n),this.mostrarAlerta=!1,this.close()})}resetForm(){this.productoForm.reset({NombreProducto:"",Precio:"",Descripcion:"",NombreImagen:"",IdVeCategoriasProductos:"",Fabricante:"",FileImage:null}),this.selectedFile=null,this.fileInput&&(this.fileInput.nativeElement.value="")}close(){console.log("modal se cierra: "+this.isVisible),this.resetForm(),this.closeModal.emit(!1)}static \u0275fac=function(e){return new(e||t)(D(Rt),D(Pt))};static \u0275cmp=M({type:t,selectors:[["app-modal-productos"]],viewQuery:function(e,i){if(e&1&&(re(Qr,5),re(pt,5)),e&2){let o;I(o=O())&&(i.fileInput=o.first),I(o=O())&&(i.toast=o.first)}},inputs:{productoModalEditar:"productoModalEditar",isVisible:"isVisible",tituloModal:"tituloModal"},outputs:{closeModal:"closeModal",productoParaEditar:"productoParaEditar",productoParaGuardar:"productoParaGuardar"},features:[Ke],decls:126,vars:16,consts:[["fileInput",""],["id","defaultModal",1,"modal","hidden",3,"ngClass"],[1,"relative","p-4","w-full","max-w-2xl","h-full","md:h-auto"],[1,"relative","p-4","bg-white","rounded-lg","shadow","dark:bg-gray-800","sm:p-5"],[1,"flex","justify-between","items-center","pb-4","mb-4","rounded-t","border-b","sm:mb-5","dark:border-gray-600"],[1,"text-lg","font-semibold","text-gray-900","dark:text-white"],["type","button","data-modal-toggle","defaultModal",1,"text-gray-400","bg-transparent","hover:bg-gray-200","hover:text-gray-900","rounded-lg","text-sm","p-1.5","ml-auto","inline-flex","items-center","dark:hover:bg-gray-600","dark:hover:text-white",3,"click"],["fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"w-5","h-5"],["fill-rule","evenodd","d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule","evenodd"],[1,"sr-only"],[3,"tipo","titulo","mensaje","mostrar"],[3,"ngSubmit","formGroup"],[1,"grid","gap-4","mb-4","sm:grid-cols-2","text-start"],["for","name",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","NombreProducto","type","text","name","name","id","name","placeholder","Filtro de Aire",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["class","text-red-500 text-sm mt-1",4,"ngIf"],["for","price",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","Precio","type","number","name","price","id","price","placeholder","$2999",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","category",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","IdVeCategoriasProductos","id","category",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",2,"padding-right","12px",3,"change"],["value",""],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 10 6",1,"w-2.5","h-2.5","ms-2.5"],[3,"value",4,"ngFor","ngForOf"],["for","Fabricante",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","Fabricante","type","text","name","nomImg","id","nomImg","placeholder","Bosch",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[1,"sm:col-span-2"],["for","file_input",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","file_input","type","file","accept","image/*",1,"block","w-full","text-sm","text-gray-900","border","border-gray-300","rounded-lg","cursor-pointer","bg-gray-50","dark:text-gray-400","focus:outline-none","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400",3,"change"],["for","description",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","Descripcion","id","description","name","description","rows","4","placeholder","Escribe aqu\xED la descripci\xF3n de tu producto",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-primary-500","focus:border-primary-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[1,"gap-4","flex","sm:items-center","sm:justify-between"],["type","button","data-modal-toggle","defaultModal",1,"relative","inline-flex","items-end","justify-center","p-0.5","mb-2","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-pink-500","to-orange-400","group-hover:from-pink-500","group-hover:to-orange-400","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-pink-200","dark:focus:ring-pink-800",3,"click"],[1,"relative","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0",2,"padding-right","15px","padding-left","10px"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"me-1","-ms-0","inline"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],["type","submit","id","defaultModalButton","data-modal-target","defaultModal","data-modal-toggle","defaultModal",1,"relative","inline-flex","items-end","justify-center","p-0.5","mb-2","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-purple-600","to-blue-500","group-hover:from-purple-600","group-hover:to-blue-500","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:focus:ring-blue-800"],[1,"relative","px-5","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0"],["stroke","currentColor","stroke-linecap","round","stroke-width","2","d","M11 16h2m6.707-9.293-2.414-2.414A1 1 0 0 0 16.586 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.414a1 1 0 0 0-.293-.707ZM16 20v-6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6h8ZM9 4h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4Z"],[1,"text-red-500","text-sm","mt-1"],[3,"value"]],template:function(e,i){if(e&1){let o=H();a(0,"div",1),r(1,`
    `),a(2,"div",2),r(3,`
        `),a(4,"div",3),r(5,`

            `),a(6,"div",4),r(7,`
                `),a(8,"h3",5),r(9),l(),r(10,`
                `),a(11,"button",6),w("click",function(){return x(o),C(i.close())}),r(12,`
                    `),E(),a(13,"svg",7),y(14,"path",8),l(),r(15,`
                    `),A(),a(16,"span",9),r(17,"Cerrar Modal"),l(),r(18,`
                `),l(),r(19,`
            `),l(),r(20,`
            `),a(21,"app-alertas-forms",10),r(22,`
            `),l(),r(23,`

            `),a(24,"form",11),w("ngSubmit",function(){return x(o),C(i.guardarProducto())}),r(25,`
                `),a(26,"div",12),r(27,`
                    `),a(28,"div"),r(29,`
                        `),a(30,"label",13),r(31,"Nombre Producto o Servicio"),l(),r(32,`
                        `),y(33,"input",14),r(34,`
                        `),_(35,Yr,2,0,"div",15),r(36,`
                    `),l(),r(37,`
                    `),a(38,"div"),r(39,`
                        `),a(40,"label",16),r(41,"Precio"),l(),r(42,`
                        `),y(43,"input",17),r(44,`
                        `),_(45,Jr,2,0,"div",15),r(46,`
                    `),l(),r(47,`
                    `),a(48,"div"),r(49,`
                        `),a(50,"label",18),r(51,"Categorias"),l(),r(52,`
                        `),a(53,"select",19),w("change",function(c){return x(o),C(i.onSelectCategoria(c))}),r(54,`
                                `),a(55,"option",20),r(56,`Todas las Categorias 
                                    `),E(),y(57,"svg",21),r(58,`
                                `),l(),r(59,`
                                `),_(60,Xr,2,2,"option",22),r(61,`
                        `),l(),r(62,`
                        `),_(63,es,2,0,"div",15),r(64,`
                    `),l(),r(65,`
                    `),A(),a(66,"div"),r(67,`
                        `),a(68,"label",23),r(69,"Fabricante"),l(),r(70,`
                        `),y(71,"input",24),r(72,`
                        `),_(73,ts,2,0,"div",15),r(74,`
                    `),l(),r(75,`
                    `),a(76,"div",25),r(77,`
                        `),a(78,"label",26),r(79,"Cargar Imagen"),l(),r(80,`
                        `),a(81,"input",27,0),w("change",function(c){return x(o),C(i.onFileSelected(c))}),l(),r(83,`  
                    `),l(),r(84,`
                    `),a(85,"div",25),r(86,`
                        `),a(87,"label",28),r(88,"Descripci\xF3n"),l(),r(89,`
                        `),y(90,"textarea",29),r(91,`   
                        `),_(92,is,2,0,"div",15),r(93,`                 
                    `),l(),r(94,`
                `),l(),r(95,`
                `),a(96,"div",30),r(97,`
                    `),a(98,"button",31),w("click",function(){return x(o),C(i.close())}),r(99,`
                        `),a(100,"span",32),r(101,`
                        `),E(),a(102,"svg",33),r(103,`
                            `),y(104,"path",34),r(105,`
                        `),l(),r(106,`
                            Cerrar
                        `),l(),r(107,`
                    `),l(),r(108,`
                    `),A(),a(109,"button",35),r(110,`
                        `),a(111,"span",36),r(112,`
                        `),E(),a(113,"svg",33),r(114,`
                            `),y(115,"path",37),r(116,`
                        `),l(),r(117),l(),r(118,`
                    `),l(),r(119,`
                `),l(),r(120,`
            `),l(),r(121,`
        `),l(),r(122,`
    `),l(),r(123,`
`),l(),r(124,`
`),A(),y(125,"app-toast-producto")}if(e&2){let o,s,c,u,m;d("ngClass",z(14,Zr,i.isVisible)),p(9),ee(`
                    `,i.tituloModal,`
                `),p(12),d("tipo",i.tipoAlerta)("titulo",i.tipoAlerta==="success"?"\xC9xito":i.tipoAlerta==="warning"?"Advertencia":"Error")("mensaje",i.mensajeAlerta)("mostrar",i.mostrarAlerta),p(3),d("formGroup",i.productoForm),p(11),d("ngIf",((o=i.productoForm.get("NombreProducto"))==null?null:o.invalid)&&((o=i.productoForm.get("NombreProducto"))==null?null:o.touched)),p(10),d("ngIf",((s=i.productoForm.get("Precio"))==null?null:s.invalid)&&((s=i.productoForm.get("Precio"))==null?null:s.touched)),p(15),d("ngForOf",i.categoriasSelect),p(3),d("ngIf",((c=i.productoForm.get("IdVeCategoriasProductos"))==null?null:c.invalid)&&((c=i.productoForm.get("IdVeCategoriasProductos"))==null?null:c.touched)),p(10),d("ngIf",((u=i.productoForm.get("Fabricante"))==null?null:u.invalid)&&((u=i.productoForm.get("Fabricante"))==null?null:u.touched)),p(19),d("ngIf",((m=i.productoForm.get("Descripcion"))==null?null:m.invalid)&&((m=i.productoForm.get("Descripcion"))==null?null:m.touched)),p(25),ee(`
                            `,i.tituloModal==="Editar Producto"?"Actualizar Producto":"Crear Producto",`
                        `)}},dependencies:[xe,At,st,at,Ot,vi,Vt,rt,kt,q,pe,be,ne,Dt,Ft,Lt,pt,Vi],styles:[".modal[_ngcontent-%COMP%]{position:fixed;z-index:1050;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#00000080}.modal.is-active[_ngcontent-%COMP%]{display:block}.modal-content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 6px #0000001a}.modal-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.modal-close[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;border:none;background:transparent;font-size:1.5em;cursor:pointer}"]})};var Ri=class t{transform(n,e,i=35){return n?e&&n.length>i?n.slice(0,i)+"...":n:""}static \u0275fac=function(e){return new(e||t)};static \u0275pipe=ln({name:"truncateMobile",type:t,pure:!0})},Ni=class t{transform(n,e,i=45){return n?!e&&n.length>i?n.slice(0,i)+"...":n:""}static \u0275fac=function(e){return new(e||t)};static \u0275pipe=ln({name:"truncateWeb",type:t,pure:!0})};var os=t=>[t,"CLP","symbol","1.0-0","es-CL"];function rs(t,n){if(t&1){let e=H();a(0,"div",2),r(1,`
        `),y(2,"img",3),r(3,`
    
        `),a(4,"h2",4),r(5),$e(6,"truncateWeb"),l(),r(7,`
    
        `),a(8,"div",5),r(9,`
            `),a(10,"span"),r(11,"Cantidad:"),l(),r(12,`
            `),a(13,"div",6),r(14,`
            `),a(15,"button",7),w("click",function(){let o=x(e).$implicit,s=h();return o.StockInicial=s.Math.max(1,o.StockInicial-1),C(s.actualizarStock(o.StockInicial+"-"+o.Id_VE_Productos))}),r(16,"-"),l(),r(17,`
            `),a(18,"span",8),r(19),l(),r(20,`
            `),a(21,"button",7),w("click",function(){let o=x(e).$implicit,s=h();return o.StockInicial=o.StockInicial+1,C(s.actualizarStock(o.StockInicial+"-"+o.Id_VE_Productos))}),r(22,"+"),l(),r(23,`
            `),l(),r(24,`
        `),l(),r(25,`
    
        `),a(26,"div",9),r(27,`
            `),a(28,"div"),r(29,`
                `),a(30,"button",10),w("click",function(){let o=x(e).index,s=h();return C(s.quitarProducto(o))}),r(31,`
                    `),a(32,"span",11),r(33,`
                        `),E(),a(34,"svg",12),r(35,`
                            `),y(36,"path",13),r(37,`
                        `),l(),r(38,`
                    `),l(),r(39,`
                `),l(),r(40,`
                `),A(),a(41,"button",14),w("click",function(){let o=x(e).$implicit,s=h();return C(s.MostrarModalEditar(o.Id_VE_Productos))}),r(42,`
                    `),a(43,"span",15),r(44,`
                        `),E(),a(45,"svg",12),r(46,`
                            `),y(47,"path",16),r(48,`
                            `),y(49,"path",17),r(50,`
                        `),l(),r(51,`
                    `),l(),r(52,`
                `),l(),r(53,`
            `),l(),r(54,`
            `),A(),a(55,"div"),r(56,`
                `),a(57,"p",18),r(58),$e(59,"currency"),l(),r(60,`
            `),l(),r(61,`
        `),l(),r(62,`
    `),l()}if(t&2){let e=n.$implicit,i=h();p(2),d("src",e.ImagenData,Et),p(3),ye(Bn(6,4,e.NombreProducto,i.isMobile,50)),p(14),ye(e.StockInicial),p(39),ye($n(59,8,z(14,os,e.Precio*e.StockInicial)))}}var Bi=class t{constructor(n){this.deviceService=n}productosSeleccionado=[];eliminarProducto=new L;stockProducto=new L;mostrarModal=new L;mostrarModalConTitulo=new L;isModalVisible=!1;isModalFinalVisible=!1;isMobile=!1;selectedColor="";Math=Math;ngOnInit(){this.isMobile=this.deviceService.isMobile()}actualizarStock(n){let e=n.split("-")[0],i=n.split("-")[1];console.log("Stock actualizado:",n),this.stockProducto.emit({id:parseInt(i),stock:parseInt(e)})}quitarProducto(n){let e=this.productosSeleccionado[n].Id_VE_Productos;this.eliminarProducto.emit(e)}MostrarModalEditar(n){console.log("Hijo emite"),this.mostrarModal.emit(),this.mostrarModalConTitulo.emit({titulo:"Editar Producto",id:n})}closeModal(){console.log("se cierra el modal en el carrusel"),this.isModalVisible=!1}static \u0275fac=function(e){return new(e||t)(D(bi))};static \u0275cmp=M({type:t,selectors:[["app-producto-carrusel"]],inputs:{productosSeleccionado:"productosSeleccionado"},outputs:{eliminarProducto:"eliminarProducto",stockProducto:"stockProducto",mostrarModal:"mostrarModal",mostrarModalConTitulo:"mostrarModalConTitulo"},decls:4,vars:1,consts:[[1,"mt-4","grid","gap-4","sm:grid-cols-1","lg:grid-cols-3","xl:grid-cols-3"],["style","height: fit-content;","class","bg-gray-800 text-white rounded-xl p-4",4,"ngFor","ngForOf"],[1,"bg-gray-800","text-white","rounded-xl","p-4",2,"height","fit-content"],["alt","Product image",1,"rounded-lg","mx-auto","mb-4","w-48","h-48","object-contain",3,"src"],[1,"text-lg","font-bold"],[1,"flex","items-center","mb-4","mt-4","space-x-4"],[1,"flex","items-center"],[1,"px-2","py-1","bg-gray-700","rounded",3,"click"],[1,"px-3"],[1,"mt-4","items-center","justify-between","flex","gap-4"],[1,"relative","inline-flex","items-center","justify-center","p-0.5","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-pink-500","to-orange-400","group-hover:from-pink-500","group-hover:to-orange-400","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-pink-200","dark:focus:ring-pink-800",3,"click"],[1,"relative","p-2","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 24 24",1,"inline"],["fill-rule","evenodd","d","M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z","clip-rule","evenodd"],[1,"relative","inline-flex","items-center","justify-center","p-0.5","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-purple-600","to-blue-500","group-hover:from-purple-600","group-hover:to-blue-500","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:focus:ring-blue-800",3,"click"],[1,"relative","p-2","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-transparent","group-hover:dark:bg-transparent"],["fill-rule","evenodd","d","M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z","clip-rule","evenodd"],["fill-rule","evenodd","d","M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z","clip-rule","evenodd"],[1,"text-2xl","font-semibold"]],template:function(e,i){e&1&&(a(0,"div",0),r(1,`
    `),_(2,rs,63,16,"div",1),r(3,`
`),l()),e&2&&(p(2),d("ngForOf",i.productosSeleccionado))},dependencies:[xe,q,be,fi,Ni],encapsulation:2})};function ss(t,n){return t?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}function qt(t,n){if(t&&n){let e=i=>{ss(t,i)||(t.classList?t.classList.add(i):t.className+=" "+i)};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function bt(t,n){if(t&&n){let e=i=>{t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function eo(t,n){if(t instanceof HTMLElement){let e=t.offsetWidth;if(n){let i=getComputedStyle(t);e+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return e}return 0}function $i(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function as(t){let n=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?n=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?n=t.el.nativeElement:n=t.el)),$i(n)?n:void 0}function yn(t,n={}){if($i(t)){let e=(i,o)=>{var s,c;let u=(s=t?.$attrs)!=null&&s[i]?[(c=t?.$attrs)==null?void 0:c[i]]:[];return[o].flat().reduce((m,f)=>{if(f!=null){let g=typeof f;if(g==="string"||g==="number")m.push(f);else if(g==="object"){let v=Array.isArray(f)?e(i,f):Object.entries(f).map(([b,S])=>i==="style"&&(S||S===0)?`${b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${S}`:S?b:void 0);m=v.length?m.concat(v.filter(b=>!!b)):m}}return m},u)};Object.entries(n).forEach(([i,o])=>{if(o!=null){let s=i.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),o):i==="p-bind"||i==="pBind"?yn(t,o):(o=i==="class"?[...new Set(e("class",o))].join(" ").trim():i==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=o),t.setAttribute(i,o))}})}}function Nt(t,n){return $i(t)?t.matches(n)?t:t.querySelector(n):null}function Oe(t,n){t&&document.activeElement!==t&&t.focus(n)}function ze(t){if(t){let n=t.offsetHeight,e=getComputedStyle(t);return n-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),n}return 0}function ls(t){if(t){let n=t.parentNode;return n&&n instanceof ShadowRoot&&n.host&&(n=n.host),n}return null}function to(t){if(t){let n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function io(t,n){if(t){let e=t.offsetHeight;if(n){let i=getComputedStyle(t);e+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return e}return 0}function cs(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&ls(t))}function no(t,n){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return(e=n?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let o=as((s=>!!(s&&s.constructor&&s.call&&s.apply))(t)?t():t);return o?.nodeType===9||cs(o)?o:void 0}}function je(t){if(t){let n=t.offsetWidth,e=getComputedStyle(t);return n-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),n}return 0}function vn(t){return!!(t&&t.offsetParent!=null)}function xt(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function oo(t){var n;t&&("remove"in Element.prototype?t.remove():(n=t.parentNode)==null||n.removeChild(t))}function ro(t,n="",e){$i(t)&&e!==null&&e!==void 0&&t.setAttribute(n,e)}function so(){let t=new Map;return{on(n,e){let i=t.get(n);return i?i.push(e):i=[e],t.set(n,i),this},off(n,e){let i=t.get(n);return i&&i.splice(i.indexOf(e)>>>0,1),this},emit(n,e){let i=t.get(n);i&&i.slice().map(o=>{o(e)})},clear(){t.clear()}}}function De(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function bn(t,n,e=new WeakSet){if(t===n)return!0;if(!t||!n||typeof t!="object"||typeof n!="object"||e.has(t)||e.has(n))return!1;e.add(t).add(n);let i=Array.isArray(t),o=Array.isArray(n),s,c,u;if(i&&o){if(c=t.length,c!=n.length)return!1;for(s=c;s--!==0;)if(!bn(t[s],n[s],e))return!1;return!0}if(i!=o)return!1;let m=t instanceof Date,f=n instanceof Date;if(m!=f)return!1;if(m&&f)return t.getTime()==n.getTime();let g=t instanceof RegExp,v=n instanceof RegExp;if(g!=v)return!1;if(g&&v)return t.toString()==n.toString();let b=Object.keys(t);if(c=b.length,c!==Object.keys(n).length)return!1;for(s=c;s--!==0;)if(!Object.prototype.hasOwnProperty.call(n,b[s]))return!1;for(s=c;s--!==0;)if(u=b[s],!bn(t[u],n[u],e))return!1;return!0}function us(t,n){return bn(t,n)}function lo(t){return!!(t&&t.constructor&&t.call&&t.apply)}function K(t){return!De(t)}function Ue(t,n){if(!t||!n)return null;try{let e=t[n];if(K(e))return e}catch{}if(Object.keys(t).length){if(lo(n))return n(t);if(n.indexOf(".")===-1)return t[n];{let e=n.split("."),i=t;for(let o=0,s=e.length;o<s;++o){if(i==null)return null;i=i[e[o]]}return i}}return null}function Hi(t,n,e){return e?Ue(t,e)===Ue(n,e):us(t,n)}function xn(t,n){let e=-1;if(K(t))try{e=t.findLastIndex(n)}catch{e=t.lastIndexOf([...t].reverse().find(n))}return e}function Qe(t,n=!0){return t instanceof Object&&t.constructor===Object&&(n||Object.keys(t).length!==0)}function ke(t,...n){return lo(t)?t(...n):t}function mt(t,n=!0){return typeof t=="string"&&(n||t!=="")}function ao(t){return mt(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function zi(t,n="",e={}){let i=ao(n).split("."),o=i.shift();return o?Qe(t)?zi(ke(t[Object.keys(t).find(s=>ao(s)===o)||""],e),i.join("."),e):void 0:ke(t,e)}function ji(t,n=!0){return Array.isArray(t)&&(n||t.length!==0)}function co(t){return K(t)&&!isNaN(t)}function Se(t,n){if(n){let e=n.test(t);return n.lastIndex=0,e}return!1}function Ct(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Ui(t){return mt(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(n,e)=>e===0?n:"-"+n.toLowerCase()).toLowerCase():t}function Cn(t){return mt(t)?t.replace(/[A-Z]/g,(n,e)=>e===0?n:"."+n.toLowerCase()).toLowerCase():t}var Wi={};function ht(t="pui_id_"){return Wi.hasOwnProperty(t)||(Wi[t]=0),Wi[t]++,`${t}${Wi[t]}`}function ds(){let t=[],n=(c,u,m=999)=>{let f=o(c,u,m),g=f.value+(f.key===c?0:m)+1;return t.push({key:c,value:g}),g},e=c=>{t=t.filter(u=>u.value!==c)},i=(c,u)=>o(c,u).value,o=(c,u,m=0)=>[...t].reverse().find(f=>u?!0:f.key===c)||{key:c,value:m},s=c=>c&&parseInt(c.style.zIndex,10)||0;return{get:s,set:(c,u,m)=>{u&&(u.style.zIndex=String(n(c,!0,m)))},clear:c=>{c&&(e(s(c)),c.style.zIndex="")},getCurrent:c=>i(c,!0)}}var Ad=ds();var de=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var Gi=(()=>{class t{clickSource=new Ae;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var We=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(i){return new(i||t)(D(ui))};static \u0275dir=Ce({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),Ze=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=_e({type:t});static \u0275inj=fe({imports:[q]})}return t})(),Ki=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var ps=Object.defineProperty,ms=Object.defineProperties,hs=Object.getOwnPropertyDescriptors,qi=Object.getOwnPropertySymbols,mo=Object.prototype.hasOwnProperty,ho=Object.prototype.propertyIsEnumerable,uo=(t,n,e)=>n in t?ps(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,Re=(t,n)=>{for(var e in n||(n={}))mo.call(n,e)&&uo(t,e,n[e]);if(qi)for(var e of qi(n))ho.call(n,e)&&uo(t,e,n[e]);return t},wn=(t,n)=>ms(t,hs(n)),Ye=(t,n)=>{var e={};for(var i in t)mo.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&qi)for(var i of qi(t))n.indexOf(i)<0&&ho.call(t,i)&&(e[i]=t[i]);return e};var fs=so(),we=fs;function po(t,n){ji(t)?t.push(...n||[]):Qe(t)&&Object.assign(t,n)}function gs(t){return Qe(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function _s(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function En(t="",n=""){return _s(`${mt(t,!1)&&mt(n,!1)?`${t}-`:t}${n}`)}function fo(t="",n=""){return`--${En(t,n)}`}function ys(t=""){let n=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(n+e)%2!==0}function go(t,n="",e="",i=[],o){if(mt(t)){let s=/{([^}]*)}/g,c=t.trim();if(ys(c))return;if(Se(c,s)){let u=c.replaceAll(s,g=>{let b=g.replace(/{|}/g,"").split(".").filter(S=>!i.some(T=>Se(S,T)));return`var(${fo(e,Ui(b.join("-")))}${K(o)?`, ${o}`:""})`}),m=/(\d+\s+[\+\-\*\/]\s+\d+)/g,f=/var\([^)]+\)/g;return Se(u.replace(f,"0"),m)?`calc(${u})`:u}return c}else if(co(t))return t}function vs(t,n,e){mt(n,!1)&&t.push(`${n}:${e};`)}function Bt(t,n){return t?`${t}{${n}}`:""}var $t=(...t)=>bs(Z.getTheme(),...t),bs=(t={},n,e,i)=>{if(n){let{variable:o,options:s}=Z.defaults||{},{prefix:c,transform:u}=t?.options||s||{},f=Se(n,/{([^}]*)}/g)?n:`{${n}}`;return i==="value"||De(i)&&u==="strict"?Z.getTokenValue(n):go(f,void 0,c,[o.excludedKeyRegex],e)}return""};function xs(t,n={}){let e=Z.defaults.variable,{prefix:i=e.prefix,selector:o=e.selector,excludedKeyRegex:s=e.excludedKeyRegex}=n,c=(f,g="")=>Object.entries(f).reduce((v,[b,S])=>{let T=Se(b,s)?En(g):En(g,Ui(b)),j=gs(S);if(Qe(j)){let{variables:k,tokens:V}=c(j,T);po(v.tokens,V),po(v.variables,k)}else v.tokens.push((i?T.replace(`${i}-`,""):T).replaceAll("-",".")),vs(v.variables,fo(T),go(j,T,i,[s]));return v},{variables:[],tokens:[]}),{variables:u,tokens:m}=c(t,i);return{value:u,tokens:m,declarations:u.join(""),css:Bt(o,u.join(""))}}var Me={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let n=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var i;return(i=n.map(o=>o.resolve(e)).find(o=>o.matched))!=null?i:this.rules.custom.resolve(e)})}},_toVariables(t,n){return xs(t,{prefix:n?.prefix})},getCommon({name:t="",theme:n={},params:e,set:i,defaults:o}){var s,c,u,m,f,g,v;let{preset:b,options:S}=n,T,j,k,V,N,ae,oe;if(K(b)&&S.transform!=="strict"){let{primitive:Ee,semantic:Ge,extend:Qt}=b,zt=Ge||{},{colorScheme:Zt}=zt,Yt=Ye(zt,["colorScheme"]),Jt=Qt||{},{colorScheme:Xt}=Jt,jt=Ye(Jt,["colorScheme"]),Ut=Zt||{},{dark:ei}=Ut,ti=Ye(Ut,["dark"]),ii=Xt||{},{dark:ni}=ii,oi=Ye(ii,["dark"]),ri=K(Ee)?this._toVariables({primitive:Ee},S):{},si=K(Yt)?this._toVariables({semantic:Yt},S):{},ai=K(ti)?this._toVariables({light:ti},S):{},On=K(ei)?this._toVariables({dark:ei},S):{},kn=K(jt)?this._toVariables({semantic:jt},S):{},An=K(oi)?this._toVariables({light:oi},S):{},Fn=K(ni)?this._toVariables({dark:ni},S):{},[zo,jo]=[(s=ri.declarations)!=null?s:"",ri.tokens],[Uo,Wo]=[(c=si.declarations)!=null?c:"",si.tokens||[]],[Go,Ko]=[(u=ai.declarations)!=null?u:"",ai.tokens||[]],[qo,Qo]=[(m=On.declarations)!=null?m:"",On.tokens||[]],[Zo,Yo]=[(f=kn.declarations)!=null?f:"",kn.tokens||[]],[Jo,Xo]=[(g=An.declarations)!=null?g:"",An.tokens||[]],[er,tr]=[(v=Fn.declarations)!=null?v:"",Fn.tokens||[]];T=this.transformCSS(t,zo,"light","variable",S,i,o),j=jo;let ir=this.transformCSS(t,`${Uo}${Go}`,"light","variable",S,i,o),nr=this.transformCSS(t,`${qo}`,"dark","variable",S,i,o);k=`${ir}${nr}`,V=[...new Set([...Wo,...Ko,...Qo])];let or=this.transformCSS(t,`${Zo}${Jo}color-scheme:light`,"light","variable",S,i,o),rr=this.transformCSS(t,`${er}color-scheme:dark`,"dark","variable",S,i,o);N=`${or}${rr}`,ae=[...new Set([...Yo,...Xo,...tr])],oe=ke(b.css,{dt:$t})}return{primitive:{css:T,tokens:j},semantic:{css:k,tokens:V},global:{css:N,tokens:ae},style:oe}},getPreset({name:t="",preset:n={},options:e,params:i,set:o,defaults:s,selector:c}){var u,m,f;let g,v,b;if(K(n)&&e.transform!=="strict"){let S=t.replace("-directive",""),T=n,{colorScheme:j,extend:k,css:V}=T,N=Ye(T,["colorScheme","extend","css"]),ae=k||{},{colorScheme:oe}=ae,Ee=Ye(ae,["colorScheme"]),Ge=j||{},{dark:Qt}=Ge,zt=Ye(Ge,["dark"]),Zt=oe||{},{dark:Yt}=Zt,Jt=Ye(Zt,["dark"]),Xt=K(N)?this._toVariables({[S]:Re(Re({},N),Ee)},e):{},jt=K(zt)?this._toVariables({[S]:Re(Re({},zt),Jt)},e):{},Ut=K(Qt)?this._toVariables({[S]:Re(Re({},Qt),Yt)},e):{},[ei,ti]=[(u=Xt.declarations)!=null?u:"",Xt.tokens||[]],[ii,ni]=[(m=jt.declarations)!=null?m:"",jt.tokens||[]],[oi,ri]=[(f=Ut.declarations)!=null?f:"",Ut.tokens||[]],si=this.transformCSS(S,`${ei}${ii}`,"light","variable",e,o,s,c),ai=this.transformCSS(S,oi,"dark","variable",e,o,s,c);g=`${si}${ai}`,v=[...new Set([...ti,...ni,...ri])],b=ke(V,{dt:$t})}return{css:g,tokens:v,style:b}},getPresetC({name:t="",theme:n={},params:e,set:i,defaults:o}){var s;let{preset:c,options:u}=n,m=(s=c?.components)==null?void 0:s[t];return this.getPreset({name:t,preset:m,options:u,params:e,set:i,defaults:o})},getPresetD({name:t="",theme:n={},params:e,set:i,defaults:o}){var s;let c=t.replace("-directive",""),{preset:u,options:m}=n,f=(s=u?.directives)==null?void 0:s[c];return this.getPreset({name:c,preset:f,options:m,params:e,set:i,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,n){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?n.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:n.options.darkModeSelector):[]},getLayerOrder(t,n={},e,i){let{cssLayer:o}=n;return o?`@layer ${ke(o.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:n={},params:e,props:i={},set:o,defaults:s}){let c=this.getCommon({name:t,theme:n,params:e,set:o,defaults:s}),u=Object.entries(i).reduce((m,[f,g])=>m.push(`${f}="${g}"`)&&m,[]).join(" ");return Object.entries(c||{}).reduce((m,[f,g])=>{if(g?.css){let v=Ct(g?.css),b=`${f}-variables`;m.push(`<style type="text/css" data-primevue-style-id="${b}" ${u}>${v}</style>`)}return m},[]).join("")},getStyleSheet({name:t="",theme:n={},params:e,props:i={},set:o,defaults:s}){var c;let u={name:t,theme:n,params:e,set:o,defaults:s},m=(c=t.includes("-directive")?this.getPresetD(u):this.getPresetC(u))==null?void 0:c.css,f=Object.entries(i).reduce((g,[v,b])=>g.push(`${v}="${b}"`)&&g,[]).join(" ");return m?`<style type="text/css" data-primevue-style-id="${t}-variables" ${f}>${Ct(m)}</style>`:""},createTokens(t={},n,e="",i="",o={}){return Object.entries(t).forEach(([s,c])=>{let u=Se(s,n.variable.excludedKeyRegex)?e:e?`${e}.${Cn(s)}`:Cn(s),m=i?`${i}.${s}`:s;Qe(c)?this.createTokens(c,n,u,m,o):(o[u]||(o[u]={paths:[],computed(f,g={}){var v,b;return this.paths.length===1?(v=this.paths[0])==null?void 0:v.computed(this.paths[0].scheme,g.binding):f&&f!=="none"?(b=this.paths.find(S=>S.scheme===f))==null?void 0:b.computed(f,g.binding):this.paths.map(S=>S.computed(S.scheme,g[S.scheme]))}}),o[u].paths.push({path:m,value:c,scheme:m.includes("colorScheme.light")?"light":m.includes("colorScheme.dark")?"dark":"none",computed(f,g={}){let v=/{([^}]*)}/g,b=c;if(g.name=this.path,g.binding||(g.binding={}),Se(c,v)){let T=c.trim().replaceAll(v,V=>{var N;let ae=V.replace(/{|}/g,""),oe=(N=o[ae])==null?void 0:N.computed(f,g);return ji(oe)&&oe.length===2?`light-dark(${oe[0].value},${oe[1].value})`:oe?.value}),j=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,k=/var\([^)]+\)/g;b=Se(T.replace(k,"0"),j)?`calc(${T})`:T}return De(g.binding)&&delete g.binding,{colorScheme:f,path:this.path,paths:g,value:b.includes("undefined")?void 0:b}}}))}),o},getTokenValue(t,n,e){var i;let s=(m=>m.split(".").filter(g=>!Se(g.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(n),c=n.includes("colorScheme.light")?"light":n.includes("colorScheme.dark")?"dark":void 0,u=[(i=t[s])==null?void 0:i.computed(c)].flat().filter(m=>m);return u.length===1?u[0].value:u.reduce((m={},f)=>{let g=f,{colorScheme:v}=g,b=Ye(g,["colorScheme"]);return m[v]=b,m},void 0)},getSelectorRule(t,n,e,i){return e==="class"||e==="attr"?Bt(K(n)?`${t}${n},${t} ${n}`:t,i):Bt(t,K(n)?Bt(n,i):i)},transformCSS(t,n,e,i,o={},s,c,u){if(K(n)){let{cssLayer:m}=o;if(i!=="style"){let f=this.getColorSchemeOption(o,c);n=e==="dark"?f.reduce((g,{type:v,selector:b})=>(K(b)&&(g+=b.includes("[CSS]")?b.replace("[CSS]",n):this.getSelectorRule(b,u,v,n)),g),""):Bt(u??":root",n)}if(m){let f={name:"primeui",order:"primeui"};Qe(m)&&(f.name=ke(m.name,{name:t,type:i})),K(f.name)&&(n=Bt(`@layer ${f.name}`,n),s?.layerNames(f.name))}return n}return""}},Z={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:n}=t;n&&(this._theme=wn(Re({},n),{options:Re(Re({},this.defaults.options),n.options)}),this._tokens=Me.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),we.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=wn(Re({},this.theme),{preset:t}),this._tokens=Me.createTokens(t,this.defaults),this.clearLoadedStyleNames(),we.emit("preset:change",t),we.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=wn(Re({},this.theme),{options:t}),this.clearLoadedStyleNames(),we.emit("options:change",t),we.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Me.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",n){return Me.getCommon({name:t,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",n){let e={name:t,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Me.getPresetC(e)},getDirective(t="",n){let e={name:t,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Me.getPresetD(e)},getCustomPreset(t="",n,e,i){let o={name:t,preset:n,options:this.options,selector:e,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Me.getPreset(o)},getLayerOrderCSS(t=""){return Me.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",n,e="style",i){return Me.transformCSS(t,n,i,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",n,e={}){return Me.getCommonStyleSheet({name:t,theme:this.theme,params:n,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,n,e={}){return Me.getStyleSheet({name:t,theme:this.theme,params:n,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:n}){this._loadingStyles.size&&(this._loadingStyles.delete(n),we.emit(`theme:${n}:load`,t),!this._loadingStyles.size&&we.emit("theme:load"))}};var Cs=0,_o=(()=>{class t{document=B(tt);use(e,i={}){let o=!1,s=e,c=null,{immediate:u=!0,manual:m=!1,name:f=`style_${++Cs}`,id:g=void 0,media:v=void 0,nonce:b=void 0,first:S=!1,props:T={}}=i;if(this.document){if(c=this.document.querySelector(`style[data-primeng-style-id="${f}"]`)||g&&this.document.getElementById(g)||this.document.createElement("style"),!c.isConnected){s=e,yn(c,{type:"text/css",media:v,nonce:b});let j=this.document.head;S&&j.firstChild?j.insertBefore(c,j.firstChild):j.appendChild(c),ro(c,"data-primeng-style-id",f)}return c.textContent!==s&&(c.textContent=s),{id:g,name:f,el:c,css:s}}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ht={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Ss=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,ws=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,se=(()=>{class t{name="base";useStyle=B(_o);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,i={},o=s=>s)=>{let s=o(ke(e,{dt:$t}));return s?this.useStyle.use(Ct(s),R({name:this.name},i)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},i="")=>this.load(this.theme,e,(o="")=>Z.transformCSS(e.name||this.name,`${o}${i}`));loadGlobalCSS=(e={})=>this.load(ws,e);loadGlobalTheme=(e={},i="")=>this.load(Ss,e,(o="")=>Z.transformCSS(e.name||this.name,`${o}${i}`));getCommonTheme=e=>Z.getCommon(this.name,e);getComponentTheme=e=>Z.getComponent(this.name,e);getDirectiveTheme=e=>Z.getDirective(this.name,e);getPresetTheme=(e,i,o)=>Z.getCustomPreset(this.name,e,i,o);getLayerOrderThemeCSS=()=>Z.getLayerOrderCSS(this.name);getStyleSheet=(e="",i={})=>{if(this.css){let o=ke(this.css,{dt:$t}),s=Ct(`${o}${e}`),c=Object.entries(i).reduce((u,[m,f])=>u.push(`${m}="${f}"`)&&u,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${c}>${s}</style>`}return""};getCommonThemeStyleSheet=(e,i={})=>Z.getCommonStyleSheet(this.name,e,i);getThemeStyleSheet=(e,i={})=>{let o=[Z.getStyleSheet(this.name,e,i)];if(this.theme){let s=this.name==="base"?"global-style":`${this.name}-style`,c=ke(this.theme,{dt:$t}),u=Ct(Z.transformCSS(s,c)),m=Object.entries(i).reduce((f,[g,v])=>f.push(`${g}="${v}"`)&&f,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${s}" ${m}>${u}</style>`)}return o.join("")};static \u0275fac=function(i){return new(i||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Es=(()=>{class t{theme=Te(void 0);csp=Te({nonce:void 0});isThemeChanged=!1;document=B(tt);baseStyle=B(se);constructor(){vt(()=>{we.on("theme:change",e=>{Hn(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),vt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){Z.clearLoadedStyleNames(),we.clear()}onThemeChange(e){Z.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!Z.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:o,style:s}=this.baseStyle.getCommonTheme?.()||{},c={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,R({name:"primitive-variables"},c)),this.baseStyle.load(i?.css,R({name:"semantic-variables"},c)),this.baseStyle.load(o?.css,R({name:"global-variables"},c)),this.baseStyle.loadGlobalTheme(R({name:"global-style"},c),s),Z.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:i,csp:o}=e||{};i&&this.theme.set(i),o&&this.csp.set(o)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qi=(()=>{class t extends Es{ripple=Te(!1);platformId=B(Je);inputStyle=Te(null);inputVariant=Te(null);overlayOptions={};csp=Te({nonce:void 0});filterMatchModeOptions={text:[de.STARTS_WITH,de.CONTAINS,de.NOT_CONTAINS,de.ENDS_WITH,de.EQUALS,de.NOT_EQUALS],numeric:[de.EQUALS,de.NOT_EQUALS,de.LESS_THAN,de.LESS_THAN_OR_EQUAL_TO,de.GREATER_THAN,de.GREATER_THAN_OR_EQUAL_TO],date:[de.DATE_IS,de.DATE_IS_NOT,de.DATE_BEFORE,de.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Ae;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=R(R({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:i,ripple:o,inputStyle:s,inputVariant:c,theme:u,overlayOptions:m,translation:f,filterMatchModeOptions:g}=e||{};i&&this.csp.set(i),o&&this.ripple.set(o),s&&this.inputStyle.set(s),c&&this.inputVariant.set(c),m&&(this.overlayOptions=m),f&&this.setTranslation(f),g&&(this.filterMatchModeOptions=g),u&&this.setThemeConfig({theme:u,csp:i})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cp=new ci("PRIME_NG_CONFIG");var yo=(()=>{class t extends se{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),me=(()=>{class t{document=B(tt);platformId=B(Je);el=B(wt);injector=B(Pn);cd=B(un);renderer=B(an);config=B(Qi);baseComponentStyle=B(yo);baseStyle=B(se);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=ht("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,i="",o={}){return zi(e,i,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!zn(this.platformId)){let{dt:i}=e;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>we.off("theme:change",e))}_loadStyles(){let e=()=>{Ht.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Ht.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Ht.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Ht.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Z.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:o,style:s}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,R({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,R({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,R({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(R({name:"global-style"},this.styleOptions),s),Z.setLoadedStyleName("common")}if(!Z.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,R({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(R({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),Z.setLoadedStyleName(this.componentStyle?.name)}if(!Z.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,R({name:"layer-order",first:!0},this.styleOptions)),Z.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:i}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(i,R({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Ht.clearLoadedStyleNames(),we.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,i){let o=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:e}sx(e){let i=this.componentStyle?.inlineStyles?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:R({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Ce({type:t,inputs:{dt:"dt"},features:[ue([yo,se]),Ke]})}return t})();var ft=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,i){e&&i&&(e.classList?e.classList.add(i):e.className+=" "+i)}static addMultipleClasses(e,i){if(e&&i)if(e.classList){let o=i.trim().split(" ");for(let s=0;s<o.length;s++)e.classList.add(o[s])}else{let o=i.split(" ");for(let s=0;s<o.length;s++)e.className+=" "+o[s]}}static removeClass(e,i){e&&i&&(e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,i){e&&i&&[i].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(s=>this.removeClass(e,s)))}static hasClass(e,i){return e&&i?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(i){return i!==e})}static find(e,i){return Array.from(e.querySelectorAll(i))}static findSingle(e,i){return this.isElement(e)?e.querySelector(i):null}static index(e){let i=e.parentNode.childNodes,o=0;for(var s=0;s<i.length;s++){if(i[s]==e)return o;i[s].nodeType==1&&o++}return-1}static indexWithinGroup(e,i){let o=e.parentNode?e.parentNode.childNodes:[],s=0;for(var c=0;c<o.length;c++){if(o[c]==e)return s;o[c].attributes&&o[c].attributes[i]&&o[c].nodeType==1&&s++}return-1}static appendOverlay(e,i,o="self"){o!=="self"&&e&&i&&this.appendChild(e,i)}static alignOverlay(e,i,o="self",s=!0){e&&i&&(s&&(e.style.minWidth=`${t.getOuterWidth(i)}px`),o==="self"?this.relativePosition(e,i):this.absolutePosition(e,i))}static relativePosition(e,i,o=!0){let s=N=>{if(N)return getComputedStyle(N).getPropertyValue("position")==="relative"?N:s(N.parentElement)},c=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),u=i.offsetHeight,m=i.getBoundingClientRect(),f=this.getWindowScrollTop(),g=this.getWindowScrollLeft(),v=this.getViewport(),S=s(e)?.getBoundingClientRect()||{top:-1*f,left:-1*g},T,j;m.top+u+c.height>v.height?(T=m.top-S.top-c.height,e.style.transformOrigin="bottom",m.top+T<0&&(T=-1*m.top)):(T=u+m.top-S.top,e.style.transformOrigin="top");let k=m.left+c.width-v.width,V=m.left-S.left;c.width>v.width?j=(m.left-S.left)*-1:k>0?j=V-k:j=m.left-S.left,e.style.top=T+"px",e.style.left=j+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,i,o=!0){let s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),c=s.height,u=s.width,m=i.offsetHeight,f=i.offsetWidth,g=i.getBoundingClientRect(),v=this.getWindowScrollTop(),b=this.getWindowScrollLeft(),S=this.getViewport(),T,j;g.top+m+c>S.height?(T=g.top+v-c,e.style.transformOrigin="bottom",T<0&&(T=v)):(T=m+g.top+v,e.style.transformOrigin="top"),g.left+u>S.width?j=Math.max(0,g.left+b+f-u):j=g.left+b,e.style.top=T+"px",e.style.left=j+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,i=[]){return e.parentNode===null?i:this.getParents(e.parentNode,i.concat([e.parentNode]))}static getScrollableParents(e){let i=[];if(e){let o=this.getParents(e),s=/(auto|scroll)/,c=u=>{let m=window.getComputedStyle(u,null);return s.test(m.getPropertyValue("overflow"))||s.test(m.getPropertyValue("overflowX"))||s.test(m.getPropertyValue("overflowY"))};for(let u of o){let m=u.nodeType===1&&u.dataset.scrollselectors;if(m){let f=m.split(",");for(let g of f){let v=this.findSingle(u,g);v&&c(v)&&i.push(v)}}u.nodeType!==9&&c(u)&&i.push(u)}}return i}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementDimensions(e){let i={};return e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",i}static scrollInView(e,i){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),s=o?parseFloat(o):0,c=getComputedStyle(e).getPropertyValue("paddingTop"),u=c?parseFloat(c):0,m=e.getBoundingClientRect(),g=i.getBoundingClientRect().top+document.body.scrollTop-(m.top+document.body.scrollTop)-s-u,v=e.scrollTop,b=e.clientHeight,S=this.getOuterHeight(i);g<0?e.scrollTop=v+g:g+S>b&&(e.scrollTop=v+g-b+S)}static fadeIn(e,i){e.style.opacity=0;let o=+new Date,s=0,c=function(){s=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/i,e.style.opacity=s,o=+new Date,+s<1&&(window.requestAnimationFrame&&requestAnimationFrame(c)||setTimeout(c,16))};c()}static fadeOut(e,i){var o=1,s=50,c=i,u=s/c;let m=setInterval(()=>{o=o-u,o<=0&&(o=0,clearInterval(m)),e.style.opacity=o},s)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,i){var o=Element.prototype,s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(c){return[].indexOf.call(document.querySelectorAll(c),this)!==-1};return s.call(e,i)}static getOuterWidth(e,i){let o=e.offsetWidth;if(i){let s=getComputedStyle(e);o+=parseFloat(s.marginLeft)+parseFloat(s.marginRight)}return o}static getHorizontalPadding(e){let i=getComputedStyle(e);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(e){let i=getComputedStyle(e);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(e){let i=e.offsetWidth,o=getComputedStyle(e);return i+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static width(e){let i=e.offsetWidth,o=getComputedStyle(e);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static getInnerHeight(e){let i=e.offsetHeight,o=getComputedStyle(e);return i+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),i}static getOuterHeight(e,i){let o=e.offsetHeight;if(i){let s=getComputedStyle(e);o+=parseFloat(s.marginTop)+parseFloat(s.marginBottom)}return o}static getHeight(e){let i=e.offsetHeight,o=getComputedStyle(e);return i-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),i}static getWidth(e){let i=e.offsetWidth,o=getComputedStyle(e);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),i}static getViewport(){let e=window,i=document,o=i.documentElement,s=i.getElementsByTagName("body")[0],c=e.innerWidth||o.clientWidth||s.clientWidth,u=e.innerHeight||o.clientHeight||s.clientHeight;return{width:c,height:u}}static getOffset(e){var i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,i){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(i,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return!0;var o=e.indexOf("Trident/");if(o>0){var s=e.indexOf("rv:");return!0}var c=e.indexOf("Edge/");return c>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,i){if(this.isElement(i))i.appendChild(e);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(e);else throw"Cannot append "+i+" to "+e}static removeChild(e,i){if(this.isElement(i))i.removeChild(e);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+i}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let o=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(e,i,o){e[i].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,i){e&&document.activeElement!==e&&e.focus(i)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,i=""){let o=this.find(e,this.getFocusableSelectorString(i)),s=[];for(let c of o){let u=getComputedStyle(c);this.isVisible(c)&&u.display!="none"&&u.visibility!="hidden"&&s.push(c)}return s}static getFocusableElement(e,i=""){let o=this.findSingle(e,this.getFocusableSelectorString(i));if(o){let s=getComputedStyle(o);if(this.isVisible(o)&&s.display!="none"&&s.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,i=""){let o=this.getFocusableElements(e,i);return o.length>0?o[0]:null}static getLastFocusableElement(e,i){let o=this.getFocusableElements(e,i);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,i=!1){let o=t.getFocusableElements(e),s=0;if(o&&o.length>0){let c=o.indexOf(o[0].ownerDocument.activeElement);i?c==-1||c===0?s=o.length-1:s=c-1:c!=-1&&c!==o.length-1&&(s=c+1)}return o[s]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,i){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let c=(u=>!!(u&&u.constructor&&u.call&&u.apply))(e)?e():e;return c&&c.nodeType===9||this.isExist(c)?c:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,i){if(e){let o=e.getAttribute(i);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,i={},...o){if(e){let s=document.createElement(e);return this.setAttributes(s,i),s.append(...o),s}}static setAttribute(e,i="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(i,o)}static setAttributes(e,i={}){if(this.isElement(e)){let o=(s,c)=>{let u=e?.$attrs?.[s]?[e?.$attrs?.[s]]:[];return[c].flat().reduce((m,f)=>{if(f!=null){let g=typeof f;if(g==="string"||g==="number")m.push(f);else if(g==="object"){let v=Array.isArray(f)?o(s,f):Object.entries(f).map(([b,S])=>s==="style"&&(S||S===0)?`${b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${S}`:S?b:void 0);m=v.length?m.concat(v.filter(b=>!!b)):m}}return m},u)};Object.entries(i).forEach(([s,c])=>{if(c!=null){let u=s.match(/^on(.+)/);u?e.addEventListener(u[1].toLowerCase(),c):s==="pBind"?this.setAttributes(e,c):(c=s==="class"?[...new Set(o("class",c))].join(" ").trim():s==="style"?o("style",c).join(";").trim():c,(e.$attrs=e.$attrs||{})&&(e.$attrs[s]=c),e.setAttribute(s,c))}})}}static isFocusableElement(e,i=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return t})(),Zi=class{element;listener;scrollableParents;constructor(n,e=()=>{}){this.element=n,this.listener=e}bindScrollListener(){this.scrollableParents=ft.getScrollableParents(this.element);for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var vo=(()=>{class t extends me{autofocus=!1;_autofocus=!1;focused=!1;platformId=B(Je);document=B(tt);host=B(wt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Ve(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=ft.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275dir=Ce({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",U],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[J]})}return t})();var Ts=["*"],Is=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Os=(()=>{class t extends se{name="baseicon";inlineStyles=Is;static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var gt=(()=>{class t extends me{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=De(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",U],styleClass:"styleClass"},features:[ue([Os]),J],ngContentSelectors:Ts,decls:1,vars:0,template:function(i,o){i&1&&(Ne(),Be(0))},encapsulation:2,changeDetection:0})}return t})();var bo=(()=>{class t extends gt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275cmp=M({type:t,selectors:[["ChevronDownIcon"]],features:[J],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(i,o){i&1&&(E(),a(0,"svg",0),y(1,"path",1),l()),i&2&&(X(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var Yi=(()=>{class t extends gt{pathId;ngOnInit(){this.pathId="url(#"+ht()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275cmp=M({type:t,selectors:[["SpinnerIcon"]],features:[J],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(E(),a(0,"svg",0)(1,"g"),y(2,"path",1),l(),a(3,"defs")(4,"clipPath",2),y(5,"rect",3),l()()()),i&2&&(X(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),p(),F("clip-path",o.pathId),p(3),d("id",o.pathId))},encapsulation:2})}return t})();var xo=(()=>{class t extends gt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275cmp=M({type:t,selectors:[["TimesIcon"]],features:[J],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,o){i&1&&(E(),a(0,"svg",0),y(1,"path",1),l()),i&2&&(X(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var Ji=(()=>{class t extends gt{pathId;ngOnInit(){this.pathId="url(#"+ht()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275cmp=M({type:t,selectors:[["TimesCircleIcon"]],features:[J],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(E(),a(0,"svg",0)(1,"g"),y(2,"path",1),l(),a(3,"defs")(4,"clipPath",2),y(5,"rect",3),l()()()),i&2&&(X(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),p(),F("clip-path",o.pathId),p(3),d("id",o.pathId))},encapsulation:2})}return t})();var ks=["removeicon"],As=["*"];function Fs(t,n){if(t&1){let e=H();a(0,"img",4),w("error",function(o){x(e);let s=h();return C(s.imageError(o))}),l()}if(t&2){let e=h();d("src",e.image,Et)("alt",e.alt)}}function Ls(t,n){if(t&1&&y(0,"span",6),t&2){let e=h(2);X(e.icon),d("ngClass","p-chip-icon"),F("data-pc-section","icon")}}function Vs(t,n){if(t&1&&_(0,Ls,1,4,"span",5),t&2){let e=h();d("ngIf",e.icon)}}function Ps(t,n){if(t&1&&(a(0,"div",7),r(1),l()),t&2){let e=h();F("data-pc-section","label"),p(),ye(e.label)}}function Ds(t,n){if(t&1){let e=H();a(0,"span",11),w("click",function(o){x(e);let s=h(3);return C(s.close(o))})("keydown",function(o){x(e);let s=h(3);return C(s.onKeydown(o))}),l()}if(t&2){let e=h(3);X(e.removeIcon),d("ngClass","p-chip-remove-icon"),F("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Ms(t,n){if(t&1){let e=H();a(0,"TimesCircleIcon",12),w("click",function(o){x(e);let s=h(3);return C(s.close(o))})("keydown",function(o){x(e);let s=h(3);return C(s.onKeydown(o))}),l()}if(t&2){let e=h(3);X("p-chip-remove-icon"),F("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Rs(t,n){if(t&1&&(te(0),_(1,Ds,1,5,"span",9)(2,Ms,1,4,"TimesCircleIcon",10),ie()),t&2){let e=h(2);p(),d("ngIf",e.removeIcon),p(),d("ngIf",!e.removeIcon)}}function Ns(t,n){}function Bs(t,n){t&1&&_(0,Ns,0,0,"ng-template")}function $s(t,n){if(t&1){let e=H();a(0,"span",13),w("click",function(o){x(e);let s=h(2);return C(s.close(o))})("keydown",function(o){x(e);let s=h(2);return C(s.onKeydown(o))}),_(1,Bs,1,0,null,14),l()}if(t&2){let e=h(2);F("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),p(),d("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Hs(t,n){if(t&1&&(te(0),_(1,Rs,3,2,"ng-container",3)(2,$s,2,3,"span",8),ie()),t&2){let e=h();p(),d("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),p(),d("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var zs=({dt:t})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${t("chip.background")};
    color: ${t("chip.color")};
    border-radius: ${t("chip.border.radius")};
    padding: ${t("chip.padding.y")} ${t("chip.padding.x")};
    gap: ${t("chip.gap")};
}

.p-chip-icon {
    color: ${t("chip.icon.color")};
    font-size: ${t("chip.icon.font.size")};
    width: ${t("chip.icon.size")};
    height: ${t("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${t("chip.image.width")};
    height: ${t("chip.image.height")};
    margin-left: calc(-1 * ${t("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${t("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${t("chip.padding.y")} / 2);
    padding-bottom: calc(${t("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${t("chip.remove.icon.font.size")};
    width: ${t("chip.remove.icon.size")};
    height: ${t("chip.remove.icon.size")};
    color: ${t("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${t("chip.transition.duration")}, box-shadow ${t("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${t("chip.remove.icon.focus.ring.shadow")};
    outline: ${t("chip.remove.icon.focus.ring.width")} ${t("chip.remove.icon.focus.ring.style")} ${t("chip.remove.icon.focus.ring.color")};
    outline-offset: ${t("chip.remove.icon.focus.ring.offset")};
}
`,js={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Co=(()=>{class t extends se{name="chip";theme=zs;classes=js;static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var So=(()=>{class t extends me{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new L;onImageError=new L;visible=!0;get removeAriaLabel(){return this.config.getTranslation(Ki.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}_chipProps;_componentStyle=B(Co);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.style!==void 0&&(this.style=i.style),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}containerClass(){let e="p-chip p-component";return this.styleClass&&(e+=` ${this.styleClass}`),e}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275cmp=M({type:t,selectors:[["p-chip"]],contentQueries:function(i,o,s){if(i&1&&(Y(s,ks,4),Y(s,We,4)),i&2){let c;I(c=O())&&(o.removeIconTemplate=c.first),I(c=O())&&(o.templates=c)}},hostVars:9,hostBindings:function(i,o){i&2&&(F("data-pc-name","chip")("aria-label",o.label)("data-pc-section","root"),_t(o.style),X(o.containerClass()),Xe("display",!o.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",U],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[ue([Co]),J,Ke],ngContentSelectors:As,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,o){if(i&1&&(Ne(),Be(0),_(1,Fs,1,2,"img",1)(2,Vs,1,1,"ng-template",null,0,ve)(4,Ps,2,2,"div",2)(5,Hs,3,2,"ng-container",3)),i&2){let s=Fe(3);p(),d("ngIf",o.image)("ngIfElse",s),p(3),d("ngIf",o.label),p(),d("ngIf",o.removable)}},dependencies:[q,pe,ne,it,Ji,Ze],encapsulation:2,changeDetection:0})}return t})();var Us=({dt:t})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("inputtext.color")};
    background: ${t("inputtext.background")};
    padding-block: ${t("inputtext.padding.y")};
    padding-inline: ${t("inputtext.padding.x")};
    border: 1px solid ${t("inputtext.border.color")};
    transition: background ${t("inputtext.transition.duration")}, color ${t("inputtext.transition.duration")}, border-color ${t("inputtext.transition.duration")}, outline-color ${t("inputtext.transition.duration")}, box-shadow ${t("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${t("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${t("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
    box-shadow: ${t("inputtext.focus.ring.shadow")};
    outline: ${t("inputtext.focus.ring.width")} ${t("inputtext.focus.ring.style")} ${t("inputtext.focus.ring.color")};
    outline-offset: ${t("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${t("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${t("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${t("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${t("inputtext.disabled.background")};
    color: ${t("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${t("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${t("inputtext.sm.font.size")};
    padding-block: ${t("inputtext.sm.padding.y")};
    padding-inline: ${t("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${t("inputtext.lg.font.size")};
    padding-block: ${t("inputtext.lg.padding.y")};
    padding-inline: ${t("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,Ws={root:({instance:t,props:n})=>["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":n.size==="small","p-inputtext-lg":n.size==="large","p-invalid":n.invalid,"p-variant-filled":n.variant==="filled","p-inputtext-fluid":n.fluid}]},wo=(()=>{class t extends se{name="inputtext";theme=Us;classes=Ws;static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Eo=(()=>{class t extends me{ngModel;variant;fluid;pSize;filled;_componentStyle=B(wo);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return De(this.fluid)?!!i:this.fluid}constructor(e){super(),this.ngModel=e}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(i){return new(i||t)(D(yi,8))};static \u0275dir=Ce({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(i,o){if(i&1&&w("input",function(c){return o.onInput(c)}),i&2){let s;cn("p-filled",o.filled)("p-variant-filled",((s=o.variant)!==null&&s!==void 0?s:o.config.inputStyle()||o.config.inputVariant())==="filled")("p-inputtext-fluid",o.hasFluid)("p-inputtext-sm",o.pSize==="small")("p-inputfield-sm",o.pSize==="small")("p-inputtext-lg",o.pSize==="large")("p-inputfield-lg",o.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",U],pSize:"pSize"},features:[ue([wo]),J]})}return t})();var St=class t{static isArray(n,e=!0){return Array.isArray(n)&&(e||n.length!==0)}static isObject(n,e=!0){return typeof n=="object"&&!Array.isArray(n)&&n!=null&&(e||Object.keys(n).length!==0)}static equals(n,e,i){return i?this.resolveFieldData(n,i)===this.resolveFieldData(e,i):this.equalsByValue(n,e)}static equalsByValue(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){var i=Array.isArray(n),o=Array.isArray(e),s,c,u;if(i&&o){if(c=n.length,c!=e.length)return!1;for(s=c;s--!==0;)if(!this.equalsByValue(n[s],e[s]))return!1;return!0}if(i!=o)return!1;var m=this.isDate(n),f=this.isDate(e);if(m!=f)return!1;if(m&&f)return n.getTime()==e.getTime();var g=n instanceof RegExp,v=e instanceof RegExp;if(g!=v)return!1;if(g&&v)return n.toString()==e.toString();var b=Object.keys(n);if(c=b.length,c!==Object.keys(e).length)return!1;for(s=c;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,b[s]))return!1;for(s=c;s--!==0;)if(u=b[s],!this.equalsByValue(n[u],e[u]))return!1;return!0}return n!==n&&e!==e}static resolveFieldData(n,e){if(n&&e){if(this.isFunction(e))return e(n);if(e.indexOf(".")==-1)return n[e];{let i=e.split("."),o=n;for(let s=0,c=i.length;s<c;++s){if(o==null)return null;o=o[i[s]]}return o}}else return null}static isFunction(n){return!!(n&&n.constructor&&n.call&&n.apply)}static reorderArray(n,e,i){let o;n&&e!==i&&(i>=n.length&&(i%=n.length,e%=n.length),n.splice(i,0,n.splice(e,1)[0]))}static insertIntoOrderedArray(n,e,i,o){if(i.length>0){let s=!1;for(let c=0;c<i.length;c++)if(this.findIndexInList(i[c],o)>e){i.splice(c,0,n),s=!0;break}s||i.push(n)}else i.push(n)}static findIndexInList(n,e){let i=-1;if(e){for(let o=0;o<e.length;o++)if(e[o]==n){i=o;break}}return i}static contains(n,e){if(n!=null&&e&&e.length){for(let i of e)if(this.equals(n,i))return!0}return!1}static removeAccents(n){return n&&(n=n.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),n}static isDate(n){return Object.prototype.toString.call(n)==="[object Date]"}static isEmpty(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!this.isDate(n)&&typeof n=="object"&&Object.keys(n).length===0}static isNotEmpty(n){return!this.isEmpty(n)}static compare(n,e,i,o=1){let s=-1,c=this.isEmpty(n),u=this.isEmpty(e);return c&&u?s=0:c?s=o:u?s=-o:typeof n=="string"&&typeof e=="string"?s=n.localeCompare(e,i,{numeric:!0}):s=n<e?-1:n>e?1:0,s}static sort(n,e,i=1,o,s=1){let c=t.compare(n,e,o,i),u=i;return(t.isEmpty(n)||t.isEmpty(e))&&(u=s===1?i:s),u*c}static merge(n,e){if(!(n==null&&e==null)){{if((n==null||typeof n=="object")&&(e==null||typeof e=="object"))return R(R({},n||{}),e||{});if((n==null||typeof n=="string")&&(e==null||typeof e=="string"))return[n||"",e||""].join(" ")}return e||n}}static isPrintableCharacter(n=""){return this.isNotEmpty(n)&&n.length===1&&n.match(/\S| /)}static getItemValue(n,...e){return this.isFunction(n)?n(...e):n}static findLastIndex(n,e){let i=-1;if(this.isNotEmpty(n))try{i=n.findLastIndex(e)}catch{i=n.lastIndexOf([...n].reverse().find(e))}return i}static findLast(n,e){let i;if(this.isNotEmpty(n))try{i=n.findLast(e)}catch{i=[...n].reverse().find(e)}return i}static deepEquals(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){var i=Array.isArray(n),o=Array.isArray(e),s,c,u;if(i&&o){if(c=n.length,c!=e.length)return!1;for(s=c;s--!==0;)if(!this.deepEquals(n[s],e[s]))return!1;return!0}if(i!=o)return!1;var m=n instanceof Date,f=e instanceof Date;if(m!=f)return!1;if(m&&f)return n.getTime()==e.getTime();var g=n instanceof RegExp,v=e instanceof RegExp;if(g!=v)return!1;if(g&&v)return n.toString()==e.toString();var b=Object.keys(n);if(c=b.length,c!==Object.keys(e).length)return!1;for(s=c;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,b[s]))return!1;for(s=c;s--!==0;)if(u=b[s],!this.deepEquals(n[u],e[u]))return!1;return!0}return n!==n&&e!==e}static minifyCSS(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(n){return this.isString(n)?n.replace(/(-|_)/g,"").toLowerCase():n}static isString(n,e=!0){return typeof n=="string"&&(e||n!=="")}};function Gs(){let t=[],n=(s,c)=>{let u=t.length>0?t[t.length-1]:{key:s,value:c},m=u.value+(u.key===s?0:c)+2;return t.push({key:s,value:m}),m},e=s=>{t=t.filter(c=>c.value!==s)},i=()=>t.length>0?t[t.length-1].value:0,o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,c,u)=>{c&&(c.style.zIndex=String(n(s,u)))},clear:s=>{s&&(e(o(s)),s.style.zIndex="")},getCurrent:()=>i(),generateZIndex:n,revertZIndex:e}}var Xi=Gs();var To=["content"],Ks=["overlay"],qs=["*"],Qs=(t,n,e,i,o,s,c,u,m,f,g,v,b,S)=>({"p-overlay p-component":!0,"p-overlay-modal p-overlay-mask p-overlay-mask-enter":t,"p-overlay-center":n,"p-overlay-top":e,"p-overlay-top-start":i,"p-overlay-top-end":o,"p-overlay-bottom":s,"p-overlay-bottom-start":c,"p-overlay-bottom-end":u,"p-overlay-left":m,"p-overlay-left-start":f,"p-overlay-left-end":g,"p-overlay-right":v,"p-overlay-right-start":b,"p-overlay-right-end":S}),Zs=(t,n,e)=>({showTransitionParams:t,hideTransitionParams:n,transform:e}),Ys=t=>({value:"visible",params:t}),Js=t=>({mode:t}),Xs=t=>({$implicit:t});function ea(t,n){t&1&&le(0)}function ta(t,n){if(t&1){let e=H();a(0,"div",3,1),w("click",function(o){x(e);let s=h(2);return C(s.onOverlayContentClick(o))})("@overlayContentAnimation.start",function(o){x(e);let s=h(2);return C(s.onOverlayContentAnimationStart(o))})("@overlayContentAnimation.done",function(o){x(e);let s=h(2);return C(s.onOverlayContentAnimationDone(o))}),Be(2),_(3,ea,1,0,"ng-container",4),l()}if(t&2){let e=h(2);X(e.contentStyleClass),d("ngStyle",e.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",z(11,Ys,yt(7,Zs,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),p(3),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",z(15,Xs,z(13,Js,e.overlayMode)))}}function ia(t,n){if(t&1){let e=H();a(0,"div",3,0),w("click",function(){x(e);let o=h();return C(o.onOverlayClick())}),_(2,ta,4,17,"div",2),l()}if(t&2){let e=h();X(e.styleClass),d("ngStyle",e.style)("ngClass",Rn(5,Qs,[e.modal,e.modal&&e.overlayResponsiveDirection==="center",e.modal&&e.overlayResponsiveDirection==="top",e.modal&&e.overlayResponsiveDirection==="top-start",e.modal&&e.overlayResponsiveDirection==="top-end",e.modal&&e.overlayResponsiveDirection==="bottom",e.modal&&e.overlayResponsiveDirection==="bottom-start",e.modal&&e.overlayResponsiveDirection==="bottom-end",e.modal&&e.overlayResponsiveDirection==="left",e.modal&&e.overlayResponsiveDirection==="left-start",e.modal&&e.overlayResponsiveDirection==="left-end",e.modal&&e.overlayResponsiveDirection==="right",e.modal&&e.overlayResponsiveDirection==="right-start",e.modal&&e.overlayResponsiveDirection==="right-end"])),p(2),d("ngIf",e.visible)}}var na=({dt:t})=>`
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}
`,Io=(()=>{class t extends se{name="overlay";theme=na;static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})(),oa=gi([ce({transform:"{{transform}}",opacity:0}),Pe("{{showTransitionParams}}")]),ra=gi([Pe("{{hideTransitionParams}}",ce({transform:"{{transform}}",opacity:0}))]),Oo=(()=>{class t extends me{overlayService;zone;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return St.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return St.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return St.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return St.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get appendTo(){return this._appendTo||this.overlayOptions?.appendTo}set appendTo(e){this._appendTo=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}visibleChange=new L;onBeforeShow=new L;onShow=new L;onBeforeHide=new L;onHide=new L;onAnimationStart=new L;onAnimationDone=new L;overlayViewChild;contentViewChild;contentTemplate;templates;_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_appendTo;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=B(Io);documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(Ve(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return R(R({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return R(R({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return no(this.target,this.el?.nativeElement)}constructor(e,i){super(),this.overlayService=e,this.zone=i}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}show(e,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&Oe(this.targetEl),this.modal&&qt(this.document?.body,"p-overflow-hidden")}hide(e,i=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&Oe(this.targetEl),this.modal&&bt(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&ft.alignOverlay(this.overlayEl,this.targetEl,this.appendTo)}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&Xi.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),ft.appendOverlay(this.overlayEl,this.appendTo==="body"?this.document.body:this.appendTo,this.appendTo),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&qt(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){let i=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.visible&&(this.show(i,!0),this.bindListeners());break;case"void":if(!this.visible){this.hide(i,!0),this.modalVisible=!1,this.unbindListeners(),ft.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),Xi.clear(i),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",e)}handleEvents(e,i){this[e].emit(i),this.options&&this.options[e]&&this.options[e](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](i)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Zi(this.targetEl,e=>{(this.listener?this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}):!0)&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let o=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&o}):o)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!xt()}):!xt())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!xt()}):!xt())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&(ft.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),Xi.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(D(Gi),D(qe))};static \u0275cmp=M({type:t,selectors:[["p-overlay"]],contentQueries:function(i,o,s){if(i&1&&(Y(s,To,4),Y(s,We,4)),i&2){let c;I(c=O())&&(o.contentTemplate=c.first),I(c=O())&&(o.templates=c)}},viewQuery:function(i,o){if(i&1&&(re(Ks,5),re(To,5)),i&2){let s;I(s=O())&&(o.overlayViewChild=s.first),I(s=O())&&(o.contentViewChild=s.first)}},inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",appendTo:"appendTo",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options"},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[ue([Io]),J],ngContentSelectors:qs,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"click","ngStyle","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&(Ne(),_(0,ia,3,20,"div",2)),i&2&&d("ngIf",o.modalVisible)},dependencies:[q,pe,ne,it,Tt,Ze],encapsulation:2,data:{animation:[ot("overlayContentAnimation",[He(":enter",[_i(oa)]),He(":leave",[_i(ra)])])]},changeDetection:0})}return t})();var sa=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,aa={root:"p-ink"},ko=(()=>{class t extends se{name="ripple";theme=sa;classes=aa;static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Ao=(()=>{class t extends me{zone=B(qe);_componentStyle=B(ko);animationListener;mouseDownListener;timeout;constructor(){super(),vt(()=>{Ve(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(bt(i,"p-ink-active"),!ze(i)&&!je(i)){let u=Math.max(eo(this.el.nativeElement),io(this.el.nativeElement));i.style.height=u+"px",i.style.width=u+"px"}let o=to(this.el.nativeElement),s=e.pageX-o.left+this.document.body.scrollTop-je(i)/2,c=e.pageY-o.top+this.document.body.scrollLeft-ze(i)/2;this.renderer.setStyle(i,"top",c+"px"),this.renderer.setStyle(i,"left",s+"px"),qt(i,"p-ink-active"),this.timeout=setTimeout(()=>{let u=this.getInk();u&&bt(u,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&bt(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),bt(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,oo(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Ce({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[ue([ko]),J]})}return t})();var Fo=["content"],la=["item"],ca=["loader"],ua=["loadericon"],da=["element"],pa=["*"],ma=(t,n,e)=>({"p-virtualscroller":!0,"p-virtualscroller-inline":t,"p-virtualscroller-both p-both-scroll":n,"p-virtualscroller-horizontal p-horizontal-scroll":e}),In=(t,n)=>({$implicit:t,options:n}),ha=t=>({"p-virtualscroller-content":!0,"p-virtualscroller-loading ":t}),fa=t=>({"p-virtualscroller-loader-mask":t}),ga=t=>({numCols:t}),Vo=t=>({options:t}),_a=()=>({styleClass:"p-virtualscroller-loading-icon"}),ya=(t,n)=>({rows:t,columns:n});function va(t,n){t&1&&le(0)}function ba(t,n){if(t&1&&(te(0),_(1,va,1,0,"ng-container",10),ie()),t&2){let e=h(2);p(),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Le(2,In,e.loadedItems,e.getContentOptions()))}}function xa(t,n){t&1&&le(0)}function Ca(t,n){if(t&1&&(te(0),_(1,xa,1,0,"ng-container",10),ie()),t&2){let e=n.$implicit,i=n.index,o=h(3);p(),d("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",Le(2,In,e,o.getOptions(i)))}}function Sa(t,n){if(t&1&&(a(0,"div",11,3),_(2,Ca,2,5,"ng-container",12),l()),t&2){let e=h(2);_t(e.contentStyle),X(e.contentStyleClass),d("ngClass",z(8,ha,e.d_loading)),F("data-pc-section","content"),p(2),d("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function wa(t,n){if(t&1&&y(0,"div",13),t&2){let e=h(2);d("ngStyle",e.spacerStyle),F("data-pc-section","spacer")}}function Ea(t,n){t&1&&le(0)}function Ta(t,n){if(t&1&&(te(0),_(1,Ea,1,0,"ng-container",10),ie()),t&2){let e=n.index,i=h(4);p(),d("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",z(4,Vo,i.getLoaderOptions(e,i.both&&z(2,ga,i.numItemsInViewport.cols))))}}function Ia(t,n){if(t&1&&(te(0),_(1,Ta,2,6,"ng-container",15),ie()),t&2){let e=h(3);p(),d("ngForOf",e.loaderArr)}}function Oa(t,n){t&1&&le(0)}function ka(t,n){if(t&1&&(te(0),_(1,Oa,1,0,"ng-container",10),ie()),t&2){let e=h(4);p(),d("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",z(3,Vo,hi(2,_a)))}}function Aa(t,n){t&1&&y(0,"SpinnerIcon",16),t&2&&(d("styleClass","p-virtualscroller-loading-icon pi-spin"),F("data-pc-section","loadingIcon"))}function Fa(t,n){if(t&1&&_(0,ka,2,5,"ng-container",6)(1,Aa,1,2,"ng-template",null,5,ve),t&2){let e=Fe(2),i=h(3);d("ngIf",i.loaderIconTemplate||i._loaderIconTemplate)("ngIfElse",e)}}function La(t,n){if(t&1&&(a(0,"div",14),_(1,Ia,2,1,"ng-container",6)(2,Fa,3,2,"ng-template",null,4,ve),l()),t&2){let e=Fe(3),i=h(2);d("ngClass",z(4,fa,!i.loaderTemplate)),F("data-pc-section","loader"),p(),d("ngIf",i.loaderTemplate||i._loaderTemplate)("ngIfElse",e)}}function Va(t,n){if(t&1){let e=H();te(0),a(1,"div",7,1),w("scroll",function(o){x(e);let s=h();return C(s.onContainerScroll(o))}),_(3,ba,2,5,"ng-container",6)(4,Sa,3,10,"ng-template",null,2,ve)(6,wa,1,2,"div",8)(7,La,4,6,"div",9),l(),ie()}if(t&2){let e=Fe(5),i=h();p(),X(i._styleClass),d("ngStyle",i._style)("ngClass",yt(12,ma,i.inline,i.both,i.horizontal)),F("id",i._id)("tabindex",i.tabindex)("data-pc-name","scroller")("data-pc-section","root"),p(2),d("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",e),p(3),d("ngIf",i._showSpacer),p(),d("ngIf",!i.loaderDisabled&&i._showLoader&&i.d_loading)}}function Pa(t,n){t&1&&le(0)}function Da(t,n){if(t&1&&(te(0),_(1,Pa,1,0,"ng-container",10),ie()),t&2){let e=h(2);p(),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Le(5,In,e.items,Le(2,ya,e._items,e.loadedColumns)))}}function Ma(t,n){if(t&1&&(Be(0),_(1,Da,2,8,"ng-container",17)),t&2){let e=h();p(),d("ngIf",e.contentTemplate||e._contentTemplate)}}var Ra=({dt:t})=>`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${t("virtualscroller.loader.mask.background")};
    color: ${t("virtualscroller.loader.mask.color")};
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: ${t("virtualscroller.loader.icon.size")};
    width: ${t("virtualscroller.loader.icon.size")};
    height: ${t("virtualscroller.loader.icon.size")};
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,Lo=(()=>{class t extends se{name="virtualscroller";theme=Ra;static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Po=(()=>{class t extends me{zone;get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&(Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o)),Object.entries(e).forEach(([i,o])=>this[`${i}`]!==o&&(this[`${i}`]=o)))}onLazyLoad=new L;onScroll=new L;onScrollIndexChange=new L;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(e){this._contentStyleClass=e}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:e.slice(this._appendOnly?0:this.first.cols,this.last.cols)):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=B(Lo);constructor(e){super(),this.zone=e}ngOnInit(){super.ngOnInit(),this.setInitialState()}ngOnChanges(e){super.ngOnChanges(e);let i=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),e.loading){let{previousValue:o,currentValue:s}=e.loading;this.lazy&&o!==s&&s!==this.d_loading&&(this.d_loading=s,i=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:o,currentValue:s}=e.numToleratedItems;o!==s&&s!==this.d_numToleratedItems&&(this.d_numToleratedItems=s)}if(e.options){let{previousValue:o,currentValue:s}=e.options;this.lazy&&o?.loading!==s?.loading&&s?.loading!==this.d_loading&&(this.d_loading=s.loading,i=!0),o?.numToleratedItems!==s?.numToleratedItems&&s?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=s.numToleratedItems)}this.initialized&&!i&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),Promise.resolve().then(()=>{this.viewInit()})}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1,super.ngOnDestroy()}viewInit(){Ve(this.platformId)&&!this.initialized&&vn(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=je(this.elementViewChild?.nativeElement),this.defaultHeight=ze(this.elementViewChild?.nativeElement),this.defaultContentWidth=je(this.contentEl),this.defaultContentHeight=ze(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||Nt(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,this.d_loading=this._loading||!1,this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=[]}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,i="auto"){if(this.both?e.every(s=>s>-1):e>-1){let s=this.first,{scrollTop:c=0,scrollLeft:u=0}=this.elementViewChild?.nativeElement,{numToleratedItems:m}=this.calculateNumItems(),f=this.getContentPosition(),g=this.itemSize,v=(V=0,N)=>V<=N?0:V,b=(V,N,ae)=>V*N+ae,S=(V=0,N=0)=>this.scrollTo({left:V,top:N,behavior:i}),T=this.both?{rows:0,cols:0}:0,j=!1,k=!1;this.both?(T={rows:v(e[0],m[0]),cols:v(e[1],m[1])},S(b(T.cols,g[1],f.left),b(T.rows,g[0],f.top)),k=this.lastScrollPos.top!==c||this.lastScrollPos.left!==u,j=T.rows!==s.rows||T.cols!==s.cols):(T=v(e,m),this.horizontal?S(b(T,g,f.left),c):S(u,b(T,g,f.top)),k=this.lastScrollPos!==(this.horizontal?u:c),j=T!==s),this.isRangeChanged=j,k&&(this.first=T)}}scrollInView(e,i,o="auto"){if(i){let{first:s,viewport:c}=this.getRenderedRange(),u=(g=0,v=0)=>this.scrollTo({left:g,top:v,behavior:o}),m=i==="to-start",f=i==="to-end";if(m){if(this.both)c.first.rows-s.rows>e[0]?u(c.first.cols*this._itemSize[1],(c.first.rows-1)*this._itemSize[0]):c.first.cols-s.cols>e[1]&&u((c.first.cols-1)*this._itemSize[1],c.first.rows*this._itemSize[0]);else if(c.first-s>e){let g=(c.first-1)*this._itemSize;this.horizontal?u(g,0):u(0,g)}}else if(f){if(this.both)c.last.rows-s.rows<=e[0]+1?u(c.first.cols*this._itemSize[1],(c.first.rows+1)*this._itemSize[0]):c.last.cols-s.cols<=e[1]+1&&u((c.first.cols+1)*this._itemSize[1],c.first.rows*this._itemSize[0]);else if(c.last-s<=e+1){let g=(c.first+1)*this._itemSize;this.horizontal?u(g,0):u(0,g)}}}else this.scrollToIndex(e,o)}getRenderedRange(){let e=(s,c)=>c||s?Math.floor(s/(c||s)):0,i=this.first,o=0;if(this.elementViewChild?.nativeElement){let{scrollTop:s,scrollLeft:c}=this.elementViewChild.nativeElement;if(this.both)i={rows:e(s,this._itemSize[0]),cols:e(c,this._itemSize[1])},o={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{let u=this.horizontal?c:s;i=e(u,this._itemSize),o=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:o}}}calculateNumItems(){let e=this.getContentPosition(),i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,o=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,s=(f,g)=>g||f?Math.ceil(f/(g||f)):0,c=f=>Math.ceil(f/2),u=this.both?{rows:s(o,this._itemSize[0]),cols:s(i,this._itemSize[1])}:s(this.horizontal?i:o,this._itemSize),m=this.d_numToleratedItems||(this.both?[c(u.rows),c(u.cols)]:c(u));return{numItemsInViewport:u,numToleratedItems:m}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:i}=this.calculateNumItems(),o=(u,m,f,g=!1)=>this.getLast(u+m+(u<f?2:3)*f,g),s=this.first,c=this.both?{rows:o(this.first.rows,e.rows,i[0]),cols:o(this.first.cols,e.cols,i[1],!0)}:o(this.first,e,i);this.last=c,this.numItemsInViewport=e,this.d_numToleratedItems=i,this.showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:s.cols}:0:s,last:Math.min(this._step?this._step:this.last,this.items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,i]=[je(this.contentEl),ze(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),i!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[o,s]=[je(this.elementViewChild.nativeElement),ze(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=o<this.defaultWidth?o+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=s<this.defaultHeight?s+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,i=!1){return this._items?Math.min(i?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),i=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),o=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),s=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),c=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:i,right:o,top:s,bottom:c,x:i+o,y:s+c}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement.parentElement.parentElement,i=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||e.offsetWidth}px`,o=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||e.offsetHeight}px`,s=(c,u)=>this.elementViewChild.nativeElement.style[c]=u;this.both||this.horizontal?(s("height",o),s("width",i)):s("height",o)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),i=(o,s,c,u=0)=>this.spacerStyle=rn(R({},this.spacerStyle),{[`${o}`]:(s||[]).length*c+u+"px"});this.both?(i("height",this._items,this._itemSize[0],e.y),i("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?i("width",this._columns||this._items,this._itemSize,e.x):i("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let i=e?e.first:this.first,o=(c,u)=>c*u,s=(c=0,u=0)=>this.contentStyle=rn(R({},this.contentStyle),{transform:`translate3d(${c}px, ${u}px, 0)`});if(this.both)s(o(i.cols,this._itemSize[1]),o(i.rows,this._itemSize[0]));else{let c=o(i,this._itemSize);this.horizontal?s(c,0):s(0,c)}}}onScrollPositionChange(e){let i=e.target,o=this.getContentPosition(),s=(k,V)=>k?k>V?k-V:k:0,c=(k,V)=>V||k?Math.floor(k/(V||k)):0,u=(k,V,N,ae,oe,Ee)=>k<=oe?oe:Ee?N-ae-oe:V+oe-1,m=(k,V,N,ae,oe,Ee,Ge)=>k<=Ee?0:Math.max(0,Ge?k<V?N:k-Ee:k>V?N:k-2*Ee),f=(k,V,N,ae,oe,Ee=!1)=>{let Ge=V+ae+2*oe;return k>=oe&&(Ge+=oe+1),this.getLast(Ge,Ee)},g=s(i.scrollTop,o.top),v=s(i.scrollLeft,o.left),b=this.both?{rows:0,cols:0}:0,S=this.last,T=!1,j=this.lastScrollPos;if(this.both){let k=this.lastScrollPos.top<=g,V=this.lastScrollPos.left<=v;if(!this._appendOnly||this._appendOnly&&(k||V)){let N={rows:c(g,this._itemSize[0]),cols:c(v,this._itemSize[1])},ae={rows:u(N.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],k),cols:u(N.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],V)};b={rows:m(N.rows,ae.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],k),cols:m(N.cols,ae.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],V)},S={rows:f(N.rows,b.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:f(N.cols,b.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},T=b.rows!==this.first.rows||S.rows!==this.last.rows||b.cols!==this.first.cols||S.cols!==this.last.cols||this.isRangeChanged,j={top:g,left:v}}}else{let k=this.horizontal?v:g,V=this.lastScrollPos<=k;if(!this._appendOnly||this._appendOnly&&V){let N=c(k,this._itemSize),ae=u(N,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,V);b=m(N,ae,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,V),S=f(N,b,this.last,this.numItemsInViewport,this.d_numToleratedItems),T=b!==this.first||S!==this.last||this.isRangeChanged,j=k}}return{first:b,last:S,isRangeChanged:T,scrollPos:j}}onScrollChange(e){let{first:i,last:o,isRangeChanged:s,scrollPos:c}=this.onScrollPositionChange(e);if(s){let u={first:i,last:o};if(this.setContentPosition(u),this.first=i,this.last=o,this.lastScrollPos=c,this.handleEvents("onScrollIndexChange",u),this._lazy&&this.isPageChanged(i)){let m={first:this._step?Math.min(this.getPageByFirst(i)*this._step,this.items.length-this._step):i,last:Math.min(this._step?(this.getPageByFirst(i)+1)*this._step:o,this.items.length)};(this.lazyLoadState.first!==m.first||this.lazyLoadState.last!==m.last)&&this.handleEvents("onLazyLoad",m),this.lazyLoadState=m}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){let{isRangeChanged:i}=this.onScrollPositionChange(e);(i||(this._step?this.isPageChanged():!1))&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this.showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){Ve(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,i=xt()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,i,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(vn(this.elementViewChild?.nativeElement)){let[e,i]=[je(this.elementViewChild?.nativeElement),ze(this.elementViewChild?.nativeElement)],[o,s]=[e!==this.defaultWidth,i!==this.defaultHeight];(this.both?o||s:this.horizontal?o:this.vertical?s:!1)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=i,this.defaultContentWidth=je(this.contentEl),this.defaultContentHeight=ze(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,i){return this.options&&this.options[e]?this.options[e](i):this[e].emit(i)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,i)=>this.getLoaderOptions(e,i),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both}}getOptions(e){let i=(this._items||[]).length,o=this.both?this.first.rows+e:this.first+e;return{index:o,count:i,first:o===0,last:o===i-1,even:o%2===0,odd:o%2!==0}}getLoaderOptions(e,i){let o=this.loaderArr.length;return R({index:e,count:o,first:e===0,last:e===o-1,even:e%2===0,odd:e%2!==0},i)}static \u0275fac=function(i){return new(i||t)(D(qe))};static \u0275cmp=M({type:t,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(i,o,s){if(i&1&&(Y(s,Fo,4),Y(s,la,4),Y(s,ca,4),Y(s,ua,4),Y(s,We,4)),i&2){let c;I(c=O())&&(o.contentTemplate=c.first),I(c=O())&&(o.itemTemplate=c.first),I(c=O())&&(o.loaderTemplate=c.first),I(c=O())&&(o.loaderIconTemplate=c.first),I(c=O())&&(o.templates=c)}},viewQuery:function(i,o){if(i&1&&(re(da,5),re(Fo,5)),i&2){let s;I(s=O())&&(o.elementViewChild=s.first),I(s=O())&&(o.contentViewChild=s.first)}},hostVars:2,hostBindings:function(i,o){i&2&&Xe("height",o.height)},inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[ue([Lo]),J,Ke],ngContentSelectors:pa,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","ngClass"],["class","p-virtualscroller-spacer",3,"ngStyle",4,"ngIf"],["class","p-virtualscroller-loader",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-virtualscroller-spacer",3,"ngStyle"],[1,"p-virtualscroller-loader",3,"ngClass"],[4,"ngFor","ngForOf"],[3,"styleClass"],[4,"ngIf"]],template:function(i,o){if(i&1&&(Ne(),_(0,Va,8,16,"ng-container",6)(1,Ma,2,1,"ng-template",null,0,ve)),i&2){let s=Fe(2);d("ngIf",!o._disabled)("ngIfElse",s)}},dependencies:[q,pe,be,ne,it,Tt,Yi,Ze],encapsulation:2})}return t})();var Na=["item"],Ba=["empty"],$a=["header"],Ha=["footer"],za=["selecteditem"],ja=["group"],Ua=["loader"],Wa=["removeicon"],Ga=["loadingicon"],Ka=["clearicon"],qa=["dropdownicon"],Qa=["container"],Za=["focusInput"],Ya=["multiIn"],Ja=["multiContainer"],Xa=["ddBtn"],el=["items"],tl=["scroller"],il=["overlay"],nl=t=>({"p-autocomplete-chip-item":!0,"p-focus":t}),Mo=t=>({$implicit:t}),ol=(t,n)=>({class:"p-autocomplete-chip-icon",removeCallback:t,index:n}),en=t=>({height:t}),Ro=(t,n)=>({$implicit:t,options:n}),rl=t=>({options:t}),sl=()=>({}),al=(t,n)=>({$implicit:t,index:n});function ll(t,n){if(t&1){let e=H();a(0,"input",19,3),w("input",function(o){x(e);let s=h();return C(s.onInput(o))})("keydown",function(o){x(e);let s=h();return C(s.onKeyDown(o))})("change",function(o){x(e);let s=h();return C(s.onInputChange(o))})("focus",function(o){x(e);let s=h();return C(s.onInputFocus(o))})("blur",function(o){x(e);let s=h();return C(s.onInputBlur(o))})("paste",function(o){x(e);let s=h();return C(s.onInputPaste(o))})("keyup",function(o){x(e);let s=h();return C(s.onInputKeyUp(o))}),l()}if(t&2){let e,i=h();X(i.inputStyleClass),d("pAutoFocus",i.autofocus)("ngClass","p-autocomplete-input")("ngStyle",i.inputStyle)("type",i.type)("variant",i.variant)("autocomplete",i.autocomplete)("required",i.required)("name",i.name)("pSize",i.size)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled)("fluid",i.hasFluid),F("value",i.inputValue())("id",i.inputId)("placeholder",i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function cl(t,n){if(t&1){let e=H();a(0,"TimesIcon",22),w("click",function(){x(e);let o=h(2);return C(o.clear())}),l()}t&2&&(d("styleClass","p-autocomplete-clear-icon"),F("aria-hidden",!0))}function ul(t,n){}function dl(t,n){t&1&&_(0,ul,0,0,"ng-template")}function pl(t,n){if(t&1){let e=H();a(0,"span",23),w("click",function(){x(e);let o=h(2);return C(o.clear())}),_(1,dl,1,0,null,24),l()}if(t&2){let e=h(2);F("aria-hidden",!0),p(),d("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function ml(t,n){if(t&1&&(te(0),_(1,cl,1,2,"TimesIcon",20)(2,pl,2,2,"span",21),ie()),t&2){let e=h();p(),d("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),p(),d("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function hl(t,n){t&1&&le(0)}function fl(t,n){if(t&1){let e=H();a(0,"span",33),w("click",function(o){x(e);let s=h(3).index,c=h(2);return C(c.readonly?"":c.removeOption(o,s))}),y(1,"TimesCircleIcon",34),l()}t&2&&(p(),d("styleClass","p-autocomplete-chip-icon"),F("aria-hidden",!0))}function gl(t,n){t&1&&(te(0),_(1,fl,2,2,"ng-template",null,6,ve),ie())}function _l(t,n){if(t&1){let e=H();a(0,"p-chip",32),w("onRemove",function(o){x(e);let s=h().index,c=h(2);return C(c.readonly?"":c.removeOption(o,s))}),_(1,gl,3,0,"ng-container",15),l()}if(t&2){let e=h().$implicit,i=h(2);d("label",i.getOptionLabel(e))("removable",!0),p(),d("ngIf",!i.removeIconTemplate&&!i._removeIconTemplate)}}function yl(t,n){}function vl(t,n){t&1&&_(0,yl,0,0,"ng-template")}function bl(t,n){if(t&1&&(a(0,"span"),_(1,vl,1,0,null,30),l()),t&2){let e=h().index,i=h(2);p(),d("ngTemplateOutlet",i.removeIconTemplate||i._removeIconTemplate)("ngTemplateOutletContext",Le(2,ol,i.removeOption.bind(i),e))}}function xl(t,n){if(t&1&&(a(0,"li",29,5),_(2,hl,1,0,"ng-container",30)(3,_l,2,3,"p-chip",31)(4,bl,2,5,"span",15),l()),t&2){let e=n.$implicit,i=n.index,o=h(2);d("ngClass",z(10,nl,o.focusedMultipleOptionIndex()===i)),F("id",o.id+"_multiple_option_"+i)("aria-label",o.getOptionLabel(e))("aria-setsize",o.modelValue().length)("aria-posinset",i+1)("aria-selected",!0),p(2),d("ngTemplateOutlet",o.selectedItemTemplate||o._selectedItemTemplate)("ngTemplateOutletContext",z(12,Mo,e)),p(),d("ngIf",!o.selectedItemTemplate&&!o._selectedItemTemplate),p(),d("ngIf",o.removeIconTemplate||o._removeIconTemplate)}}function Cl(t,n){if(t&1){let e=H();a(0,"ul",25,4),w("focus",function(o){x(e);let s=h();return C(s.onMultipleContainerFocus(o))})("blur",function(o){x(e);let s=h();return C(s.onMultipleContainerBlur(o))})("keydown",function(o){x(e);let s=h();return C(s.onMultipleContainerKeyDown(o))}),_(2,xl,5,14,"li",26),a(3,"li",27)(4,"input",28,3),w("input",function(o){x(e);let s=h();return C(s.onInput(o))})("keydown",function(o){x(e);let s=h();return C(s.onKeyDown(o))})("change",function(o){x(e);let s=h();return C(s.onInputChange(o))})("focus",function(o){x(e);let s=h();return C(s.onInputFocus(o))})("blur",function(o){x(e);let s=h();return C(s.onInputBlur(o))})("paste",function(o){x(e);let s=h();return C(s.onInputPaste(o))})("keyup",function(o){x(e);let s=h();return C(s.onInputKeyUp(o))}),l()()()}if(t&2){let e,i=h();d("ngClass",i.inputMultipleClass)("tabindex",-1),F("aria-orientation","horizontal")("aria-activedescendant",i.focused?i.focusedMultipleOptionId:void 0),p(2),d("ngForOf",i.modelValue()),p(2),X(i.inputStyleClass),d("pAutoFocus",i.autofocus)("ngClass",i.inputClass)("ngStyle",i.inputStyle)("autocomplete",i.autocomplete)("required",i.required)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled),F("type",i.type)("id",i.inputId)("name",i.name)("placeholder",i.filled?null:i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function Sl(t,n){t&1&&y(0,"SpinnerIcon",37),t&2&&(d("styleClass","p-autocomplete-loader")("spin",!0),F("aria-hidden",!0))}function wl(t,n){}function El(t,n){t&1&&_(0,wl,0,0,"ng-template")}function Tl(t,n){if(t&1&&(a(0,"span",38),_(1,El,1,0,null,24),l()),t&2){let e=h(2);F("aria-hidden",!0),p(),d("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Il(t,n){if(t&1&&(te(0),_(1,Sl,1,3,"SpinnerIcon",35)(2,Tl,2,2,"span",36),ie()),t&2){let e=h();p(),d("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),p(),d("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Ol(t,n){if(t&1&&y(0,"span",41),t&2){let e=h(2);d("ngClass",e.dropdownIcon),F("aria-hidden",!0)}}function kl(t,n){t&1&&y(0,"ChevronDownIcon")}function Al(t,n){}function Fl(t,n){t&1&&_(0,Al,0,0,"ng-template")}function Ll(t,n){if(t&1&&(te(0),_(1,kl,1,0,"ChevronDownIcon",15)(2,Fl,1,0,null,24),ie()),t&2){let e=h(2);p(),d("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),p(),d("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Vl(t,n){if(t&1){let e=H();a(0,"button",39,7),w("click",function(o){x(e);let s=h();return C(s.handleDropdownClick(o))}),_(2,Ol,1,2,"span",40)(3,Ll,3,2,"ng-container",15),l()}if(t&2){let e=h();d("disabled",e.disabled),F("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),p(2),d("ngIf",e.dropdownIcon),p(),d("ngIf",!e.dropdownIcon)}}function Pl(t,n){t&1&&le(0)}function Dl(t,n){t&1&&le(0)}function Ml(t,n){if(t&1&&_(0,Dl,1,0,"ng-container",30),t&2){let e=n.$implicit,i=n.options;h(2);let o=Fe(6);d("ngTemplateOutlet",o)("ngTemplateOutletContext",Le(2,Ro,e,i))}}function Rl(t,n){t&1&&le(0)}function Nl(t,n){if(t&1&&_(0,Rl,1,0,"ng-container",30),t&2){let e=n.options,i=h(4);d("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",z(2,rl,e))}}function Bl(t,n){t&1&&(te(0),_(1,Nl,1,4,"ng-template",null,10,ve),ie())}function $l(t,n){if(t&1){let e=H();a(0,"p-scroller",46,9),w("onLazyLoad",function(o){x(e);let s=h(2);return C(s.onLazyLoad.emit(o))}),_(2,Ml,1,5,"ng-template",null,2,ve)(4,Bl,3,0,"ng-container",15),l()}if(t&2){let e=h(2);_t(z(8,en,e.scrollHeight)),d("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),p(4),d("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Hl(t,n){t&1&&le(0)}function zl(t,n){if(t&1&&(te(0),_(1,Hl,1,0,"ng-container",30),ie()),t&2){h();let e=Fe(6),i=h();p(),d("ngTemplateOutlet",e)("ngTemplateOutletContext",Le(3,Ro,i.visibleOptions(),hi(2,sl)))}}function jl(t,n){if(t&1&&(a(0,"span"),r(1),l()),t&2){let e=h(2).$implicit,i=h(3);p(),ye(i.getOptionGroupLabel(e.optionGroup))}}function Ul(t,n){t&1&&le(0)}function Wl(t,n){if(t&1&&(te(0),a(1,"li",50),_(2,jl,2,1,"span",15)(3,Ul,1,0,"ng-container",30),l(),ie()),t&2){let e=h(),i=e.$implicit,o=e.index,s=h().options,c=h(2);p(),d("ngStyle",z(5,en,s.itemSize+"px")),F("id",c.id+"_"+c.getOptionIndex(o,s)),p(),d("ngIf",!c.groupTemplate),p(),d("ngTemplateOutlet",c.groupTemplate)("ngTemplateOutletContext",z(7,Mo,i.optionGroup))}}function Gl(t,n){if(t&1&&(a(0,"span"),r(1),l()),t&2){let e=h(2).$implicit,i=h(3);p(),ye(i.getOptionLabel(e))}}function Kl(t,n){t&1&&le(0)}function ql(t,n){if(t&1){let e=H();te(0),a(1,"li",51),w("click",function(o){x(e);let s=h().$implicit,c=h(3);return C(c.onOptionSelect(o,s))})("mouseenter",function(o){x(e);let s=h().index,c=h().options,u=h(2);return C(u.onOptionMouseEnter(o,u.getOptionIndex(s,c)))}),_(2,Gl,2,1,"span",15)(3,Kl,1,0,"ng-container",30),l(),ie()}if(t&2){let e=h(),i=e.$implicit,o=e.index,s=h().options,c=h(2);p(),d("ngStyle",z(12,en,s.itemSize+"px"))("ngClass",c.optionClass(i,o,s)),F("id",c.id+"_"+c.getOptionIndex(o,s))("aria-label",c.getOptionLabel(i))("aria-selected",c.isSelected(i))("aria-disabled",c.isOptionDisabled(i))("data-p-focused",c.focusedOptionIndex()===c.getOptionIndex(o,s))("aria-setsize",c.ariaSetSize)("aria-posinset",c.getAriaPosInset(c.getOptionIndex(o,s))),p(),d("ngIf",!c.itemTemplate&&!c._itemTemplate),p(),d("ngTemplateOutlet",c.itemTemplate||c._itemTemplate)("ngTemplateOutletContext",Le(14,al,i,s.getOptions?s.getOptions(o):o))}}function Ql(t,n){if(t&1&&_(0,Wl,4,9,"ng-container",15)(1,ql,4,17,"ng-container",15),t&2){let e=n.$implicit,i=h(3);d("ngIf",i.isOptionGroup(e)),p(),d("ngIf",!i.isOptionGroup(e))}}function Zl(t,n){if(t&1&&(te(0),r(1),ie()),t&2){let e=h(4);p(),ee(" ",e.searchResultMessageText," ")}}function Yl(t,n){t&1&&le(0,null,12)}function Jl(t,n){if(t&1&&(a(0,"li",52),_(1,Zl,2,1,"ng-container",53)(2,Yl,2,0,"ng-container",24),l()),t&2){let e=h().options,i=h(2);d("ngStyle",z(4,en,e.itemSize+"px")),p(),d("ngIf",!i.emptyTemplate&&!i._emptyTemplate)("ngIfElse",i.empty),p(),d("ngTemplateOutlet",i.emptyTemplate||i._emptyTemplate)}}function Xl(t,n){if(t&1&&(a(0,"ul",47,11),_(2,Ql,2,2,"ng-template",48)(3,Jl,3,6,"li",49),l()),t&2){let e=n.$implicit,i=n.options,o=h(2);_t(i.contentStyle),d("ngClass",i.contentStyleClass),F("id",o.id+"_list")("aria-label",o.listLabel),p(2),d("ngForOf",e),p(),d("ngIf",!e||e&&e.length===0&&o.showEmptyMessage)}}function ec(t,n){t&1&&le(0)}function tc(t,n){if(t&1&&(a(0,"div",42),_(1,Pl,1,0,"ng-container",24),a(2,"div",43),_(3,$l,5,10,"p-scroller",44)(4,zl,2,6,"ng-container",15),l(),_(5,Xl,4,7,"ng-template",null,8,ve)(7,ec,1,0,"ng-container",24),l(),a(8,"span",45),r(9),l()),t&2){let e=h();X(e.panelStyleClass),d("ngClass",e.panelClass)("ngStyle",e.panelStyle),p(),d("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),p(),Xe("max-height",e.virtualScroll?"auto":e.scrollHeight),p(),d("ngIf",e.virtualScroll),p(),d("ngIf",!e.virtualScroll),p(3),d("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),p(2),ee(" ",e.selectedMessageText," ")}}var ic=({dt:t})=>`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: ${t("autocomplete.padding.x")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(${t("autocomplete.dropdown.width")} + ${t("autocomplete.padding.x")});
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${t("autocomplete.dropdown.width")};
    border-start-end-radius: ${t("autocomplete.dropdown.border.radius")};
    border-end-end-radius: ${t("autocomplete.dropdown.border.radius")};
    background: ${t("autocomplete.dropdown.background")};
    border: 1px solid ${t("autocomplete.dropdown.border.color")};
    border-inline-start: 0 none;
    color: ${t("autocomplete.dropdown.color")};
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")}, outline-color ${t("autocomplete.transition.duration")}, box-shadow ${t("autocomplete.transition.duration")};
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: ${t("autocomplete.dropdown.hover.background")};
    border-color: ${t("autocomplete.dropdown.hover.border.color")};
    color: ${t("autocomplete.dropdown.hover.color")};
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: ${t("autocomplete.dropdown.active.background")};
    border-color: ${t("autocomplete.dropdown.active.border.color")};
    color: ${t("autocomplete.dropdown.active.color")};
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: ${t("autocomplete.dropdown.focus.ring.shadow")};
    outline: ${t("autocomplete.dropdown.focus.ring.width")} ${t("autocomplete.dropdown.focus.ring.style")} ${t("autocomplete.dropdown.focus.ring.color")};
    outline-offset: ${t("autocomplete.dropdown.focus.ring.offset")};
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    background: ${t("autocomplete.overlay.background")};
    color: ${t("autocomplete.overlay.color")};
    border: 1px solid ${t("autocomplete.overlay.border.color")};
    border-radius: ${t("autocomplete.overlay.border.radius")};
    box-shadow: ${t("autocomplete.overlay.shadow")};
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: ${t("autocomplete.list.gap")};
    padding: ${t("autocomplete.list.padding")};
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${t("autocomplete.option.padding")};
    border: 0 none;
    color: ${t("autocomplete.option.color")};
    background: transparent;
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")};
    border-radius: ${t("autocomplete.option.border.radius")};
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: ${t("autocomplete.option.focus.background")};
    color: ${t("autocomplete.option.focus.color")};
}

.p-autocomplete-option-selected {
    background: ${t("autocomplete.option.selected.background")};
    color: ${t("autocomplete.option.selected.color")};
}

.p-autocomplete-option-selected.p-focus {
    background: ${t("autocomplete.option.selected.focus.background")};
    color: ${t("autocomplete.option.selected.focus.color")};
}

.p-autocomplete-option-group {
    margin: 0;
    padding: ${t("autocomplete.option.group.padding")};
    color: ${t("autocomplete.option.group.color")};
    background: ${t("autocomplete.option.group.background")};
    font-weight: ${t("autocomplete.option.group.font.weight")};
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${t("autocomplete.padding.y")} / 2) ${t("autocomplete.padding.x")};
    gap: calc(${t("autocomplete.padding.y")} / 2);
    color: ${t("autocomplete.color")};
    background: ${t("autocomplete.background")};
    border: 1px solid ${t("autocomplete.border.color")};
    border-radius: ${t("autocomplete.border.radius")};
    width: 100%;
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")}, outline-color ${t("autocomplete.transition.duration")}, box-shadow ${t("autocomplete.transition.duration")};
    outline-color: transparent;
    box-shadow: ${t("autocomplete.shadow")};
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.hover.border.color")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.focus.border.color")};
    box-shadow: ${t("autocomplete.focus.ring.shadow")};
    outline: ${t("autocomplete.focus.ring.width")} ${t("autocomplete.focus.ring.style")} ${t("autocomplete.focus.ring.color")};
    outline-offset: ${t("autocomplete.focus.ring.offset")};
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.invalid.border.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: ${t("autocomplete.filled.background")};
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${t("autocomplete.filled.hover.background")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: ${t("autocomplete.filled.focus.background")};
}

.p-autocomplete.p-disabled {
    opacity: 1;
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: ${t("autocomplete.disabled.background")};
    color: ${t("autocomplete.disabled.color")};
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${t("autocomplete.padding.y")} / 2);
    border-radius: ${t("autocomplete.chip.border.radius")};
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-inline-end: calc(${t("autocomplete.padding.y")} / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: ${t("autocomplete.chip.focus.background")};
    color: ${t("autocomplete.chip.focus.color")};
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${t("autocomplete.padding.y")} / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: ${t("autocomplete.placeholder.color")};
}

.p-autocomplete-empty-message {
    padding: ${t("autocomplete.empty.message.padding")};
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: ${t("autocomplete.dropdown.sm.width")};
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: ${t("autocomplete.dropdown.lg.width")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
}

.p-autocomplete-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    right: ${t("autocomplete.padding.x")};
    color: ${t("autocomplete.dropdown.color")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
    right: calc(${t("autocomplete.padding.x")} + ${t("autocomplete.dropdown.width")});
}
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.invalid.border.color")};
}
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.focus.border.color")};
}
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
    color: ${t("autocomplete.invalid.placeholder.color")};
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
    color: ${t("autocomplete.invalid.placeholder.color")};
}`,nc={root:{position:"relative"}},oc={root:({instance:t})=>({"p-autocomplete p-component p-inputwrapper":!0,"p-disabled":t.disabled,"p-focus":t.focused,"p-inputwrapper-filled":t.filled,"p-inputwrapper-focus":t.focused&&!t.disabled||t.autofocus||t.overlayVisible,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-clearable":t.showClear&&!t.disabled,"p-autocomplete-fluid":t.hasFluid}),pcInput:"p-autocomplete-input",inputMultiple:({instance:t})=>({"p-autocomplete-input-multiple":!0,"p-variant-filled":(t.variant??(t.config.inputStyle()||t.config.inputVariant()))==="filled"}),chipItem:({instance:t,i:n})=>["p-autocomplete-chip-item",{"p-focus":t.focusedMultipleOptionIndex===n}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:t,option:n,i:e,getItemOptions:i})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":t.isSelected(n),"p-focus":t.focusedOptionIndex===t.getOptionIndex(e,i),"p-disabled":t.isOptionDisabled(n)}),emptyMessage:"p-autocomplete-empty-message"},Do=(()=>{class t extends se{name="autocomplete";theme=ic;classes=oc;inlineStyles=nc;static \u0275fac=(()=>{let e;return function(o){return(e||(e=G(t)))(o||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var rc={provide:Un,useExisting:sn(()=>tn),multi:!0},tn=(()=>{class t extends me{overlayService;zone;minLength=1;delay=300;style;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;disabled;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;maxlength;name;required;size;appendTo;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;field;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;variant;fluid=!1;completeMethod=new L;onSelect=new L;onUnselect=new L;onFocus=new L;onBlur=new L;onDropdownClick=new L;onClear=new L;onKeyUp=new L;onShow=new L;onHide=new L;onLazyLoad=new L;containerEL;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;_itemSize;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;primeng=B(Qi);value;_suggestions=Te(null);onModelChange=()=>{};onModelTouched=()=>{};timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;_filled;get filled(){return this._filled}set filled(e){this._filled=e}loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;modelValue=Te(null);focusedMultipleOptionIndex=Te(-1);focusedOptionIndex=Te(-1);_componentStyle=B(Do);visibleOptions=dn(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=dn(()=>{let e=this.modelValue(),i=this.optionValueSelected?(this.suggestions||[]).find(o=>Ue(o,this.optionValue)===e):e;if(K(e))if(typeof e=="object"||this.optionValueSelected){let o=this.getOptionLabel(i);return o??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get rootClass(){return this._componentStyle.classes.root({instance:this})}get inputMultipleClass(){return this._componentStyle.classes.inputMultiple({instance:this})}get panelClass(){return{"p-autocomplete-overlay p-component":!0,"p-input-filled":this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-ripple-disabled":this.config.ripple()===!1}}get inputClass(){return{"p-autocomplete-input":!this.multiple,"p-autocomplete-dd-input":this.dropdown}}get searchResultMessageText(){return K(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue().length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(Ki.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}optionClass(e,i,o){return{"p-autocomplete-option":!0,"p-autocomplete-option-selected":this.isSelected(e),"p-focus":this.focusedOptionIndex()===this.getOptionIndex(i,o),"p-disabled":this.isOptionDisabled(e)}}constructor(e,i){super(),this.overlayService=e,this.zone=i,vt(()=>{this.filled=K(this.modelValue())})}ngOnInit(){super.ngOnInit(),this.id=this.id||ht("pn_id_"),this.cd.detectChanges()}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((i,o,s)=>{i.push({optionGroup:o,group:!0,index:s});let c=this.getOptionGroupChildren(o);return c&&c.forEach(u=>i.push(u)),i},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return xn(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(o=>this.isValidOption(o)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?xn(this.visibleOptions().slice(0,e),o=>this.isValidOption(o)):-1;return i>-1?i:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?Ue(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.find(i=>Hi(i,this.getOptionValue(e),this.equalityKey())):!1:Hi(this.modelValue(),this.getOptionValue(e),this.equalityKey())}isOptionMatched(e,i){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===i.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.dataKey}onContainerClick(e){this.disabled||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&Oe(this.inputEL.nativeElement)}handleDropdownClick(e){let i;this.overlayVisible?this.hide(!0):(Oe(this.inputEL.nativeElement),i=this.inputEL.nativeElement.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,i,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:i})}onInput(e){if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength!==null&&(i=i.split("").slice(0,this.maxlength).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=this.minLength?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let i=!1;if(this.visibleOptions()){let o=this.visibleOptions().find(s=>this.isOptionMatched(s,this.inputEL.nativeElement.value||""));o!==void 0&&(i=!0,!this.isSelected(o)&&this.onOptionSelect(e,o))}i||(this.inputEL.nativeElement.value="",!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.disabled)return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.disabled||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:break}}onArrowDownKey(e){if(!this.overlayVisible)return;let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}onArrowLeftKey(e){let i=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(De(i.value)&&this.hasSelectedOption()?(Oe(this.multiContainerEL.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:i}=e,o=i.value.length;i.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:i}=e,o=i.value.length;i.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.typeahead||this.multiple&&(this.updateModel([...this.modelValue()||[],e.target.value]),this.inputEL.nativeElement.value=""),this.overlayVisible?(this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide()):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(K(this.modelValue())&&!this.inputEL.nativeElement.value){let i=this.modelValue()[this.modelValue().length-1],o=this.modelValue().slice(0,-1);this.updateModel(o),this.onUnselect.emit({originalEvent:e,value:i})}e.stopPropagation()}!this.multiple&&this.showClear&&this.findSelectedOptionIndex()!=-1&&this.clear()}onArrowLeftKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(i)}onArrowRightKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex();i++,this.focusedMultipleOptionIndex.set(i),i>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),Oe(this.inputEL.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,i,o=!0){let s=this.getOptionValue(i);this.multiple?(this.inputEL.nativeElement.value="",this.isSelected(i)||this.updateModel([...this.modelValue()||[],s])):this.updateModel(s),this.onSelect.emit({originalEvent:e,value:i}),o&&this.hide(!0)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}search(e,i,o){i!=null&&(o==="input"&&i.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:i})))}removeOption(e,i){e.stopPropagation();let o=this.modelValue()[i],s=this.modelValue().filter((c,u)=>u!==i);this.updateModel(s),this.onUnselect.emit({originalEvent:e,value:o}),Oe(this.inputEL.nativeElement)}updateModel(e){this.value=e,this.modelValue.set(e),this.onModelChange(e),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let o=Nt(this.itemsViewChild.nativeElement,`li[id="${i}"]`);o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,i){this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[i],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),e&&Oe(this.inputEL.nativeElement),e&&Oe(this.inputEL.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let i=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&Oe(this.inputEL.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{i()},0)}clear(){this.updateModel(null),this.inputEL.nativeElement.value="",this.onClear.emit()}writeValue(e){this.value=e,this.modelValue.set(e),this.updateInputValue(),this.cd.markForCheck()}hasSelectedOption(){return K(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}getOptionLabel(e){return this.field||this.optionLabel?Ue(e,this.field||this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Ue(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?Ue(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?Ue(e,this.optionGroupChildren):e.items}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=Nt(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=Nt(this.itemsWrapper,".p-autocomplete-item.p-highlight");i&&i.scrollIntoView({block:"nearest",inline:"center"})}}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(D(Gi),D(qe))};static \u0275cmp=M({type:t,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(i,o,s){if(i&1&&(Y(s,Na,5),Y(s,Ba,5),Y(s,$a,5),Y(s,Ha,5),Y(s,za,5),Y(s,ja,5),Y(s,Ua,5),Y(s,Wa,5),Y(s,Ga,5),Y(s,Ka,5),Y(s,qa,5),Y(s,We,4)),i&2){let c;I(c=O())&&(o.itemTemplate=c.first),I(c=O())&&(o.emptyTemplate=c.first),I(c=O())&&(o.headerTemplate=c.first),I(c=O())&&(o.footerTemplate=c.first),I(c=O())&&(o.selectedItemTemplate=c.first),I(c=O())&&(o.groupTemplate=c.first),I(c=O())&&(o.loaderTemplate=c.first),I(c=O())&&(o.removeIconTemplate=c.first),I(c=O())&&(o.loadingIconTemplate=c.first),I(c=O())&&(o.clearIconTemplate=c.first),I(c=O())&&(o.dropdownIconTemplate=c.first),I(c=O())&&(o.templates=c)}},viewQuery:function(i,o){if(i&1&&(re(Qa,5),re(Za,5),re(Ya,5),re(Ja,5),re(Xa,5),re(el,5),re(tl,5),re(il,5)),i&2){let s;I(s=O())&&(o.containerEL=s.first),I(s=O())&&(o.inputEL=s.first),I(s=O())&&(o.multiInputEl=s.first),I(s=O())&&(o.multiContainerEL=s.first),I(s=O())&&(o.dropdownButton=s.first),I(s=O())&&(o.itemsViewChild=s.first),I(s=O())&&(o.scroller=s.first),I(s=O())&&(o.overlayViewChild=s.first)}},inputs:{minLength:[2,"minLength","minLength",et],delay:[2,"delay","delay",et],style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",U],disabled:[2,"disabled","disabled",U],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",U],virtualScroll:[2,"virtualScroll","virtualScroll",U],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",et],virtualScrollOptions:"virtualScrollOptions",maxlength:[2,"maxlength","maxlength",e=>et(e,null)],name:"name",required:[2,"required","required",U],size:"size",appendTo:"appendTo",autoHighlight:[2,"autoHighlight","autoHighlight",U],forceSelection:[2,"forceSelection","forceSelection",U],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",U],baseZIndex:[2,"baseZIndex","baseZIndex",et],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",U],group:[2,"group","group",U],completeOnFocus:[2,"completeOnFocus","completeOnFocus",U],showClear:[2,"showClear","showClear",U],field:"field",dropdown:[2,"dropdown","dropdown",U],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",U],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",U],tabindex:[2,"tabindex","tabindex",et],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",U],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",itemSize:"itemSize",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",U],selectOnFocus:[2,"selectOnFocus","selectOnFocus",U],searchLocale:[2,"searchLocale","searchLocale",U],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",U],typeahead:[2,"typeahead","typeahead",U],variant:"variant",fluid:[2,"fluid","fluid",U]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[ue([rc,Do]),J],decls:11,vars:15,consts:[["container",""],["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],[2,"position","relative",3,"click","ngClass","ngStyle"],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","ngClass","ngStyle","class","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"ngClass","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","class","p-autocomplete-dropdown","pRipple","",3,"disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid"],[3,"styleClass","click",4,"ngIf"],["class","p-autocomplete-clear-icon",3,"click",4,"ngIf"],[3,"click","styleClass"],[1,"p-autocomplete-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","ngClass","tabindex"],["role","option",3,"ngClass",4,"ngFor","ngForOf"],["role","option",1,"p-autocomplete-input-chip"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","autocomplete","required","tabindex","readonly","disabled"],["role","option",3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["styleClass","p-autocomplete-chip",3,"label","removable","onRemove",4,"ngIf"],["styleClass","p-autocomplete-chip",3,"onRemove","label","removable"],[1,"p-autocomplete-chip-icon",3,"click"],[3,"styleClass"],[3,"styleClass","spin",4,"ngIf"],["class","p-autocomplete-loader pi-spin ",4,"ngIf"],[3,"styleClass","spin"],[1,"p-autocomplete-loader","pi-spin"],["type","button","pRipple","",1,"p-autocomplete-dropdown",3,"click","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"ngClass","ngStyle"],[1,"p-autocomplete-list-container"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox",1,"p-autocomplete-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-autocomplete-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-autocomplete-option-group",3,"ngStyle"],["pRipple","","role","option",3,"click","mouseenter","ngStyle","ngClass"],["role","option",1,"p-autocomplete-empty-message",3,"ngStyle"],[4,"ngIf","ngIfElse"]],template:function(i,o){if(i&1){let s=H();a(0,"div",13,0),w("click",function(u){return x(s),C(o.onContainerClick(u))}),_(2,ll,2,25,"input",14)(3,ml,3,2,"ng-container",15)(4,Cl,6,26,"ul",16)(5,Il,3,2,"ng-container",15)(6,Vl,4,5,"button",17),a(7,"p-overlay",18,1),mi("visibleChange",function(u){return x(s),pi(o.overlayVisible,u)||(o.overlayVisible=u),C(u)}),w("onAnimationStart",function(u){return x(s),C(o.onOverlayAnimationStart(u))})("onHide",function(){return x(s),C(o.hide())}),_(9,tc,10,11,"ng-template",null,2,ve),l()()}i&2&&(X(o.styleClass),d("ngClass",o.rootClass)("ngStyle",o.style),p(2),d("ngIf",!o.multiple),p(),d("ngIf",o.filled&&!o.disabled&&o.showClear&&!o.loading),p(),d("ngIf",o.multiple),p(),d("ngIf",o.loading),p(),d("ngIf",o.dropdown),p(),di("visible",o.overlayVisible),d("options",o.overlayOptions)("target","@parent")("appendTo",o.appendTo)("showTransitionOptions",o.showTransitionOptions)("hideTransitionOptions",o.hideTransitionOptions))},dependencies:[q,pe,be,ne,it,Tt,Oo,Eo,Ao,Po,vo,Ji,Yi,xo,bo,So,Ze],encapsulation:2,changeDetection:0})}return t})(),No=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=_e({type:t});static \u0275inj=fe({imports:[tn,Ze]})}return t})();var Bo=ot("fadeAnimation",[He(":enter",[ce({opacity:0}),Pe("0.5s ease-out",ce({opacity:1}))]),He(":leave",[ce({opacity:1}),Pe("0.5s ease-out",ce({opacity:0}))])]),vh=ot("getLeftAnimation",[He("* => *",[It(":enter",[ce({opacity:0})],{optional:!0}),It(":leave",[ce({opacity:1}),Pe("0.3s",ce({opacity:0}))],{optional:!0}),It(":enter",[ce({opacity:0}),Pe("0.3s",ce({opacity:1}))],{optional:!0})])]),bh=ot("getDownAnimation",[He(":enter",[ce({opacity:0,transform:"translateY(-200%)"}),Pe("0.7s ease-out",ce({opacity:1,transform:"translateY(0%)"}))])]),$o=ot("listanimation",[He("* => *",[It(":enter",[ce({opacity:0}),pn(100,[Pe("0.3s",ce({opacity:1}))])],{optional:!0})])]);var nn=class t{resumen;descuentoCambiado=new L;inputDescuento="";ngOnInit(){this.inputDescuento=this.formatearCLP(this.resumen.descuento||0)}onDescuentoManualChange(n){let i=n.target.value,o=i.replace(/[^0-9]/g,""),s=parseInt(o,10);isNaN(s)?this.descuentoCambiado.emit(0):this.descuentoCambiado.emit(s),this.inputDescuento=i}mostrarValorNumerico(){this.inputDescuento=""}formatearDescuento(){this.inputDescuento=this.formatearCLP(this.resumen.descuento??0)}formatearCLP(n){return new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP",minimumFractionDigits:0,maximumFractionDigits:0}).format(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-resumen-valores"]],inputs:{resumen:"resumen"},outputs:{descuentoCambiado:"descuentoCambiado"},decls:60,vars:26,consts:[[1,"p-4","bg-white","rounded","border","dark:bg-gray-800","dark:border-gray-600"],[1,"text-xl","font-semibold","text-gray-900","dark:text-white"],[1,"mt-4","space-y-2"],[1,"flex","justify-between"],[1,"text-gray-500","dark:text-gray-400"],[1,"text-gray-900","dark:text-white"],["type","text","placeholder","-20.000",1,"border","rounded","px-2","w-32","text-right","dark:bg-gray-700","dark:text-green-400",3,"input","focus","blur","value","disabled"],[1,"flex","justify-between","font-bold","border-t","pt-2","dark:border-gray-700"]],template:function(e,i){e&1&&(a(0,"div",0),r(1,`
    `),a(2,"p",1),r(3,"Resumen de valores"),l(),r(4,`

    `),a(5,"div",2),r(6,`
        `),a(7,"dl",3),r(8,`
            `),a(9,"dt",4),r(10,"Precio original"),l(),r(11,`
            `),a(12,"dd",5),r(13),$e(14,"currency"),l(),r(15,`
        `),l(),r(16,`

        `),a(17,"dl",3),r(18,`
            `),a(19,"dt",4),r(20,"Precio con descuento"),l(),r(21,`
            `),a(22,"dd",5),r(23),$e(24,"currency"),l(),r(25,`
        `),l(),r(26,`

        `),a(27,"dl",3),r(28,`
        `),a(29,"dt",4),r(30,"Descuentos"),l(),r(31,`
        `),a(32,"dd"),r(33,`
            `),a(34,"input",6),w("input",function(s){return i.onDescuentoManualChange(s)})("focus",function(){return i.mostrarValorNumerico()})("blur",function(){return i.formatearDescuento()}),l(),r(35,`
        `),l(),r(36,`
        `),l(),r(37,`

        `),a(38,"dl",3),r(39,`
        `),a(40,"dt",4),r(41,"IVA"),l(),r(42,`
        `),a(43,"dd",5),r(44),$e(45,"currency"),l(),r(46,`
        `),l(),r(47,`

        `),a(48,"dl",7),r(49,`
        `),a(50,"dt",5),r(51,"Total"),l(),r(52,`
        `),a(53,"dd",5),r(54),$e(55,"currency"),l(),r(56,`
        `),l(),r(57,`
    `),l(),r(58,`
`),l(),r(59,`
`)),e&2&&(p(13),ee(`
                CLP `,Wt(14,6,i.resumen.precio,"CLP","symbol","1.0-0"),`
            `),p(10),ee(`
                CLP `,Wt(24,11,i.resumen.precio-i.resumen.descuento,"CLP","symbol","1.0-0"),`
            `),p(11),d("value",i.inputDescuento)("disabled",!i.resumen.precio),p(10),ee(`
            CLP `,Wt(45,16,i.resumen.iva,"CLP","symbol","1.0-0"),`
        `),p(10),ee(`
            CLP `,Wt(55,21,i.resumen.totalPresupuesto,"CLP","symbol","1.0-0"),`
        `))},dependencies:[q,fi],encapsulation:2})};function ac(t,n){if(t&1&&(a(0,"option",21),r(1),l()),t&2){let e=n.$implicit;d("value",e.IdVeCategoriasProductos),p(),ee(`
                    `,e.NombreCategoria,`
                `)}}function lc(t,n){if(t&1&&(r(0,`                    
                    `),a(1,"div",22),r(2),$e(3,"truncateMobile"),l(),r(4,`
                `)),t&2){let e=n.$implicit,i=h();p(2),ee(`
                        `,Nn(3,1,e.NombreProducto,i.isMobile),`
                    `)}}function cc(t,n){if(t&1){let e=H();a(0,"div",33),r(1,`
                        
                            `),a(2,"app-producto-carrusel",34),w("stockProducto",function(o){x(e);let s=h(2);return C(s.onActualizarStockProducto(o))})("eliminarProducto",function(o){x(e);let s=h(2);return C(s.onEliminarProducto(o))})("mostrarModal",function(){x(e);let o=h(2);return C(o.abrirModal())})("mostrarModalConTitulo",function(o){x(e);let s=h(2);return C(s.abrirModalConTitulo(o))}),r(3,`
                            `),l(),r(4,`

                        `),l()}if(t&2){let e=n.$implicit;p(2),d("productosSeleccionado",e)}}function uc(t,n){if(t&1){let e=H();a(0,"div",23),r(1,`

                `),a(2,"div",24),r(3,`
                `),a(4,"div",25),r(5,`
                    `),a(6,"div",26),r(7,`
            
                        `),_(8,cc,5,1,"div",27),r(9,`
                    `),l(),r(10,`
                `),l(),r(11,`
            
                `),r(12,`
                `),a(13,"button",28),w("click",function(){x(e);let o=h();return C(o.prev())}),r(14,`
                    `),E(),a(15,"svg",29),r(16,`
                        `),y(17,"path",30),r(18,`
                    `),l(),r(19,`
                `),l(),r(20,`
                `),A(),a(21,"button",31),w("click",function(){x(e);let o=h();return C(o.next())}),r(22,`
                    `),E(),a(23,"svg",29),r(24,`
                        `),y(25,"path",32),r(26,`
                    `),l(),r(27,`
                `),l(),r(28,`
                `),l(),r(29,`
            `),l()}if(t&2){let e=h();p(6),Xe("transform","translateX(-"+e.currentIndex*100+"%)"),p(2),d("ngForOf",e.productosAgrupados)}}var on=class t{constructor(n,e){this.productoService=n;this.deviceService=e}toast;productoCarruselEditar=null;isModalVisible=!1;isModalFinalVisible=!1;isProductoSelected=!1;categoriasSelect=[];idCategoriaSelected;productosFiltrado=[];productosSeleccionado=[];productosAgrupados=[];filteredProducts=[];selectedProduct="";currentIndex=0;isMobile=!1;modalTitle="";mostrar=!1;contador=6;intervalId;resumenValores={precio:0,descuento:0,iva:0,totalPresupuesto:0,Id_Ve_Presupuesto:0,Id_Ve_Usuario:0,Id_Ve_Vehiculo:0,nombrePresupuesto:""};ngOnInit(){this.isMobile=this.deviceService.isMobile(),this.ObtenerCategoriasProductos()}next(){this.currentIndex=(this.currentIndex+1)%this.productosAgrupados.length}prev(){this.currentIndex=(this.currentIndex-1+this.productosAgrupados.length)%this.productosAgrupados.length}calcularResumen(){let n=this.productosSeleccionado.reduce((c,u)=>c+(u.Precio||0)*(u.StockInicial||1),0),e=this.resumenValores.descuento??0,i=n-e,o=+(i*.19).toFixed(0),s=+(i+o).toFixed(0);this.resumenValores={precio:n,descuento:e,iva:o,totalPresupuesto:s,Id_Ve_Presupuesto:this.resumenValores.Id_Ve_Presupuesto,Id_Ve_Usuario:this.resumenValores.Id_Ve_Usuario,Id_Ve_Vehiculo:this.resumenValores.Id_Ve_Vehiculo,nombrePresupuesto:this.resumenValores.nombrePresupuesto}}onActualizarDescuentoManual(n){this.resumenValores.descuento=n,this.calcularResumen()}agruparProductos(n,e=6){let i=[];for(let o=0;o<n.length;o+=e)i.push(n.slice(o,o+e));return i}ObtenerCategoriasProductos(){return W(this,null,function*(){let n=yield this.productoService.ObtenerCategoriasProductos();this.categoriasSelect=n})}filterProducts(n){return W(this,null,function*(){let e=n.query.toLowerCase(),i=yield this.productoService.ObtenerProductosNombre(e,this.idCategoriaSelected);this.productosFiltrado=i.filter(o=>o.NombreProducto.toLowerCase().includes(e)),this.filteredProducts=i.map(o=>({name:o.NombreProducto}))})}onActualizarStockProducto(n){let e=this.productosSeleccionado.find(i=>i.Id_VE_Productos===n.id);e&&(e.StockInicial=n.stock),this.isProductoSelected=this.productosSeleccionado.length>0,this.calcularResumen()}onEliminarProducto(n){this.productosSeleccionado=this.productosSeleccionado.filter(e=>e.Id_VE_Productos!==n),this.productosSeleccionado.length===0&&(this.isProductoSelected=!1),this.calcularResumen(),this.productosAgrupados=this.agruparProductos(this.productosSeleccionado,6),this.toast.mostrar("success","Producto eliminado exitosamente")}onSelectCategoria(n){let e=n.target.value;this.idCategoriaSelected=e?Number(e):null}onSelectProducto(n){let e=n.value;if(!e||!e.Id_VE_Productos)return;this.productosSeleccionado.some(o=>o.Id_VE_Productos===e.Id_VE_Productos)||this.agregarProductoCarrusel(n.value)}agregarProductoCarrusel(n){this.productosSeleccionado.push(n),this.productosAgrupados=this.agruparProductos(this.productosSeleccionado,6),this.isProductoSelected=!0,this.calcularResumen()}abrirModalConTitulo(n){this.modalTitle="Editar Producto",this.isModalVisible=!0;let e=this.productosSeleccionado.find(i=>i.Id_VE_Productos===n.id);e?this.productoCarruselEditar=R({},e):console.warn("Producto no encontrado para editar:",n.id)}guardarProducto(n){return W(this,null,function*(){let e=yield this.productoService.GuardarProducto(n);e?(this.toast.mostrar("success","Producto guardado exitosamente"),this.agregarProductoCarrusel(e)):this.toast.mostrar("error","Error al guardar el producto"),this.closeModal()})}editarProducto(n){return W(this,null,function*(){let e=yield this.productoService.EditarProducto(n),i=this.productosSeleccionado.findIndex(o=>o.Id_VE_Productos===e.Id_VE_Productos);console.log("Producto editado:",e),console.log("Producto editado:",JSON.stringify(this.productosSeleccionado)),i!==-1&&e.IdVeProducto!==0?(this.productosSeleccionado[i]=e,this.productosAgrupados=this.agruparProductos(this.productosSeleccionado,6),this.toast.mostrar("success","Producto actualizado exitosamente")):this.toast.mostrar("error","Producto no encontrado para actualizar."),this.closeModal()})}abrirModal(){console.log("Se muestra modal desde hijo"),this.modalTitle="Crear Producto",this.isModalVisible=!0}closeModal(){console.log("se cierra el modal en al lista"),this.isModalVisible=!1}static \u0275fac=function(e){return new(e||t)(D(Rt),D(bi))};static \u0275cmp=M({type:t,selectors:[["app-lista-productos"]],viewQuery:function(e,i){if(e&1&&re(pt,5),e&2){let o;I(o=O())&&(i.toast=o.first)}},decls:67,vars:11,consts:[[1,"xl:flex","lg:flex","flex-wrap","block","justify-between","items-center","px-4","pt-4","mb-5"],[1,"lg:w-2/4","lg:flex","sm:grid","xl:flex"],["id","category",1,"flex-shrink-0","z-10","inline-flex","py-2.5","px-4","text-sm","font-medium","focus:ring-4","focus:outline-none","text-gray-900","bg-gray-100","border","border-gray-300","hover:bg-gray-200","focus:ring-gray-100","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700","dark:text-white","dark:border-gray-600",2,"padding-right","12px",3,"change"],["value","","selected",""],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 10 6",1,"w-2.5","h-2.5","ms-2.5"],[3,"value",4,"ngFor","ngForOf"],[1,"relative","w-full"],["placeholder","Buscar productos por su nombre",1,"block","p-2.5","ml.2","w-full","text-xs","text-gray-900","bg-gray-50","border-s-gray-50","border-s-2","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-s-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:border-blue-500",3,"ngModelChange","completeMethod","onSelect","ngModel","suggestions","minLength","field","forceSelection"],["pTemplate","item","id","lista"],[1,"w-full","lg:w-auto","mt-4","lg:mt-0"],["id","defaultModalButton","data-modal-target","defaultModal","data-modal-toggle","defaultModal",1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-purple-600","to-blue-500","group-hover:from-purple-600","group-hover:to-blue-500","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:focus:ring-blue-800",3,"click"],[1,"relative","px-5","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"me-1","-ms-0","inline"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],[3,"closeModal","productoParaEditar","productoParaGuardar","isVisible","tituloModal","productoModalEditar"],[1,"mx-auto","max-w-screen-xl","p-4","pt-0"],[1,"md:gap-6","lg:flex","lg:items-start","xl:gap-8"],[1,"mx-auto","w-full","flex-none","lg:max-w-2xl","xl:max-w-4xl"],["class","text-white bg-gray-900 rounded-lg",4,"ngIf"],[1,"mx-auto","mt-6","max-w-4xl","flex-1","space-y-6","lg:mt-0","lg:w-full"],[3,"descuentoCambiado","resumen"],[3,"value"],[1,"lg:w-96","sm:w-64","inline-flex","py-2.5","px-4","text-xs","font-medium","focus:outline-none","text-gray-900","bg-gray-100","border","border-gray-300","hover:bg-gray-200","focus:ring-gray-100","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700","dark:text-white","dark:border-gray-600",2,"width","39rem"],[1,"text-white","bg-gray-900","rounded-lg"],[1,"relative"],[1,"overflow-hidden","rounded-xl"],[1,"flex","transition-transform","duration-500","ease-in-out"],["class","w-full flex-shrink-0 px-4","style","min-width: 100%; max-width: 100%;",4,"ngFor","ngForOf"],[1,"mt-12","left-0","transform","-translate-y-1/2","bg-gray-700","hover:bg-gray-600","p-2","rounded-full",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-[35px]","h-[35px]","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","1.9","d","M5 12h14M5 12l4-4m-4 4 4 4"],[1,"mt-12","right-0","transform","-translate-y-1/2","bg-gray-700","hover:bg-gray-600","p-2","rounded-full",3,"click"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","1.9","d","M19 12H5m14 0-4 4m4-4-4-4"],[1,"w-full","flex-shrink-0","px-4",2,"min-width","100%","max-width","100%"],[3,"stockProducto","eliminarProducto","mostrarModal","mostrarModalConTitulo","productosSeleccionado"]],template:function(e,i){e&1&&(r(0,`
`),a(1,"div",0),r(2,`
    `),a(3,"div",1),r(4,`
        `),a(5,"select",2),w("change",function(s){return i.onSelectCategoria(s)}),r(6,`
                `),a(7,"option",3),r(8,"Todas las Categorias "),E(),y(9,"svg",4),l(),r(10,`
                `),_(11,ac,2,2,"option",5),r(12,`
        `),l(),r(13,`
        `),A(),a(14,"div",6),r(15,`
            `),a(16,"p-autoComplete",7),mi("ngModelChange",function(s){return pi(i.selectedProduct,s)||(i.selectedProduct=s),s}),w("completeMethod",function(s){return i.filterProducts(s)})("onSelect",function(s){return i.onSelectProducto(s)}),r(17,`
                `),_(18,lc,5,4,"ng-template",8),r(19,` 
            `),l(),r(20,`
        `),l(),r(21,`
    `),l(),r(22,`

    `),a(23,"div",9),r(24,`      
        `),a(25,"button",10),w("click",function(){return i.abrirModal()}),r(26,`
            `),a(27,"span",11),r(28,`
            `),E(),a(29,"svg",12),r(30,`
                `),y(31,"path",13),r(32,`
            `),l(),r(33,`
            Crear Producto
            `),l(),r(34,`
        `),l(),r(35,`
    `),l(),r(36,`
`),l(),r(37,`

`),r(38,`
`),A(),a(39,"app-modal-productos",14),w("closeModal",function(){return i.closeModal()})("productoParaEditar",function(s){return i.editarProducto(s)})("productoParaGuardar",function(s){return i.guardarProducto(s)}),r(40,` 
`),l(),r(41,`
`),r(42,`
`),r(43,`

`),r(44,`

`),a(45,"section"),r(46,`
    `),a(47,"div",15),r(48,`
        `),r(49,`
        `),a(50,"div",16),r(51,`
        `),a(52,"div",17),r(53,`
            `),_(54,uc,30,3,"div",18),r(55,`

        `),l(),r(56,`
    
            `),a(57,"div",19),r(58,`
                `),a(59,"app-resumen-valores",20),w("descuentoCambiado",function(s){return i.onActualizarDescuentoManual(s)}),r(60,`
                `),l(),r(61,`
            `),l(),r(62,`
        `),l(),r(63,`
    `),l(),r(64,`
`),l(),r(65,`

`),y(66,"app-toast-producto")),e&2&&(p(11),d("ngForOf",i.categoriasSelect),p(5),di("ngModel",i.selectedProduct),d("suggestions",i.productosFiltrado)("minLength",3)("field","NombreProducto")("forceSelection",!1),p(23),d("isVisible",i.isModalVisible)("tituloModal",i.modalTitle)("productoModalEditar",i.productoCarruselEditar),p(15),d("ngIf",i.isProductoSelected),p(5),d("resumen",i.resumenValores))},dependencies:[xe,st,at,rt,yi,q,be,ne,Mi,Bi,No,tn,We,Ri,pt,nn],styles:["[_nghost-%COMP%]     .p-autocomplete-input{width:100%!important}[_nghost-%COMP%]     .p-component{min-width:600px}@media (max-width: 640px){[_nghost-%COMP%]     .p-component{min-width:235px}}  .p-autocomplete-overlay{margin-left:-13px;margin-top:10px}"],data:{animation:[$o,Bo]}})};var dc=[{path:"",component:Qn,children:[{path:"",component:xi,children:[{path:"",redirectTo:"Persona",pathMatch:"full"},{path:"Persona",component:Ii},{path:"Vehiculo",component:Li},{path:"Productos",component:on}]}]}],Ho=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=_e({type:t});static \u0275inj=fe({imports:[mn.forChild(dc),mn]})};export{Ho as PresupuestoRoutingModule};

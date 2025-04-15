import{A as G,B as W,C as b,E as U,F as K,G as S,H as k,I as Y,J as v,K as $,L as J,M as E,N as w,O as X,P as h,Q,R as ee,T as j,U as te,V as ne,b as B,c as N,d as A,e as r,f as a,g as O,h as m,i as z,j as g,k as q,l as I,m as s,n as t,o as n,p as i,q as Z,r as f,s as R,t as e,v as M,w as C,x as P,y as u}from"./chunk-ESDLJSLM.js";var y=d=>({stepperActive:d}),ie=d=>({hidden:d});function le(d,p){if(d&1){let l=Z();t(0,"button",43),f("click",function(){N(l);let c=R();return A(c.volver())}),e(1,`
                            `),t(2,"span",23),e(3,`
                            `),r(),t(4,"svg",24),e(5,`
                                `),i(6,"path",44),e(7,`
                            `),n(),e(8,`
                                Volver
                            `),n(),e(9,`
                        `),n()}}var T=class d{constructor(p){this.router=p}mostrarBoton=!0;mostrarBotonSiguiente=!0;mostrarBotonFinal=!1;selectStepperPersona=!1;selectStepperVehiculo=!1;selectStepperProductos=!1;selectStepperFinal=!1;ngOnInit(){te(),this.router.url=="/Presupuesto/Persona"&&(this.mostrarBoton=!1,this.resetStepper(),this.selectStepperPersona=!0,console.log("stepper persona")),this.router.url=="/Presupuesto/Productos"&&(this.mostrarBoton=!0,this.mostrarBotonSiguiente=!1,this.mostrarBotonFinal=!0,this.resetStepper(),this.selectStepperProductos=!0,console.log("stepper Productos"))}resetStepper(){this.selectStepperPersona=!1,this.selectStepperVehiculo=!1,this.selectStepperProductos=!1,this.selectStepperFinal=!1}volver(){this.router.url=="/Presupuesto/Vehiculo"&&(this.mostrarBoton=!1,this.resetStepper(),this.selectStepperPersona=!0,this.router.navigate(["Presupuesto/Persona"])),this.router.url=="/Presupuesto/Productos"&&(this.mostrarBotonSiguiente=!0,this.mostrarBotonFinal=!1,this.mostrarBoton=!0,this.resetStepper(),this.selectStepperVehiculo=!0,this.router.navigate(["Presupuesto/Vehiculo"]))}cancelar(){this.router.navigate(["Home"])}continuar(){console.log(this.router.url),this.router.url=="/Presupuesto/Persona"&&(this.mostrarBoton=!0,this.resetStepper(),this.selectStepperVehiculo=!0,this.router.navigate(["Presupuesto/Vehiculo"])),this.router.url=="/Presupuesto/Vehiculo"&&(this.mostrarBoton=!0,this.mostrarBotonSiguiente=!1,this.mostrarBotonFinal=!0,this.resetStepper(),this.selectStepperProductos=!0,this.router.navigate(["Presupuesto/Productos"]))}static \u0275fac=function(l){return new(l||d)(z(ee))};static \u0275cmp=g({type:d,selectors:[["app-crud-presupuestos-view"]],decls:204,vars:31,consts:[[1,"relative","overflow-x-auto","shadow-md","sm:rounded-lg"],[2,"border-left","ridge","margin-top","1%","margin-bottom","3%"],["_ngcontent-ng-c57272926","",1,"mb-4","text-xl","font-semibold","text-gray-900","dark:text-white","sm:text-2xl","md:mb-6",2,"font-size","xx-large","margin-left","10px"],[1,"bg-white","antialiased","dark:bg-gray-900"],[1,"mx-auto","max-w-screen-xl","px-4","2xl:px-0"],["action","#",1,"w-full","space-y-6","lg:space-y-8"],[1,"space-y-6","sm:space-y-8"],[1,"flex","flex-col","gap-4","rounded-lg","border","border-gray-200","bg-gray-50","p-4","dark:border-gray-700","dark:bg-gray-800","sm:justify-center","md:flex-row","md:items-center","lg:gap-6"],[1,"flex","items-center","gap-2","md:flex-1","md:flex-col","md:gap-1.5","lg:flex-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"h-5","w-5","text-gray-500","dark:text-gray-400",3,"ngClass"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],[1,"text-sm","font-medium","leading-tight","text-gray-500","dark:text-gray-400",3,"ngClass"],[1,"hidden","h-px","w-8","shrink-0","bg-gray-200","dark:bg-gray-700","md:block","xl:w-16"],[1,"space-y-6"],["role","alert",1,"mb-4","rounded-lg","bg-primary-50","p-4","text-sm","text-primary-800","dark:bg-gray-800","dark:text-primary-400","sm:text-base"],[1,"mb-3","font-medium"],[1,"mb-3","list-outside","list-decimal","space-y-2","ps-4"],[1,"text-xl","font-semibold","text-gray-900","dark:text-white"],[1,"divide-y","divide-gray-200","overflow-hidden","rounded-lg","border","border-gray-200","bg-white","shadow-sm","dark:divide-gray-700","dark:border-gray-700","dark:bg-gray-800",2,"text-align","-webkit-center"],[1,"gap-4","flex","sm:items-center","sm:justify-between"],[1,"gap-4","sm:items-center"],["class","relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",3,"click",4,"ngIf"],[1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-pink-500","to-orange-400","group-hover:from-pink-500","group-hover:to-orange-400","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-pink-200","dark:focus:ring-pink-800",3,"click"],[1,"relative","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0",2,"padding-right","15px","padding-left","10px"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"me-1","-ms-0","inline"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-purple-600","to-blue-500","group-hover:from-purple-600","group-hover:to-blue-500","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:focus:ring-blue-800",3,"click","ngClass"],[1,"relative","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0",2,"padding-left","15px"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m9 5 7 7-7 7"],["data-modal-target","popup-modal","data-modal-toggle","popup-modal",1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-green-400","to-blue-600","group-hover:from-green-400","group-hover:to-blue-600","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-green-200","dark:focus:ring-green-800",3,"ngClass"],["id","popup-modal",1,"modal","hidden"],[1,"relative","w-full","max-w-md","max-h-full"],[1,"relative","bg-white","rounded-lg","shadow","dark:bg-gray-700"],["type","button","data-modal-hide","popup-modal",1,"absolute","top-3","end-2.5","text-gray-400","bg-transparent","hover:bg-gray-200","hover:text-gray-900","rounded-lg","text-sm","w-8","h-8","ms-auto","inline-flex","justify-center","items-center","dark:hover:bg-gray-600","dark:hover:text-white"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 14 14",1,"w-3","h-3"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"],[1,"sr-only"],[1,"p-4","md:p-5","text-center"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"mx-auto","mb-4","text-gray-400","w-12","h-12","dark:text-gray-200"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 3v4a1 1 0 0 1-1 1H5m4 6 2 2 4-4m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"],[1,"text-base","leading-relaxed","text-gray-500","dark:text-gray-400"],["data-modal-hide","popup-modal",1,"relative","m-5","inline-flex","items-center","justify-center","p-0.5","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-green-400","to-blue-600","group-hover:from-green-400","group-hover:to-blue-600","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-green-200","dark:focus:ring-green-800"],["data-modal-hide","popup-modal",1,"relative","m-5","inline-flex","items-center","justify-center","p-0.5","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-pink-500","to-orange-400","group-hover:from-pink-500","group-hover:to-orange-400","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-pink-200","dark:focus:ring-pink-800"],[1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-purple-600","to-blue-500","group-hover:from-purple-600","group-hover:to-blue-500","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:focus:ring-blue-800",3,"click"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m15 19-7-7 7-7"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,`
        
        `),t(2,"div",1),e(3,`
            `),t(4,"h2",2),e(5,"Creaci\xF3n de Presupuesto"),n(),e(6,`
        `),n(),e(7,`

`),t(8,"section",3),e(9,`
    `),t(10,"div",4),e(11,`
        `),t(12,"div",5),e(13,`
            `),t(14,"div",6),e(15,`
                `),t(16,"ol",7),e(17,`
                    `),t(18,"li",8),e(19,`
                    `),r(),t(20,"svg",9),e(21,`
                        `),i(22,"path",10),e(23,`
                    `),n(),e(24,`
                    `),a(),t(25,"p",11),e(26,"Datos cliente"),n(),e(27,`
                    `),n(),e(28,`

                    `),i(29,"div",12),e(30,`

                    `),t(31,"li",8),e(32,`
                    `),r(),t(33,"svg",9),e(34,`
                        `),i(35,"path",10),e(36,`
                    `),n(),e(37,`
                    `),a(),t(38,"p",11),e(39,"Datos del veh\xEDculo"),n(),e(40,`
                    `),n(),e(41,`

                    `),i(42,"div",12),e(43,`

                    `),t(44,"li",8),e(45,`
                    `),r(),t(46,"svg",9),e(47,`
                        `),i(48,"path",10),e(49,`
                    `),n(),e(50,`
                    `),a(),t(51,"p",11),e(52,"Seleccion de productos"),n(),e(53,`
                    `),n(),e(54,`

                    `),i(55,"div",12),e(56,`

                    `),t(57,"li",8),e(58,`
                    `),r(),t(59,"svg",9),e(60,`
                        `),i(61,"path",10),e(62,`
                    `),n(),e(63,`
                    `),a(),t(64,"p",11),e(65,"Detalle y confirmaci\xF3n"),n(),e(66,`
                    `),n(),e(67,`
                `),n(),e(68,`
            `),n(),e(69,`

            `),t(70,"div",13),e(71,`
                `),t(72,"div",14),e(73,`
                    `),t(74,"p",15),e(75,"Lo que necesita saber para qu\xE9 el proceso de creaci\xF3n de presupuesto se realice sin problemas es:"),n(),e(76,`
                    `),t(77,"ol",16),e(78,`
                        `),t(79,"li"),e(80,"Debe ingresar los datos del encargado del presupuesto y del cliente."),n(),e(81,`
                        `),t(82,"li"),e(83,"Debe ingresar los datos del veh\xEDculo para el que se creara el presupuesto."),n(),e(84,`
                        `),t(85,"li"),e(86,"Debe seleccionar los productos necesarios a utilizar para la reparaci\xF3n del veh\xEDculo."),n(),e(87,`
                    `),n(),e(88,`
                    `),e(89,`
                `),n(),e(90,`
                `),t(91,"h3",17),e(92,"1. Ingrese los datos solicitados:"),n(),e(93,`

                `),t(94,"div",18),e(95,`

                    `),i(96,"router-outlet"),e(97,`

                `),n(),e(98,`
                `),t(99,"div",19),e(100,`
                    `),t(101,"div",20),e(102,`
                        `),I(103,le,10,0,"button",21),e(104,`
                        `),t(105,"button",22),f("click",function(){return o.cancelar()}),e(106,`
                            `),t(107,"span",23),e(108,`
                            `),r(),t(109,"svg",24),e(110,`
                                `),i(111,"path",25),e(112,`
                            `),n(),e(113,`
                                Cancelar
                            `),n(),e(114,`
                        `),n(),e(115,`                        
                    `),n(),e(116,`
                    `),a(),t(117,"button",26),f("click",function(){return o.continuar()}),e(118,`
                        `),t(119,"span",27),e(120,`
                            Siguiente
                        `),r(),t(121,"svg",24),e(122,`
                            `),i(123,"path",28),e(124,`
                        `),n(),e(125,`
                        `),n(),e(126,`
                    `),n(),e(127,`
                    `),a(),t(128,"button",29),e(129,`
                        `),t(130,"span",27),e(131,`
                            Finalizar
                        `),r(),t(132,"svg",24),e(133,`
                            `),i(134,"path",28),e(135,`
                        `),n(),e(136,`
                        `),n(),e(137,`
                    `),n(),e(138,`
                `),n(),e(139,`
            `),n(),e(140,`
        `),n(),e(141,`
    `),n(),e(142,`
`),n(),e(143,`
`),n(),e(144,`

`),a(),t(145,"div",30),e(146,`
    `),t(147,"div",31),e(148,`
        `),t(149,"div",32),e(150,`
            `),t(151,"button",33),e(152,`
                `),r(),t(153,"svg",34),e(154,`
                    `),i(155,"path",35),e(156,`
                `),n(),e(157,`
                `),a(),t(158,"span",36),e(159,"Close modal"),n(),e(160,`
            `),n(),e(161,`
            `),t(162,"div",37),e(163,`
                `),e(164,`
                `),r(),t(165,"svg",38),e(166,`
                    `),i(167,"path",39),e(168,`
                `),n(),e(169,`
                `),a(),t(170,"p",40),e(171,`
                El presupuesto se guardar\xE1 y podr\xE1s ver las opciones de ver y editar en el men\xFA principal.
                `),n(),e(172,`
                `),t(173,"p",40),e(174,`
                Antes de continuar, aseg\xFArate de que los datos ingresados sean correctos.
                `),n(),e(175,`
                `),t(176,"h3",17),e(177,"\xBFEst\xE1 seguro que desa continuar?"),n(),e(178,`
                `),t(179,"button",41),e(180,`
                    `),t(181,"span",27),e(182,`
                        S\xED, estoy seguro
                    `),r(),t(183,"svg",24),e(184,`
                        `),i(185,"path",28),e(186,`
                    `),n(),e(187,`
                    `),n(),e(188,`
                `),n(),e(189,`
                `),a(),t(190,"button",42),e(191,`
                    `),t(192,"span",23),e(193,`
                    `),r(),t(194,"svg",24),e(195,`
                        `),i(196,"path",25),e(197,`
                    `),n(),e(198,`
                        No, Cancelar
                    `),n(),e(199,`
                `),n(),e(200,`
            `),n(),e(201,`
        `),n(),e(202,`
    `),n(),e(203,`
`),n()),l&2&&(m(20),s("ngClass",u(11,y,o.selectStepperPersona)),m(5),s("ngClass",u(13,y,o.selectStepperPersona)),m(8),s("ngClass",u(15,y,o.selectStepperVehiculo)),m(5),s("ngClass",u(17,y,o.selectStepperVehiculo)),m(8),s("ngClass",u(19,y,o.selectStepperProductos)),m(5),s("ngClass",u(21,y,o.selectStepperProductos)),m(8),s("ngClass",u(23,y,o.selectStepperFinal)),m(5),s("ngClass",u(25,y,o.selectStepperFinal)),m(39),s("ngIf",o.mostrarBoton),m(14),s("ngClass",u(27,ie,!o.mostrarBotonSiguiente)),m(11),s("ngClass",u(29,ie,!o.mostrarBotonFinal)))},dependencies:[Q,h,b,G,W],styles:[".stepperActive[_ngcontent-%COMP%]{color:#346bc6}.stepperInActive[_ngcontent-%COMP%]{color:#7d8491}.modal[_ngcontent-%COMP%]{position:fixed;z-index:1050;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#00000080}.modal.is-active[_ngcontent-%COMP%]{display:block}.modal-content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 6px #0000001a}.modal-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.modal-close[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;border:none;background:transparent;font-size:1.5em;cursor:pointer}"]})};var F=class d{static \u0275fac=function(l){return new(l||d)};static \u0275cmp=g({type:d,selectors:[["app-datos-personas"]],decls:273,vars:0,consts:[[1,"relative","z-0","w-full","group"],[1,"mt-5","text-xl","font-semibold","text-gray-900","dark:text-white"],[1,"relative"],[1,"flex","pl-80","pr-80","pt-5"],[1,"inline-flex","items-center","px-3","text-sm","text-gray-900","bg-gray-200","border","border-e-0","border-gray-300","rounded-s-md","dark:bg-gray-600","dark:text-gray-400","dark:border-gray-600"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-[27px]","h-[27px]","text-gray-800","dark:text-white"],["stroke","currentColor","stroke-linejoin","round","stroke-width","2","d","M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z"],["type","text","id","website-admin","placeholder","Cambio completo de tren delantero para Toyota",1,"rounded-none","rounded-e-lg","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"grid","md:grid-cols-2","md:gap-6"],[1,"max-w-md",2,"margin","3%"],[1,"relative","z-0","w-full","mb-5","group"],[1,"flex"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["d","M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"],["type","text","id","website-admin","placeholder","Nombre",1,"rounded-none","rounded-e-lg","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","text","id","website-admin","placeholder","Apellido",1,"rounded-none","rounded-e-lg","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"absolute","inset-y-0","start-0","flex","items-center","ps-3.5","pointer-events-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-5","h-5","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-width","2","d","M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],["id","countries",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["selected",""],["value","US"],["value","CA"],["value","FR"],["value","DE"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"],["type","text","id","address-icon","placeholder","Direcci\xF3n (Maria Pinto 46)",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 16",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["d","m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"],["d","M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"],["type","text","id","email-address-icon","placeholder","Correo (name@flowbite.com)",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","text","id","website-admin","placeholder","Bonnie Green",1,"rounded-none","rounded-e-lg","bg-gray-50","border","border-gray-300","text-gray-900","focus:ring-blue-500","focus:border-blue-500","block","flex-1","min-w-0","w-full","text-sm","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","search","id","default-search","placeholder","Regi\xF3n","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","search","id","default-search","placeholder","Comuna","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","text","id","address-icon","placeholder","Maria Pinto 46",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","text","id","email-address-icon","placeholder","name@flowbite.com",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"],["type","text","id","email-address-icon","placeholder","Nombre Empresa",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 14h2m3 0h4m2 2h2m0 0h2m-2 0v2m0-2v-2m-5 4H4c-.55228 0-1-.4477-1-1V7c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 10h18"],["type","text","id","email-address-icon","placeholder","Id Empresa",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","ps-10","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,`
`),t(2,"h3",1),e(3,"Nombre del proyecto:"),n(),e(4,`
        `),t(5,"div",2),e(6,`
            `),t(7,"div",3),e(8,`
                `),t(9,"span",4),e(10,`
                `),r(),t(11,"svg",5),e(12,`
                    `),i(13,"path",6),e(14,`
                `),n(),e(15,`
                `),n(),e(16,`
                `),a(),i(17,"input",7),e(18,`
            `),n(),e(19,`
        `),n(),e(20,`
    `),n(),e(21,` 
`),t(22,"div",8),e(23,`
    `),t(24,"div",0),e(25,`
        `),t(26,"h3",1),e(27,"Datos del t\xE9cnico encargado:"),n(),e(28,`
        `),t(29,"form",9),e(30,`
            `),t(31,"div",10),e(32,`
                `),t(33,"div",2),e(34,`
                    `),t(35,"div",11),e(36,`
                        `),t(37,"span",4),e(38,`
                        `),r(),t(39,"svg",12),e(40,`
                            `),i(41,"path",13),e(42,`
                        `),n(),e(43,`
                        `),n(),e(44,`
                        `),a(),i(45,"input",14),e(46,`
                    `),n(),e(47,`
                `),n(),e(48,`
            `),n(),e(49,` 

            `),t(50,"div",10),e(51,`
                `),t(52,"div",2),e(53,`
                    `),t(54,"div",11),e(55,`
                        `),t(56,"span",4),e(57,`
                        `),r(),t(58,"svg",12),e(59,`
                            `),i(60,"path",13),e(61,`
                        `),n(),e(62,`
                        `),n(),e(63,`
                        `),a(),i(64,"input",15),e(65,`
                    `),n(),e(66,`
                `),n(),e(67,`
            `),n(),e(68,`

            `),t(69,"div",10),e(70,`
                `),t(71,"div",16),e(72,`
                    `),r(),t(73,"svg",17),e(74,`
                        `),i(75,"path",18),e(76,`
                    `),n(),e(77,`
                `),n(),e(78,`
                `),a(),t(79,"select",19),e(80,`
                    `),t(81,"option",20),e(82,"Seleccione Regi\xF3n"),n(),e(83,`
                    `),t(84,"option",21),e(85,"United States"),n(),e(86,`
                    `),t(87,"option",22),e(88,"Canada"),n(),e(89,`
                    `),t(90,"option",23),e(91,"France"),n(),e(92,`
                    `),t(93,"option",24),e(94,"Germany"),n(),e(95,`
                `),n(),e(96,`
            `),n(),e(97,`

            `),t(98,"div",10),e(99,`
                `),t(100,"div",16),e(101,`
                    `),r(),t(102,"svg",17),e(103,`
                        `),i(104,"path",25),e(105,`
                    `),n(),e(106,`
                `),n(),e(107,`
                `),a(),t(108,"select",19),e(109,`
                    `),t(110,"option",20),e(111,"Seleccione Comuna"),n(),e(112,`
                    `),t(113,"option",21),e(114,"United States"),n(),e(115,`
                    `),t(116,"option",22),e(117,"Canada"),n(),e(118,`
                    `),t(119,"option",23),e(120,"France"),n(),e(121,`
                    `),t(122,"option",24),e(123,"Germany"),n(),e(124,`
                `),n(),e(125,`
            `),n(),e(126,`

            `),t(127,"div",10),e(128,`
                `),t(129,"div",16),e(130,`
                `),r(),t(131,"svg",17),e(132,`
                    `),i(133,"path",26),e(134,`
                    `),i(135,"path",27),e(136,`
                `),n(),e(137,`
                `),n(),e(138,`
                `),a(),i(139,"input",28),e(140,`
            `),n(),e(141,`
            `),t(142,"div",10),e(143,`
                `),t(144,"div",16),e(145,`
                    `),r(),t(146,"svg",29),e(147,`
                        `),i(148,"path",30),e(149,`
                        `),i(150,"path",31),e(151,`
                    `),n(),e(152,`
                `),n(),e(153,`
                `),a(),i(154,"input",32),e(155,`
            `),n(),e(156,`
        `),n(),e(157,`
    `),n(),e(158,`
    `),t(159,"div",0),e(160,`
        `),t(161,"h3",1),e(162,"Datos del cliente:"),n(),e(163,`
        `),t(164,"form",9),e(165,`
            `),t(166,"div",10),e(167,`
                `),t(168,"div",2),e(169,`
                `),t(170,"div",11),e(171,`
                `),t(172,"span",4),e(173,`
                `),r(),t(174,"svg",12),e(175,`
                    `),i(176,"path",13),e(177,`
                `),n(),e(178,`
                `),n(),e(179,`
                `),a(),i(180,"input",33),e(181,`
            `),n(),e(182,`
                `),n(),e(183,`
            `),n(),e(184,` 

            `),t(185,"div",10),e(186,`
                `),t(187,"div",16),e(188,`
                `),r(),t(189,"svg",17),e(190,`
                    `),i(191,"path",18),e(192,`
                `),n(),e(193,`
                `),n(),e(194,`
                `),a(),i(195,"input",34),e(196,`
            `),n(),e(197,`

            `),t(198,"div",10),e(199,`
                `),t(200,"div",16),e(201,`
                `),r(),t(202,"svg",17),e(203,`
                    `),i(204,"path",25),e(205,`
                `),n(),e(206,`
                `),n(),e(207,`
                `),a(),i(208,"input",35),e(209,`
            `),n(),e(210,`

            `),t(211,"div",10),e(212,`
                `),t(213,"div",16),e(214,`
                `),r(),t(215,"svg",17),e(216,`
                    `),i(217,"path",26),e(218,`
                    `),i(219,"path",27),e(220,`
                `),n(),e(221,`
                `),n(),e(222,`
                `),a(),i(223,"input",36),e(224,`
            `),n(),e(225,`
            `),t(226,"div",10),e(227,`
                `),t(228,"div",16),e(229,`
                    `),r(),t(230,"svg",29),e(231,`
                        `),i(232,"path",30),e(233,`
                        `),i(234,"path",31),e(235,`
                    `),n(),e(236,`
                `),n(),e(237,`
                `),a(),i(238,"input",37),e(239,`
            `),n(),e(240,`
            `),t(241,"div",8),e(242,`
                `),t(243,"div",10),e(244,`
                    `),t(245,"div",16),e(246,`
                    `),r(),t(247,"svg",17),e(248,`
                        `),i(249,"path",38),e(250,`
                    `),n(),e(251,`
                    `),n(),e(252,`
                    `),a(),i(253,"input",39),e(254,`
                `),n(),e(255,`
                `),t(256,"div",10),e(257,`
                    `),t(258,"div",16),e(259,`
                    `),r(),t(260,"svg",17),e(261,`
                        `),i(262,"path",40),e(263,`
                    `),n(),e(264,`
                    `),n(),e(265,`
                    `),a(),i(266,"input",41),e(267,`
                `),n(),e(268,`
            `),n(),e(269,`
        `),n(),e(270,`  
    `),n(),e(271,`
`),n(),e(272,`
`))},dependencies:[h,v,E,w,S,k,b],encapsulation:2})};var L=class d{static \u0275fac=function(l){return new(l||d)};static \u0275cmp=g({type:d,selectors:[["app-datos-vehiculos"]],decls:300,vars:0,consts:[[1,"gap-16","py-8","px-4","mx-auto","max-w-screen-xl","lg:grid","lg:grid-cols-2","items-start"],[1,"font-light","text-gray-500","sm:text-lg","dark:text-gray-400"],[1,"mb-10","font-semibold","text-gray-900","dark:text-white",2,"font-size","x-large"],["action","#"],[1,"grid","gap-4","sm:grid-cols-2","sm:gap-6"],[1,"text-left"],["for","category",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","category",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["selected",""],["value","TV"],["value","PC"],["value","GA"],["value","PH"],[1,"w-full","text-left"],["for","brand",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","text","name","brand","id","brand","placeholder","BAjk-81","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["type","text","name","brand","id","brand","placeholder","1HGCM82633A123456","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","price",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","text","name","price","id","price","placeholder","K20A123456789","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["type","number","name","price","id","price","placeholder","185.000","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[1,"sm:col-span-2","text-left"],["for","description",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","description","rows","8","placeholder","Escriba su descripci\xF3n aqu\xED.",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-primary-500","focus:border-primary-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",2,"height","348px"],[1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["for","dropzone-file",1,"flex","flex-col","items-center","justify-center","w-full","h-64","border-2","border-gray-300","border-dashed","rounded-lg","cursor-pointer","bg-gray-50","dark:hover:bg-gray-800","dark:bg-gray-700","hover:bg-gray-100","dark:border-gray-600","dark:hover:border-gray-500"],[1,"flex","flex-col","items-center","justify-center","pt-5","pb-6"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 16",1,"w-8","h-8","mb-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"],[1,"mb-2","text-sm","text-gray-500","dark:text-gray-400"],[1,"font-semibold"],[1,"text-xs","text-gray-500","dark:text-gray-400"],["id","dropzone-file","type","file","accept","image/*","multiple","",1,"hidden"],[1,"block","items-center","justify-center","w-full","mt-16"],[1,"grid","grid-cols-3","gap-2","mt-8"],[1,"items-start","text-gray-500","zoom"],[2,"text-align","right"],["type","button",1,"text-gray-400","bg-transparent","hover:bg-gray-200","hover:text-gray-900","rounded-lg","text-sm","h-8","w-8","ms-auto","inline-flex","justify-center","items-center","dark:hover:bg-gray-700","dark:hover:text-red-400"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 14 14",1,"w-3","h-3"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"],["src","https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png","alt","office content 1",1,"w-full","rounded-lg"]],template:function(l,o){l&1&&(e(0,`
`),t(1,"section"),e(2,`
    `),t(3,"div",0),e(4,`
        `),t(5,"div",1),e(6,`
            `),e(7,`
            `),t(8,"h3",2),e(9,"Datos del Veh\xEDculo:"),n(),e(10,`
            `),t(11,"form",3),e(12,`
                `),t(13,"div",4),e(14,`
                    `),t(15,"div",5),e(16,`
                        `),t(17,"label",6),e(18,"Marca del Veh\xEDculo:"),n(),e(19,`
                        `),t(20,"select",7),e(21,`
                            `),t(22,"option",8),e(23,"Seleccionar Marca"),n(),e(24,`
                            `),t(25,"option",9),e(26,"Toyota"),n(),e(27,`
                        `),n(),e(28,`
                    `),n(),e(29,`
                    `),t(30,"div",5),e(31,`
                        `),t(32,"label",6),e(33,"Modelo del Veh\xEDculo:"),n(),e(34,`
                        `),t(35,"select",7),e(36,`
                            `),t(37,"option",8),e(38,"Seleccionar Modelo"),n(),e(39,`
                            `),t(40,"option",9),e(41,"NEW Corolla Cross"),n(),e(42,`
                            `),t(43,"option",10),e(44,"Yaris Cross"),n(),e(45,`
                            `),t(46,"option",11),e(47,"Corolla"),n(),e(48,`
                            `),t(49,"option",12),e(50,"Fortuner"),n(),e(51,`
                        `),n(),e(52,`
                    `),n(),e(53,`
                    `),t(54,"div",13),e(55,`
                        `),t(56,"label",14),e(57,"N\xFAmero de Matricula:"),n(),e(58,`
                        `),i(59,"input",15),e(60,`
                    `),n(),e(61,`
                    `),t(62,"div",13),e(63,`
                        `),t(64,"label",14),e(65,"N\xFAmero de Chasis:"),n(),e(66,`
                        `),i(67,"input",16),e(68,`
                    `),n(),e(69,`
                    `),t(70,"div",13),e(71,`
                        `),t(72,"label",17),e(73,"N\xFAmero de Motor:"),n(),e(74,`
                        `),i(75,"input",18),e(76,`
                    `),n(),e(77,`
                    `),t(78,"div",13),e(79,`
                        `),t(80,"label",17),e(81,"Kilometraje:"),n(),e(82,`
                        `),i(83,"input",19),e(84,`
                    `),n(),e(85,`
                    `),t(86,"div",20),e(87,`
                        `),t(88,"label",21),e(89,"Descripci\xF3n de la falla"),n(),e(90,`
                        `),i(91,"textarea",22),e(92,`
                    `),n(),e(93,`
                    `),t(94,"div",20),e(95,`
                        `),t(96,"label",23),e(97,"Cargar Imagenes del veh\xEDculo:"),n(),e(98,`

                        `),t(99,"label",24),e(100,`
                            `),t(101,"div",25),e(102,`
                                `),r(),t(103,"svg",26),e(104,`
                                    `),i(105,"path",27),e(106,`
                                `),n(),e(107,`
                                `),a(),t(108,"p",28)(109,"span",29),e(110,"Click para actualizar"),n(),e(111," o arrastrar y soltar"),n(),e(112,`
                                `),t(113,"p",30),e(114,"SVG, PNG, JPG or GIF (MAX. 800x400px)"),n(),e(115,`
                            `),n(),e(116,`
                            `),i(117,"input",31),e(118,`
                        `),n(),e(119,`
                    `),n(),e(120,`
                `),n(),e(121,`
            `),n(),e(122,`
            `),e(123,`
        `),n(),e(124,`
        
        `),t(125,"div",32),e(126,`
            `),t(127,"div",33),e(128,`
                `),t(129,"div",34),e(130,`
                    `),t(131,"div",35),e(132,`
                        `),t(133,"button",36),e(134,`
                            `),r(),t(135,"svg",37),e(136,`
                                `),i(137,"path",38),e(138,`
                            `),n(),e(139,`
                        `),n(),e(140,`
                    `),n(),e(141,`
                    `),a(),t(142,"div"),e(143,`
                        `),i(144,"img",39),e(145,` 
                    `),n(),e(146,`
                `),n(),e(147,`
                `),t(148,"div",34),e(149,`
                    `),t(150,"div",35),e(151,`
                        `),t(152,"button",36),e(153,`
                            `),r(),t(154,"svg",37),e(155,`
                                `),i(156,"path",38),e(157,`
                            `),n(),e(158,`
                        `),n(),e(159,`
                    `),n(),e(160,`
                    `),a(),t(161,"div"),e(162,`
                        `),i(163,"img",39),e(164,` 
                    `),n(),e(165,`
                `),n(),t(166,"div",34),e(167,`
                    `),t(168,"div",35),e(169,`
                        `),t(170,"button",36),e(171,`
                            `),r(),t(172,"svg",37),e(173,`
                                `),i(174,"path",38),e(175,`
                            `),n(),e(176,`
                        `),n(),e(177,`
                    `),n(),e(178,`
                    `),a(),t(179,"div"),e(180,`
                        `),i(181,"img",39),e(182,` 
                    `),n(),e(183,`
                `),n(),t(184,"div",34),e(185,`
                    `),t(186,"div",35),e(187,`
                        `),t(188,"button",36),e(189,`
                            `),r(),t(190,"svg",37),e(191,`
                                `),i(192,"path",38),e(193,`
                            `),n(),e(194,`
                        `),n(),e(195,`
                    `),n(),e(196,`
                    `),a(),t(197,"div"),e(198,`
                        `),i(199,"img",39),e(200,` 
                    `),n(),e(201,`
                `),n(),t(202,"div",34),e(203,`
                    `),t(204,"div",35),e(205,`
                        `),t(206,"button",36),e(207,`
                            `),r(),t(208,"svg",37),e(209,`
                                `),i(210,"path",38),e(211,`
                            `),n(),e(212,`
                        `),n(),e(213,`
                    `),n(),e(214,`
                    `),a(),t(215,"div"),e(216,`
                        `),i(217,"img",39),e(218,` 
                    `),n(),e(219,`
                `),n(),t(220,"div",34),e(221,`
                    `),t(222,"div",35),e(223,`
                        `),t(224,"button",36),e(225,`
                            `),r(),t(226,"svg",37),e(227,`
                                `),i(228,"path",38),e(229,`
                            `),n(),e(230,`
                        `),n(),e(231,`
                    `),n(),e(232,`
                    `),a(),t(233,"div"),e(234,`
                        `),i(235,"img",39),e(236,` 
                    `),n(),e(237,`
                `),n(),e(238,`
                `),t(239,"div",34),e(240,`
                    `),t(241,"div",35),e(242,`
                        `),t(243,"button",36),e(244,`
                            `),r(),t(245,"svg",37),e(246,`
                                `),i(247,"path",38),e(248,`
                            `),n(),e(249,`
                        `),n(),e(250,`
                    `),n(),e(251,`
                    `),a(),t(252,"div"),e(253,`
                        `),i(254,"img",39),e(255,` 
                    `),n(),e(256,`
                `),n(),e(257,`
                `),t(258,"div",34),e(259,`
                    `),t(260,"div",35),e(261,`
                        `),t(262,"button",36),e(263,`
                            `),r(),t(264,"svg",37),e(265,`
                                `),i(266,"path",38),e(267,`
                            `),n(),e(268,`
                        `),n(),e(269,`
                    `),n(),e(270,`
                    `),a(),t(271,"div"),e(272,`
                        `),i(273,"img",39),e(274,` 
                    `),n(),e(275,`
                `),n(),e(276,`
                `),t(277,"div",34),e(278,`
                    `),t(279,"div",35),e(280,`
                        `),t(281,"button",36),e(282,`
                            `),r(),t(283,"svg",37),e(284,`
                                `),i(285,"path",38),e(286,`
                            `),n(),e(287,`
                        `),n(),e(288,`
                    `),n(),e(289,`
                    `),a(),t(290,"div"),e(291,`
                        `),i(292,"img",39),e(293,` 
                    `),n(),e(294,`
                `),n(),e(295,`
            `),n(),e(296,`
        `),n(),e(297,`
        
    `),n(),e(298,`
`),n(),e(299,`
`))},dependencies:[h,v,E,w,S,k,b],styles:[".zoom[_ngcontent-%COMP%]{width:100%;transition:transform .5s ease}.zoom[_ngcontent-%COMP%]:hover{transform:scale(1.2)}"]})};var de=d=>({"is-active":d}),D=class d{formData={NombreProducto:"",Precio:"",Categoria:"Seleccione la Categoria",Descripcion:""};isVisible=!0;closeModal=new O;ngOnInit(){}close(){console.log("modal se cierra: "+this.isVisible),this.resetForm(),this.closeModal.emit(!1)}resetForm(){this.formData={NombreProducto:"",Precio:"",Categoria:"Seleccione la Categoria",Descripcion:""}}static \u0275fac=function(l){return new(l||d)};static \u0275cmp=g({type:d,selectors:[["app-modal-productos"]],inputs:{isVisible:"isVisible"},outputs:{closeModal:"closeModal"},decls:123,vars:7,consts:[["id","defaultModal",1,"modal","hidden",3,"ngClass"],[1,"relative","p-4","w-full","max-w-2xl","h-full","md:h-auto"],[1,"relative","p-4","bg-white","rounded-lg","shadow","dark:bg-gray-800","sm:p-5"],[1,"flex","justify-between","items-center","pb-4","mb-4","rounded-t","border-b","sm:mb-5","dark:border-gray-600"],[1,"text-lg","font-semibold","text-gray-900","dark:text-white"],["type","button","data-modal-toggle","defaultModal",1,"text-gray-400","bg-transparent","hover:bg-gray-200","hover:text-gray-900","rounded-lg","text-sm","p-1.5","ml-auto","inline-flex","items-center","dark:hover:bg-gray-600","dark:hover:text-white",3,"click"],["fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"w-5","h-5"],["fill-rule","evenodd","d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule","evenodd"],[1,"sr-only"],["action","#"],[1,"grid","gap-4","mb-4","sm:grid-cols-2"],["for","name",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","text","name","name","id","name","placeholder","Filtro de Aire","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"ngModelChange","ngModel"],["for","price",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","number","name","price","id","price","placeholder","$2999","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"ngModelChange","ngModel"],["for","category",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","category","name","category",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"ngModelChange","ngModel"],["selected",""],["value","TV"],["value","PC"],["value","GA"],["value","PH"],[1,"sm:col-span-2"],["for","description",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["id","description","name","description","rows","4","placeholder","Escribe aqu\xED la descripci\xF3n de tu producto",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-primary-500","focus:border-primary-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500",3,"ngModelChange","ngModel"],["type","submit",1,"text-white","inline-flex","items-center","bg-primary-700","hover:bg-primary-800","focus:ring-4","focus:outline-none","focus:ring-primary-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-primary-600","dark:hover:bg-primary-700","dark:focus:ring-primary-800"],["fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"mr-1","-ml-1","w-6","h-6"],["fill-rule","evenodd","d","M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule","evenodd"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,`
    `),t(2,"div",1),e(3,`
        `),t(4,"div",2),e(5,`

            `),t(6,"div",3),e(7,`
                `),t(8,"h3",4),e(9,`
                    Crear Producto
                `),n(),e(10,`
                `),t(11,"button",5),f("click",function(){return o.close()}),e(12,`
                    `),r(),t(13,"svg",6),i(14,"path",7),n(),e(15,`
                    `),a(),t(16,"span",8),e(17,"Cerrar Modal"),n(),e(18,`
                `),n(),e(19,`
            `),n(),e(20,`

            `),t(21,"form",9),e(22,`
                `),t(23,"div",10),e(24,`
                    `),t(25,"div"),e(26,`
                        `),t(27,"label",11),e(28,"Nombre Producto o Servicio"),n(),e(29,`
                        `),t(30,"input",12),P("ngModelChange",function(x){return C(o.formData.NombreProducto,x)||(o.formData.NombreProducto=x),x}),n(),e(31,`
                    `),n(),e(32,`
                    `),t(33,"div"),e(34,`
                        `),t(35,"label",13),e(36,"Precio"),n(),e(37,`
                        `),t(38,"input",14),P("ngModelChange",function(x){return C(o.formData.Precio,x)||(o.formData.Precio=x),x}),n(),e(39,`
                    `),n(),e(40,`
                    `),t(41,"div"),e(42,`
                        `),t(43,"label",15),e(44,"Categoria"),n(),e(45,`
                        `),t(46,"select",16),P("ngModelChange",function(x){return C(o.formData.Categoria,x)||(o.formData.Categoria=x),x}),e(47,`
                            `),t(48,"option",17),e(49,"Seleccione la Categoria"),n(),e(50,`
                            `),t(51,"option",18),e(52,"Cambio de Aceite "),n(),e(53,`
                            `),t(54,"option",19),e(55,"Sistema de Alimentaci\xF3n"),n(),e(56,`
                            `),t(57,"option",20),e(58,"Motor de Partida y Alternador"),n(),e(59,`
                            `),t(60,"option",21),e(61,"Filtros"),n(),e(62,`
                            `),t(63,"option",21),e(64,"Embragues y Transmisi\xF3n"),n(),e(65,`
                            `),t(66,"option",21),e(67,"Carrocer\xEDa"),n(),e(68,`
                            `),t(69,"option",21),e(70,"Rodamiento y Retenes"),n(),e(71,`
                            `),t(72,"option",21),e(73,"Frenos"),n(),e(74,`
                            `),t(75,"option",21),e(76,"Motor"),n(),e(77,`
                            `),t(78,"option",21),e(79,"Supensi\xF3n y Direcci\xF3n"),n(),e(80,`
                            `),t(81,"option",21),e(82,"Distribuci\xF3n"),n(),e(83,`
                            `),t(84,"option",21),e(85,"Afinamiento y Encendido"),n(),e(86,`
                            `),t(87,"option",21),e(88,"Sistema de Escape"),n(),e(89,`
                            `),t(90,"option",21),e(91,"Sensores y El\xE9ctrica"),n(),e(92,`
                            `),t(93,"option",21),e(94,"Refrigeraci\xF3n y Calefacci\xF3n"),n(),e(95,`
                            `),t(96,"option",21),e(97,"Correa de Accesorios y Servicios"),n(),e(98,`
                            `),t(99,"option",21),e(100,"Mano de Obra"),n(),e(101,`
                        `),n(),e(102,`
                    `),n(),e(103,`
                    `),t(104,"div",22),e(105,`
                        `),t(106,"label",23),e(107,"Descripci\xF3n"),n(),e(108,`
                        `),t(109,"textarea",24),P("ngModelChange",function(x){return C(o.formData.Descripcion,x)||(o.formData.Descripcion=x),x}),n(),e(110,`                    
                    `),n(),e(111,`
                `),n(),e(112,`
                `),t(113,"button",25),e(114,`
                    `),r(),t(115,"svg",26),i(116,"path",27),n(),e(117,`
                    Guardar Producto
                `),n(),e(118,`
            `),n(),e(119,`
        `),n(),e(120,`
    `),n(),e(121,`
`),n(),e(122,`
    `)),l&2&&(s("ngClass",u(5,de,o.isVisible)),m(30),M("ngModel",o.formData.NombreProducto),m(8),M("ngModel",o.formData.Precio),m(8),M("ngModel",o.formData.Categoria),m(63),M("ngModel",o.formData.Descripcion))},dependencies:[h,v,E,w,U,$,J,K,S,X,Y,k,b,G],styles:[".modal[_ngcontent-%COMP%]{position:fixed;z-index:1050;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#00000080}.modal.is-active[_ngcontent-%COMP%]{display:block}.modal-content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 6px #0000001a}.modal-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.modal-close[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;border:none;background:transparent;font-size:1.5em;cursor:pointer}"]})};var H=class d{isModalVisible=!1;isModalFinalVisible=!1;ngOnInit(){}openModal(){console.log("estado modal: "+this.isModalVisible),this.isModalVisible=!0}closeModal(){console.log("se cierra el modal en al lista"),this.isModalVisible=!1}static \u0275fac=function(l){return new(l||d)};static \u0275cmp=g({type:d,selectors:[["app-lista-productos"]],decls:460,vars:1,consts:[[1,"flex","items-center","mx-auto","p-4","pb-0"],[1,"md:gap-14","lg:flex","lg:items-start","xl:gap-14"],[1,"mx-auto","w-full","flex-none","lg:max-w-2xl","xl:max-w-4xl","pb-4"],[1,"flex"],["for","search-dropdown",1,"mb-2","text-sm","font-medium","text-gray-900","sr-only","dark:text-white"],["id","dropdown-button","data-dropdown-toggle","dropdown","type","button",1,"flex-shrink-0","z-10","inline-flex","items-center","py-2.5","px-4","text-sm","font-medium","text-center","text-gray-900","bg-gray-100","border","border-gray-300","rounded-s-lg","hover:bg-gray-200","focus:ring-4","focus:outline-none","focus:ring-gray-100","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700","dark:text-white","dark:border-gray-600"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 10 6",1,"w-2.5","h-2.5","ms-2.5"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 1 4 4 4-4"],["id","dropdown","data-popper-placement","bottom",1,"z-10","hidden","bg-white","divide-y","divide-gray-100","rounded-lg","shadow","w-44","dark:bg-gray-700",2,"position","absolute","inset","0px auto auto 0px","margin","0px","transform","translate(526px, 644px)"],["aria-labelledby","dropdown-button",1,"py-2","text-sm","text-gray-700","dark:text-gray-200"],["type","button",1,"inline-flex","w-full","px-4","py-2","hover:bg-gray-100","dark:hover:bg-gray-600","dark:hover:text-white"],[1,"relative","w-full"],["type","search","id","search-dropdown","placeholder","Buscar productos por su nombre","required","",1,"block","p-2.5","w-full","z-20","text-sm","text-gray-900","bg-gray-50","rounded-e-lg","border-s-gray-50","border-s-2","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-s-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:border-blue-500"],[1,"w-full","flex-none","lg:max-w-2xl","xl:max-w-4xl","pb-4",2,"text-align","-webkit-right"],["id","defaultModalButton","data-modal-target","defaultModal","data-modal-toggle","defaultModal",1,"relative","inline-flex","items-center","justify-center","p-0.5","mb-2","me-2","overflow-hidden","text-sm","font-medium","text-gray-900","rounded-lg","group","bg-gradient-to-br","from-purple-600","to-blue-500","group-hover:from-purple-600","group-hover:to-blue-500","hover:text-white","dark:text-white","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:focus:ring-blue-800",3,"click"],[1,"relative","px-5","py-2.5","transition-all","ease-in","duration-75","bg-white","dark:bg-gray-900","rounded-md","group-hover:bg-opacity-0"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"me-1","-ms-0","inline"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"],[3,"closeModal","isVisible"],[1,"mx-auto","max-w-screen-xl","p-4","pt-0"],[1,"md:gap-6","lg:flex","lg:items-start","xl:gap-8"],[1,"mx-auto","w-full","flex-none","lg:max-w-2xl","xl:max-w-4xl"],[1,"space-y-6"],[1,"rounded-lg","border","border-gray-200","bg-white","p-4","shadow-sm","dark:border-gray-700","dark:bg-gray-800","md:p-6"],[1,"text-end"],["type","button",1,"inline-flex","items-center","text-sm","font-medium","text-red-600","hover:underline","dark:text-red-500"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"me-1.5","h-5","w-5"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18 17.94 6M18 18 6.06 6"],[1,"space-y-4","md:flex","md:items-center","md:justify-between","md:gap-6","md:space-y-0"],["href","#",1,"shrink-0","md:order-1"],["src","https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg","alt","imac image",1,"h-20","w-20","dark:hidden"],["src","https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg","alt","imac image",1,"hidden","h-20","w-20","dark:block"],["for","counter-input",1,"sr-only"],[1,"flex","items-center","justify-between","md:order-3","md:justify-end"],[1,"flex","items-center"],["type","button","id","decrement-button","data-input-counter-decrement","counter-input",1,"inline-flex","h-5","w-5","shrink-0","items-center","justify-center","rounded-md","border","border-gray-300","bg-gray-100","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-gray-100","dark:border-gray-600","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 18 2",1,"h-2.5","w-2.5","text-gray-900","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M1 1h16"],["type","text","id","counter-input","data-input-counter","","placeholder","","value","2","required","",1,"w-10","shrink-0","border-0","bg-transparent","text-center","text-sm","font-medium","text-gray-900","focus:outline-none","focus:ring-0","dark:text-white"],["type","button","id","increment-button","data-input-counter-increment","counter-input",1,"inline-flex","h-5","w-5","shrink-0","items-center","justify-center","rounded-md","border","border-gray-300","bg-gray-100","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-gray-100","dark:border-gray-600","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 18 18",1,"h-2.5","w-2.5","text-gray-900","dark:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M9 1v16M1 9h16"],[1,"text-end","md:order-4","md:w-32"],[1,"text-base","font-bold","text-gray-900","dark:text-white"],[1,"w-full","min-w-0","flex-1","space-y-4","md:order-2","md:max-w-md"],["href","#",1,"text-base","font-medium","text-gray-900","hover:underline","dark:text-white"],["src","https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg","alt","imac image",1,"h-20","w-20","dark:hidden"],["src","https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg","alt","imac image",1,"hidden","h-20","w-20","dark:block"],["type","button","id","decrement-button-2","data-input-counter-decrement","counter-input-2",1,"inline-flex","h-5","w-5","shrink-0","items-center","justify-center","rounded-md","border","border-gray-300","bg-gray-100","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-gray-100","dark:border-gray-600","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700"],["type","text","id","counter-input-2","data-input-counter","","placeholder","","value","1","required","",1,"w-10","shrink-0","border-0","bg-transparent","text-center","text-sm","font-medium","text-gray-900","focus:outline-none","focus:ring-0","dark:text-white"],["type","button","id","increment-button-2","data-input-counter-increment","counter-input-2",1,"inline-flex","h-5","w-5","shrink-0","items-center","justify-center","rounded-md","border","border-gray-300","bg-gray-100","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-gray-100","dark:border-gray-600","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700"],["src","https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg","alt","imac image",1,"h-20","w-20","dark:hidden"],["src","https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg","alt","imac image",1,"hidden","h-20","w-20","dark:block"],["type","button","id","decrement-button-3","data-input-counter-decrement","counter-input-3",1,"inline-flex","h-5","w-5","shrink-0","items-center","justify-center","rounded-md","border","border-gray-300","bg-gray-100","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-gray-100","dark:border-gray-600","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700"],["type","text","id","counter-input-3","data-input-counter","","placeholder","","value","1","required","",1,"w-10","shrink-0","border-0","bg-transparent","text-center","text-sm","font-medium","text-gray-900","focus:outline-none","focus:ring-0","dark:text-white"],["type","button","id","increment-button-3","data-input-counter-increment","counter-input-3",1,"inline-flex","h-5","w-5","shrink-0","items-center","justify-center","rounded-md","border","border-gray-300","bg-gray-100","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-gray-100","dark:border-gray-600","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700"],["src","https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg","alt","imac image",1,"h-20","w-20","dark:hidden"],["src","https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg","alt","imac image",1,"hidden","h-20","w-20","dark:block"],["type","button","id","decrement-button-4","data-input-counter-decrement","counter-input-4",1,"inline-flex","h-5","w-5","shrink-0","items-center","justify-center","rounded-md","border","border-gray-300","bg-gray-100","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-gray-100","dark:border-gray-600","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700"],["type","text","id","counter-input-4","data-input-counter","","placeholder","","value","1","required","",1,"w-10","shrink-0","border-0","bg-transparent","text-center","text-sm","font-medium","text-gray-900","focus:outline-none","focus:ring-0","dark:text-white"],["type","button","id","increment-button-4","data-input-counter-increment","counter-input-4",1,"inline-flex","h-5","w-5","shrink-0","items-center","justify-center","rounded-md","border","border-gray-300","bg-gray-100","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-gray-100","dark:border-gray-600","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700"],["href","#",1,"w-20","shrink-0","md:order-1"],["src","https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg","alt","imac image",1,"h-20","w-20","dark:hidden"],["src","https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg","alt","imac image",1,"hidden","h-20","w-20","dark:block"],["type","button","id","decrement-button-5","data-input-counter-decrement","counter-input-5",1,"inline-flex","h-5","w-5","shrink-0","items-center","justify-center","rounded-md","border","border-gray-300","bg-gray-100","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-gray-100","dark:border-gray-600","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700"],["type","text","id","counter-input-5","data-input-counter","","placeholder","","value","3","required","",1,"w-10","shrink-0","border-0","bg-transparent","text-center","text-sm","font-medium","text-gray-900","focus:outline-none","focus:ring-0","dark:text-white"],["type","button","id","increment-button-5","data-input-counter-increment","counter-input-5",1,"inline-flex","h-5","w-5","shrink-0","items-center","justify-center","rounded-md","border","border-gray-300","bg-gray-100","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-gray-100","dark:border-gray-600","dark:bg-gray-700","dark:hover:bg-gray-600","dark:focus:ring-gray-700"],[1,"mx-auto","mt-6","max-w-4xl","flex-1","space-y-6","lg:mt-0","lg:w-full"],[1,"space-y-4","rounded-lg","border","border-gray-200","bg-white","p-4","shadow-sm","dark:border-gray-700","dark:bg-gray-800","sm:p-6"],[1,"text-xl","font-semibold","text-gray-900","dark:text-white"],[1,"space-y-4"],[1,"space-y-2"],[1,"flex","items-center","justify-between","gap-4"],[1,"text-base","font-normal","text-gray-500","dark:text-gray-400"],[1,"text-base","font-medium","text-gray-900","dark:text-white"],[1,"text-base","font-medium","text-green-600"],[1,"flex","items-center","justify-between","gap-4","border-t","border-gray-200","pt-2","dark:border-gray-700"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,`
    `),t(2,"div",1),e(3,`
        `),t(4,"div",2),e(5,`
            `),t(6,"div",3),e(7,`
                `),t(8,"label",4),e(9,"Your Email"),n(),e(10,`
                `),t(11,"button",5),e(12,`
                    Todas las Categorias `),r(),t(13,"svg",6),e(14,`
            `),i(15,"path",7),e(16,`
            `),n()(),e(17,`
                `),a(),t(18,"div",8),e(19,`
                    `),t(20,"ul",9),e(21,`
                    `),t(22,"li"),e(23,`
                        `),t(24,"button",10),e(25,"Cambio de Aceite"),n(),e(26,`
                    `),n(),e(27,`
                    `),t(28,"li"),e(29,`
                        `),t(30,"button",10),e(31,"Sistema Alimentaci\xF3n"),n(),e(32,`
                    `),n(),e(33,`
                    `),t(34,"li"),e(35,`
                        `),t(36,"button",10),e(37,"Filtros"),n(),e(38,`
                    `),n(),e(39,`
                    `),t(40,"li"),e(41,`
                        `),t(42,"button",10),e(43,"Frenos"),n(),e(44,`
                    `),n(),e(45,`
                    `),n(),e(46,`
                `),n(),e(47,`
                `),t(48,"div",11),e(49,`
                    `),i(50,"input",12),e(51,`
                `),n(),e(52,`
            `),n(),e(53,`
        `),n(),e(54,`
        `),t(55,"div",13),e(56,`      
            `),t(57,"button",14),f("click",function(){return o.openModal()}),e(58,`
                `),t(59,"span",15),e(60,`
                `),r(),t(61,"svg",16),e(62,`
                    `),i(63,"path",17),e(64,`
                `),n(),e(65,`
                Crear Producto
                `),n(),e(66,`
            `),n(),e(67,`
            
        `),n(),e(68,`
    `),n(),e(69,`
`),n(),e(70,`

`),a(),t(71,"app-modal-productos",18),f("closeModal",function(){return o.closeModal()}),n(),e(72,`

`),t(73,"section"),e(74,`
    `),t(75,"div",19),e(76,`
        `),e(77,`
        `),t(78,"div",20),e(79,`
        `),t(80,"div",21),e(81,`
            `),t(82,"div",22),e(83,`
            `),t(84,"div",23),e(85,`
                `),t(86,"div",24),e(87,`
                    `),t(88,"button",25),e(89,`
                        `),r(),t(90,"svg",26),e(91,`
                        `),i(92,"path",27),e(93,`
                        `),n(),e(94,`
                        Eliminar
                    `),n(),e(95,`
                `),n(),e(96,`
                `),a(),t(97,"div",28),e(98,`
                `),t(99,"a",29),e(100,`
                    `),i(101,"img",30),e(102,`
                    `),i(103,"img",31),e(104,`
                `),n(),e(105,`
    
                `),t(106,"label",32),e(107,"Choose quantity:"),n(),e(108,`
                `),t(109,"div",33),e(110,`
                    `),t(111,"div",34),e(112,`
                    `),t(113,"button",35),e(114,`
                        `),r(),t(115,"svg",36),e(116,`
                        `),i(117,"path",37),e(118,`
                        `),n(),e(119,`
                    `),n(),e(120,`
                    `),a(),i(121,"input",38),e(122,`
                    `),t(123,"button",39),e(124,`
                        `),r(),t(125,"svg",40),e(126,`
                        `),i(127,"path",41),e(128,`
                        `),n(),e(129,`
                    `),n(),e(130,`
                    `),n(),e(131,`
                    `),a(),t(132,"div",42),e(133,`
                        `),t(134,"p",43),e(135,"$1,499"),n(),e(136,`
                    `),n(),e(137,`
                `),n(),e(138,`
    
                `),t(139,"div",44),e(140,`
                    `),t(141,"a",45),e(142,'PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT'),n(),e(143,`
                `),n(),e(144,`
                `),n(),e(145,`
            `),n(),e(146,`
            `),t(147,"div",23),e(148,`
                `),t(149,"div",24),e(150,`
                    `),t(151,"button",25),e(152,`
                        `),r(),t(153,"svg",26),e(154,`
                        `),i(155,"path",27),e(156,`
                        `),n(),e(157,`
                        Eliminar
                    `),n(),e(158,`
                `),n(),e(159,`
                `),a(),t(160,"div",28),e(161,`
                `),t(162,"a",29),e(163,`
                    `),i(164,"img",46),e(165,`
                    `),i(166,"img",47),e(167,`
                `),n(),e(168,`
    
                `),t(169,"label",32),e(170,"Choose quantity:"),n(),e(171,`
                `),t(172,"div",33),e(173,`
                    `),t(174,"div",34),e(175,`
                    `),t(176,"button",48),e(177,`
                        `),r(),t(178,"svg",36),e(179,`
                        `),i(180,"path",37),e(181,`
                        `),n(),e(182,`
                    `),n(),e(183,`
                    `),a(),i(184,"input",49),e(185,`
                    `),t(186,"button",50),e(187,`
                        `),r(),t(188,"svg",40),e(189,`
                        `),i(190,"path",41),e(191,`
                        `),n(),e(192,`
                    `),n(),e(193,`
                    `),n(),e(194,`
                    `),a(),t(195,"div",42),e(196,`
                    `),t(197,"p",43),e(198,"$598"),n(),e(199,`
                    `),n(),e(200,`
                `),n(),e(201,`
    
                `),t(202,"div",44),e(203,`
                    `),t(204,"a",45),e(205,"Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band"),n(),e(206,`
                `),n(),e(207,`
                `),n(),e(208,`
            `),n(),e(209,`
            `),t(210,"div",23),e(211,`
            `),t(212,"div",24),e(213,`
                        `),t(214,"button",25),e(215,`
                            `),r(),t(216,"svg",26),e(217,`
                            `),i(218,"path",27),e(219,`
                            `),n(),e(220,`
                            Eliminar
                        `),n(),e(221,`
                    `),n(),e(222,`
                `),a(),t(223,"div",28),e(224,`
                `),t(225,"a",29),e(226,`
                    `),i(227,"img",51),e(228,`
                    `),i(229,"img",52),e(230,`
                `),n(),e(231,`
    
                `),t(232,"label",32),e(233,"Choose quantity:"),n(),e(234,`
                `),t(235,"div",33),e(236,`
                    `),t(237,"div",34),e(238,`
                    `),t(239,"button",53),e(240,`
                        `),r(),t(241,"svg",36),e(242,`
                        `),i(243,"path",37),e(244,`
                        `),n(),e(245,`
                    `),n(),e(246,`
                    `),a(),i(247,"input",54),e(248,`
                    `),t(249,"button",55),e(250,`
                        `),r(),t(251,"svg",40),e(252,`
                        `),i(253,"path",41),e(254,`
                        `),n(),e(255,`
                    `),n(),e(256,`
                    `),n(),e(257,`
                    `),a(),t(258,"div",42),e(259,`
                    `),t(260,"p",43),e(261,"$1,799"),n(),e(262,`
                    `),n(),e(263,`
                `),n(),e(264,`
    
                `),t(265,"div",44),e(266,`
                    `),t(267,"a",45),e(268,'Apple - MacBook Pro 16" Laptop, M3 Pro chip, 36GB Memory, 18-core GPU, 512GB SSD, Space Black'),n(),e(269,`
                `),n(),e(270,`
                `),n(),e(271,`
            `),n(),e(272,`
            `),t(273,"div",23),e(274,`
            `),t(275,"div",24),e(276,`
                        `),t(277,"button",25),e(278,`
                            `),r(),t(279,"svg",26),e(280,`
                            `),i(281,"path",27),e(282,`
                            `),n(),e(283,`
                            Eliminar
                        `),n(),e(284,`
                    `),n(),e(285,`
                `),a(),t(286,"div",28),e(287,`
                `),t(288,"a",29),e(289,`
                    `),i(290,"img",56),e(291,`
                    `),i(292,"img",57),e(293,`
                `),n(),e(294,`
    
                `),t(295,"label",32),e(296,"Choose quantity:"),n(),e(297,`
                `),t(298,"div",33),e(299,`
                    `),t(300,"div",34),e(301,`
                    `),t(302,"button",58),e(303,`
                        `),r(),t(304,"svg",36),e(305,`
                        `),i(306,"path",37),e(307,`
                        `),n(),e(308,`
                    `),n(),e(309,`
                    `),a(),i(310,"input",59),e(311,`
                    `),t(312,"button",60),e(313,`
                        `),r(),t(314,"svg",40),e(315,`
                        `),i(316,"path",41),e(317,`
                        `),n(),e(318,`
                    `),n(),e(319,`
                    `),n(),e(320,`
                    `),a(),t(321,"div",42),e(322,`
                    `),t(323,"p",43),e(324,"$699"),n(),e(325,`
                    `),n(),e(326,`
                `),n(),e(327,`
    
                `),t(328,"div",44),e(329,`
                    `),t(330,"a",45),e(331,'Tablet APPLE iPad Pro 12.9" 6th Gen, 128GB, Wi-Fi, Gold'),n(),e(332,`
                `),n(),e(333,`
                `),n(),e(334,`
            `),n(),e(335,`
            `),t(336,"div",23),e(337,`
            `),t(338,"div",24),e(339,`
                        `),t(340,"button",25),e(341,`
                            `),r(),t(342,"svg",26),e(343,`
                            `),i(344,"path",27),e(345,`
                            `),n(),e(346,`
                            Eliminar
                        `),n(),e(347,`
                    `),n(),e(348,`
                `),a(),t(349,"div",28),e(350,`
                `),t(351,"a",61),e(352,`
                    `),i(353,"img",62),e(354,`
                    `),i(355,"img",63),e(356,`
                `),n(),e(357,`
    
                `),t(358,"label",32),e(359,"Choose quantity:"),n(),e(360,`
                `),t(361,"div",33),e(362,`
                    `),t(363,"div",34),e(364,`
                    `),t(365,"button",64),e(366,`
                        `),r(),t(367,"svg",36),e(368,`
                        `),i(369,"path",37),e(370,`
                        `),n(),e(371,`
                    `),n(),e(372,`
                    `),a(),i(373,"input",65),e(374,`
                    `),t(375,"button",66),e(376,`
                        `),r(),t(377,"svg",40),e(378,`
                        `),i(379,"path",41),e(380,`
                        `),n(),e(381,`
                    `),n(),e(382,`
                    `),n(),e(383,`
                    `),a(),t(384,"div",42),e(385,`
                    `),t(386,"p",43),e(387,"$2,997"),n(),e(388,`
                    `),n(),e(389,`
                `),n(),e(390,`
    
                `),t(391,"div",44),e(392,`
                    `),t(393,"a",45),e(394,"APPLE iPhone 15 5G phone, 256GB, Gold"),n(),e(395,`
                `),n(),e(396,`
                `),n(),e(397,`
            `),n(),e(398,`
            `),n(),e(399,`
        `),n(),e(400,`
    
        `),t(401,"div",67),e(402,`
            `),t(403,"div",68),e(404,`
            `),t(405,"p",69),e(406,"Resumen de valores"),n(),e(407,`
    
            `),t(408,"div",70),e(409,`
                `),t(410,"div",71),e(411,`
                `),t(412,"dl",72),e(413,`
                    `),t(414,"dt",73),e(415,"Precio original"),n(),e(416,`
                    `),t(417,"dd",74),e(418,"$150.000"),n(),e(419,`
                `),n(),e(420,`
    
                `),t(421,"dl",72),e(422,`
                    `),t(423,"dt",73),e(424,"Ahorros"),n(),e(425,`
                    `),t(426,"dd",75),e(427,"-$50.000"),n(),e(428,`
                `),n(),e(429,`
    
                `),t(430,"dl",72),e(431,`
                    `),t(432,"dt",73),e(433,"Iva"),n(),e(434,`
                    `),t(435,"dd",74),e(436,"$28.500"),n(),e(437,`
                `),n(),e(438,`
                `),n(),e(439,`
    
                `),t(440,"dl",76),e(441,`
                `),t(442,"dt",43),e(443,"Total"),n(),e(444,`
                `),t(445,"dd",43),e(446,"$128.500"),n(),e(447,`
                `),n(),e(448,`
            `),n(),e(449,`
    
            `),n(),e(450,`
        `),n(),e(451,`
        `),n(),e(452,`
    `),n(),e(453,`
    `),n(),e(454,`


`),e(455,`

`),e(456,`
`),e(457,`

`),e(458,`
`),e(459,`
`)),l&2&&(m(71),s("isVisible",o.isModalVisible))},dependencies:[h,b,D],encapsulation:2})};var me=[{path:"",component:ne,children:[{path:"",component:T,children:[{path:"",redirectTo:"Persona",pathMatch:"full"},{path:"Persona",component:F},{path:"Vehiculo",component:L},{path:"Producto",component:H}]}]}],ae=class d{static \u0275fac=function(l){return new(l||d)};static \u0275mod=q({type:d});static \u0275inj=B({imports:[j.forChild(me),j]})};export{ae as PresupuestoRoutingModule};

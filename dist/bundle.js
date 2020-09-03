/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "./src/Router.ts");

class Main {
    constructor() {
        this.router = new _Router__WEBPACK_IMPORTED_MODULE_0__["Router"]();
        console.log("aki");
    }
    lanzaApp() {
        this.router.peticion();
    }
}
new Main().lanzaApp();


/***/ }),

/***/ "./src/Router.ts":
/*!***********************!*\
  !*** ./src/Router.ts ***!
  \***********************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/MainController */ "./src/controllers/MainController.ts");
/* harmony import */ var _controllers_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/Login */ "./src/controllers/Login.ts");
/* harmony import */ var _controllers_Inicio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/Inicio */ "./src/controllers/Inicio.ts");



class Router {
    constructor() {
        this.elemento = document.getElementById('contenedor-principal');
    }
    peticion() {
        console.log('peticion desde' + this.obtenerRuta());
        switch (this.obtenerRuta()) {
            case '/login':
                this.alLogin();
                break;
            case '/inicio':
                this.irInicio(undefined);
                break;
            default:
                if (this.elemento) {
                    const mainController = new _controllers_MainController__WEBPACK_IMPORTED_MODULE_0__["MainController"](this);
                    this.elemento.append(mainController.crearVista());
                }
                break;
        }
    }
    alLogin() {
        if (this.elemento) {
            this.elemento.innerHTML = '';
            const login = new _controllers_Login__WEBPACK_IMPORTED_MODULE_1__["Login"](this);
            this.elemento.append(login.crearVista());
        }
    }
    irInicio(tokenSesion) {
        if (this.elemento) {
            this.elemento.innerHTML = '';
            const inicio = new _controllers_Inicio__WEBPACK_IMPORTED_MODULE_2__["Inicio"](this);
            if (tokenSesion)
                inicio.setTokenSesion(tokenSesion);
            this.elemento.append(inicio.crearVista());
        }
    }
    obtenerRuta() {
        return window.location.pathname;
    }
}


/***/ }),

/***/ "./src/controllers/Base.ts":
/*!*********************************!*\
  !*** ./src/controllers/Base.ts ***!
  \*********************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
class Base {
    constructor(router) {
        this.contenedor = document.createElement('div');
        this.router = router;
    }
    createElement(elementType, innerText, action) {
        const element = document.createElement(elementType);
        if (innerText) {
            element.innerText = innerText;
        }
        if (action) {
            element.onclick = action;
        }
        this.contenedor.append(element);
        return element;
    }
    crearBreak() {
        this.createElement('br');
    }
}


/***/ }),

/***/ "./src/controllers/Decorators.ts":
/*!***************************************!*\
  !*** ./src/controllers/Decorators.ts ***!
  \***************************************/
/*! exports provided: LinkValorTexto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkValorTexto", function() { return LinkValorTexto; });
function LinkValorTexto(elementoId) {
    return function (objetivo, valor) {
        let propiedad = objetivo[valor];
        const getter = () => {
            return propiedad;
        };
        const setter = (nuevoValor) => {
            const elemento = document.getElementById(elementoId);
            propiedad = nuevoValor;
            if (elemento) {
                elemento.innerText = nuevoValor;
                if (!nuevoValor)
                    elemento.style.visibility = 'hidden';
                else
                    elemento.style.visibility = 'visible';
            }
        };
        Object.defineProperty(objetivo, valor, {
            get: getter,
            set: setter,
            configurable: true,
            enumerable: true
        });
    };
}


/***/ }),

/***/ "./src/controllers/Inicio.ts":
/*!***********************************!*\
  !*** ./src/controllers/Inicio.ts ***!
  \***********************************/
/*! exports provided: Inicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inicio", function() { return Inicio; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/controllers/Base.ts");
/* harmony import */ var _modelos_ModeloLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modelos/ModeloLogin */ "./src/modelos/ModeloLogin.ts");
/* harmony import */ var _servicios_ServicioLeer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/ServicioLeer */ "./src/servicios/ServicioLeer.ts");
/* harmony import */ var _servicios_ServicioCrear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/ServicioCrear */ "./src/servicios/ServicioCrear.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class Inicio extends _Base__WEBPACK_IMPORTED_MODULE_0__["Base"] {
    constructor() {
        super(...arguments);
        this.servicioLeer = new _servicios_ServicioLeer__WEBPACK_IMPORTED_MODULE_2__["ServicioLeer"]();
        this.ServicioCrear = new _servicios_ServicioCrear__WEBPACK_IMPORTED_MODULE_3__["ServicioCrear"]();
    }
    setTokenSesion(tokenSesion) {
        this.tokenSesion = tokenSesion;
    }
    crearVista() {
        const titulo = this.createElement('h2', 'Hola mundo');
        if (this.tokenSesion) {
            this.createElement('label', 'Bienvenido ' + this.tokenSesion.usuario);
            this.crearBreak();
            this.generarBotones();
        }
        else {
            this.createElement('label', 'vaya al login');
        }
        return this.contenedor;
    }
    generarBotones() {
        if (this.tokenSesion) {
            for (const accesos of this.tokenSesion.accesos) {
                this.createElement('button', _modelos_ModeloLogin__WEBPACK_IMPORTED_MODULE_1__["Accesos"][accesos], () => __awaiter(this, void 0, void 0, function* () {
                    yield this.accionesBotones(accesos);
                }));
            }
            if (this.tokenSesion.accesos.includes(_modelos_ModeloLogin__WEBPACK_IMPORTED_MODULE_1__["Accesos"].LEER)) {
                this.crearBreak();
                this.createElement('label', 'Buscar:');
                this.inputBusqueda = this.createElement('input');
                this.resultadoBusqueda = this.createElement('div');
            }
            if (this.tokenSesion.accesos.includes(_modelos_ModeloLogin__WEBPACK_IMPORTED_MODULE_1__["Accesos"].CREA) || this.tokenSesion.accesos.includes(_modelos_ModeloLogin__WEBPACK_IMPORTED_MODULE_1__["Accesos"].ACTUALIZAR)) {
                this.crearBreak();
                this.createElement('h2', 'Formulario');
                this.crearBreak();
                this.createElement('label', 'Edad:');
                this.inputEdad = this.createElement('input');
                this.crearBreak();
                this.createElement('label', 'Email:');
                this.inputEmail = this.createElement('input');
                this.crearBreak();
                this.createElement('label', 'Nombre:');
                this.inputNombre = this.createElement('input');
                this.crearBreak();
                this.createElement('label', 'Cargo:');
                this.inputCargo = this.createElement('input');
            }
        }
    }
    limpiaFormulario() {
        this.inputEdad.value = "";
        this.inputEmail.value = "";
        this.inputCargo.value = "";
        this.inputNombre.value = "";
    }
    asignarUsuarioSeleccionado(usuario) {
        this.inputEdad.value = usuario.edad.toString();
        this.inputEmail.value = usuario.email;
        this.inputCargo.value = usuario.cargo.toString();
        this.inputNombre.value = usuario.nombre;
    }
    obtenerCamposFormulario() {
        const edad = this.inputEdad.value;
        const email = this.inputEmail.value;
        const cargo = this.inputCargo.value;
        const nombre = this.inputNombre.value;
        if (edad || email || cargo || nombre) {
            return { "edad": edad, "email": email, "cargo": cargo, "nombre": nombre };
        }
        else
            return false;
    }
    accionesBotones(acceso) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`boton ${acceso} fue presionado`);
            //this.resultadoBusqueda!.innerHTML='';
            switch (acceso) {
                case _modelos_ModeloLogin__WEBPACK_IMPORTED_MODULE_1__["Accesos"].ACTUALIZAR:
                    if (this.usuarioSeleccionado) {
                        const arrayUpdate = this.obtenerCamposFormulario();
                        if (arrayUpdate != false) {
                            const respuesta = yield this.ServicioCrear.actualizaUsuario(this.tokenSesion.MiTocken, this.usuarioSeleccionado, arrayUpdate);
                            if (respuesta)
                                alert('Se actualiza usuario exitosamente');
                            else
                                alert('No se puede actualizar usuario');
                        }
                        else {
                            alert('Debe ingresar por lo menos un campo');
                        }
                    }
                    else {
                        alert('primero debe buscar y seleccionar un registro');
                    }
                    break;
                case _modelos_ModeloLogin__WEBPACK_IMPORTED_MODULE_1__["Accesos"].CREA:
                    const array = this.obtenerCamposFormulario();
                    if (array != false) {
                        const respuesta = yield this.ServicioCrear.crearUsuario(this.tokenSesion.MiTocken, array);
                        if (respuesta) {
                            this.limpiaFormulario();
                            alert('Se crea usuario exitosamente');
                        }
                        else {
                            alert('problema al crear usuario');
                        }
                    }
                    else
                        alert('Debe ingresar por lo menos un campo');
                    break;
                case _modelos_ModeloLogin__WEBPACK_IMPORTED_MODULE_1__["Accesos"].LEER:
                    const usuarios = yield this.servicioLeer.obtenerUsuario(this.tokenSesion.MiTocken, this.inputBusqueda.value);
                    this.resultadoBusqueda.innerHTML = '';
                    for (const usuario of usuarios) {
                        const label = this.createElement('label', JSON.stringify(usuario));
                        label.onclick = () => {
                            label.classList.toggle('selectedLabel');
                            this.usuarioSeleccionado = usuario;
                            this.labelSeleccionado = label;
                            this.asignarUsuarioSeleccionado(usuario);
                        };
                        this.resultadoBusqueda.append(label);
                        this.resultadoBusqueda.append(document.createElement('br'));
                    }
                    break;
                case _modelos_ModeloLogin__WEBPACK_IMPORTED_MODULE_1__["Accesos"].BORRAR:
                    if (this.usuarioSeleccionado) {
                        yield this.servicioLeer.borrarUsuario(this.tokenSesion.MiTocken, this.usuarioSeleccionado);
                        this.labelSeleccionado.innerHTML = '';
                    }
                    break;
                default: break;
            }
        });
    }
}


/***/ }),

/***/ "./src/controllers/Login.ts":
/*!**********************************!*\
  !*** ./src/controllers/Login.ts ***!
  \**********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/controllers/Base.ts");
/* harmony import */ var _servicios_ServicioLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/ServicioLogin */ "./src/servicios/ServicioLogin.ts");
/* harmony import */ var _Decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Decorators */ "./src/controllers/Decorators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Login extends _Base__WEBPACK_IMPORTED_MODULE_0__["Base"] {
    constructor() {
        super(...arguments);
        this.servicioLogin = new _servicios_ServicioLogin__WEBPACK_IMPORTED_MODULE_1__["ServicioLogin"]();
        this.title = this.createElement('h2', 'Por favor inicie sesión');
        this.usuario = this.createElement('label', 'Usuario:');
        this.inputUsuario = this.createElement('input');
        this.br2 = this.createElement('br');
        this.pass = this.createElement('label', 'Clave:');
        this.inputClave = this.createElement('input');
        this.br = this.createElement('br');
        this.button = this.createElement('button', 'Login', () => __awaiter(this, void 0, void 0, function* () {
            if (this.inputUsuario.value && this.inputClave.value) {
                this.errorLabelString = '';
                const log = yield this.servicioLogin.login(this.inputUsuario.value, this.inputClave.value);
                if (log) {
                    this.router.irInicio(log);
                }
                else {
                    this.errorLabelString = 'Error de autentificación.';
                }
            }
            else {
                this.errorLabelString = 'Debe ingresar usuario y contraseña';
            }
        }));
        this.errorLabel = this.createElement('label');
        this.errorLabelString = '';
    }
    crearVista() {
        this.errorLabel.id = 'errorLabel';
        this.errorLabel.style.color = 'red';
        this.button.classList.add('btn-info');
        this.inputClave.type = 'Password';
        return this.contenedor;
    }
}
__decorate([
    Object(_Decorators__WEBPACK_IMPORTED_MODULE_2__["LinkValorTexto"])('errorLabel')
], Login.prototype, "errorLabelString", void 0);


/***/ }),

/***/ "./src/controllers/MainController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/MainController.ts ***!
  \*******************************************/
/*! exports provided: MainController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainController", function() { return MainController; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/controllers/Base.ts");

class MainController extends _Base__WEBPACK_IMPORTED_MODULE_0__["Base"] {
    crearVista() {
        const title = this.createElement('h2', 'Hola mundo');
        const articulo = this.createElement('div', 'hola po loco');
        const button = this.createElement('button', 'Login', () => {
            this.router.alLogin();
        });
        return this.contenedor;
    }
}


/***/ }),

/***/ "./src/modelos/ModeloLogin.ts":
/*!************************************!*\
  !*** ./src/modelos/ModeloLogin.ts ***!
  \************************************/
/*! exports provided: Accesos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accesos", function() { return Accesos; });
var Accesos;
(function (Accesos) {
    Accesos[Accesos["CREA"] = 0] = "CREA";
    Accesos[Accesos["LEER"] = 1] = "LEER";
    Accesos[Accesos["ACTUALIZAR"] = 2] = "ACTUALIZAR";
    Accesos[Accesos["BORRAR"] = 3] = "BORRAR";
})(Accesos || (Accesos = {}));


/***/ }),

/***/ "./src/servicios/ServicioCrear.ts":
/*!****************************************!*\
  !*** ./src/servicios/ServicioCrear.ts ***!
  \****************************************/
/*! exports provided: ServicioCrear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioCrear", function() { return ServicioCrear; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseUrl = 'http://localhost:8080/';
const urlUsuario = baseUrl + 'usuario';
class ServicioCrear {
    crearUsuario(autorizacion, array) {
        return __awaiter(this, void 0, void 0, function* () {
            const opciones = {
                method: 'PUT',
                headers: {
                    Authorization: autorizacion,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(array)
            };
            const resultado = yield fetch(urlUsuario, opciones);
            return resultado.status == 201;
        });
    }
    actualizaUsuario(autentificacion, usuario, parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = urlUsuario + '?id=' + usuario.id;
            const opciones = {
                method: 'POST',
                headers: {
                    Authorization: autentificacion,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parametros)
            };
            const resultado = yield fetch(url, opciones);
            return resultado.status == 200;
        });
    }
}


/***/ }),

/***/ "./src/servicios/ServicioLeer.ts":
/*!***************************************!*\
  !*** ./src/servicios/ServicioLeer.ts ***!
  \***************************************/
/*! exports provided: ServicioLeer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioLeer", function() { return ServicioLeer; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseUrl = 'http://localhost:8080/';
const urlUsuario = baseUrl + 'usuario';
class ServicioLeer {
    obtenerUsuario(autentificacion, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = urlUsuario + '?email=' + query;
            const opciones = {
                method: 'GET',
                headers: {
                    Authorization: autentificacion
                }
            };
            const resultado = yield fetch(url, opciones);
            const resultadoJson = yield resultado.json();
            return resultadoJson;
        });
    }
    borrarUsuario(autentificacion, usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = urlUsuario + '?id=' + usuario.id;
            const opciones = {
                method: 'DELETE',
                headers: {
                    Authorization: autentificacion
                }
            };
            yield fetch(url, opciones);
        });
    }
}


/***/ }),

/***/ "./src/servicios/ServicioLogin.ts":
/*!****************************************!*\
  !*** ./src/servicios/ServicioLogin.ts ***!
  \****************************************/
/*! exports provided: ServicioLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioLogin", function() { return ServicioLogin; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseUrl = 'http://localhost:8080/';
const urlLogin = baseUrl + 'login';
class ServicioLogin {
    login(usuario, clave) {
        return __awaiter(this, void 0, void 0, function* () {
            const opciones = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usuario: usuario, clave: clave })
            };
            const resultado = yield fetch(urlLogin, opciones);
            if (resultado.status == 201) {
                return yield resultado.json();
            }
            else {
                return undefined;
            }
        });
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvRGVjb3JhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvSW5pY2lvLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9Mb2dpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsb3MvTW9kZWxvTG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2lvcy9TZXJ2aWNpb0NyZWFyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNpb3MvU2VydmljaW9MZWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNpb3MvU2VydmljaW9Mb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFrQztBQUUzQixNQUFNLElBQUk7SUFHYjtRQUZRLFdBQU0sR0FBUyxJQUFJLDhDQUFNLEVBQUUsQ0FBQztRQUloQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7SUFDMUIsQ0FBQztDQUNKO0FBRUQsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2Z0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThEO0FBQ2xCO0FBRUU7QUFHdkMsTUFBTSxNQUFNO0lBQW5CO1FBRVksYUFBUSxHQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQTJDdEUsQ0FBQztJQTFDVSxRQUFRO1FBRVAsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsUUFBUSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDeEIsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixNQUFPO1lBQ1gsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU07WUFDVjtnQkFDSSxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUM7b0JBQ2IsTUFBTSxjQUFjLEdBQW1CLElBQUksMEVBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7aUJBQ3JEO2dCQUNELE1BQU07U0FDYjtJQUNULENBQUM7SUFFTSxPQUFPO1FBQ1YsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDO1lBQzNCLE1BQU0sS0FBSyxHQUFVLElBQUksd0RBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFTSxRQUFRLENBQUMsV0FBa0M7UUFDOUMsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDO1lBQzNCLE1BQU0sTUFBTSxHQUFXLElBQUksMERBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxJQUFHLFdBQVc7Z0JBQ1YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUc3QztJQUNMLENBQUM7SUFFTyxXQUFXO1FBQ2YsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNqREQ7QUFBQTtBQUFPLE1BQWUsSUFBSTtJQUl0QixZQUFtQixNQUFhO1FBSHRCLGVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSWpELElBQUksQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFHUyxhQUFhLENBQ25CLFdBQWMsRUFBRSxTQUFrQixFQUFDLE1BQVc7UUFFOUMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRCxJQUFJLFNBQVMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxNQUFNLEVBQUM7WUFDUCxPQUFPLENBQUMsT0FBTyxHQUFDLE1BQU0sQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRVMsVUFBVTtRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdCLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQzVCRDtBQUFBO0FBQU8sU0FBVSxjQUFjLENBQUMsVUFBa0I7SUFDOUMsT0FBTyxVQUFTLFFBQWEsRUFBRSxLQUFZO1FBQ25DLElBQUksU0FBUyxHQUFLLFFBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsTUFBTSxNQUFNLEdBQUcsR0FBRSxFQUFFO1lBQ2YsT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUVELE1BQU0sTUFBTSxHQUFHLENBQUMsVUFBaUIsRUFBQyxFQUFFO1lBQ2hDLE1BQU0sUUFBUSxHQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEQsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUN2QixJQUFJLFFBQVEsRUFBQztnQkFDVCxRQUFRLENBQUMsU0FBUyxHQUFDLFVBQVUsQ0FBQztnQkFDOUIsSUFBRyxDQUFDLFVBQVU7b0JBQ1YsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUMsUUFBUTs7b0JBR2xDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFDLFNBQVMsQ0FBQzthQUMzQztRQUVMLENBQUM7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUM7WUFDakMsR0FBRyxFQUFDLE1BQU07WUFDVixHQUFHLEVBQUMsTUFBTTtZQUNWLFlBQVksRUFBQyxJQUFJO1lBQ2pCLFVBQVUsRUFBQyxJQUFJO1NBQ2xCLENBQUM7SUFDVixDQUFDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCNkI7QUFDZ0M7QUFDTDtBQUNFO0FBSXBELE1BQU0sTUFBTyxTQUFRLDBDQUFJO0lBQWhDOztRQVFZLGlCQUFZLEdBQWdCLElBQUksb0VBQVksRUFBRSxDQUFDO1FBQy9DLGtCQUFhLEdBQWtCLElBQUksc0VBQWEsRUFBRSxDQUFDO0lBeUovRCxDQUFDO0lBbkpVLGNBQWMsQ0FBQyxXQUF1QjtRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFDLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBRUUsVUFBVTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3pCO2FBQ0c7WUFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBQyxlQUFlLENBQUM7U0FFOUM7UUFDRixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDMUIsQ0FBQztJQUVPLGNBQWM7UUFDbEIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQ2pCLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUM7Z0JBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFDLDREQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBUSxFQUFFO29CQUNoRCxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVDLENBQUMsRUFBQyxDQUFDO2FBQ047WUFDRCxJQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyw0REFBTyxDQUFDLElBQUksQ0FBQyxFQUFDO2dCQUMvQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxpQkFBaUIsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BEO1lBRUQsSUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsNERBQU8sQ0FBQyxJQUFJLENBQUMsSUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsNERBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBQyxZQUFZLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoRDtTQUNKO0lBRUwsQ0FBQztJQUVRLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsU0FBVSxDQUFDLEtBQUssR0FBQyxFQUFFO1FBQ3hCLElBQUksQ0FBQyxVQUFXLENBQUMsS0FBSyxHQUFDLEVBQUU7UUFDekIsSUFBSSxDQUFDLFVBQVcsQ0FBQyxLQUFLLEdBQUMsRUFBRTtRQUN6QixJQUFJLENBQUMsV0FBWSxDQUFDLEtBQUssR0FBQyxFQUFFO0lBQzlCLENBQUM7SUFFTywwQkFBMEIsQ0FBQyxPQUFnQjtRQUMvQyxJQUFJLENBQUMsU0FBVSxDQUFDLEtBQUssR0FBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUM5QyxJQUFJLENBQUMsVUFBVyxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUMsS0FBSztRQUNwQyxJQUFJLENBQUMsVUFBVyxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUMvQyxJQUFJLENBQUMsV0FBWSxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUMsTUFBTTtJQUMxQyxDQUFDO0lBRU8sdUJBQXVCO1FBQzNCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFVLENBQUMsS0FBSztRQUNsQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVyxDQUFDLEtBQUs7UUFDcEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVcsQ0FBQyxLQUFLO1FBQ3BDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFZLENBQUMsS0FBSztRQUN0QyxJQUFHLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBQztZQUNoQyxPQUFPLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQztTQUNuRTs7WUFFRyxPQUFPLEtBQUssQ0FBQztJQUVyQixDQUFDO0lBRWEsZUFBZSxDQUFDLE1BQWU7O1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUUsU0FBUyxNQUFNLGlCQUFpQixDQUFDLENBQUM7WUFDL0MsdUNBQXVDO1lBQ3ZDLFFBQU8sTUFBTSxFQUFDO2dCQUNWLEtBQUssNERBQU8sQ0FBQyxVQUFVO29CQUNuQixJQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBQzt3QkFDeEIsTUFBTSxXQUFXLEdBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7d0JBQ3BELElBQUcsV0FBVyxJQUFFLEtBQUssRUFBQzs0QkFDbEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFZLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBQyxXQUFXLENBQUMsQ0FBQzs0QkFDN0gsSUFBSSxTQUFTO2dDQUNULEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDOztnQ0FFdkMsS0FBSyxDQUFFLGdDQUFnQyxDQUFDLENBQUM7eUJBRXBEOzZCQUNHOzRCQUNBLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQzt5QkFDL0M7cUJBQ0o7eUJBQ0c7d0JBQ0EsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7cUJBQzFEO29CQUNELE1BQU07Z0JBQ1YsS0FBSyw0REFBTyxDQUFDLElBQUk7b0JBQ2IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7b0JBQzdDLElBQUcsS0FBSyxJQUFFLEtBQUssRUFBQzt3QkFDWixNQUFNLFNBQVMsR0FBSSxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFZLENBQUMsUUFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMzRixJQUFHLFNBQVMsRUFBQzs0QkFDVCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs0QkFDeEIsS0FBSyxDQUFDLDhCQUE4QixDQUFDO3lCQUV4Qzs2QkFDRzs0QkFDQSxLQUFLLENBQUMsMkJBQTJCLENBQUM7eUJBQ3JDO3FCQUNKOzt3QkFHRyxLQUFLLENBQUMscUNBQXFDLENBQUM7b0JBQ3BELE1BQU07Z0JBQ04sS0FBSyw0REFBTyxDQUFDLElBQUk7b0JBQ2IsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FDbkQsSUFBSSxDQUFDLFdBQVksQ0FBQyxRQUFRLEVBQzFCLElBQUksQ0FBQyxhQUFjLENBQUMsS0FBSyxDQUM1QixDQUFDO29CQUNGLElBQUksQ0FBQyxpQkFBa0IsQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDO29CQUNyQyxLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBQzt3QkFDM0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNsRSxLQUFLLENBQUMsT0FBTyxHQUFFLEdBQUcsRUFBRTs0QkFDaEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQ3hDLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxPQUFPLENBQUM7NEJBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBQyxLQUFLLENBQUM7NEJBQzdCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDN0MsQ0FBQzt3QkFDRCxJQUFJLENBQUMsaUJBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsaUJBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDaEU7b0JBQ0QsTUFBTTtnQkFDTixLQUFLLDREQUFPLENBQUMsTUFBTTtvQkFDZixJQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBQzt3QkFDeEIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt3QkFDM0YsSUFBSSxDQUFDLGlCQUFrQixDQUFDLFNBQVMsR0FBQyxFQUFFLENBQUM7cUJBQ3hDO29CQUNELE1BQU07Z0JBQ2QsT0FBTyxDQUFDLENBQUMsTUFBTTthQUNsQjtRQUNMLENBQUM7S0FBQTtDQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SzZCO0FBQzZCO0FBQ2I7QUFJdkMsTUFBTSxLQUFNLFNBQVEsMENBQUk7SUFBL0I7O1FBRVksa0JBQWEsR0FBQyxJQUFLLHNFQUFhLEVBQUUsQ0FBQztRQUNsQyxVQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMzRCxZQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsaUJBQVksR0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLFFBQUcsR0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLFNBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxlQUFVLEdBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUl4QyxPQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixXQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEdBQVEsRUFBRTtZQUM1RCxJQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFDO2dCQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsRUFBRSxDQUFDO2dCQUMxQixNQUFNLEdBQUcsR0FBQyxNQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pGLElBQUksR0FBRyxFQUFDO29CQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM3QjtxQkFDRztvQkFDQSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsMkJBQTJCLENBQUM7aUJBQ3JEO2FBQ0E7aUJBQ0c7Z0JBQ0EsSUFBSSxDQUFDLGdCQUFnQixHQUFDLG9DQUFvQyxDQUFDO2FBQzlEO1FBQ1IsQ0FBQyxFQUFDLENBQUM7UUFHSyxlQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUd0QyxxQkFBZ0IsR0FBWSxFQUFFLENBQUM7SUFXM0MsQ0FBQztJQVJVLFVBQVU7UUFFYixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBQyxZQUFZLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFDLFVBQVUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztDQUNKO0FBWEc7SUFEQyxrRUFBYyxDQUFDLFlBQVksQ0FBQzsrQ0FDVTs7Ozs7Ozs7Ozs7OztBQ3ZDM0M7QUFBQTtBQUFBO0FBQThCO0FBRXZCLE1BQU0sY0FBZSxTQUFRLDBDQUFJO0lBRTdCLFVBQVU7UUFDYixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBQyxZQUFZLENBQUMsQ0FBQztRQUNwRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBQyxjQUFjLENBQUMsQ0FBQztRQUMxRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsR0FBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDTEQ7QUFBQTtBQUFBLElBQVksT0FFWDtBQUZELFdBQVksT0FBTztJQUNoQixxQ0FBSTtJQUFFLHFDQUFJO0lBQUMsaURBQVU7SUFBRSx5Q0FBTTtBQUNoQyxDQUFDLEVBRlcsT0FBTyxLQUFQLE9BQU8sUUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JELE1BQU0sT0FBTyxHQUFHLHdCQUF3QixDQUFDO0FBQ3pDLE1BQU0sVUFBVSxHQUFHLE9BQU8sR0FBQyxTQUFTLENBQUM7QUFDOUIsTUFBTSxhQUFhO0lBQ1osWUFBWSxDQUFDLFlBQW1CLEVBQUUsS0FBWTs7WUFDeEQsTUFBTSxRQUFRLEdBQUc7Z0JBQ2IsTUFBTSxFQUFDLEtBQUs7Z0JBQ1osT0FBTyxFQUFDO29CQUNKLGFBQWEsRUFBQyxZQUFZO29CQUMxQixjQUFjLEVBQUMsa0JBQWtCO2lCQUNwQztnQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDOUI7WUFDRCxNQUFNLFNBQVMsR0FBRyxNQUFNLEtBQUssQ0FBQyxVQUFVLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsT0FBTyxTQUFTLENBQUMsTUFBTSxJQUFFLEdBQUcsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFWSxnQkFBZ0IsQ0FBQyxlQUFzQixFQUFHLE9BQWlCLEVBQUMsVUFBaUI7O1lBQ3ZGLE1BQU0sR0FBRyxHQUFHLFVBQVUsR0FBQyxNQUFNLEdBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUN6QyxNQUFNLFFBQVEsR0FBQztnQkFDWCxNQUFNLEVBQUMsTUFBTTtnQkFDYixPQUFPLEVBQUM7b0JBQ0osYUFBYSxFQUFDLGVBQWU7b0JBQzdCLGNBQWMsRUFBQyxrQkFBa0I7aUJBQ3BDO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQzthQUVuQztZQUNBLE1BQU0sU0FBUyxHQUFFLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxPQUFPLFNBQVMsQ0FBQyxNQUFNLElBQUUsR0FBRyxDQUFDO1FBQ2xDLENBQUM7S0FBQTtDQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0QsTUFBTSxPQUFPLEdBQUcsd0JBQXdCLENBQUM7QUFDekMsTUFBTSxVQUFVLEdBQUcsT0FBTyxHQUFDLFNBQVMsQ0FBQztBQUM5QixNQUFNLFlBQVk7SUFFUixjQUFjLENBQUMsZUFBdUIsRUFBQyxLQUFZOztZQUM1RCxNQUFNLEdBQUcsR0FBRyxVQUFVLEdBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztZQUN2QyxNQUFNLFFBQVEsR0FBQztnQkFDWCxNQUFNLEVBQUMsS0FBSztnQkFDWixPQUFPLEVBQUM7b0JBQ0osYUFBYSxFQUFDLGVBQWU7aUJBQ2hDO2FBRUo7WUFDRCxNQUFNLFNBQVMsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsTUFBTSxhQUFhLEdBQUUsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUMsT0FBTyxhQUFhLENBQUM7UUFFekIsQ0FBQztLQUFBO0lBRVksYUFBYSxDQUFDLGVBQXNCLEVBQUcsT0FBaUI7O1lBQ2pFLE1BQU0sR0FBRyxHQUFHLFVBQVUsR0FBQyxNQUFNLEdBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUN6QyxNQUFNLFFBQVEsR0FBQztnQkFDWCxNQUFNLEVBQUMsUUFBUTtnQkFDZixPQUFPLEVBQUM7b0JBQ0osYUFBYSxFQUFDLGVBQWU7aUJBQ2hDO2FBRUo7WUFDQSxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0NBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDRCxNQUFNLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQztBQUN6QyxNQUFNLFFBQVEsR0FBRyxPQUFPLEdBQUMsT0FBTyxDQUFDO0FBQzFCLE1BQU0sYUFBYTtJQUVULEtBQUssQ0FBQyxPQUFjLEVBQUUsS0FBWTs7WUFDM0MsTUFBTSxRQUFRLEdBQUc7Z0JBQ2IsTUFBTSxFQUFDLE1BQU07Z0JBQ2IsT0FBTyxFQUFDO29CQUNKLGNBQWMsRUFBQyxrQkFBa0I7aUJBQ3BDO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLENBQUM7YUFDdEQ7WUFDRCxNQUFNLFNBQVMsR0FBRyxNQUFNLEtBQUssQ0FBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFFLEdBQUcsRUFBQztnQkFDbEIsT0FBTyxNQUFPLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QztpQkFDRztnQkFDSSxPQUFPLFNBQVMsQ0FBQzthQUN4QjtRQUNMLENBQUM7S0FBQTtDQUlKIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL01haW4udHNcIik7XG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi9Sb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWlue1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyPSBuZXcgUm91dGVyKCk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJha2lcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxhbnphQXBwKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIucGV0aWNpb24oKVxyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgTWFpbigpLmxhbnphQXBwKCk7IiwiaW1wb3J0IHsgTWFpbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9NYWluQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL0xvZ2luXCI7XHJcbmltcG9ydCB7IHRva2VuU2VzaW9uIH0gZnJvbSBcIi4vbW9kZWxvcy9Nb2RlbG9Mb2dpblwiO1xyXG5pbXBvcnQgeyBJbmljaW8gfSBmcm9tIFwiLi9jb250cm9sbGVycy9JbmljaW9cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcclxuXHJcbiAgICBwcml2YXRlIGVsZW1lbnRvPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVuZWRvci1wcmluY2lwYWwnKTtcclxuICAgIHB1YmxpYyBwZXRpY2lvbigpe1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BldGljaW9uIGRlc2RlJyt0aGlzLm9idGVuZXJSdXRhKCkpXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vYnRlbmVyUnV0YSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICcvbG9naW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxMb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrIDtcclxuICAgICAgICAgICAgICAgIGNhc2UgJy9pbmljaW8nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXJJbmljaW8odW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5lbGVtZW50byl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1haW5Db250cm9sbGVyIDogTWFpbkNvbnRyb2xsZXI9IG5ldyBNYWluQ29udHJvbGxlcih0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50by5hcHBlbmQobWFpbkNvbnRyb2xsZXIuY3JlYXJWaXN0YSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWxMb2dpbigpe1xyXG4gICAgICAgIGlmKHRoaXMuZWxlbWVudG8pe1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRvLmlubmVySFRNTD0nJztcclxuICAgICAgICAgICAgY29uc3QgbG9naW4gOiBMb2dpbj0gbmV3IExvZ2luKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRvLmFwcGVuZChsb2dpbi5jcmVhclZpc3RhKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXJJbmljaW8odG9rZW5TZXNpb246IHRva2VuU2VzaW9ufHVuZGVmaW5lZCl7XHJcbiAgICAgICAgaWYodGhpcy5lbGVtZW50byl7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudG8uaW5uZXJIVE1MPScnO1xyXG4gICAgICAgICAgICBjb25zdCBpbmljaW8gOiBJbmljaW89IG5ldyBJbmljaW8odGhpcyk7XHJcbiAgICAgICAgICAgIGlmKHRva2VuU2VzaW9uKVxyXG4gICAgICAgICAgICAgICAgaW5pY2lvLnNldFRva2VuU2VzaW9uKHRva2VuU2VzaW9uKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50by5hcHBlbmQoaW5pY2lvLmNyZWFyVmlzdGEoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb2J0ZW5lclJ1dGEoKXtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL1JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2V7XHJcbiAgICBwcm90ZWN0ZWQgY29udGVuZWRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihyb3V0ZXI6Um91dGVyKXtcclxuICAgICAgICB0aGlzLnJvdXRlcj1yb3V0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGNyZWFyVmlzdGEoKTpIVE1MRGl2RWxlbWVudFxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVsZW1lbnQ8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oXHJcbiAgICAgICAgZWxlbWVudFR5cGU6IEssIGlubmVyVGV4dD86IHN0cmluZyxhY3Rpb24/OmFueVxyXG4gICAgKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XHJcbiAgICAgICAgaWYgKGlubmVyVGV4dCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9IGlubmVyVGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFjdGlvbil7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub25jbGljaz1hY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGVuZWRvci5hcHBlbmQoZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXJCcmVhaygpe1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgnYnInKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxufSAiLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vQmFzZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uICBMaW5rVmFsb3JUZXh0byhlbGVtZW50b0lkOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamV0aXZvOkJhc2UsIHZhbG9yOnN0cmluZyl7XHJcbiAgICAgICAgICAgIGxldCBwcm9waWVkYWQgID0gKG9iamV0aXZvIGFzIGFueSlbdmFsb3JdO1xyXG4gICAgICAgICAgICBjb25zdCBnZXR0ZXIgPSAoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BpZWRhZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2V0dGVyID0gKG51ZXZvVmFsb3I6c3RyaW5nKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudG89IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRvSWQpO1xyXG4gICAgICAgICAgICAgICAgcHJvcGllZGFkID0gbnVldm9WYWxvcjtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50byl7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudG8uaW5uZXJUZXh0PW51ZXZvVmFsb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIW51ZXZvVmFsb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRvLnN0eWxlLnZpc2liaWxpdHk9J2hpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRvLnN0eWxlLnZpc2liaWxpdHk9J3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmpldGl2byx2YWxvcix7XHJcbiAgICAgICAgICAgICAgICBnZXQ6Z2V0dGVyLFxyXG4gICAgICAgICAgICAgICAgc2V0OnNldHRlcixcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTp0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTp0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vQmFzZVwiO1xyXG5pbXBvcnQgeyB0b2tlblNlc2lvbiwgQWNjZXNvcyB9IGZyb20gXCIuLi9tb2RlbG9zL01vZGVsb0xvZ2luXCI7XHJcbmltcG9ydCB7IFNlcnZpY2lvTGVlciB9IGZyb20gXCIuLi9zZXJ2aWNpb3MvU2VydmljaW9MZWVyXCI7XHJcbmltcG9ydCB7IFNlcnZpY2lvQ3JlYXIgfSBmcm9tIFwiLi4vc2VydmljaW9zL1NlcnZpY2lvQ3JlYXJcIjtcclxuXHJcbmltcG9ydCB7IFVzdWFyaW9zIH0gZnJvbSBcIi4uL21vZGVsb3MvTW9kZWxvRGF0YVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluaWNpbyBleHRlbmRzIEJhc2V7XHJcbiAgICBwcml2YXRlIHRva2VuU2VzaW9uOiB0b2tlblNlc2lvbiB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgaW5wdXRCdXNxdWVkYTogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgaW5wdXRFZGFkOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBpbnB1dEVtYWlsOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBpbnB1dENhcmdvOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBpbnB1dE5vbWJyZTogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgcmVzdWx0YWRvQnVzcXVlZGE6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBzZXJ2aWNpb0xlZXI6IFNlcnZpY2lvTGVlcj0gbmV3IFNlcnZpY2lvTGVlcigpO1xyXG4gICAgcHJpdmF0ZSBTZXJ2aWNpb0NyZWFyOiBTZXJ2aWNpb0NyZWFyID0gbmV3IFNlcnZpY2lvQ3JlYXIoKTtcclxuICAgIHByaXZhdGUgdXN1YXJpb1NlbGVjY2lvbmFkbzogVXN1YXJpb3MgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgcHJpdmF0ZSBsYWJlbFNlbGVjY2lvbmFkbyA6IEhUTUxMYWJlbEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXRUb2tlblNlc2lvbih0b2tlblNlc2lvbjp0b2tlblNlc2lvbil7XHJcbiAgICAgICAgdGhpcy50b2tlblNlc2lvbj10b2tlblNlc2lvbjtcclxuICAgIH1cclxuXHJcbnB1YmxpYyBjcmVhclZpc3RhKCkgOkhUTUxEaXZFbGVtZW50e1xyXG4gICAgY29uc3QgdGl0dWxvID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMicsJ0hvbGEgbXVuZG8nKTtcclxuICAgIGlmKHRoaXMudG9rZW5TZXNpb24pe1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCdCaWVudmVuaWRvICcrdGhpcy50b2tlblNlc2lvbi51c3VhcmlvKTtcclxuICAgICAgICB0aGlzLmNyZWFyQnJlYWsoKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXJCb3RvbmVzKCk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCd2YXlhIGFsIGxvZ2luJylcclxuXHJcbiAgICB9XHJcbiAgIHJldHVybiB0aGlzLmNvbnRlbmVkb3I7XHJcbn1cclxuXHJcbnByaXZhdGUgZ2VuZXJhckJvdG9uZXMoKXtcclxuICAgIGlmICh0aGlzLnRva2VuU2VzaW9uKXtcclxuICAgICAgICBmb3IgKGNvbnN0IGFjY2Vzb3Mgb2YgdGhpcy50b2tlblNlc2lvbi5hY2Nlc29zKXtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCdidXR0b24nLEFjY2Vzb3NbYWNjZXNvc10sIGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2Npb25lc0JvdG9uZXMoYWNjZXNvcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnRva2VuU2VzaW9uLmFjY2Vzb3MuaW5jbHVkZXMoQWNjZXNvcy5MRUVSKSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXJCcmVhaygpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywnQnVzY2FyOicpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0QnVzcXVlZGE9IHRoaXMuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRhZG9CdXNxdWVkYT10aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy50b2tlblNlc2lvbi5hY2Nlc29zLmluY2x1ZGVzKEFjY2Vzb3MuQ1JFQSl8fHRoaXMudG9rZW5TZXNpb24uYWNjZXNvcy5pbmNsdWRlcyhBY2Nlc29zLkFDVFVBTElaQVIpICl7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXJCcmVhaygpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2gyJywnRm9ybXVsYXJpbycpXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXJCcmVhaygpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywnRWRhZDonKTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dEVkYWQ9IHRoaXMuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhckJyZWFrKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCdFbWFpbDonKTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dEVtYWlsPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXJCcmVhaygpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywnTm9tYnJlOicpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0Tm9tYnJlPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXJCcmVhaygpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywnQ2FyZ286Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRDYXJnbz0gdGhpcy5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5wcml2YXRlICBsaW1waWFGb3JtdWxhcmlvKCk6dm9pZHtcclxuICAgIHRoaXMuaW5wdXRFZGFkIS52YWx1ZT1cIlwiXHJcbiAgICB0aGlzLmlucHV0RW1haWwhLnZhbHVlPVwiXCJcclxuICAgIHRoaXMuaW5wdXRDYXJnbyEudmFsdWU9XCJcIlxyXG4gICAgdGhpcy5pbnB1dE5vbWJyZSEudmFsdWU9XCJcIlxyXG59XHJcblxyXG5wcml2YXRlIGFzaWduYXJVc3VhcmlvU2VsZWNjaW9uYWRvKHVzdWFyaW86VXN1YXJpb3MpOnZvaWR7XHJcbiAgICB0aGlzLmlucHV0RWRhZCEudmFsdWU9IHVzdWFyaW8uZWRhZC50b1N0cmluZygpXHJcbiAgICB0aGlzLmlucHV0RW1haWwhLnZhbHVlPXVzdWFyaW8uZW1haWxcclxuICAgIHRoaXMuaW5wdXRDYXJnbyEudmFsdWU9dXN1YXJpby5jYXJnby50b1N0cmluZygpXHJcbiAgICB0aGlzLmlucHV0Tm9tYnJlIS52YWx1ZT11c3VhcmlvLm5vbWJyZVxyXG59XHJcblxyXG5wcml2YXRlIG9idGVuZXJDYW1wb3NGb3JtdWxhcmlvKCl7XHJcbiAgICBjb25zdCBlZGFkID0gdGhpcy5pbnB1dEVkYWQhLnZhbHVlXHJcbiAgICBjb25zdCBlbWFpbCA9IHRoaXMuaW5wdXRFbWFpbCEudmFsdWVcclxuICAgIGNvbnN0IGNhcmdvID0gdGhpcy5pbnB1dENhcmdvIS52YWx1ZVxyXG4gICAgY29uc3Qgbm9tYnJlID0gdGhpcy5pbnB1dE5vbWJyZSEudmFsdWVcclxuICAgIGlmKGVkYWQgfHwgZW1haWwgfHwgY2FyZ28gfHwgbm9tYnJlKXtcclxuICAgICAgICByZXR1cm4ge1wiZWRhZFwiOmVkYWQsXCJlbWFpbFwiOmVtYWlsLFwiY2FyZ29cIjpjYXJnbyxcIm5vbWJyZVwiOm5vbWJyZX1cclxuICAgIH1cclxuICAgIGVsc2UgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG5cclxucHJpdmF0ZSBhc3luYyBhY2Npb25lc0JvdG9uZXMoYWNjZXNvOiBBY2Nlc29zKXtcclxuICAgIGNvbnNvbGUubG9nKCBgYm90b24gJHthY2Nlc299IGZ1ZSBwcmVzaW9uYWRvYCk7XHJcbiAgICAvL3RoaXMucmVzdWx0YWRvQnVzcXVlZGEhLmlubmVySFRNTD0nJztcclxuICAgIHN3aXRjaChhY2Nlc28pe1xyXG4gICAgICAgIGNhc2UgQWNjZXNvcy5BQ1RVQUxJWkFSOlxyXG4gICAgICAgICAgICBpZih0aGlzLnVzdWFyaW9TZWxlY2Npb25hZG8pe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXlVcGRhdGUgID0gdGhpcy5vYnRlbmVyQ2FtcG9zRm9ybXVsYXJpbygpO1xyXG4gICAgICAgICAgICAgICAgaWYoYXJyYXlVcGRhdGUhPWZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCB0aGlzLlNlcnZpY2lvQ3JlYXIuYWN0dWFsaXphVXN1YXJpbyh0aGlzLnRva2VuU2VzaW9uIS5NaVRvY2tlbix0aGlzLnVzdWFyaW9TZWxlY2Npb25hZG8sYXJyYXlVcGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwdWVzdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTZSBhY3R1YWxpemEgdXN1YXJpbyBleGl0b3NhbWVudGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQgKCdObyBzZSBwdWVkZSBhY3R1YWxpemFyIHVzdWFyaW8nKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0RlYmUgaW5ncmVzYXIgcG9yIGxvIG1lbm9zIHVuIGNhbXBvJykgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgncHJpbWVybyBkZWJlIGJ1c2NhciB5IHNlbGVjY2lvbmFyIHVuIHJlZ2lzdHJvJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7ICAgIFxyXG4gICAgICAgIGNhc2UgQWNjZXNvcy5DUkVBOlxyXG4gICAgICAgICAgICBjb25zdCBhcnJheSA9IHRoaXMub2J0ZW5lckNhbXBvc0Zvcm11bGFyaW8oKTsgICAgXHJcbiAgICAgICAgICAgIGlmKGFycmF5IT1mYWxzZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwdWVzdGEgID0gYXdhaXQgdGhpcy5TZXJ2aWNpb0NyZWFyLmNyZWFyVXN1YXJpbyh0aGlzLnRva2VuU2VzaW9uIS5NaVRvY2tlbixhcnJheSk7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwdWVzdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGltcGlhRm9ybXVsYXJpbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTZSBjcmVhIHVzdWFyaW8gZXhpdG9zYW1lbnRlJylcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdwcm9ibGVtYSBhbCBjcmVhciB1c3VhcmlvJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdEZWJlIGluZ3Jlc2FyIHBvciBsbyBtZW5vcyB1biBjYW1wbycpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBY2Nlc29zLkxFRVI6XHJcbiAgICAgICAgICAgIGNvbnN0IHVzdWFyaW9zID0gYXdhaXQgdGhpcy5zZXJ2aWNpb0xlZXIub2J0ZW5lclVzdWFyaW8oXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuU2VzaW9uIS5NaVRvY2tlbixcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRCdXNxdWVkYSEudmFsdWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRhZG9CdXNxdWVkYSEuaW5uZXJIVE1MPScnO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVzdWFyaW8gb2YgdXN1YXJpb3Mpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyxKU09OLnN0cmluZ2lmeSh1c3VhcmlvKSk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5vbmNsaWNrPSAoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZExhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c3VhcmlvU2VsZWNjaW9uYWRvPXVzdWFyaW87XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbFNlbGVjY2lvbmFkbz1sYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzaWduYXJVc3VhcmlvU2VsZWNjaW9uYWRvKHVzdWFyaW8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRhZG9CdXNxdWVkYSEuYXBwZW5kKGxhYmVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0YWRvQnVzcXVlZGEhLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBY2Nlc29zLkJPUlJBUjpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudXN1YXJpb1NlbGVjY2lvbmFkbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNpb0xlZXIuYm9ycmFyVXN1YXJpbyh0aGlzLnRva2VuU2VzaW9uIS5NaVRvY2tlbix0aGlzLnVzdWFyaW9TZWxlY2Npb25hZG8pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxTZWxlY2Npb25hZG8hLmlubmVySFRNTD0nJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrOyAgICBcclxuICAgIH1cclxufVxyXG5cclxufSIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9CYXNlXCI7XHJcbmltcG9ydCB7IFNlcnZpY2lvTG9naW4gfSBmcm9tIFwiLi4vc2VydmljaW9zL1NlcnZpY2lvTG9naW5cIjtcclxuaW1wb3J0IHsgTGlua1ZhbG9yVGV4dG8gfSBmcm9tIFwiLi9EZWNvcmF0b3JzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbiBleHRlbmRzIEJhc2V7XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNpb0xvZ2luPW5ldyAgU2VydmljaW9Mb2dpbigpO1xyXG4gICAgcHJpdmF0ZSAgdGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2gyJywnUG9yIGZhdm9yIGluaWNpZSBzZXNpw7NuJyk7XHJcbiAgICBwcml2YXRlICB1c3VhcmlvID0gdGhpcy5jcmVhdGVFbGVtZW50KCdsYWJlbCcsJ1VzdWFyaW86Jyk7XHJcbiAgICBwcml2YXRlIGlucHV0VXN1YXJpbz0gdGhpcy5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgcHJpdmF0ZSBicjI9IHRoaXMuY3JlYXRlRWxlbWVudCgnYnInKTtcclxuICAgIHByaXZhdGUgIHBhc3MgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywnQ2xhdmU6Jyk7XHJcbiAgICBwcml2YXRlIGlucHV0Q2xhdmU9IHRoaXMuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgcHJpdmF0ZSBiciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYnInKTtcclxuICAgIHByaXZhdGUgIGJ1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywnTG9naW4nLGFzeW5jICgpPT57XHJcbiAgICAgICAgaWYodGhpcy5pbnB1dFVzdWFyaW8udmFsdWUgJiYgdGhpcy5pbnB1dENsYXZlLnZhbHVlKXtcclxuICAgICAgICAgdGhpcy5lcnJvckxhYmVsU3RyaW5nPScnO1xyXG4gICAgICAgIGNvbnN0IGxvZz1hd2FpdCAgdGhpcy5zZXJ2aWNpb0xvZ2luLmxvZ2luKHRoaXMuaW5wdXRVc3VhcmlvLnZhbHVlLHRoaXMuaW5wdXRDbGF2ZS52YWx1ZSk7XHJcbiAgICAgICAgaWYgKGxvZyl7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLmlySW5pY2lvKGxvZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JMYWJlbFN0cmluZz0nRXJyb3IgZGUgYXV0ZW50aWZpY2FjacOzbi4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JMYWJlbFN0cmluZz0nRGViZSBpbmdyZXNhciB1c3VhcmlvIHkgY29udHJhc2XDsWEnO1xyXG4gICAgICAgIH1cclxuIH0pO1xyXG5cclxuXHJcbiBwcml2YXRlIGVycm9yTGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblxyXG4gICAgQExpbmtWYWxvclRleHRvKCdlcnJvckxhYmVsJylcclxuICAgIHByaXZhdGUgZXJyb3JMYWJlbFN0cmluZyA6IHN0cmluZyA9ICcnO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgY3JlYXJWaXN0YSgpOkhUTUxEaXZFbGVtZW50e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZXJyb3JMYWJlbC5pZD0nZXJyb3JMYWJlbCc7XHJcbiAgICAgICAgdGhpcy5lcnJvckxhYmVsLnN0eWxlLmNvbG9yPSdyZWQnO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1pbmZvJylcclxuICAgICAgICB0aGlzLmlucHV0Q2xhdmUudHlwZT0nUGFzc3dvcmQnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbmVkb3I7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vQmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgQmFzZXtcclxuXHJcbiAgICBwdWJsaWMgY3JlYXJWaXN0YSgpOkhUTUxEaXZFbGVtZW50e1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMicsJ0hvbGEgbXVuZG8nKTtcclxuICAgICAgICBjb25zdCBhcnRpY3VsbyA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywnaG9sYSBwbyBsb2NvJyk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KCdidXR0b24nLCdMb2dpbicsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIuYWxMb2dpbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW5lZG9yO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGludGVyZmFjZSB0b2tlblNlc2lvbntcclxuICAgIE1pVG9ja2VuOnN0cmluZyxcclxuICAgIHVzdWFyaW86c3RyaW5nLFxyXG4gICAgdmFsaWRlczpib29sZWFuLFxyXG4gICAgZXhwaXJhY2lvbjpEYXRlLFxyXG4gICAgYWNjZXNvczogQWNjZXNvc1tdXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFjY2Vzb3N7XHJcbiAgIENSRUEsIExFRVIsQUNUVUFMSVpBUiwgQk9SUkFSIFxyXG59IiwiaW1wb3J0IHsgVXN1YXJpb3MgfSBmcm9tIFwiLi4vbW9kZWxvcy9Nb2RlbG9EYXRhXCI7XHJcblxyXG5jb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nO1xyXG5jb25zdCB1cmxVc3VhcmlvID0gYmFzZVVybCsndXN1YXJpbyc7XHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNpb0NyZWFye1xyXG4gcHVibGljIGFzeW5jIGNyZWFyVXN1YXJpbyhhdXRvcml6YWNpb246c3RyaW5nLCBhcnJheTpPYmplY3QgKTpQcm9taXNlPGJvb2xlYW4+e1xyXG4gICAgY29uc3Qgb3BjaW9uZXMgPSB7XHJcbiAgICAgICAgbWV0aG9kOidQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOmF1dG9yaXphY2lvbixcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhcnJheSlcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGZldGNoKHVybFVzdWFyaW8sb3BjaW9uZXMpO1xyXG4gICAgcmV0dXJuIHJlc3VsdGFkby5zdGF0dXM9PTIwMTtcclxuIH1cclxuXHJcbiBwdWJsaWMgYXN5bmMgYWN0dWFsaXphVXN1YXJpbyhhdXRlbnRpZmljYWNpb246c3RyaW5nICwgdXN1YXJpbzogVXN1YXJpb3MscGFyYW1ldHJvczpPYmplY3QpOlByb21pc2U8Ym9vbGVhbj57XHJcbiAgICBjb25zdCB1cmwgPSB1cmxVc3VhcmlvKyc/aWQ9Jyt1c3VhcmlvLmlkO1xyXG4gICAgY29uc3Qgb3BjaW9uZXM9e1xyXG4gICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246YXV0ZW50aWZpY2FjaW9uLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtZXRyb3MpXHJcblxyXG4gICAgfVxyXG4gICAgIGNvbnN0IHJlc3VsdGFkbyA9YXdhaXQgZmV0Y2godXJsLG9wY2lvbmVzKTtcclxuICAgICByZXR1cm4gcmVzdWx0YWRvLnN0YXR1cz09MjAwO1xyXG59XHJcblxyXG5cclxufSIsImltcG9ydCB7IFVzdWFyaW9zIH0gZnJvbSBcIi4uL21vZGVsb3MvTW9kZWxvRGF0YVwiO1xyXG5cclxuY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvJztcclxuY29uc3QgdXJsVXN1YXJpbyA9IGJhc2VVcmwrJ3VzdWFyaW8nO1xyXG5leHBvcnQgY2xhc3MgU2VydmljaW9MZWVye1xyXG5cclxuICAgIHB1YmxpYyBhc3luYyBvYnRlbmVyVXN1YXJpbyhhdXRlbnRpZmljYWNpb246IHN0cmluZyxxdWVyeTpzdHJpbmcpOiBQcm9taXNlPFVzdWFyaW9zW10+e1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHVybFVzdWFyaW8rJz9lbWFpbD0nK3F1ZXJ5O1xyXG4gICAgICAgIGNvbnN0IG9wY2lvbmVzPXtcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246YXV0ZW50aWZpY2FjaW9uXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGZldGNoKHVybCxvcGNpb25lcyk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0YWRvSnNvbj0gYXdhaXQgcmVzdWx0YWRvLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0YWRvSnNvbjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGJvcnJhclVzdWFyaW8oYXV0ZW50aWZpY2FjaW9uOnN0cmluZyAsIHVzdWFyaW86IFVzdWFyaW9zKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHVybFVzdWFyaW8rJz9pZD0nK3VzdWFyaW8uaWQ7XHJcbiAgICAgICAgY29uc3Qgb3BjaW9uZXM9e1xyXG4gICAgICAgICAgICBtZXRob2Q6J0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjphdXRlbnRpZmljYWNpb25cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgIGF3YWl0IGZldGNoKHVybCxvcGNpb25lcyk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgdG9rZW5TZXNpb24gfSBmcm9tIFwiLi4vbW9kZWxvcy9Nb2RlbG9Mb2dpblwiO1xyXG5jb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nO1xyXG5jb25zdCB1cmxMb2dpbiA9IGJhc2VVcmwrJ2xvZ2luJztcclxuZXhwb3J0IGNsYXNzIFNlcnZpY2lvTG9naW57XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGxvZ2luKHVzdWFyaW86c3RyaW5nLCBjbGF2ZTpzdHJpbmcpOiBQcm9taXNlPHRva2VuU2VzaW9uIHwgdW5kZWZpbmVkPntcclxuICAgICAgICBjb25zdCBvcGNpb25lcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3VzdWFyaW86dXN1YXJpbyxjbGF2ZTpjbGF2ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGZldGNoKHVybExvZ2luLG9wY2lvbmVzKTtcclxuICAgICAgICBpZiAocmVzdWx0YWRvLnN0YXR1cz09MjAxKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCAgcmVzdWx0YWRvLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
// EJERCICI 1:
/*
  El siguiente ejercicio es para darle estilo a nuestro titulo, si nuestro titulo puede tener diferente propiedades
  hacemos que la clase tenga un cnstrucctor que tengas las propiedaddes por defecte y una que siempre tendra un valor,
  será la de la alineacion, que por defecto siempre es a ala ixquierda


  luego creamos los diferentes metodos:
  el de esteblecerPropiedadesBasicas que recibe el titulo, el color y la fuente
  el de esablecerAlineacion que recibe la alineacion y comperueba ademas que sea valida con  el arrary de alineaciones validas
  y por ultimo el de imprimirPropiedades que nos muestra en la consola las propiedades de la cabecera, devuelve un voir porque
  no devuelve nada, es decir no tiene un return


  por ultimo inicializamos la clase, establecemos las propiedades basicas, la alineacion y mostramos las porpiedades

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "izquierda";
    }
    CabeceraPagina.prototype.establecerPropiedadesBasicas = function (tituloParam, colorParam, fuenteParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    };
    CabeceraPagina.prototype.establecerAlineacion = function (alineacionParam) {
        var alineacionesValidas = ["centrado", "derecha", "izquierda"];
        if (alineacionesValidas.includes(alineacionParam.toLowerCase())) {
            this.alineacion = alineacionParam.toLowerCase();
        }
        else {
            console.warn("Alineaci\u00F3n \"".concat(alineacionParam, "\" no v\u00E1lida. Usando \"izquierda\" por defecto."));
            this.alineacion = "izquierda";
        }
    };
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("Propiedades de la cabecera:");
        console.log("-T\u00EDtulo: ".concat(this.titulo));
        console.log("-Color: ".concat(this.color));
        console.log("-Fuente: ".concat(this.fuente));
        console.log("-Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
var miCabecera = new CabeceraPagina();
miCabecera.establecerPropiedadesBasicas("Mi Página Web", "azul", "Arial");
miCabecera.establecerAlineacion("centrado");
miCabecera.imprimirPropiedades();
// EJERCICIO 2:
var Calculadora = /** @class */ (function () {
    function Calculadora(num1Param, num2Param) {
        this.num1 = num1Param;
        this.num2 = num2Param;
        this.resultado = 0;
    }
    Calculadora.prototype.getNum1 = function () {
        return this.num1;
    };
    Calculadora.prototype.getNum2 = function () {
        return this.num2;
    };
    // sumar
    Calculadora.prototype.sumar = function () {
        this.resultado = this.num1 + this.num2;
        return this.resultado;
    };
    // restar
    Calculadora.prototype.restar = function () {
        this.resultado = this.num1 - this.num2;
        return this.resultado;
    };
    // multiplicar
    Calculadora.prototype.multiplicar = function () {
        this.resultado = this.num1 * this.num2;
        return this.resultado;
    };
    // dividir
    Calculadora.prototype.dividir = function () {
        if (this.num2 !== 0) {
            this.resultado = this.num1 / this.num2;
            return this.resultado;
        }
        else {
            return "Error: no se puede dividir por cero";
            //throw new Error("no se puede dividir por cero"); // detiene la ejecucion a menos que se maneje el error, si usamos try-catch
        }
    };
    // potencia 
    Calculadora.prototype.potencia = function () {
        if (this.num2 < 0) {
            this.resultado = 1 / Math.pow(this.num1, Math.abs(this.num2));
            return this.resultado;
        }
        else if (this.num2 === 0) {
            if (this.num1 === 0) {
                return 1; // por convencion es 1
            }
            this.resultado = 1;
            return this.resultado;
        }
        else {
            this.resultado = Math.pow(this.num1, this.num2);
            return this.resultado;
        }
    };
    // factorial de num1 
    Calculadora.prototype.factorial = function () {
        if (this.num1 < 0) {
            //throw new Error("No existe factorial de números negativos");
            return "Error: No existe factorial de números negativos";
        }
        this.resultado = 1;
        for (var i = 2; i <= this.num1; i++) {
            this.resultado *= i;
        }
        return this.resultado;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(-55, 0);
console.log("Suma: " + calculadora.sumar());
console.log("resta: " + calculadora.restar());
console.log("mltiplicacion: " + calculadora.multiplicar());
console.log("División: " + calculadora.dividir());
console.log("Potencia de " + calculadora.getNum1() + " elevado a " + calculadora.getNum2() + ": " + calculadora.potencia());
console.log("Factorial de " + calculadora.getNum1() + " es: " + calculadora.factorial());
// EJERCICIO 3
var Cancion = /** @class */ (function () {
    function Cancion(tituloParam, generoParam, autorParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = autorParam;
    }
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    Cancion.prototype.imprimirDetalles = function () {
        return "Titulo: ".concat(this.titulo, ", Genero: ").concat(this.genero, ", Autor: ").concat(this.autor);
    };
    return Cancion;
}());
var cancioncita = new Cancion("No se", "Pop", "Taylor");
console.log(cancioncita.imprimirDetalles());
cancioncita.setAutor("Olvia Rodrigo");
console.log(cancioncita.getAutor());
console.log(cancioncita.imprimirDetalles());
// EJERCICIO 4
var Cuenta = /** @class */ (function () {
    function Cuenta(nombreParam, cantidadParam, tipoDeCuentaParam, numeroDeCuentaParam) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoDeCuenta = tipoDeCuentaParam;
        this.numeroDeCuenta = numeroDeCuentaParam;
    }
    Cuenta.prototype.depositar = function (cantidadParam) {
        if (cantidadParam < 0) {
            return "El monto a depositar no puede ser negativo";
        }
        else {
            if (cantidadParam < 5) {
                return "El valor a depositar debe ser mayor a $5.00";
            }
            else {
                this.cantidad += cantidadParam;
                return "Se ha depositado correctamente $".concat(cantidadParam);
            }
        }
    };
    Cuenta.prototype.retirar = function (valor) {
        if (valor < 0) {
            return "El monto a retirar no puede ser negativo";
        }
        else {
            if (valor > this.cantidad) {
                return "No hay suficiente saldo en tu cuenta";
            }
            else if (valor <= 5) {
                return "El valor a retirar debe ser mayor a $5.00";
            }
            else {
                this.cantidad -= valor;
                return "Se ha retirado correctamente $".concat(valor, " \n Saldo actual: $").concat(this.cantidad);
            }
        }
    };
    Cuenta.prototype.imprimirDator = function () {
        return "Nombre: ".concat(this.nombre, " \n\n            Tipo de Cuenta: ").concat(this.tipoDeCuenta, " \n\n            Numero de cuenta: ").concat(this.numeroDeCuenta, " \n\n            Saldo actual: $").concat(this.cantidad);
    };
    return Cuenta;
}());
var cliente = new Cuenta("Luis", 1000, "Ahorros", 123456789);
console.log(cliente.imprimirDator());
console.log(cliente.depositar(0));
console.log(cliente.retirar(0));
console.log(cliente.imprimirDator());
// EJERCICO 5
var Persona = /** @class */ (function () {
    function Persona(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    Persona.prototype.esAdulto = function () {
        if (this.edad < 0) {
            return "Edad no valida";
        }
        else {
            if (this.edad >= 18) {
                return "Es adulto";
            }
            else {
                return "No es adulto";
            }
        }
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Empleado.prototype.cargarSueldo = function (sueldoParam) {
        if (sueldoParam < 0) {
            console.log("El sueldo no puede ser negativo");
        }
        else {
            this.sueldo = sueldoParam;
            return this.sueldo;
        }
    };
    Empleado.prototype.imprimirSueldo = function () {
        if (this.sueldo !== undefined) {
            return this.sueldo;
        }
        else {
            return "Por favor, define el sueldo del empleado";
        }
    };
    Empleado.prototype.imprimirDatos = function () {
        return "Nombre: ".concat(this.nombre, " ").concat(this.apellido, " \n \n            Direccion: ").concat(this.direccion, "\n\n            Telefono: ").concat(this.telefono, "\n\n            Edad: ").concat(this.edad, "\n\n            Adulto: ").concat(this.esAdulto(), "\n\n            Sueldo: $").concat(this.imprimirSueldo()); // quise probar lo de salto de linea
    };
    return Empleado;
}(Persona));
var empleado1 = new Empleado("Luis", "Hernández", "Calle 123", "12345678", 15);
empleado1.cargarSueldo(50000);
console.log(empleado1.imprimirSueldo());
console.log(empleado1.imprimirDatos());

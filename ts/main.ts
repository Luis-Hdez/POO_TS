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


class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "izquierda";
    }

    establecerPropiedadesBasicas(tituloParam: string, colorParam: string, fuenteParam: string): void {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    }

    establecerAlineacion(alineacionParam: string): void {
        const alineacionesValidas = ["centrado", "derecha", "izquierda"];
        if (alineacionesValidas.includes(alineacionParam.toLowerCase())) {
            this.alineacion = alineacionParam.toLowerCase();
        } else {
            console.warn(`Alineación "${alineacionParam}" no válida. Usando "izquierda" por defecto.`);
            this.alineacion = "izquierda";
        }
    }

    imprimirPropiedades(): void {
        console.log("Propiedades de la cabecera:");
        console.log(`-Título: ${this.titulo}`);
        console.log(`-Color: ${this.color}`);
        console.log(`-Fuente: ${this.fuente}`);
        console.log(`-Alineación: ${this.alineacion}`);
    }
}

const miCabecera = new CabeceraPagina();
miCabecera.establecerPropiedadesBasicas("Mi Página Web", "azul", "Arial");

miCabecera.establecerAlineacion("centrado");

miCabecera.imprimirPropiedades();


// EJERCICIO 2:

class Calculadora{
  private num1: number;
  private num2: number;
  private resultado: number;

  constructor(num1Param: number, num2Param: number){
    this.num1 = num1Param;
    this.num2 = num2Param;
    this.resultado = 0;
  }

  getNum1(): number{
    return this.num1;
  }

  getNum2(): number{
    return this.num2;
  }

  // sumar
  sumar(): number{
    this.resultado = this.num1 + this.num2;
    return this.resultado;
  }

  // restar
  restar(): number{
    this.resultado = this.num1 - this.num2;
    return this.resultado;
  }

  // multiplicar
  multiplicar():number{
    this.resultado = this.num1 * this.num2;
    return this.resultado;
  }

  // dividir
  dividir(): number{
    if (this.num2 !== 0) {
      this.resultado = this.num1 / this.num2;
      return this.resultado;
    } else {
      throw new Error("no se puede dividir por cero");
    }
  }

  // potencia 
  potencia(): number{
    if (this.num2 < 0) {
      this.resultado = 1 / Math.pow(this.num1, Math.abs(this.num2));
      return this.resultado;  
    }else if (this.num2 === 0){
      if (this.num1 === 0) {
      throw new Error("0 elevado a 0 es indefinido");
    }
    this.resultado = 1;
    return this.resultado;
    } 
    else {
      this.resultado = Math.pow(this.num1, this.num2);
      return this.resultado;
    }
  }

  // factorial de num1 
  factorial(): number {
    if (this.num1 < 0) {
      throw new Error("No existe factorial de números negativos");
    }
    
    this.resultado = 1;
    for (let i = 2; i <= this.num1; i++) {
      this.resultado *= i;
    }
    return this.resultado;
  }
}

let calculadora = new Calculadora(4, 0);

console.log("Suma: " + calculadora.sumar());
console.log("resta: " + calculadora.restar());
console.log("mltiplicacion: " + calculadora.multiplicar());
console.log("División: " + calculadora.dividir());
console.log("Potencia de " + calculadora.getNum1() + " elevado a " + calculadora.getNum2() + ": " + calculadora.potencia());
console.log("Factorial de " + calculadora.getNum1() + " es: " + calculadora.factorial());


// EJERCICIO 3

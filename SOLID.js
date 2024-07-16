//PRINCIPIO DE RESPONSABILIDAD UNICA   S
//Una clase, funcion, componentes, etc debe tener una unica responsabilidad.

class Beer {
  constructor(Name, Brand, Price, Iva, Type) {
    this.Name = Name;
    this.Brand = Brand;
    this.Price = Price;
    this.Iva = Iva;
    this.Type = Type;
  }
}

class GuardarBeer extends Beer {
  Save() {
    console.log(`Guardamos ${this.Name} y ${this.Brand}`);
  }
}

class EnviarBeer extends Beer {
  Send() {
    console.log(`Enviamos ${this.Name} y ${this.Brand}`);
  }
}

let guardarBeer = new GuardarBeer("aca", "alla");
guardarBeer.Save(); // output Guardamos aca y alla.

//Principio abierto cerrado O
//Debe quedar abierta para su extesion, pero cerrada para su modificación.

class CalcularPrecioBeer extends Beer {
  CalcularPrice = () => `El valor del ${this.Type} es de ${this.Price * this.Iva}`;
  /*  
        En vez de crear un switch case donde dependiendo de los valores se ejecute una u otra
        swtich(Type){
            case "rubia": return 1000 * 2;
            case "morocha": return 2000 * 3;
        }
        se crea una funcion que tome estos parametros y devuelva el valor en si, asi a futuro se evita cambiar este codigo
        y simplemente recibe valores y retornar en base a ellos
        */
}

let calcular_precio_beer = new CalcularPrecioBeer("Cerveza Rubia", "COSA", 2000, 1.21, "Rubia");
console.log(calcular_precio_beer.CalcularPrice()); // output El valor del ${this.Type} es de 2420

//Tercer principio solid Principio de sustitución de Loskiv LSP L.

//Si tienes una clase padre que hereda a la clase hija, la clase hija no debe alterar el funcionamiento de la clase padre.

class Pajaro {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    return `${this.nombre} hace un sonido`;
  }
}

class PajaroVolador extends Pajaro {
  volar() {
    return `${this.nombre} está volando`;
  }
}

class PajaroNoVolador extends Pajaro {
  // Los pájaros que no vuelan no tienen el método volar
}

const hacerVolarPajaro = (pajaro) => {
  if (pajaro instanceof PajaroVolador) {
    return pajaro.volar();
  } else {
    return `${pajaro.nombre} no puede volar`;
  }
};

// Uso del principio de Liskov
const gorrión = new PajaroVolador("Gorrión");
const pingüino = new PajaroNoVolador("Pingüino");

console.log(gorrión.hacerSonido()); // Output: Gorrión hace un sonido
console.log(hacerVolarPajaro(gorrión)); // Output: Gorrión está volando

console.log(pingüino.hacerSonido()); // Output: Pingüino hace un sonido
console.log(hacerVolarPajaro(pingüino)); // Output: Pingüino no puede volar

//Principio de segregación de la interfas I
//Ninguna clase debería ser forzada a implementar interfaces o metodos que no va a utilizar.

//Principio de inversion de dependencias D
//Este principio establece que los modulos de alto nivel no deben depender de modulos de bajo nivel, ambos deben depender
//de abstracciones ademas, las abstracciones no deben depender de los detalles, los detalles deben depender de las abstracciones.

class MySQLConection {
  connect() {
    return "Conectando a MYSQL";
  }
}

class PostgreConecction {
  connect() {
    return "Conectando a PostgreSQL";
  }
}

class PasswordReminder {
  constructor(dbConection) {
    this.dbConection = dbConection;
  }
}

const conexionPostgre = new PasswordReminder(PostgreConecction);
const conexionMysql = new PasswordReminder(MySQLConection);
let startPostgre = new conexionPostgre.dbConection();
let startMysql = new conexionMysql.dbConection();
console.log(startPostgre.connect());
console.log(startMysql.connect());

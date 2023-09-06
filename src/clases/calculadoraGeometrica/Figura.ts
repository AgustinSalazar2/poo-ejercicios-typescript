export interface Figura {
  obtenerArea (): number;
}

// clase Cuadrado
export class Cuadrado implements Figura {
  constructor (private lado: number) {}

  obtenerArea () {
    return this.lado ** 2
  }
}
// clase Circulo
export class Circulo implements Figura {
  constructor (private radio: number) {}

  obtenerArea () {
    return Math.PI * (this.radio ** 2)
  }
}
// calase Triangulo
export class Triangulo implements Figura {
  constructor (public base: number, public altura: number) {}

  obtenerArea (): number {
    return (this.altura * this.base) / 2
  }
}

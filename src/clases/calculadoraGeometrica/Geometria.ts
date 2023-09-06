import { Circulo, Figura, Cuadrado, Triangulo } from './Figura'

export class Geometria {
  constructor (private figura: Figura) {}

  area () {
    return this.figura.obtenerArea()
  }
}

const miGeometriaCuadrado = new Geometria(new Cuadrado(10))
const miGeometriaTriangulo = new Geometria(new Triangulo(10, 20))
const miGeometriaCirculo = new Geometria(new Circulo(10))

console.log('Área del cuadrado:\n', miGeometriaCuadrado.area(), '\n')
console.log('Área del triangulo rectangulo:\n', miGeometriaTriangulo.area(), '\n')
console.log('Área del circulo:\n', miGeometriaCirculo.area())

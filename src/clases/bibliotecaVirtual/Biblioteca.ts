import { Libro } from './Libro'

export class Biblioteca {
  librosDisponibles: Libro[] = []
  librosPrestados: Libro[] = []

  constructor () {}

  agregarLibro (libro: Libro) {
    this.librosDisponibles.push(libro)
    console.log(`El Libro: "${libro.titulo}" se agregó a la biblioteca`)
  }

  buscarLibroDisponible (libro: Libro) {
    for (const lib of this.librosDisponibles) {
      if (lib.titulo === libro.titulo && lib.autor === libro.autor) {
        return lib
      }
    }
    return false
  }

  buscarLibroPrestado (libro: Libro) {
    for (const lib of this.librosPrestados) {
      if (lib.titulo === libro.titulo && lib.autor === libro.autor) {
        return lib
      }
    }
    return false
  }

  prestarLibro (libro: Libro) {
    const lib = this.buscarLibroDisponible(libro)
    if (lib) {
      this.librosDisponibles.splice(this.librosDisponibles.indexOf(lib), 1)
      this.librosPrestados.push(lib)
      console.log(`El libro "${lib.titulo}" se prestó con éxito.\n`)
    } else {
      console.log('El libro no existe en la biblioteca.\n')
    }
    return lib
  }

  devolverLibro (libro: Libro) {
    const lib = this.buscarLibroPrestado(libro)
    if (lib) {
      this.librosPrestados.splice(this.librosPrestados.indexOf(lib), 1)
      this.librosDisponibles.push(lib)
      console.log(`El libro "${lib.titulo}" se devolvió con éxito.\n`)
    } else {
      console.log(`El libro "${libro.titulo}" no fue prestado.\n`)
    }
    return lib
  }
}

const biblioteca = new Biblioteca()

const miLibro1 = new Libro('Mi libro numero 1', 'Autor numero 1')
const miLibro2 = new Libro('Mi libro numero 2', 'Autor numero 2')
const miLibro3 = new Libro('Mi libro numero 3', 'Autor numero 2')

console.log('\n>>>>> Agregar libros <<<<<<\n')
biblioteca.agregarLibro(miLibro1)
biblioteca.agregarLibro(miLibro2)
biblioteca.agregarLibro(miLibro3)

console.log('\n>>>>> Prestar libro <<<<<<\n')
biblioteca.prestarLibro(miLibro1)

console.log('>>>>> Devolver libro <<<<<<\n')
biblioteca.devolverLibro(miLibro1)
biblioteca.devolverLibro(miLibro2)

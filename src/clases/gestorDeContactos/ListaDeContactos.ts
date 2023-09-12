import { Contacto } from './Contacto'

export class ListaDeContactos {
  listaContactos: Contacto[] = []

  constructor () {}

  agregarContacto (contacto: Contacto) {
    for (const contact of this.listaContactos) {
      if (contact.nombre === contacto.nombre) {
        return console.log(`Ya existe un contacto con el nombre "${contacto.nombre}", intente agregar uno diferente.\n`)
      }
    }
    this.listaContactos.push(contacto)
    return console.log(`"${contacto.nombre}" agregado exitosamente.`)
  }

  buscarContacto (contacto: Contacto) {
    for (const contact of this.listaContactos) {
      if (contact.nombre === contacto.nombre && contact.email === contacto.email) {
        return console.log(contact)
      }
    }
    return console.log('El contacto que busca no se encuentra en su agenda.\n')
  }

  listarTodos () {
    for (const contact of this.listaContactos) {
      console.log('-----------------------------')
      console.log(contact)
    }
  }
}

const listaDeContactos = new ListaDeContactos()

console.log('\n>>>>>>  Agregando nuevos contactos  <<<<<<')
listaDeContactos.agregarContacto(new Contacto('Agustin Salazar', 'agus@gmail.com', 3704010203))
listaDeContactos.agregarContacto(new Contacto('Fulanito Menganito', 'fulano@gmail.com', 3704050607))
listaDeContactos.agregarContacto(new Contacto('Juancho', 'juancho@gmail.com', 3704030405))

console.log('\n>>>>>>  Agregando un contacto con nombre repetido  <<<<<<')
listaDeContactos.agregarContacto(new Contacto('Agustin Salazar', 'otroagus@gmail.com', 3704554433))

console.log('>>>>>>  Buscando un contacto en la lista  <<<<<<')
listaDeContactos.buscarContacto(new Contacto('Fulanito Menganito', 'fulano@gmail.com', 3704050607))

console.log('\n>>>>>>  Buscando un contacto que no esta en la lista  <<<<<<')
listaDeContactos.buscarContacto(new Contacto('Salazar', 'sala@gmail.com', 3704123456))

console.log('>>>>>>  Listado de todos los contactos agregados  <<<<<<')
listaDeContactos.listarTodos()

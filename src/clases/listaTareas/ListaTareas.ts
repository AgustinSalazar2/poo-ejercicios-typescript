import { Tarea } from './Tarea'

export class ListaTareas {
  private tareas: Tarea[] = []

  generarId () {
    const ids = this.tareas.map(e => e.id)

    if (!ids.length) {
      ids.push(0)
    }

    return Math.max(...ids) + 1
  }

  addTarea (tarea: Tarea) {
    this.tareas.push(tarea)
  }

  getTareas () {
    return this.tareas
  }

  deleteTarea (id: number) {
    this.tareas = this.tareas.filter(e => e.id !== id)
  }

  completeTarea (id: number) {
    this.tareas = this.tareas.map(e => {
      if (e.id === id) {
        e.terminado = true
      }
      return e
    })
  }
}

const lista = new ListaTareas()

const tarea1: Tarea = {
  id: lista.generarId(),
  titulo: 'Mi primer tarea',
  terminado: false,
  fecha: new Date().toJSON().slice(0, 10)
}

lista.addTarea(tarea1)

const tarea2: Tarea = {
  id: lista.generarId(),
  titulo: 'Mi segunda tarea',
  terminado: false,
  fecha: new Date().toJSON().slice(0, 10)
}

lista.addTarea(tarea2)

console.log(lista.getTareas(), '\n\n Tarea sin terminar:')

lista.deleteTarea(2)

console.log(lista.getTareas(), '\n\n Tarea terminada:')

lista.completeTarea(1)

console.log(lista.getTareas())

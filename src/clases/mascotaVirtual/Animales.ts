import { Animal } from './Animal'

export class Gato implements Animal {
  nombre: string
  genero: string
  nivelFelicidad: number = 50
  energia: number = 100
  nivelApetito: number = 50

  constructor (nombre: string, genero: string) {
    this.nombre = nombre
    this.genero = genero
  }

  alimentar () : void {
    if (this.nivelApetito >= 100) {
      return console.log(`¡¡ ${this.nombre} no tiene hambre !!\n`)
    } else {
      console.log('¡Comiendo...!')
      this.nivelApetito += 25
      if (this.nivelApetito > 100) {
        this.nivelApetito = 100
      }
      this.energia += 5
      if (this.energia > 100) {
        this.energia = 100
      }
      this.nivelFelicidad += 10
      if (this.nivelFelicidad > 100) {
        this.nivelFelicidad = 100
      }
      (this.nivelApetito <= 10)
        ? console.log(`¡¡ Nivel de apetito crítico, ${this.nombre} tiene hambre !!\n`)
        : (this.nivelFelicidad <= 10)
            ? console.log(`¡¡ Nivel de felicidad crítico, ${this.nombre} esta triste !!\n`)
            : (this.energia <= 10)
                ? console.log(`¡¡ Nivel de energia crítico, ${this.nombre} debe descansar !!\n`)
                : console.log(`${this.nombre} disfruto mucho su comida!! --> (¨Energia +5%¨ , ¨Felicidad +10%¨ , ¨Apetito +25%¨)\n`)
    }
  }

  jugar () : void {
    if (this.energia <= 0) {
      return console.log(`¡¡ ${this.nombre} no puede jugar ahora, necesita dormir !!\n`)
    } else {
      console.log('¡Jugando...!')
      this.energia -= 20
      if (this.energia < 0) {
        this.energia = 0
      }
      this.nivelFelicidad += 20
      if (this.nivelFelicidad > 100) {
        this.nivelFelicidad = 100
      }
      this.nivelApetito -= 5
      if (this.nivelApetito < 0) {
        this.nivelApetito = 0
      }
      (this.nivelApetito <= 10)
        ? console.log(`¡¡ Nivel de apetito crítico, ${this.nombre} tiene hambre !!\n`)
        : (this.nivelFelicidad <= 10)
            ? console.log(`¡¡ Nivel de felicidad crítico, ${this.nombre} esta triste !!\n`)
            : (this.energia <= 10)
                ? console.log(`¡¡ Nivel de energia crítico, ${this.nombre} debe descansar !!\n`)
                : console.log(`${this.nombre} termino de jugar! --> (¨Energia -20%¨ , ¨Felicidad +20%¨ , ¨Apetito -5%¨)\n`)
    }
  }

  dormir () : void {
    if (this.energia >= 100) {
      return console.log(`¡¡ ${this.nombre} no quiere dormir, ya descanso lo suficiente !!\n`)
    } else {
      console.log('¡Durmiendo...!')
      this.energia = 100
      this.nivelFelicidad += 10
      if (this.nivelFelicidad > 100) {
        this.nivelFelicidad = 100
      }
      this.nivelApetito -= 25
      if (this.nivelApetito < 0) {
        this.nivelApetito = 0
      }
      (this.nivelApetito <= 10)
        ? console.log(`¡¡ Nivel de apetito crítico, ${this.nombre} tiene hambre !!\n`)
        : (this.nivelFelicidad <= 10)
            ? console.log(`¡¡ Nivel de felicidad crítico, ${this.nombre} esta triste !!\n`)
            : (this.energia <= 10)
                ? console.log(`¡¡ Nivel de energia crítico, ${this.nombre} debe descansar !!\n`)
                : console.log(`${this.nombre} acaba de despertar! --> (¨Energia 100%¨ , ¨Felicidad +10%¨ , ¨Apetito -25%¨)\n`)
    }
  }

  maullar () : void {
    return console.log('Miaauuu.., Miaauuu.., Miaauuu..!!')
  }

  verEstadoGral () : void {
    return console.log(`Estado general de ${this.nombre}:\nEnergia: ${this.energia}%\nFelicidad: ${this.nivelFelicidad}%\nApetito:${this.nivelApetito}%\n----------------------\n`)
  }
}

export class Perro implements Animal {
  nombre: string
  genero: string
  nivelFelicidad: number = 50
  energia: number = 100
  nivelApetito: number = 50

  constructor (nombre: string, genero: string) {
    this.nombre = nombre
    this.genero = genero
  }

  alimentar () : void {
    if (this.nivelApetito >= 100) {
      return console.log(`${this.nombre} no tiene hambre!\n`)
    } else {
      console.log('Comiendo...')
      this.nivelApetito += 25
      if (this.nivelApetito > 100) {
        this.nivelApetito = 100
      }
      this.energia += 10
      if (this.energia > 100) {
        this.energia = 100
      }
      this.nivelFelicidad += 10
      if (this.nivelFelicidad > 100) {
        this.nivelFelicidad = 100
      }
      if (this.nivelApetito <= 10 || this.nivelFelicidad <= 10 || this.energia <= 10) {
        this.ladrar()
        return console.log('Atención!!, verifica el estado general de tu mascota\n')
      } else {
        return console.log(`${this.nombre} disfruto su comida!\nApetito +25%\nEnergia +10%\nNivel de felicidad +10%\n`)
      }
    }
  }

  jugar () : void {
    if (this.energia <= 0) {
      this.ladrar()
      return console.log(`${this.nombre} no quiere jugar ahora, necesita dormir\n`)
    } else {
      console.log('Jugando...')
      this.energia -= 15
      if (this.energia < 0) {
        this.energia = 0
      }
      this.nivelFelicidad += 20
      if (this.nivelFelicidad > 100) {
        this.nivelFelicidad = 100
      }
      this.nivelApetito -= 5
      if (this.nivelApetito < 0) {
        this.nivelApetito = 0
      }
      if (this.nivelApetito <= 10 || this.nivelFelicidad <= 10 || this.energia <= 10) {
        this.ladrar()
        return console.log('Atención!!, verifica el estado general de tu mascota\n')
      } else {
        return console.log(`${this.nombre} termino de jugar!\nEnergia -15%\nNivel de felicidad +20%\nApetito -5%\n`)
      }
    }
  }

  dormir () : void {
    if (this.energia >= 100) {
      return console.log(`${this.nombre} no quiere dormir, ya descanso lo suficiente!\n`)
    } else {
      console.log('Durmiendo...')
      this.energia = 100
      this.nivelFelicidad += 10
      if (this.nivelFelicidad > 100) {
        this.nivelFelicidad = 100
      }
      this.nivelApetito -= 25
      if (this.nivelApetito < 0) {
        this.nivelApetito = 0
      }
      if (this.nivelApetito <= 10 || this.nivelFelicidad <= 10 || this.energia <= 10) {
        this.ladrar()
        return console.log('Atención!!, verifica el estado general de tu mascota\n')
      } else {
        this.ladrar()
        return console.log(`${this.nombre} acaba de despertar!\nEnergia 100%\nNivel de felicidad +10%\nApetito -15%\n`)
      }
    }
  }

  ladrar () : void {
    return console.log('Guauu.., Guauu.., Guauu..!!\n')
  }

  verEstadoGral () : void {
    return console.log(`Estado general de ${this.nombre}:\nEnergia: ${this.energia}%\nFelicidad: ${this.nivelFelicidad}%\nApetito:${this.nivelApetito}%\n--------------------------------------`)
  }
}

const miGato = new Gato('Salem', 'Felino')

miGato.alimentar()
miGato.jugar()
miGato.dormir()
miGato.jugar()
miGato.jugar()
miGato.jugar()
miGato.jugar()
miGato.jugar()
miGato.verEstadoGral()
miGato.dormir()
miGato.verEstadoGral()
miGato.alimentar()
miGato.verEstadoGral()

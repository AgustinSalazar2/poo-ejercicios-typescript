export interface Animal {
    nombre: string
    genero: string
    nivelDeFelicidad: number

    alimentar(): number
    jugar(): number
    cuidar_mascota(): number
}

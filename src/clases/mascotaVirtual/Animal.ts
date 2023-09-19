export interface Animal {
    nombre: string
    genero: string
    nivelFelicidad: number
    energia: number

    alimentar(): void
    jugar(): void
    dormir(): void
}

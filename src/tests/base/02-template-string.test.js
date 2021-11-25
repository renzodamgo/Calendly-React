import { getSaludo } from "../../base/02-template-string"

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe de retornar Hola Renzo', () => {
        const nombre = "Renzo"
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+nombre)

        // console.log(saludo)
    })

    //get Saludo debe de retornar Hola Carlos
    test('getSaludo debe retornar Hola Carlos cuando no existen parametros',()=>{
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos')
    })
})
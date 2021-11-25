
describe('pruebas dentro del demo.test.js', () => {
  test('deben ser iguales los strings', () => {
    // 1. Inicialización
    const mensaje = 'Hola mundo';

    // 2. Estímulo
    const mensaje2 = `Hola mundo`

    // 3. Consevar mensaje
    expect(mensaje).toBe(mensaje2)
  })

})

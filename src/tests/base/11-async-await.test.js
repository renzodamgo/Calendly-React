import { getImagen } from "../../base/11-async-await";

describe('Pruebas de Asyc await', () => {
    test('getImagen deberia retornar el url de una imagen', async() => {
        const url = await getImagen();
        console.log(url)
        expect(url.includes('https://')).toBe(true)
    });
    
})

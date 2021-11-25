import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync Debe retornar un heroe async', done => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes.find(h => h.id === id));
                done();
            })
    });


    test('getHeroeByIdAsync Debe de obtener un error si el heroe no existe', done => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(err => {
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            })
    });
})

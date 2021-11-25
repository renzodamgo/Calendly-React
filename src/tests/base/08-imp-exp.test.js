import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en Funciones de heroes', () => {
    test('Debe de retornar un heroe por Id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        // console.log(heroe)
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData)
    });

    test('Debe de retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        // console.log(heroe)
        expect(heroe).toBe(undefined)
    });

    //debe retornar un arreglo con los heroes de DC
    //owner
    //to Equal al arreglo filtrado
    test('Debe de retornar Heroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner)
        // console.log(heroe)
        expect(heroe).toEqual(heroeData)
    });

    //debe retornar un arreglo con los heroes de Marvel
    //length = 2

    test('Debe de retornar heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        // console.log(heroe)
        expect(heroe.length).toBe(2)
    });
})

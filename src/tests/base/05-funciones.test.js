import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
    test("getUser debe devolver usuario especifico", () => {
        const userTest = {
            uid: "ABC123",
            username: "El_Papi1502",
        };
        const user = getUser();
        // console.log(user)
        expect(user).toEqual(userTest);
    });

    //get usuario activo debe de retornar un objeto
    test('getActiveUser debe de devolver un objeto con username Renzo', () => {
        const nombre = 'Renzo'
        const user = getUsuarioActivo(nombre)
        
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })

    });
});

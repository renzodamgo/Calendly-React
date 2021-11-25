import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en CounterApp', () => {
    let wrapper = shallow(<CounterApp />);

    // Antes de cada prueba se reinicia el componente
    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    })

    test('Debería renderizar Counter App Correctamente', () => {
        expect(wrapper).toMatchSnapshot()

    });

    test('Debería renderizar en 100 el contador', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />)
        const NumeroContador = wrapper.find('h2').text().trim();
        expect(NumeroContador).toBe('100')
    });

    test('Debe de incrementar con el botton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const NumeroContador = wrapper.find('h2').text().trim();
        expect(NumeroContador).toBe('11')
    });

    // EL valor es 11 porque corrío la prueba anterior

    test('Debe de decrecer con el botton -1', () => {
        //Con esto se reinicia el componente a su estado original
        // const wrapper = shallow(<CounterApp />)

        wrapper.find('button').at(1).simulate('click');
        // console.log(btn.html())
        const NumeroContador = wrapper.find('h2').text().trim();
        expect(NumeroContador).toBe('9')
    });

    test('Debe de resetear con el botton reset', () => {
        const wrapper = shallow(<CounterApp value={105}/>)
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        const NumeroContador = wrapper.find('h2').text().trim();
        expect(NumeroContador).toBe('105')
    });
})

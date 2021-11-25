import PropTypes from 'prop-types';
import React from 'react';
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";


// const CounterApp = ({ value = 10 }) => {
const CounterApp = () => {
  const script = document.createElement('script');

  script.src = 'https://contacto78462.activehosted.com/f/embed.php?id=1';
  script.async = true;

  document.body.appendChild(script);
  // const [counter, setCounter] = useState(value);

  // Sumar value
  // const handleAdd = (e)=>{
  //   // console.log(e);
  //   // setCounter(counter + 1);
  //   setCounter((c)=> c + 1)
  // }

  // const handleSubstract = (e)=>{
  //   setCounter((c)=> c - 1)
  // }

  // const handleReset = (e) => {
  //   setCounter((c)=> c = value)
  // }


  return (
    <>

        <h1>Demo Calendly y Active Campaign</h1>
        <InlineWidget url="https://calendly.com/rebels247" />
        <PopupWidget url="https://calendly.com/rebels247" />
        <PopupButton url="https://calendly.com/rebels247" text='Reserva con Nosotros'/>
        <div className="_form_1" />


    
    </>

  )
}

CounterApp.propTypes = {
  value: PropTypes.number,
}

export default CounterApp
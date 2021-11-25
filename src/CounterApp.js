import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { InlineWidget, PopupWidget, PopupButton } from "react-calendly";


const CounterApp = ({value = 10})=>{
  const [counter, setCounter] = useState(value);

  // Sumar value
  const handleAdd = (e)=>{
    // console.log(e);
    // setCounter(counter + 1);
    setCounter((c)=> c + 1)
  }

  const handleSubstract = (e)=>{
    setCounter((c)=> c - 1)
  }

  const handleReset = (e) => {
    setCounter((c)=> c = value)
  }


  return (
    <>
      <h1>Demo Calendly y Active Campaign</h1>
      <InlineWidget url="https://calendly.com/rebels247" />
      <PopupWidget url="https://calendly.com/rebels247" />
      <PopupButton url="https://calendly.com/rebels247"/>
    </>

  )
}

CounterApp.propTypes={
  value: PropTypes.number,
}

export default CounterApp
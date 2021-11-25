import React from 'react'
import PropTypes from 'prop-types'
import { InlineWidget } from "react-calendly";
// import { Fragment } from 'react/cjs/react.production.min';


const PrimeraApp = ({saludo , subtitulo }) => {

	return (
		<>
			<h1>{saludo}</h1>
			{/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
			<p>{subtitulo}</p>
			{/* <!-- Principio del widget integrado de Calendly --> */}
			<InlineWidget url="https://calendly.com/rebels247" />
			{/* <!-- Final del widget integrado de Calendly --> */}
		</>

	);
}

PrimeraApp.propTypes ={
	saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
	subtitulo: 'Soy un subtitulo.'
}

export default PrimeraApp
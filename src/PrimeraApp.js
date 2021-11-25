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
			{/* <div class="_form_1"></div><script src="https://contacto78462.activehosted.com/f/embed.php?id=1" type="text/javascript" charset="utf-8"></script> */}
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
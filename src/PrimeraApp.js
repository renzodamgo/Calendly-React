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

			<div class="calendly-inline-widget" data-url="https://calendly.com/rebels247" style="min-width:320px;height:630px;"></div>
			<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
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
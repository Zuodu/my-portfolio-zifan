import styled from 'styled-components'

export const Wrapper = styled.div`
	background-size: contain;
	background: transparent;
	backdrop-filter: blur(10px);
	width: 100%;
	box-shadow: 0 5px 5px -5px rgb(0,0,0);
`

export const Overlay = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
	display: none;
	transition: 0.4s;

	${({ sidebar }) =>
		sidebar &&
		`
			display: block;
			z-index: 4;	
	`}
`

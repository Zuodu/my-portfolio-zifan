import styled from 'styled-components'

export const Wrapper = styled.div`
	background-size: contain;
	background: ${ props => props.theme.backgroundColor };
	width: 100%;
	box-shadow: 0 5px 5px -5px #333;
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

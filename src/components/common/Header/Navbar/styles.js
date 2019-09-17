import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 1.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	a {
		font-family: ${props => props.theme.titleFont};
		color: ${props => props.theme.colors.text.main};
	}
	a:hover,a:active {
		color: ${props => props.theme.colors.text.main};
	}
`

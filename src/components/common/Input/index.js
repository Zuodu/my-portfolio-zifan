import styled from "styled-components";

export const Input = styled.input`
	width: 100%;
	color: ${props => props.theme.colors.text.main};
	background-color: ${props => props.theme.colors.background.light};
	box-sizing: border-box;
	border: 2px solid ${props => props.theme.colors.primary.dark};
	padding: 0.8rem 1rem;
	border-radius: 7px;
	margin-bottom: 0.5rem;
	transition: 0.3s;

	${({ error }) => error &&
	`
		border-color: #ff4136;
	`}

	&::placeholder {
		color: ${props => props.theme.colors.text.light};
	}
`;

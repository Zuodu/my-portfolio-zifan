import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  a {
    color: ${props => props.theme.colors.text.main};
    font-family: ${props => props.theme.titleFont};
    text-decoration: none;
  }

  ${({ desktop }) =>
		desktop
			? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
			: `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;

import styled from 'styled-components';


export const DynamicFlex = styled.div`
	@media (max-width: 960px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

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
			> * {
				padding-bottom: 1rem;
			}
			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;

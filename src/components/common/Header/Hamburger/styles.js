import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 12;
  top: 1.6rem;
  right: 1.8rem;
  display: none;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  @media (max-width: 960px) {
    display: block;
  }

  ${({ sidebar }) =>
    sidebar &&
    `
			right: 18%;
			top: 1.4rem;
		
			@media (max-width: 960px) {
				right: 35%;
			}
		
			@media (max-width: 600px) {
				right: 66%;
			}
	`}
`;

export const Bar = styled.div`
	width: 1.6rem;
	height: .15rem;
	margin-bottom: .3rem;
	background-color: ${props => props.theme.colors.primary.light};
	transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
	opacity 500ms,
	box-shadow 250ms,
	background-color 500ms;

	@media (max-width: 600px){
		width: 1.6rem;
	}

	${({ top, sidebar }) =>
    top &&
    sidebar &&
    `
		transform: translateY(8px) rotate(-135deg);
	`}

	${({ mid, sidebar }) =>
    mid &&
    sidebar &&
    `
			transform: scale(0);
	`}

	${({ bottom, sidebar }) =>
    bottom &&
    sidebar &&
    `
			transform: translateY(-6px) rotate(-45deg);
	`}
`;

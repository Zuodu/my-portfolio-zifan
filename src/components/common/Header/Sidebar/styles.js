import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 40;
  overflow: auto;
  top: 0;
  right: -275px;
  width: 0;
  opacity: 0;
  height: 100%;
  background-color: ${props => props.theme.colors.background.main};
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ active }) =>
		active &&
    `
			width: 20%;
			right: 0px;
			opacity: 1;

			@media (max-width: 960px) {
				width: 40%;
			}

			@media (max-width: 600px) {
				width: 75%;
			}
	`}
`;

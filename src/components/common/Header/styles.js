import styled from 'styled-components';
import Headroom from "react-headroom";

export const HeadRoomWrapper = styled(Headroom)`
	background-size: contain;
  background: transparent;
  backdrop-filter: blur(10px);
  width: 100%;
  box-shadow: 0 5px 5px -5px rgb(0, 0, 0);
`;

export const Wrapper = styled.div`
  background-size: contain;
  background: transparent;
  backdrop-filter: blur(10px);
  width: 100%;
  box-shadow: 0 5px 5px -5px rgb(0, 0, 0);
  z-index: 42;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  overflow: auto;
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
		sidebar &&
    `
			display: block;
			z-index: 10;	
	`}
`;

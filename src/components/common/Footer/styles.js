import styled from 'styled-components';
import { Flex as FlexRen } from 'rendition';

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-color: ${props => props.theme.colors.background.main};
  background-image: url('/illustrations/footer.svg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    padding-top: 2rem;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;

export const BetterFlex = styled(FlexRen)`
  @media (max-width: 680px) {
    display: block;
  }
`;

import styled from 'styled-components'

export const NavBarWrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  width: 5rem;
  box-shadow: 0 4px 12px 0 rgba(31, 31, 31, 0.2);
  background-color: white;
  font-size: 0.8rem;
  .navigation__link {
    text-decoration: none;
    display: grid;
    justify-content: center;
    justify-items: center;
    color: currentColor;
    &:hover,
    &.active {
      color: darkcyan;
    }
  }
`

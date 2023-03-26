import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  height: 100vh;
`
export const LayoutContent = styled.div`
  height: calc(100vh - 6rem); //header + footer = 6rem
  display: flex;
  > {
    &:nth-child(1) {
      position: sticky;
      left: 0;
    }
  }
`
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
`

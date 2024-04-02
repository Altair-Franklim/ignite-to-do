import { ReactNode } from 'react'
import styled from 'styled-components'

interface HeaderContainerProps {
  children: ReactNode
}
export const HeaderContainer = styled.header<HeaderContainerProps>`
  max-width: 144rem;
  height: 20rem;

  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['blue-100']};

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  h1 {
    font-size: 4rem;
    font-weight: 900;
    line-height: normal;
  }

  span {
    color: ${(props) => props.theme['purple-500']};
  }

  img {
    width: 2.2rem;
    height: 3.6rem;
  }
`

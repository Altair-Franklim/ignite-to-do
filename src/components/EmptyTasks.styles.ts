import { ReactNode } from 'react'
import styled from 'styled-components'

interface EmptyTasksContainerProps {
  children: ReactNode
}

export const EmptyTasksContainer = styled.section<EmptyTasksContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6.4rem 2.4rem;

  img {
    width: 5.6rem;
    height: 5.6rem;

    margin-bottom: 1.6rem;
  }
`

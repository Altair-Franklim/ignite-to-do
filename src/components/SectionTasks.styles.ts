import { ReactNode } from 'react'
import styled from 'styled-components'

interface SectionTasksProps {
  children: ReactNode
}

export const SectionTasksContainer = styled.main<SectionTasksProps>`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  div p {
    color: ${(props) => props.theme['blue-100']};
    font-size: 1.4rem;
    font-weight: 700;
  }

  div p + p {
    color: ${(props) => props.theme['purple-100']};
  }

  span {
    margin-left: 0.8rem;
    padding: 0.2rem 0.8rem;
    border-radius: 999px;

    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-200']};
  }

  fieldset {
    border: 0;
    border-radius: 8px;
    border-top: 1px solid ${(props) => props.theme['gray-400']};

    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`

// import { ReactNode } from 'react'
import styled from 'styled-components'

interface TaskContainerProps {
  $status: string
}

export const TaskContainer = styled.section<TaskContainerProps>`
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  align-items: flex-start;
  gap: 1.2rem;

  padding: 1.6rem;
  font-size: 1.4rem;

  background: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;

  p {
    text-decoration-line: ${(props) =>
      props.$status === 'checked' ? 'line-through' : 'none'};
    color: ${(props) =>
      props.$status === 'checked'
        ? props.theme['gray-300']
        : props.theme['gray-100']};
  }

  input[type='checkbox'] {
    width: 2.4rem;
    height: 2.4rem;
  }

  button {
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.5rem;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: ${(props) => props.theme['gray-300']};
    cursor: pointer;
  }

  button:hover {
    color: ${(props) => props.theme['red-500']};
    background: ${(props) => props.theme['gray-400']};

    border-radius: 4px;
    transition: all 0.2s ease-in-out;
  }
`

import { ReactNode } from 'react'
import styled from 'styled-components'

interface MainContainerProps {
  children: ReactNode
}

export const MainContainer = styled.main<MainContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  max-width: 73.6rem;

  margin: -15px auto;
  padding: 0 1.6rem;

  form {
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 90px;

    gap: 0.8rem;
  }

  input {
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['gray-700']};

    height: 5.4rem;

    display: flex;
    align-items: center;

    padding: 1.6rem;

    background: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-300']};
  }

  form button {
    width: 9rem;
    height: 5.2rem;

    border-radius: 8px;
    border: 0;

    padding: 1.6rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    background: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme['gray-100']};

    font-weight: 700;
    font-size: 1.4rem;

    cursor: pointer;
  }

  form button:hover {
    background: ${(props) => props.theme['blue-100']};
    transition: all 0.2s ease-in-out;
  }
`

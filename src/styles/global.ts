import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
}

:focus {
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-500']};
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-300']};
}

body, button, input, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;

    line-height: 140%;
}
`

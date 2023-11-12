import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
    body {
        margin: 0;
        min-width: 1024px;
        min-height: 768px;

    }

    a {
        text-decoration: none;
    }

    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`

export { GlobalStyle }

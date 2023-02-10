import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Header from './components/Header'
import Nav from './components/Nav'
import Filter from './components/filter/index'
import resolution from './utils/resolution/resolution'
import Partners from './components/partners'
import About from './components/About'
import OpenAi from './components/openAi'
import Possibilities from './components/possibilities'
import Register from './components/register'

const GlobalStyle = createGlobalStyle`
body {
  background: #040C18;
  font-family: 'Manrope', sans-serif;
  min-width: ${resolution.min}
  
}
* {
  margin; 0;
  padding: 0;
  box-sizing: border-box;
}
`

const Main = styled.main``

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <Filter />
        <Nav />
        <Header />
        <Main>
            <Partners />
            <About />
            <OpenAi />
            <Possibilities />
            <Register />
        </Main>
    </React.StrictMode>
)

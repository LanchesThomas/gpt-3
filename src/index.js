import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './components/App'
import Header from './components/Header'
import Nav from './components/Nav'
import Filter from './components/filter/index'


const GlobalStyle = createGlobalStyle`
body {
  background: #040C18;
  font-family: 'Manrope', sans-serif;
  
}
* {
  margin; 0;
  padding: 0;
  box-sizing: border-box;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <Filter />
        <Nav />
        <Header />
        <App />
    </React.StrictMode>
)

import React from "react";
import { Container,Title ,Box,Desc,Button, ActiveButton, Rotate} from "./styleStyl";
import {ThemeProvider,createGlobalStyle} from 'styled-components'

const GlobalStyle=createGlobalStyle`
  body {
    background: ${(props)=>props.theme.bg};
    color:${(props)=>props.theme.cl};
  }
`;

class Styl extends React.Component {
    state={
        light:false,
    }
    render () {
        const theme={
            bg: this.state.light? 'white': 'black',
            cl: this.state.light? 'black': 'white',
        }
        return (
            <ThemeProvider theme={theme}>
                <Box bg='black' type='large'>Large</Box>
                <Box  bg='red' type='medium'>Medium</Box>
                <Box  bg='yellow' type='small'>Small</Box>
                <Title>Hey Title</Title>
                <Desc left>Desc 1</Desc>
                <Desc state='left'>Desc 2</Desc>
                <GlobalStyle/>
                <h1>Theme Provider</h1>
                <Button>Click me</Button>
                <ActiveButton>Active Button</ActiveButton>
                <Rotate>Rotate</Rotate>
                <button onClick={()=>this.setState({light:!this.state.light})}>Change Me</button>
                
            </ThemeProvider                                                                                                                                                                                                                                                                                                                                                                                                                                         >
        
        )
    }
}
export default Styl;
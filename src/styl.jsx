import React from "react";
import { Container,Title ,Box,Desc,Button} from "./styleStyl";

class Styl extends React.Component {
    render () {
        return (
            <Container>
                <Box bg='black' type='large'>Large</Box>
                <Box  bg='red' type='medium'>Medium</Box>
                <Box  bg='yellow' type='small'>Small</Box>
                <Title>Hey Title</Title>
                <Desc left>Desc 1</Desc>
                <Desc state='left'>Desc 2</Desc>
                <Button>Click me</Button>
            </Container>
        
        )
    }
}
export default Styl;
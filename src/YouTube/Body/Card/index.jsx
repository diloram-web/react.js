import React, { Component } from "react";
import { Container,User,Video, Wrapper,Title } from "./style";


export default class Card extends Component {
    render(){
        const {user,video,name,view,time}=this.props;
        return (
             <Container>
                <Video src={video} alt="video content"/>
                <Wrapper>
                    <User src={user}/>
                    <div>
                        <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sapiente beata</Title>
                        <Title desc>{name}</Title>
                        <div style={{display:'flex'}}>
                        <Title desc>{view} {time}</Title>
                        </div>
                    </div>
                </Wrapper>
             </Container>
        );
    }
}


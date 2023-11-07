import React, { Component } from "react";
import { sidebar } from "../../utils/sidebar";
import { Container, Wrapper,Title, ItemWrapper } from "./style";


export default class TouTube extends Component {
    render(){
        return <Container>
            
            {sidebar.map(({icon,id,title,data})=>(
                    <Wrapper key={id} >
                        {title &&
                        <Title title>{title}</Title>}
                        {
                          data.map(({icon:Icon,title:subTitle})=>(
                            < ItemWrapper>
                               <Icon/>
                               <Title>{subTitle}</Title> 
                            </ItemWrapper>
                               ))
                        }

                    </Wrapper>
                ))
            }
        </Container>
    }
}
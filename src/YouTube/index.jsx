import React, { Component } from "react";
import { Category,User, Container,Wrapper,Icons,Category1} from "./style";
import Sidebar from './Sidebar';
import Body from './Body';
import logo from '../assets/imgs/logo.png';
import user from '../assets/imgs/photo_2023-03-01_00-11-51 (2).jpg';
import { Input } from "./style";
import {data} from '../mock';

export default class YouTube extends Component {
    constructor(props){
        super(props)
        this.state={
            data:data
        }
    }
    render(){
        return <Container>

            <Wrapper>
                <Category>
                    <Icons.Burger/>
                    <Icons.Logo src={logo} alt='logo.img'/>
                </Category>
                <Category><Input placeholder="search" />
                <Icons.Search/></Category>
               <Category1>
                <Icons.Voice/>
               </Category1>
                <Category end>
                    <Icons.Video />
                    <Icons.Menu />
                    <Icons.Bell />
                    <User src={user} alt='user'/>
                </Category>
            </Wrapper>
        <Container flex>
             <Sidebar/>
              <Body data={this.state.data}/>
            
        </Container> 
          
            
        </Container>
    }
}
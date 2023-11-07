import React, { Component } from "react";
import { Container } from "./style";
import Card from './Card';
import {data} from '../../mock';

export default class TouTube extends Component {
    render(){
        console.log(this.props.data, 'data');
        return (
             <Container>
                {
                    data.map((value)=>(
    <Card 
      view={"15 hours ago"}   
      time={' 15 hours before'} 
      name={'Ahmadalieva Dilorom Usmanalievna'} 
      user={'https://thumbs.dreamstime.com/b/значок-характера-воплощения-коммерсантки-дизайн-иллюстрации-вектора-144322274.jpg'}
      video={'https://i.ytimg.com/vi/WtBa6AV7iCQ/hqdefault_live.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsZhbl_yfGGVEKpk890XYEMsnnMg'}/>

                    ))
                }
                

              
             </Container>
        );
    }
}
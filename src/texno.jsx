import React from "react";


class Texno extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            mtitle:"",
            search:"id",
            active:null,
            subtitle:"owner",
        };
    }
    

    render (){
        
        
            
            
        // const showText=()=>{
        //     console.log()
        //     this.setState({mtitle:""})
        // }
        const showText=()=>{
            console.log()
            this.setState({mtitle:'Tehnomart'})
        }
        
            // this.setState({name: event.target.value})
            
        return (
            
                <div className="container1">
                   <img className="img1" src={this.props?.src} alt="img1"/>
                   <h3 className="title">{this.props?.title}</h3>
                   <p className="stitle">owner</p>
                   <button onClick={showText}>Kirish</button>
                   <h1 className="name">{this.state.mtitle}</h1>
                   
            </div>
            
              )

        
    }
}


    export {Texno}
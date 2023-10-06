import React from "react";
import {student} from './mock'


class State extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count:1,
            data:student,
            name:'',
            status:"",
            surname:'Akhmadalieva',
            title:'Diloram Ahmadalieva',
            search:"id",
            active:null,
        };
    }

    render (){
    

    //   const plus=() =>{
    //     if (this.state.count<10)
    //     this.setState({ count: this.state.count+1})
        
        
    //   }
    //   const minus=() =>{
    //     if (this.state.count>1)
    //     this.setState({ count: this.state.count-1})
        
    // }
    const onChange=(event)=>{
        console.log(event.target.name)
        this.setState({[event.target.name]: event.target.value})
    }
    const onFilter =(e) =>{
        // console.log(e.target.value);
        const {value}=e.target;
       let res= student.filter((item)=>
       item[this.state.search].toLowerCase().includes(value.toLowerCase()))
    this.setState({data:res,})
    }
    const onDelete=(id)=>{
       console.log(id);
       let res=this.state.data.filter(value=>value.id !== id)
       this.setState({ data:res})
    }
    const onAdd = ()=>{
            let user={
                id:Date.now(),
                name:this.state.name,
                status:this.state.status,
            };
            this.setState({
                data:[...this.state.data,user],
                name:'',
                status:""})
            console.log(user)
    }
    const onSelect =e=>{
        console.log(e.target.value);
        this.setState({search:e.target.value})
    }
    const onEdit = ({id,name,status},isSave)=> {
        if (isSave){
            let res=this.state.data.map((value)=>value.id ===this.state.active.id? {...value,name:this.state.name,status:this.state.status} :value)
            this.setState({active:null,data:res});
        }
        else {

        
         this.setState({
            name:name,
            status:status,
            active:{id,name,status},
         });
        }
    }
    // const onSelect=(e)=> {
    //     console.log(e.target.value)
    
    
    //faberlic code 9572
    //parol 21687
    //login 737214517
       
    // }
    // const onCheck=(e)=>{
    //     console.log(e.target.checked)
    // }
    // const onNameChange=(e)=>{
    //     this.setState({name: e.target.value});
    // }
    // const onSurnameChange=(e)=>{
    //     this.setState({surname: e.target.value});
    // }
    return (
        <div>
            {/* <h1>{this.state.title}</h1>
            <h1>Name:{this.state.name}</h1>
            <h1>Surname:{this.state.surname}</h1>
            <h1>State {this.state.count}</h1>
            <input onChange={(e)=>onSurnameChange(e,'hey')} placeholder="surname"/>
            <input onChange={onNameChange} type="text" placeholder="name"/>
            <input onChange={onSurnameChange} type="text" placeholder="surname"/>
            <select onChange={onSelect} type='text' id="">
                <option value='male'>male</option>
                <option value='female'>female</option>
            </select>
            <input onChange={onCheck} type="checkbox"/>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button> */}

            <br/>
            <br/>
            <br/>
            <input onChange={(e)=>onChange(e,'hey')} placeholder="surname"/>
            <input onChange={onChange} type="text" placeholder="name"/>
           <hr/>
           <h1>Name:{this.state.name}</h1>
            <h1>Status:{this.state.status}</h1>
            {/* <h1>State {this.state.count}</h1> */}
            <input value={this.state.name} name="name" onChange={onChange} type="text" placeholder="name"/>
            <input value={this.state.status} name="status" onChange={onChange}  placeholder="status"/>
            {/* <input onChange={onFilter} type="text" placeholder="filter"/> */}
            <button onClick={onAdd}>Add</button>
            <hr/>
            <select onChange={onSelect} name="" id="">
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="status">Status</option>
            </select>
            <input onChange={onFilter} type="text" placeholder="search"/>
            <hr/>
            <table border='1' width={'100%'}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
            <tbody>
                {this.state.data.length ? (
            this.state.data.map(({id,name,status})=>{
                    return(
                        // <h1 key={id}>{id} {name} {status} <button>Delete</button></h1>
                        <tr key={id}>
                            <td>{id}</td>
                            <td>
                                {' '}
                                {this.state.active?.id===id?(
                                <input 
                                onChange={onChange} 
                                name='name'
                                value={this.state.name} 
                                type="text"
                                />
                                ) :( 
                                    name
                                     )}
                                </td>
                            <td>
                                {this.state.active?.id===id?(
                                <input onChange={onChange}
                                name="status"
                                 value={this.state.status} type="text"/>) : (status)}
                                </td>
                            <td>
                                <button onClick={()=>onDelete(id)}>delete</button>
                                </td>
                            <td>
                                <button onClick={()=>
                                onEdit(
                                    {id,name,status},
                                    this.state.active?.id===id
                                    )
                                    }
                                    >
                                        {this.state.active?.id === id ? 'save': 'edit'}</button>
                            </td>
                        </tr>
                    )
                })
            ):(
                <tr>
                    <th colSpan={5}>
                        <h1>No Data</h1>
                    </th>
                </tr>
                )}
                </tbody>
                </table>
        </div>
    );
}
}
export {State};
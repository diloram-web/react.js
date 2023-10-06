import React from "react";
import Modal from "./modal";

function App() {
  const [isModalOpen, setModalOpen] = this.state(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Modalni ochish</button>
      {isModalOpen && (
        <Modal>
          <h2>Modal Sarlavhasi</h2>
          <p>Modalning tarkibi va funksiyalarini qo'shing.</p>
          <button onClick={handleCloseModal}>Yopish</button>
        </Modal>
      )}
    </div>
  );
}

export default App;


class Dukon extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            kompaniyanomi:" ",
            manzil:"",
            faoliyati:"",
            tel:null,
            elektronpochta:" ",
        };
    }
    

    render (){
        // const onAdd=()=>{
        //     console.log()
        //     this.setState({})
        // }
        const onAdd = ()=>{
            let user={
                id:Date.now(),
                name:this.state.name,
                status:this.state.status,
            };
            // this.setState({Dukon:[...this.state.user],
            //   name:'',
            //   status:""})
        }
        return(
            <>
            <div className="container1">
                <button onClick={onAdd}>+</button>
                <h1>{this.state.Dukon}Dukon Qoshish</h1>
            </div>
           
            </>
        )
        }
    }
    export {Dukon}
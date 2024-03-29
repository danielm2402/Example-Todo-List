import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import { connect } from "react-redux";
import { deleteTarea } from "../actions/tareasActions"
import { withRouter } from "react-router-dom";
import logo  from "../logo.svg"

class Tarea extends Component{
    
    borrarTarea=()=>
    {
        this.props.deleteTarea(this.props.tarea.id);
    }
    actualizarTarea=()=>
    {
        this.props.history.push({
           pathname: '/ActualizarTarea',
           state: this.state
        });
    }

    render(){
        const { tarea } = this.props;
        return(
<li className="list-inline-item">
<Card style={{ width: '18rem' }}>
  
  <Card.Header>
  <button className="btn btn-danger"onClick={this.borrarTarea}>X</button>
  </Card.Header>
  <Card.Img variant="top" src={logo}/>
  <Card.Body>
    <Card.Title>{tarea.nombre}</Card.Title>
    <Card.Text>
      {tarea.descripcion}
    </Card.Text>
   
    <button className="btn btn-success" onClick={this.actualizarTarea}>Actualizar</button>
  </Card.Body>
</Card>
</li>
            
            
              
               
                
            
            
        )
    }
    
}
const mapStateToProps = (state) =>{
    return{
        tareas: state.tareas.tareas
    }
}

export default withRouter(connect(mapStateToProps, {deleteTarea} )(Tarea));
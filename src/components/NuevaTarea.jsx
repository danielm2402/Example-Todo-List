import React, { Component } from 'react'
import { withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { addTarea } from "../actions/tareasActions"


class NuevaTarea extends Component {

    state={
        nombre:"",
        descripcion:"",
        responsable:"",
        completed: "false"
    };

    handleInput=(event)=>{
        this.setState({
        [event.target.name]: event.target.value
        })
    }
    
    saveTarea=()=>
    {
        console.log((this.props.tareas.length))
        this.props.addTarea(this.state);
        this.props.history.goBack();
    }
    render() {
        
        return (
            <React.Fragment>

<div>
<h1>C R E A T E </h1>
<form class="form-horizontal" >
  <div class="form-group">
    <label class="col-lg-4 control-label">Nombre</label>
    <div class="col-lg-4">
    <input type="text" class="form-control" onChange={this.handleInput} type="text" name="nombre" id="descripcion"></input>
    </div>
  </div>

  <div class="form-group">
    <label class="col-lg-4 control-label">Descripcion</label>
    <div class="col-lg-4">
    <input type="text" class="form-control" onChange={this.handleInput} type="text" name="descripcion" id="descripcion"></input>
    </div>
  </div>

  <div class="form-group">
    <label class="col-lg-4 control-label">Responsable</label>
    <div class="col-lg-4">
    <input type="text" class="form-control" onChange={this.handleInput} type="text" name="responsable" id="descripcion" ></input>
    </div>
  </div>
  <div class="form-group">
    <div class="">
      <button type="button" onClick={this.saveTarea} class="btn btn-success left">Registrarse</button>
    </div>
  </div>

</form>
</div>
        
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        tareas: state.tareas.tareas
    }
}

export default withRouter(connect(mapStateToProps, {addTarea})(NuevaTarea));
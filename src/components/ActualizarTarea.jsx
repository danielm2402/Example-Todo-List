import React, { Component } from 'react'
import { connect } from 'react-redux';

import {withRouter}from "react-router-dom";
import {updateTarea} from '../actions/tareasActions';


class ActualizarTarea extends Component {
    state={
        id: this.props.location.state.id,
        nombre: this.props.location.state.nombre,
        descripcion:this.props.location.state.descripcion,
        responsable:this.props.location.state.responsable,
        completed: "false"
    };

    handleInput=(event)=>{
        this.setState({
        [event.target.name]: event.target.value
        })
    }
    
    actTarea=()=>
    {
        this.props.updateTarea(this.state.id, this.state);
        this.props.history.goBack();
    }
    render() {
        return (
            <div>

<form class="form-horizontal" >
  <div class="form-group">
    <label class="col-lg-4 control-label">Nombre</label>
    <div class="col-lg-4">
    <input type="text" class="form-control" onChange={this.handleInput} type="text" name="nombre" id="descripcion" value={this.state.nombre}></input>
    </div>
  </div>

  <div class="form-group">
    <label class="col-lg-4 control-label">Descripcion</label>
    <div class="col-lg-4">
    <input type="text" class="form-control" onChange={this.handleInput} type="text" name="descripcion" id="descripcion" value={this.state.descripcion}></input>
    </div>
  </div>

  <div class="form-group">
    <label class="col-lg-4 control-label">Responsable</label>
    <div class="col-lg-4">
    <input type="text" class="form-control" onChange={this.handleInput} type="text" name="responsable" id="descripcion" value={this.state.responsable}></input>
    </div>
  </div>
  <div class="form-group">
    <div class="">
      <button type="button" onClick={this.actTarea} class="btn btn-success left">Actualizar</button>
    </div>
  </div>

</form>
</div>



               
        )
    }
}


export default withRouter(connect(null, {updateTarea})(ActualizarTarea));
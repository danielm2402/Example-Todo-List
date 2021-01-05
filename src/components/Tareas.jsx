import React, { Component } from "react";
import { connect } from "react-redux";
import {mostrarTareas} from "../actions/tareasActions"
import Tarea from "./Tarea";
import { withRouter} from "react-router-dom";
import{deleteTarea} from "../actions/tareasActions"

class Tareas extends Component{


    componentDidMount(){
        this.props.mostrarTareas();
    }

    render(){
        const { history }= this.props;

        return(
            <div>
                <h1>Todo List</h1>
                <ul className="list-inline">
                
    
                { this.props.tareas.map((tarea, index)=>{
                    return <Tarea key={index} tarea={tarea}/>
      
                }
                    )}
                    <button className="btn btn-dark" onClick={()=>history.push('/NuevaTarea')}>Nueva Tarea</button>
                    </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        tareas: state.tareas.tareas
    }
}

export default withRouter(connect(mapStateToProps, {mostrarTareas})(Tareas));
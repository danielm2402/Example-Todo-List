import {MOSTRAR_TAREAS, ADD_TAREA, ELIMIAR_TAREA} from "./types";
import axios from "axios";

export const mostrarTareas =() => async dispatch=>{
    const respuesta = await axios.get('http://localhost:5000/tareas');
    console.log(respuesta)

    dispatch({
        type: MOSTRAR_TAREAS,
        payload: respuesta.data
    });
}

export const addTarea =(tarea) => async dispatch=>{
    const respuesta = await axios.post('http://localhost:5000/tareas', tarea);
    console.log(respuesta)

    dispatch({
        type: ADD_TAREA,
        payload: respuesta.data
    });
}

export const deleteTarea =(id) => async dispatch=>{
    let url = 'http://localhost:5000/tareas/'+id;
  
    await axios.delete(url);
    const respuesta = await axios.get('http://localhost:5000/tareas');


    dispatch({
        type: ELIMIAR_TAREA,
        payload: respuesta.data
    });
}

export const updateTarea =(id, tarea) => async dispatch=>{
    let url = 'http://localhost:5000/tareas/'+id;
  
    await axios.put(url, tarea);
    const respuesta = await axios.get('http://localhost:5000/tareas');


    dispatch({
        type: ELIMIAR_TAREA,
        payload: respuesta.data
    });
}
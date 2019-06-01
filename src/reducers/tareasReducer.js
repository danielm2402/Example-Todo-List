import {MOSTRAR_TAREAS, ADD_TAREA, ELIMIAR_TAREA, ACTUALIZAR_TAREA} from "../actions/types";

const estadoInicial ={
    tareas:[]
}
export default function(state= estadoInicial, action){
    switch (action.type) {
        case MOSTRAR_TAREAS:
            return {...state, tareas:action.payload};
            break;
        case ADD_TAREA:
            return {...state, tareas:[...state.tareas,action.payload]};
            break;
        case ELIMIAR_TAREA:
            return{...state, tareas:action.payload};
        case ACTUALIZAR_TAREA:
            return{...state, tareas:[...state.tareas,action.payload]}
        
    
        default:
            return state;
    }

}
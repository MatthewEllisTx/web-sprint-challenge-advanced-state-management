import { START_LOADING, ADD_SMURF, ERROR } from '../actions/index'

const initialState = {
  smurfs: [],
  loading: false,
  error: '',
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case START_LOADING:
      return {
        ...state,
        loading: true
      }
    case ADD_SMURF:
      return {
        ...state,
        // for some reason if I spread the empty state.smurfs react complaigns about each prop having a unique key
        // and doesn't reander
        // so this makes sure state.smurfs doesn't get spread if it's empty, though I dunno why that happens anyway
        smurfs: state.smurfs.length !== 0 ? [...state.smurfs, action.data] : action.data,
        loading: false,
        error: '',
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.data,
      }
    default:
      return state
  }
}

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
// DONE

//2. Add in the arguments needed to complete a standard reducer function. DONE
//3. Add in a reducer case to accomidate the start of a smurf fetch. DONE
//4. Add in a reducer case to accomidate the successful smurf api fetch. DONE
//5. Add in a reducer cases to accomidate the failed smurf api fetch. DONE
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
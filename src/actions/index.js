import axios from 'axios'

export const START_LOADING = 'START_LOADING'
export const ADD_SMURF = 'ADD_SMURF'
export const ERROR_FETCHING = 'Could not fetch smurfs'

export function fetchSmurfs(){
  // console.log('fetchSmurs') for checking thunk worked
  return dispatch => {
    // console.log('fetch smurfs dispatch') for checking thunk worked
    dispatch({type: START_LOADING})

    setTimeout(() => {
      dispatch({type: ERROR_FETCHING})
    }, 500) // test that error works properly

    setTimeout(() => {
      axios.get('http://localhost:3333/smurfs')
        .then( res => {
          // console.log(res.data) checking data loaded
          dispatch({type: ADD_SMURF, data: res.data})
        })
        .catch( err => {
          console.log(err)
          dispatch({type: ERROR_FETCHING})
        })
      
    }, 1000) // done to test to see if Loading... actually shows up. Otherwise it's too fast to see
  }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made. DONE
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
import React from 'react';
import { useSelector } from 'react-redux'

import { ERROR_FETCHING } from '../actions/index'

import Smurf from './Smurf';

function SmurfList(){
  const { smurfs, loading, error } = useSelector(state => state)

//   const testSmurf = {
//     id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
//     name:'Poppa Smurf',
//     position:'Village Leader',
//     nickname: 'Pops',
//     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
//   }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if(error === ERROR_FETCHING){
    return <h1>{error}</h1>
  }

  return(<div className="listContainer">
    {/* <Smurf smurf={testSmurf}/> */}
    {smurfs.map( smurf => <Smurf key={smurf.id} smurf={smurf} />)}
  </div>);
}

export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component. DONE
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list. DONE
//3. Replace the static isLoading variable with the state loading variable. DONE
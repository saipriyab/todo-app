import React,{useState,useEffect} from 'react';
import './App.css';
import {Button ,FormControl,Input,InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
import Particles from 'react-particles-js';

function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');

  //when app loads we need to listen to database and fetch todos as they get added/deleted
  useEffect(()=>{
  // this fires where app.js loads
 db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
 })

  },[]);

  const addTodo=(event)=>{
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });

    setTodos([...todos,input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Programmers
      </h1>
      <form>
     <FormControl>
     <InputLabel>  Write a Todo</InputLabel>
     <Input value={input} onChange={event => setInput(event.target.value)}></Input>
   
     </FormControl>
     <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo} >Add Todo</Button>
     </form>
     <ul>
     {
       todos.map((todo)=>(
         <Todo todo={todo}/>
       ))
     }
     </ul>
    </div>
  );
}

export default App;

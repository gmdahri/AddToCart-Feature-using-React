import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material"
import Book from "./Components/book"
import Student from "./Components/student"
import axios from "axios"


function App() {
  const [name, setName] = useState("Books");
  var newRos = []
  var newBooks = []
  const [rows,setRows] = useState([])
  const [books,setBooks] = useState([])
  const getStudentData =async () =>{
    const ob = await axios.get(`http://localhost:8080/getAllStudents`)
    .then((resp) => {
      console.log("response", resp)
      newRos = resp.data.map((r) => {
        return {
          id: r.sid,
          firstName: r.first_name,
          lastName: r.last_name,
        }
      });
      setRows(newRos);
    })
  }
  const getData = async () => {
  
      const ob = await axios.get(`http://localhost:8080/getAllBooks`)
      .then((resp) => {
        console.log("response", resp)
        newBooks = resp.data.map((r) => {
          return {
            id: r.id,
            bookName: r.book_name,
            author:r.author,
            borrowedby: r.first_name + r.last_name,
            dateOfBorrow: r.date_of_borrow,
            dateOfReturn: r.date_of_return
          }
        });
        setBooks(newBooks);
      })
    
    // console.log("OB", ob)
    
    // setData(ob);
  };
  useEffect(() => {
    
    getData();
    getStudentData();

  }, []);
  return (
    <div className="App">
      <Button className="btn btn-primary" onClick={() => setName("Students")}>Students</Button>
      <Button className="btn btn-primary" onClick={() => setName("Books")}>Books</Button>
      <p>Showing {name} Data</p>
       {/* <Book newRows={rows}/>  */}
      {
        name == 'Books' ? <Book newRows={books}/>: <Student newRows={rows} />
      }
      
      {/*  */}
      
    </div>
  );
}

export default App;

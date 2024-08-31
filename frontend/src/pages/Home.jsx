import {useState, useEffect} from 'react'
import axios from "axios"
import Spinner from "../componets/Spinner";
import {Link} from "react-router-dom";
import {AiOutlineEdit} from "react-icons/ai";
import {BsInfoCircle} from "react-icons/bs";
import {MdOutlineAddBox, MdOutlineDelete} from "react-icons/md";

import BooksCard from '../componets/home/BooksCard';
import BooksTable from '../componets/home/BooksTable';

const Home = () => {
  const [books, setBooks]=useState([]);
  const [loading, setLoading]=useState(false)

  useEffect(()=> {
    setLoading(true);
    axios.get("http://localhost:3000/books")
    .then( (res) => {
      setBooks(res.data.data);
      setLoading(false);
    })

  }, []);

  return (
    <BooksTable books={books} loading={loading}/>
  )
}

export default Home
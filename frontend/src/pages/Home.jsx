import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { FaAccessibleIcon, FaTrash } from 'react-icons/fa';
import Spinner from '../components/spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCards from '../components/home/BooksCards';





// import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/bs';


const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setloading] = useState(false);
    const [showType, setShowType] = useState('table');


    useEffect(() => {
        setloading(true);
        axios.get('http://localhost:5555/books').then((response) => {
            setBooks(response.data.data);
            // reponse.data is the object of our response result and in that we had content data 
            setloading(false);
        }).catch((error) => {
            console.log('error');
            // if any error comes ,then set loading state to false
            setloading(false);
        })

    }, [])

    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button
                    className='bg-sky-300 hover:bg-sky-600  px-4 py-1 rounded-lg' onClick={() => setShowType('table')}>Table
                </button>


                <button
                    className='bg-sky-300 hover:bg-sky-600  px-4 py-1 rounded-lg' onClick={() => setShowType('card')}>Card
                </button>






            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Books List</h1>
                <Link to='/books/create'>
                    <AiOutlineEdit className='text-sky-800 text-4xl'></AiOutlineEdit>
                </Link>
            </div>
            {loading ? (
                <Spinner />) : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCards books={books} />)

            }
        </div>
    )
}



export default Home

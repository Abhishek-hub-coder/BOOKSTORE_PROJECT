import React from 'react'
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/spinner';


const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setloading] = useState(false);
    const { id } = useParams();



    useEffect(() => {
        setloading(true);
        axios.get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setloading(false);
            }).catch((error) => {
                console.log(error);
                setloading(false);
            })




    }, [])











    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Show Book</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-sky-400  rounded-xl w-fit p-4' >
                    <div className='my-4'>

                        <span className='text-xl mr-4 text-gray-500'>ID</span>
                        <span>{book._id}</span>

                    </div>

                    <div className='my-4'>

                        <span className='text-xl mr-4 text-gray-500'>Title</span>
                        <span>{book.title}</span>




                    </div>

                    <div className='my-4'>

                        <span className='text-xl mr-4 text-gray-500'>Author</span>
                        <span>{book.author}</span>




                    </div>


                    <div className='my-4'>

                        <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                        <span>{book.publishYear}</span>

                    </div>

                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                        {book.createdAt ? (
                            <span>{new Date(book.createdAt).toString()}</span>
                        ) : (
                            <span>No valid date</span>
                        )}
                    </div>


                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                        {book.updatedAt ? (
                            <span>{new Date(book.updatedAt).toString()}</span>
                        ) : (
                            <span>No valid date</span>
                        )}
                    </div>



                </div>






            )
            }
        </div >
    )
}

export default ShowBook

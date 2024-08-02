import React from 'react'
import { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
//import { response } from 'express';
const EditBook = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setpublishYear] = useState('');
    const [loading, setloading] = useState(false);

    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        setloading(true);
        axios.get(`http://localhost:5555/books/${id}`).then((response) => {
            setAuthor(response.data.author);
            setpublishYear(response.data.publishYear);
            setAuthor(response.data.title);
            setloading(false);
        })
            .catch((error) => {
                setloading(false);

                alert('an error happened');
                console.log(error);
            })

    }, [])



    const navigate = useNavigate();

    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };

        const headers = {
            'accepts': 'application/json',
            // Add any other headers you might need
        };

        setloading(true);

        axios.put(`http://localhost:5555/books/${id}`, data, { headers })
            .then(() => {
                setloading(false);
                enqueueSnackbar('Book edited successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setloading(false);
                enqueueSnackbar('error', { variant: 'error' });
                console.error('An error occurred:', error);
                // Display a user-friendly error message on the page
                // instead of using the alert function.
                // Example: setError('An error occurred while updating the book.');

            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Edit Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Author</label>
                    <input
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
                    <input
                        type='number'
                        value={publishYear}
                        onChange={(e) => setpublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
                    Save
                </button>
            </div>
        </div>
    );
}


export default EditBook;

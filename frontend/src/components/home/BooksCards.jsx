import React from 'react';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import BooksSingleCard from './BooksSingleCard';

const BooksCards = ({ books }) => {
  return (

    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

      {books.map((item) => (
                 
        <BooksSingleCard key={item._id} book={item} />

        


      )
      )




      }




    </div>
  );
};

export default BooksCards;

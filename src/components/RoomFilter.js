import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

export default function RoomsFilter() {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        price
    } = context;

    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>

            </form>
        </section>
    )
}

import React from 'react';
import { Link } from "react-router-dom";
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import RoomContainer from '../components/RoomContainer';


export default function Rooms() {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner
                    title="our rooms">
                    <Link to="/" className="btn-primary">
                        return home
            </Link>
                </Banner>
            </Hero>
            <RoomContainer />
        </>
    )
}

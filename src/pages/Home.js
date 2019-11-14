import React from 'react';
import { Link } from "react-router-dom";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


export default function Home() {
    return (
        <>
            <Hero>
                <Banner
                    title="mila's hotel"
                    subtitle="deluxe rooms starting at $199">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}

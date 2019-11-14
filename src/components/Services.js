import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free cocktails',
                info: 'Esto es un relleno de prueba. Despues se puede customizar'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Esto es un relleno de prueba. Despues se puede customizar'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free transport',
                info: 'Esto es un relleno de prueba. Despues se puede customizar'
            },
            {
                icon: <FaBeer />,
                title: 'Imported beer',
                info: 'Esto es un relleno de prueba. Despues se puede customizar'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

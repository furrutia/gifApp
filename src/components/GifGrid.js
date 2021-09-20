import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { Loading } from './Loading'

export const GifGrid = ({ category }) => {
    

    const { data: cards, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>

            { loading && <Loading/> }

            <div className="card-grid">
                { 
                    cards.map( img => (
                        <GifGridItem 
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}

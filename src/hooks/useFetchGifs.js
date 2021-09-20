import { useState, useEffect } from 'react';
import { getGifs } from '../services/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( cards => {
                setState({
                    data: cards,
                    loading: false
                })
            })

    }, [category]);

    return state;

}
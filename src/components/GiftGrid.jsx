import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftItem } from "./GiftItem";
import PropTypes from 'prop-types';

export const GiftGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading ? ( <h2>Cargando...</h2> ) : null
            }

            {
                isLoading && ( <h2>Cargando 2...</h2> )
            }
            
            <div className="card-grid" aria-label="cardgrid">
                {   
                    images.map( image => (
                        <GiftItem 
                            key={image.id} 
                            { ...image } 
                        />
                    ))
                }
            </div>
        </>
        
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}
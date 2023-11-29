import React from 'react';
import {Link, useParams} from 'react-router-dom';
import data from "../data";


const ItemPage = () => {
    const {id} = useParams();
    const selectedItem = data.find(item => item.id === parseInt(id));

    return (
        <div>
            {selectedItem ? (
                <div>
                    <h2>{selectedItem.title}</h2>
                    <p>Price: ${selectedItem.price}</p>
                    <img src={selectedItem.image} alt={selectedItem.title}
                         style={{width: '400px', height: 'auto'}}/>
                </div>
            ) : (
                <p>item not found</p>
            )}
            <Link to={`/catalog`}>
                <button>Back</button>
            </Link>
            <button>Add to Cart</button>
        </div>

    )
}

export default ItemPage;
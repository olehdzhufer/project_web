import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllChairs } from "../api";
import { Loader } from "../../components/Loader/Loading";

const ItemPage = () => {
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllChairs();
                const data = response.data; // Adjust this based on your actual response structure
                const foundItem = data.find(item => item.id === parseInt(id));
                setSelectedItem(foundItem);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);
    useEffect(() => {
        const timeout = setTimeout(() =>{
            setLoading(false)
        }, 1000);
        return() => clearTimeout(timeout)
    }, []);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div>
                        {selectedItem ? (
                            <div>
                                <h2>{selectedItem.title}</h2>
                                <p>Price: ${selectedItem.price}</p>
                                <img src={selectedItem.image} alt={selectedItem.title} style={{ width: '400px', height: 'auto' }} />
                            </div>
                        ) : (
                            <p>Item not found</p>
                        )}
                        <Link to={`/catalog`}>
                            <button>Back</button>
                        </Link>
                        <button>Add to Cart</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ItemPage;

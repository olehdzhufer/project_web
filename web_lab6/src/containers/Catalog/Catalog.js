import React, { useState, useEffect } from "react";
import { Form } from "antd";
import CardItem from "../../components/CardItem/CardItem";
import { CardWrapper, BodyWrapper, SearchAndFilterWrapper} from "./Catalog.styled";
import Filter from "../Filter/Filter";
import {getAllChairs} from "../api";
import {Loader} from "../../components/Loader/Loading";

const Catalog = () => {
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [chairs, setChairs] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllChairs().then(response => {
            setChairs(response.data);
            setFilteredProducts(response.data)
        })
    }, []);

    useEffect(() => {
        const updatedData = chairs.filter(
            (item) => search.toLowerCase() === "" || item.title.toLowerCase().includes(search)
        );
        setChairs(updatedData);
    }, [search]);

    useEffect(() => {
        const timeout = setTimeout(() =>{
            setLoading(false)
        }, 1000);
        return() => clearTimeout(timeout)
    }, []);

    return (
        <div>
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <SearchAndFilterWrapper>
                        <Form>
                            <input type="text" placeholder="title..." onChange={(e) => setSearch(e.target.value)}/>
                        </Form>
                        <Filter setFilteredProducts={setChairs}/>
                    </SearchAndFilterWrapper>
                    <BodyWrapper>
                        <CardWrapper>
                            {chairs.map(({title, image, price, id}) => (
                                <div key={id}>
                                    <CardItem title={title} image={image} price={price} id={id}/>
                                </div>
                            ))}
                        </CardWrapper>
                    </BodyWrapper>
                </>
            )}
        </div>
    );
}
export default Catalog;
import React, { useState, useEffect } from "react";
import { Form } from "antd";
import CardItem from "../../components/CardItem/CardItem";
import { CardWrapper, BodyWrapper, SearchAndFilterWrapper} from "./Catalog.styled";
import Filter from "../Filter/Filter";
import data from "../data";

const Catalog = () => {
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(data);

    useEffect(() => {
        const updatedData = data.filter(
            (item) => search.toLowerCase() === "" || item.title.toLowerCase().includes(search)
        );

        setFilteredProducts(updatedData);
    }, [search]);

    return (
        <div>
            <SearchAndFilterWrapper>
                <Form>
                    <input type="text" placeholder="title..." onChange={(e) => setSearch(e.target.value)} />
                </Form>
                <Filter setFilteredProducts={setFilteredProducts} />
            </SearchAndFilterWrapper>
            <BodyWrapper>
                <CardWrapper>
                    {filteredProducts.map(({ title, image, price, id }) => (
                        <div key={id}>
                            <CardItem title={title} image={image} price={price} id={id} />
                        </div>
                    ))}
                </CardWrapper>
            </BodyWrapper>
        </div>
    );
};

export default Catalog;

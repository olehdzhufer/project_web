import React, { useState } from "react";
import { DropdownButton, Dropdown} from "react-bootstrap";
import data from "../data";

const Filter = ({setFilteredProducts}) => {
        const [initialProducts, setInitialProducts] = useState(data)
        const applyFilterByPrice = () => {
            const newFilteredProducts = [...initialProducts]
            newFilteredProducts.sort((a, b) => b.price - a.price);
            setFilteredProducts(newFilteredProducts);
        };

        const applyFilterByName = () => {
            const newFilteredProducts = [...initialProducts]
            newFilteredProducts.sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();

                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
                return 0;
            });
            setFilteredProducts(newFilteredProducts)
        }
        const resetFilters = () => {
            setFilteredProducts(initialProducts)
        }

        return (
            <div style={{display : "flex"}}>
                <Dropdown>
                    <DropdownButton id="dropdown-basic-button" title="Filter and Sort" variant="dark">
                        <Dropdown.Item onClick={applyFilterByPrice}>
                            Price (High to Low)
                        </Dropdown.Item>
                        <Dropdown.Item onClick={applyFilterByName}>
                            Name (High to Low)
                        </Dropdown.Item>
                    </DropdownButton>
                </Dropdown>
                <button class="btn btn-dark" onClick={resetFilters} style={{marginLeft: 10}}>Cancel</button>
            </div>
        );

};

export default Filter;

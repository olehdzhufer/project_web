import React, {useEffect, useState} from "react";
import { DropdownButton, Dropdown} from "react-bootstrap";
import {getAllChairs} from "../api";
import async from "async";

const Filter = ({setFilteredProducts}) => {

    const applyFilterByPrice = async () => {
        try {
            const response =  await getAllChairs()
            const newFilteredProducts = [...response.data];
            newFilteredProducts.sort((a, b) => b.price - a.price);
            setFilteredProducts(newFilteredProducts);
        }
        catch (error){
            console.error(error)
        }
    }

    const applyFilterByName = async () => {
        try {
            const response = await getAllChairs()
            const newFilteredProducts = [...response.data];
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
        catch (error){
            console.error(error)
        }
    }

    const resetFilters = async () => {
        try {
            const response = await getAllChairs()
            const newFilteredProducts = [...response.data];
            setFilteredProducts(newFilteredProducts)
        }
        catch (error){
            console.error(error)
        }
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

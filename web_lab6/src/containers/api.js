import axios from "axios";

const BASE_URL = 'http://localhost:5050/items';

export const getAllChairs = () => {
    return axios.get(`${BASE_URL}`)
};

export const getChair = (id) => {
    return axios.get(`${BASE_URL}/${id}`)
};

export const createChair = (chairData) => {
    return axios.post(`${BASE_URL}`,chairData)
}

export const updateChair = (id, chairData) => {
    return axios.put(`${BASE_URL}/${id}`, chairData)
}
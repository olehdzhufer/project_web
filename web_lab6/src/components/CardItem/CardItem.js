import { Card } from "antd";
import {Link} from "react-router-dom";
import React from "react";
const { Meta } = Card;

const CardItem = ({ title, image, price, id }) => {

    return (
        <Card hoverable style={{ width: 350, borderRadius: "20px" }} cover={<img style={{ borderRadius: "20px" }} alt="image" src={image} />}>
            <Meta title={title} />
            <p>${price}</p>
            <div>
                <Link to={`/itempage/${id}`}>
                    <button className="btn btn-secondary">
                        View more
                    </button>
                </Link>
            </div>
        </Card>
    );
};

export default CardItem;

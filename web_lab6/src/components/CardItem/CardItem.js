import { Card } from "antd";
const { Meta } =  Card ;

const CardItem = ({ title, imageSrc, price }) => (
  <Card
    hoverable
    style={{ width: 350, borderRadius: "20px" }}
    cover={<img style={{ borderRadius: "20px" }} alt="image" src={imageSrc} />}
  >
    <Meta title={title} />
    <p>${price}</p>
  </Card>
);

export default CardItem;

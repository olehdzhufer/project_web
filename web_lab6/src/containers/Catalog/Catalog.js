import CardItem from "../../components/CardItem/CardItem";
import model1 from "../../Icons/jpg.jpeg"
import model2 from "../../Icons/NEW_Boucle_Occasional_Chair_Lores_01__99432.jpg"
import model3 from "../../Icons/1657274071_12_2234.jpg"
import model4 from "../../Icons/56101522SD04098_A2_803x602.jpg"
import { CardWrapper, BodyWrapper } from "./Catalog.styled";

const data = [
  { title: "dsf", image: model1, price: 312 },
  { title: "dsf", image: model2, price: 312 },
  { title: "dsf", image: model3, price: 312 },
  { title: "dsf", image: model4, price: 312 },
];

const Catalog = () => {
  return (
    <BodyWrapper>
      <CardWrapper >
        {data.map(({ title, image, price }, idx) => (
          <CardItem title={title} imageSrc={image} price={price} id={idx} />
        ))}
      </CardWrapper>
    </BodyWrapper>
      );
};
export default Catalog;

import React, {useState} from "react";
import model1 from "../../Icons/aldi-hanging-egg-chair-1654852654.jpg";
import model2 from "../../Icons/gwyneth-boucle-chair.jpeg";
import model3 from "../../Icons/roundhillbestaccentchairsforsmallspaces-1bfebd7d87bf42bea3b8445f39236eac.jpg";
import mainImage from "../../Icons/HelinoxSwivelChair-Crimson-5_2000x.jpg.webp";
import CardItem from "../../components/CardItem/CardItem";
import { CardWrapper, SectionWrapper } from "./Home.styled";

const data_home = [
  { id:1 ,title: "Egg Chair", image: model1, price: 123 },
  { id:2 ,title: "Boucle Chair", image: model2, price: 324234 },
  { id:3 ,title: "Vanity Chair", image: model3, price: 324324 },
];
const data_view_more = [
    { id:4, title: "Egg Chair", image: model1, price: 123 },
    { id:5, title: "Boucle Chair", image: model2, price: 324234 },
    { id:6, title: "Vanity Chair", image: model3, price: 324324 },
];


const Home = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div>
      <SectionWrapper>
        <img
          src={mainImage}
          style={{ width: "500px", height: "500px", borderRadius: "20px" }}
        />
        <div
          className="mainText"
          style={{ paddingTop: "100px", marginLeft: "50px" }}
        >
          <h2>main text</h2>
          <p>text</p>
        </div>
      </SectionWrapper>
      <CardWrapper>
        {data_home.map(({ title, image, price , id}) => (
          <CardItem title={title} imageSrc={image} price={price} key={id} />
        ))}
      </CardWrapper>
        {showMore && (
            <CardWrapper>
                {data_view_more.map(({ title, image, price , id}) => (
                    <CardItem title={title} imageSrc={image} price={price} key={id} />
                ))}
            </CardWrapper>
        )}
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}>
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => setShowMore(!showMore)}>
          View more
        </button>
      </div>
    </div>
  );
};

export default Home;

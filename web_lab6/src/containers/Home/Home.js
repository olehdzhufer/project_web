import React from "react";
import model1 from "../../Icons/aldi-hanging-egg-chair-1654852654.jpg";
import model2 from "../../Icons/gwyneth-boucle-chair.jpeg";
import model3 from "../../Icons/roundhillbestaccentchairsforsmallspaces-1bfebd7d87bf42bea3b8445f39236eac.jpg";
import mainImage from "../../Icons/HelinoxSwivelChair-Crimson-5_2000x.jpg.webp";
import CardItem from "../../components/CardItem/CardItem";
import { CardWrapper, SectionWrapper } from "./Home.styled";

const data = [
  { title: "Egg Chair", image: model1, price: 123 },
  { title: "Boucle Chair", image: model2, price: 324234 },
  { title: "Vanity Chair", image: model3, price: 324324 },
];

const Home = () => {
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
        {data.map(({ title, image, price }, idx) => (
          <CardItem title={title} imageSrc={image} price={price} id={idx} />
        ))}
      </CardWrapper>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <button type="button" class="btn btn-secondary btn-lg">
          View more
        </button>
      </div>
    </div>
  );
};

export default Home;

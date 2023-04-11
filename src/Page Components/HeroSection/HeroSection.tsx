import React from "react";

import "./HeroSection.scss";
import Card from "../../Components/Cards/Card";
const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-image-container">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1633174524778-61a18ee54490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
          alt=""
        />
      </div>
      <div className="">
        <Card
          image="../../../public/vite.svg"
          title={"a"}
          rating={<></>}
          button={<button>Add to cart</button>}
          ratings={4}
          price={100}
        />
      </div>
      <div className="products">
        <Card
          image="../../../public/vite.svg"
          title={"a"}
          rating={<></>}
          button={<button>Add to cart</button>}
          ratings={4}
          price={100}
        />
        <Card
          image="../../../public/vite.svg"
          title={"a"}
          rating={<></>}
          button={<button>Add to cart</button>}
          ratings={4}
          price={100}
        />
        <Card
          image="../../../public/vite.svg"
          title={"a"}
          rating={<></>}
          button={<button>Add to cart</button>}
          ratings={4}
          price={100}
        />
        <Card
          image="../../../public/vite.svg"
          title={"a"}
          rating={<></>}
          button={<button>Add to cart</button>}
          ratings={4}
          price={100}
        />
        <Card
          image="../../../public/vite.svg"
          title={"a"}
          rating={<></>}
          button={<button>Add to cart</button>}
          ratings={4}
          price={100}
        />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default HeroSection;

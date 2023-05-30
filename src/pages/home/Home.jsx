import React from "react";
import Banner from "./Banner";
import Advantages from "./Advantages";
import Movies from "./Movies";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <Banner />
      <Movies />
      <Advantages />
      <Footer />
    </div>
  );
}

export default Home;

import React, {useRef} from "react";
import Banner from "./Banner";
import Advantages from "./Advantages";
import Movies from "./Movies";
import Footer from "../../components/Footer";

function Home() {
  const moviesRef = useRef(null);

  const handleSearch = searchTerm => {
    moviesRef.current.performSearch(searchTerm);
  };
  return (
    <div>
      <Banner handleSearch={handleSearch} />
      <Movies ref={moviesRef} />
      <Advantages />
      <Footer />
    </div>
  );
}

export default Home;

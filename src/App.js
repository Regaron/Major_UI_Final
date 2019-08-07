import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import ImageLoader from "./components/ImageLoader";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div>
          <Header />

          <Section color={"white"} reference={"About"}>
              <About />
          </Section>

          <Section reference={"Demo"} color={"#fafafa"}>
              <ImageLoader />
          </Section>
          <Footer/>
      </div>
  );
};

export default App;

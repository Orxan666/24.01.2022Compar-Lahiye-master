import React from "react";
import HeroSection from "../components/heroSection/HeroSection";
import { Button, Icon, Label } from "semantic-ui-react";
import Courses from "../courses/Courses";
import Elementor from "../components/elementor/Elementor";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Courses />
      <Elementor/>
    </div>
  );
};

export default Home;

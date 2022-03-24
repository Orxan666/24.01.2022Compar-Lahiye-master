import React from "react";
import HeroSection from "../components/heroSection/HeroSection";
import { Button, Icon, Label } from "semantic-ui-react";
import Courses from "../courses/Courses";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Courses />
    </div>
  );
};

export default Home;

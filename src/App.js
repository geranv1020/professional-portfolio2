import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import projectone from "./img/project-one.png";
import runbuddy from "./img/run-buddy-image.png";
import projecttwo from "./img/project2.jpeg";
import bounty from "./img/bounty-book.jpeg";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [projects] = useState([
    {
      name: "projectone",
      deploy: "https://wingram1.github.io/drip-planner/",
      repo: "https://github.com/wingram1/drip-planner",
      pic: projectone,
    },
    {
      name: "runbuddy",
      deploy: "https://geranv1020.github.io/run-buddy/",
      repo: "https://github.com/geranv1020/run-buddy",
      pic: runbuddy,
    },
    {
      name: "projecttwo",
      deploy: "https://itwasthe90s.herokuapp.com",
      repo: "https://github.com/Jasonwesleysmith/it-was-the-90s",
      pic: projecttwo,
    },
    {
      name: "bountybook",
      deploy: "https://bountybook.herokuapp.com/",
      repo: "https://github.com/Atticus-Robinson/Bounty_Book",
      tagline: "Tech blog for your favorite tech topics",
      pic: bounty,
    },
  ]);

  return (
    <ParallaxProvider>
      <Nav
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <Header />
      <PBanner photo={Img1} title="About" />
      <About />
      <PBanner photo={Img2} title="Projects" />
      <Projects projects={projects} />
      <PBanner photo={Img3} title="Contact" />
      <Footer />
      <PBanner photo={Img4} title="Thank You" />
    </ParallaxProvider>
  );
}

export default App;

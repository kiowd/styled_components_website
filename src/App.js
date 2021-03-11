import Home from "./pages/Home";
import GlobalStyles from "../src/components/globals/GlobalStyles";
import Hero from "../src/components/globals/Hero";
import Banner from "../src/components/globals/Banner";
import "./styles.css";

export default function App() {
  return (
    <>
      <Hero>
        <Banner 
        greeting='Welcome :) '
        title=' From Styled APP'
        text=" There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable."
        />
        </Hero>
                
      <GlobalStyles />
      <Home />
    </>
  );
}

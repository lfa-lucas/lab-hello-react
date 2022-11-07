import './App.css';
import MainPage from './components/main-page/main-page';
import Cards from './components/cards/cards';

//importação das imagens
import iLOGO from "./images/ironhack-logo-xs.png"
import iMENU from "./images/menu-top-xs.png"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"


function App() {
  return (
    <article className="landing-page">
      <section>
        <MainPage
        iconLOGO={iLOGO}
        iconMENU={iMENU}
        pageTitle1="Say hello to"
        pageTitle2="ReactJS"
        pageText1="You will learn how to use"
        pageText2="the most popular frontend library,"
        pageText3="and become a super Ninja developer."
        btnTittle="Awesome!"
        />  
      </section>
      <section className="cards-area">
        <Cards cardIcon={icon1} cardTitle="Declarative" cardText="React makes it painless to create interactive UIs."/>
        <Cards cardIcon={icon2} cardTitle="Components" cardText="Build encapsulated components that manage their state."/>
        <Cards cardIcon={icon3} cardTitle="Single-Way" cardText="A set of immutable values are passed to the component's."/>
        <Cards cardIcon={icon4} cardTitle="JSX" cardText="Statically-typed, designed to run on modenr browsers."/>
      </section>
    </article>
  );
}

export default App;


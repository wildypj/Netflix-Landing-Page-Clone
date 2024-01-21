import Header from "./components/Header/Header";
import ShowCase from "./components/ShowCase/ShowCase";
import { GlobalStyle } from "./GlobalStyle";
import { caseOne, caseTwo,  caseThree, caseFour } from "./components/ShowCase/data";
import ShowCaseLst from "./components/ShowCase/ShowCaseLst";
import Question from "./components/Question/Questions";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <ShowCase {...caseOne}/>
      <ShowCase {...caseTwo}/>
      <ShowCase {...caseThree}/>
      <ShowCaseLst {...caseFour} />
      <Question />
      <Footer />
    </>
  );
}


export default App;



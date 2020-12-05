import {Helmet} from "react-helmet";
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { siteData } from './siteData';

function App() {
  return (
    <div className="App">
    <Helmet>
                <meta charSet="utf-8" />
                <title>{siteData.siteTitle}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

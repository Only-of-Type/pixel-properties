import FeaturedListings from './components/layout/FeaturedListings/FeaturedListings';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/layout/Hero/Hero';
import MosaicCTABlock from './components/layout/MosaicCTABlock/MosaicCTABlock';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <MosaicCTABlock />
      <FeaturedListings />
      <Footer />
    </>
  );
}

export default App;

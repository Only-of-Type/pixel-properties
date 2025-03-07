import FeaturedListings from './components/layout/FeaturedListings';
import Footer from './components/layout/Footer';
import Hero from './components/layout/Hero';
import MidpageCTABlock from './components/layout/MidpageCTABlock';
import Nav from './components/layout/Nav';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <MidpageCTABlock />
      <FeaturedListings />
      <Footer />
    </>
  );
}

export default App;

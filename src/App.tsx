import FeaturedListings from './components/layout/FeaturedListings';
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
    </>
  );
}

export default App;

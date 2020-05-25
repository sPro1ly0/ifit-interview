import React from 'react';
import TopProductNav from './TopProductNav';
import MainNav from './MainNav';
import MediaSlider from './MediaSlider';
import GridLibrary from './GridLibrary';
import EquipmentSelection from './EquipmentSelection';
import Footer from './Footer';
import HeroImage from './images/gmapsinworkout.png';

function App() {

  const Hero = {
    backgroundImage: `url(${HeroImage})`
  }

  return (
    <div className='App'>
      <header className='header'>
        <TopProductNav />
        <MainNav />
      </header>
      <div className='hero' style={Hero}>
        <h1 className='hero-text'>The best personal training, right in your own home</h1>
        <button className='hero-button'>JOIN iFIT COACH</button>
      </div>
      <MediaSlider />
      <GridLibrary />
      <EquipmentSelection />
      <Footer />
    </div>
  );
}

export default App;

//https://hously-react.vercel.app/index-six

import HeaderSection from './components/HeaderSection/HeaderSection'
import SearchForm from './components/SearchForm/SearchForm'
import HeroSection from './components/HeroSection/HeroSection'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
/* import slider styles */
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <>
      <HeaderSection/>
      <SearchForm/>
      <HeroSection/>
      <FeaturedSection/>
    </>
  )
}

export default App

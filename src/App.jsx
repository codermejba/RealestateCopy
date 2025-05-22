//https://hously-react.vercel.app/index-six

import HeaderSection from './components/HeaderSection/HeaderSection'
import SearchForm from './components/SearchForm/SearchForm'
import HeroSection from './components/HeroSection/HeroSection'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
/* import slider styles */
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ListingSection from './components/ListingSection/ListingSection';
import ClientReview from './components/ClientReview/ClientReviewSec';
import ContactSection from './components/ContactSection/ContactSection';
import FooterSection from './components/FooterSection/FooterSection';
const App = () => {
  return (
    <>
      <HeaderSection/>
      <SearchForm/>
      <HeroSection/>
      <FeaturedSection/>
      <ListingSection/>
      <ClientReview/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default App

import React from 'react'
import HeaderSection from '../components/HeaderSection/HeaderSection'
import SearchForm from '../components/SearchForm/SearchForm'
import HeroSection from '../components/HeroSection/HeroSection'
import FeaturedSection from '../components/FeaturedSection/FeaturedSection'
import ListingSection from '../components/ListingSection/ListingSection'
import ClientReviewSec from '../components/ClientReview/ClientReviewSec'
import FooterSection from '../components/FooterSection/FooterSection'
import ContactSection from '../components/ContactSection/ContactBodySection'

const Home = () => {
  return (
    <>
    <HeaderSection />
    <SearchForm />
    <HeroSection />
    <FeaturedSection />
    <ListingSection />
    <ClientReviewSec/>
    <ContactSection />
    <FooterSection />
    </>
  )
}

export default Home
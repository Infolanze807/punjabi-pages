import React from 'react'
import { HeroSection } from '../components/HomePages/HeroSection'
import { CategoriesSection } from '../components/HomePages/CategoriesSection'
import { PopularBusinesses } from '../components/HomePages/PopularBusinesses'
import { CallToAction } from '../components/HomePages/CallToAction'
import { MobileAppSection } from '../components/HomePages/MobileAppSection'
import { FuturisticStats } from '../components/HomePages/FuturisticStats'
import FeaturedBusiness from '../components/HomePages/FeaturedBusiness'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedBusiness />
      <CategoriesSection />
      <FuturisticStats />
      <PopularBusinesses />
      <CallToAction />
      <MobileAppSection />
    </div>
  )
}

export default Home

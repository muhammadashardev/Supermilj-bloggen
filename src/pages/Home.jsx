import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import NewsStrip from '../components/NewsStrip'
import LatestNews from '../components/LatestNews'
import EditorsPick from '../components/EditorsPick'
import BrowseTopics from '../components/BrowseTopics'
import SocialMedia from '../components/SocialMedia'
import SupportWork from '../components/SupportWork'
import AboutSMB from '../components/AboutSMB'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="pt-16 flex-grow">
        <HeroSlider />
        <NewsStrip />
        <AboutSMB />
        <LatestNews />
         <SupportWork />
        <EditorsPick />
        <BrowseTopics />
        <SocialMedia />
       
        
      </main>
      <Footer />
    </div>
  )
}


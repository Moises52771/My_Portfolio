import type { NextPage } from 'next';
import PageTitle from 'ui/components/topo/topo';
import Biography from 'ui/components/information/biography/biography';
import Skills from 'ui/components/information/skills/Skills'; 
import Portfolio from 'ui/components/Portfolio/Portifolio';
import Contact from 'ui/components/contact/contact';
import Offer from 'ui/components/information/offer/Offer';



const Home: NextPage = () => { 


  return (
    <div>
      <PageTitle/>
      <Biography/>
      <Skills/>
      <Portfolio/>
      <Offer/>
      <Contact/>
    </div>
  )
}

export default Home

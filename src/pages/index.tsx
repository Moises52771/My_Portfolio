import type { NextPage } from 'next';
import PageTitle from 'ui/components/topo/topo';
import Biography from 'ui/components/information/biography/biography';
import Skills from 'ui/components/information/skills/Skills'; 



const Home: NextPage = () => {
  return (
    <div>
      <PageTitle/>
      <Biography/>
      <Skills/>
    </div>
  )
}

export default Home

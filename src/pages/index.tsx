import type { NextPage } from 'next'
import PageTitle from 'ui/components/topo/topo'
import Biography from 'ui/components/information/biography/biography'


const Home: NextPage = () => {
  return (
    <div>
      <PageTitle/>
      <Biography/>

    </div>
  )
}

export default Home

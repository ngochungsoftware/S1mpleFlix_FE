import React, { useState } from 'react'
import Homes from "../components/homes/Homes"
import Upcomming from '../components/Upcomming/Upcomming'
import { latest, upcome } from '../dummyData'
import Trending from '../components/Trending/Trending'


export const HomePages = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)

  return (<>
    <Homes />
    <Upcomming items={items} title='Upcomming Movies' />
    <Upcomming items={item} title='Lastets Movies' />
    <Trending />
    {/* <Upcomming items={rec} title='Recommended Movies' /> */}

  </>)
}

export default HomePages

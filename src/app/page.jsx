"use client"

import React, { useContext} from 'react'
import axios from 'axios'
import { HomeContext } from '@/context/HomeContext.jsx'
import HomeMenu from '../components/HomeMenu.jsx'
import Layout from "../components/layout.jsx"

export default function Home() {
  const { currentUser, setCurrentUser } = useContext(HomeContext);

  React.useEffect(() => {
    const onPageLoad = async () => {
      try {
        const res = await axios.get("api/users/newuser")
        setCurrentUser(res.data.data);
        console.log(`Home Page Data\n${currentUser}`)
      } catch (error) {
        console.log(error)
      }
    }
    onPageLoad()
  },[])

  return (
    <>
      <Layout>
          <HomeMenu />
      </Layout>
    </>
  )
}


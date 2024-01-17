"use client";

import React, { useContext } from "react";
import axios from "axios";
import { HomeContext } from "@/context/HomeContext.jsx";
import HomeMenu from "../components/HomeMenu.jsx";
import Layout from "../components/layout.jsx";

export default function Home() {
  const { currentUser, setCurrentUser, location, setLocation } =
    useContext(HomeContext);
  const [data, setData] = React.useState({
    userLocation: "",
    userId: "",
  });

  React.useEffect(() => {
    const onPageLoad = async () => {
      try {
        const res = await axios.get("api/users/newuser");
        setCurrentUser(res.data.data);
        setData({ ...data, userId: res.data.data._id });
        // setLocation(res.data.data.location)
        console.log(`Home Page Data\n${res.data.data}`);
      } catch (error) {
        console.log(error);
      }
    };
    onPageLoad();
  }, []);

  React.useEffect(() => {
    setData({ ...data, userLocation: location });
  }, [location]);

  React.useEffect(() => {
    if (data.userId !== "" && data.userLocation !== "") {
      const setLocationToken = async () => {
        try {
          await axios.post("api/users/setuserlocation", data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      setLocationToken();
    }
  }, [location]);

  return (
    <>
      <Layout>
        <HomeMenu />
      </Layout>
    </>
  );
}

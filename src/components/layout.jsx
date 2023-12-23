"use client"

import React from "react";
import ContactCard from "@/components/ContactCard.jsx";
import NavBar from "@/components/NavBar.jsx";

export default function Layout({ children }) {

    return (
        <>
            <NavBar />
            {children}
            <ContactCard />
        </>
    )
    
  }
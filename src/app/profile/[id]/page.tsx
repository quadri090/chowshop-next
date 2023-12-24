"use client"

import React from "react";
import axios from "axios";

export default function ProfileIdPage() {
    const [loading, setLoading] = React.useState(false)
    const [currentUser, setCurrentUser] = React.useState({
        username: "",
        phonenumber: "",
        email: "",
    })

    // React.useEffect(() => {
    //     const onPageLoaad = async () => {
    //       try {
    //         setLoading(true);
    //         const res = await axios.get("api/users/newuser");
    //         console.log(res.data);
    //         setCurrentUser(res.data.data);
    //         console.log(`Profile Page ID Data ${currentUser}`);
    //       } catch (error) {
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
    //     onPageLoaad();
    //   }, []);

    return (
        <div>
            This is the profile page
        </div>
    )
}
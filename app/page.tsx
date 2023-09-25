'use client';

import React from "react"
import "%styles/Page.modules.css"
import SearchBar from "%components/SearchBar"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { useSession } from "next-auth/react"
config.autoAddCss = false

export default function Page() {

    const { data: session } = useSession();

    return <div id="homepage-container">
        <SearchBar />
        <em id="brand-text">wayv apparel</em>
        {session?.user && (<em id="welcome-text">hello, {session.user.name.toLowerCase()}</em>)}
        

    </div>
}
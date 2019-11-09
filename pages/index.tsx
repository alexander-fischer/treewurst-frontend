import React from "react"
import Nav from "../components/nav"
import Meta from "../components/meta"

const Home = () => (
    <div>
        <Meta
            title="Home" />
        <Nav />

        <h1>Home</h1>
        <a href="/ranger">Zur Karte</a>

        <style jsx>{`

        `}</style>
    </div>
)

export default Home

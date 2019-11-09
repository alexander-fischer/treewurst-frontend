import React from "react"
import Nav from "../components/nav"
import Meta from "../components/meta"

const Home = () => (
    <div>
        <Meta
            title="Home" />
        <Nav />

        <div className="issue-wrapper">
            <div className="flex justify-center">
                <input className="lg:w-1/3 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
                    type="email"
                    placeholder="Deine Mailadresse" />
            </div>
        </div>


        <style jsx>{`
            .issue-wrapper {
                padding-top: "40px";
            }
        `}</style>
    </div>
)

export default Home

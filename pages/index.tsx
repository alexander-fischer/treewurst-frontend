import React from "react"
import Nav from "../components/nav"
import Meta from "../components/meta"

const Home = () => (
    <div>
        <Meta
            title="TreeWurst" />
        <Nav />

        <div className="mt-8">
            <div className="flex justify-center">
                <input className="lg:w-1/3 bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-lg py-2 px-4 block appearance-none leading-normal"
                    type="email"
                    placeholder="Deine Mailadresse" />
            </div>
            <div className="flex justify-center mt-4">
                <div className="lg:w-1/3">
                    <textarea className="resize border rounded-lg focus:outline-none focus:shadow-outline py-2 px-4 border-gray-400"
                        style={{ height: "100px", width: "100%" }}
                        placeholder="Beschreibe dein Problem..." />
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Problem absenden
                </button>
            </div>
        </div>
    </div>
)

export default Home

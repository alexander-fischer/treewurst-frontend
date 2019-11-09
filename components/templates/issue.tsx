import { Component } from "react"
import Loading from "../loading"

class IssueTemplate extends Component {

    state = {
        gpsLoading: false,
        position: null
    }

    render() {
        const { gpsLoading } = this.state
        const position: Position | null = this.state.position
        const readablePosition = this.createReadablePosition(position)

        return (
            <div>
                <div className="mt-8">
                    <div className="flex justify-center">
                        <h2 className="text-gray-700" style={{ fontSize: "2rem" }}>Meldung</h2>
                    </div>
                    <div className="flex justify-center mt-4">
                        <input className="lg:w-1/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            type="email"
                            placeholder="Deine Mailadresse" />
                    </div>
                    <div className="flex justify-center mt-4">
                        <div className="lg:w-1/3">
                            <textarea className="resize bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                style={{ height: "100px", width: "100%" }}
                                placeholder="Beschreibe dein Problem..." />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <div className="flex items-center bg-gray-200 lg:w-1/3 py-2 px-4 appearance-none rounded focus:outline-none focus:bg-white focus:border-blue-500">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Koordinaten" aria-label="Full name" value={readablePosition} />
                            <button className="flex-shrink-0 text-sm text-white" type="button" onClick={this.getPosition}>
                                {gpsLoading ? <Loading /> : <img src="/icons/location.svg" style={{ height: "20px", width: "20px" }} />}
                            </button>
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
    }

    getPosition = () => {
        this.setState({ gpsLoading: true })
        try {
            navigator.geolocation.getCurrentPosition(position => this.setState({ position, gpsLoading: false }))

        } catch (err) {
            this.setState({ gpsLoading: false })
        }
    }

    createReadablePosition = (position: Position | null) => {
        if (!position) return undefined

        const lat = position.coords.latitude
        const lng = position.coords.longitude

        return `${lat}, ${lng}`
    }

}

export default IssueTemplate
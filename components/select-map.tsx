import React, { Component } from "react"
import { Map, TileLayer, GeoJSON } from "react-leaflet"
import { getGeoJSON } from "../src/networking/api"

interface ITreeMapProps {
    width: string
    height: string
}

const geoJSONStyle = {
    "color": "red",
    "weight": 5,
    "opacity": 0.65
}

export default class SelectMap extends Component<ITreeMapProps, {}> {
    state = {
        center: {
            lat: 51.0997605,
            lng: 13.8213171,
        },
        zoom: 13,
        geoJSON: null
    }

    render() {
        const position = [this.state.center.lat, this.state.center.lng]
        const { width, height } = this.props
        const { geoJSON } = this.state

        let geoJSONComponent = null
        if (!geoJSON) {
            geoJSONComponent = <GeoJSON
                data={geoJSON}
                style={geoJSONStyle} />
        }

        return (
            <div className="map-wrapper">
                <div className="map-root">
                    <Map center={position}
                        zoom={this.state.zoom}
                        style={{ height, width }}
                        onClick={this.handleClick}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                        {geoJSONComponent}

                    </Map>
                    <style jsx>{`
                        .map-root {
                            height: 100%;
                        }
        
                        .leaflet-container {
                            height: 400px !important;
                            width: 100%;
                            margin: 0 auto;
                        }
                    `}</style>
                </div>
            </div>
        )
    }

    // TODO implement backend api
    handleClick = async (e) => {
        const latlng = e.latlng
        const res = await getGeoJSON(latlng.lat, latlng.lng)
        console.log(res)

        if (!res) return

        this.setState({ geoJSON: res[1] })
    }
}
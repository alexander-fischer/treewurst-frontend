import React, { Component } from "react"
import { Map, TileLayer, GeoJSON } from "react-leaflet"
import { geoJSON } from "../src/geojson"

interface ITreeMapProps {
    width: string
    height: string
}

export default class TreeMap extends Component<ITreeMapProps, {}> {
    state = {
        center: {
            lat: 51.0997605,
            lng: 13.8213171,
        },
        zoom: 12,
    }

    myStyle = {
        "color": "red",
        "weight": 5,
        "opacity": 0.65
    }

    render() {
        const position = [this.state.center.lat, this.state.center.lng]
        const { width, height } = this.props

        return (
            <div className="map-root">
                <Map center={position} zoom={this.state.zoom} style={{ height, width }}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <GeoJSON data={geoJSON} style={this.myStyle} />
                </Map>
                <style jsx>{`
                    .map-root {
                        height: 100%;
                    }
    
                    .leaflet-container {
                        height: 400px !important;
                        width: 80%;
                        margin: 0 auto;
                    }
            `}</style>
            </div>
        );
    }
}
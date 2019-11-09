import React, { Component } from "react"
import { Map, TileLayer, GeoJSON, Popup, WMSTileLayer } from "react-leaflet"
import { geoJSON } from "../src/geojson"

interface ITreeMapProps {
    width: string
    height: string
}

const geoJSONStyle = {
    "color": "red",
    "weight": 5,
    "opacity": 0.65
}

export default class TreeMap extends Component<ITreeMapProps, {}> {
    state = {
        center: {
            lat: 51.0997605,
            lng: 13.8213171,
        },
        zoom: 13,
        selectedLayer: null
    }

    render() {
        const position = [this.state.center.lat, this.state.center.lng]
        const { width, height } = this.props
        const { selectedLayer } = this.state

        let popup = null
        if (selectedLayer) {
            popup = <Popup
                position={selectedLayer.position}>A pretty CSS3 popup.</Popup>
        }

        return (
            <div className="map-root">
                <Map center={position} zoom={this.state.zoom} style={{ height, width }}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <WMSTileLayer
                        layers="L793"
                        url="https://kommisdd.dresden.de/net3/public/ogc.ashx?NODEID=1040&Service=WMS&Request=GetCapabilities" />

                    <GeoJSON
                        data={geoJSON}
                        style={geoJSONStyle}
                        onEachFeature={this.onFeatureClick} />

                    {popup}
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
        )
    }

    onFeatureClick = (_: any, layer: any) => {
        layer.on("click", (e: any) => {
            const { selectedLayer } = this.state
            if (selectedLayer) {
                this.setState({
                    selectedLayer: null
                })

            } else {
                this.setState({
                    selectedLayer: {
                        position: e.latlng
                    }
                })
            }
        })
    }
}
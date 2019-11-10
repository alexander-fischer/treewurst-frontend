import React, { Component } from "react"
import { Map, TileLayer, Popup } from "react-leaflet"

interface ITreeMapProps {
    width: string
    height: string
    setGeoJSONID: (geoJSONID: string) => void
}

export default class SelectMap extends Component<ITreeMapProps, {}> {
    state = {
        center: {
            lat: 51.0997605,
            lng: 13.8213171,
        },
        zoom: 13,
        latlng: null,
        showPopup: false
    }

    render() {
        const position = [this.state.center.lat, this.state.center.lng]
        const { width, height } = this.props
        const { showPopup, latlng } = this.state

        let popup = null
        if (showPopup) {
            popup = <Popup
                position={latlng}>Informationen zum Waldstück</Popup>
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

                        {popup}

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
        const { showPopup } = this.state

        this.setState({
            latlng,
            showPopup: !showPopup
        })
    }
}
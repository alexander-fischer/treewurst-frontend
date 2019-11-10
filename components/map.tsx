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
        selectedLayer: null,
        checkedFilter: null
    }

    render() {
        const position = [this.state.center.lat, this.state.center.lng]
        const { width, height } = this.props
        const { selectedLayer, checkedFilter } = this.state

        let popup = null
        if (selectedLayer) {
            popup = <Popup
                position={selectedLayer.position}>A pretty CSS3 popup.</Popup>
        }

        console.log(checkedFilter)

        let mapFilter = null
        switch (checkedFilter) {
            case RADIO_MAP.TREE_TYPES:
                mapFilter = <WMSTileLayer
                    layers="L793"
                    url="https://kommisdd.dresden.de/net3/public/ogc.ashx?NODEID=1040&Service=WMS&Request=GetCapabilities" />
                break

            case RADIO_MAP.NDVI:
                mapFilter = <TileLayer
                    attribution="Made by Teewurst"
                    url="/ndvi_tiles/{z}/{x}/{y}.png" />
                break
        }

        return (
            <div className="map-wrapper">
                <div className="flex justify-center mt-4 mb-4">
                    <div className="lg:w-2/3 w-5/6">
                        <label className="text-gray-500 font-bold mr-2">
                            <input className="leading-tight mr-2"
                                type="checkbox"
                                value={RADIO_MAP.TREE_TYPES}
                                onChange={() => this.onCheckboxSelect(RADIO_MAP.TREE_TYPES)}
                                checked={checkedFilter === RADIO_MAP.TREE_TYPES} />
                            <span className="text-sm">
                                Baumarten
                            </span>
                        </label>
                        <label className="text-gray-500 font-bold mr-2">
                            <input className="leading-tight mr-2"
                                type="checkbox"
                                value={RADIO_MAP.NDVI}
                                onChange={() => this.onCheckboxSelect(RADIO_MAP.NDVI)}
                                checked={checkedFilter === RADIO_MAP.NDVI} />
                            <span className="text-sm">
                                NDVI
                            </span>
                        </label>
                    </div>
                </div>
                <div className="map-root">
                    <Map center={position} zoom={this.state.zoom} style={{ height, width }}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                        {mapFilter}

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
                            width: 100%;
                            margin: 0 auto;
                        }
                    `}</style>
                </div>
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

    onCheckboxSelect = (e: any) => {
        const newCheckedFilter = e === this.state.checkedFilter ? null : e
        this.setState({ checkedFilter: newCheckedFilter })
    }
}

enum RADIO_MAP {
    TREE_TYPES = "TREE_TYPES",
    NDVI = "NDVI"
}

/*

<WMSTileLayer
    layers="L793"
    url="https://kommisdd.dresden.de/net3/public/ogc.ashx?NODEID=1040&Service=WMS&Request=GetCapabilities" />


*/
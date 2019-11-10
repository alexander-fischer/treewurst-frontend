import axios from "axios"

const apiAxios = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://treewurst.now.sh",
    timeout: 30000,
})

export const getGeoJSON = async (lat: number, lng: number) => {
    try {
        const geoJSONRes = await apiAxios.get(`/api/geojson?lat=${lat}&lng=${lng}`)
        const geoJSONData = geoJSONRes.data
        return geoJSONData

    } catch (e) {
        console.error(e)
        return null
    }
}
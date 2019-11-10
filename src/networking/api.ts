import axios from "axios"

const apiAxios = axios.create({
    baseURL: "",
    timeout: 30000,
})

export const getGeoJSON = async (lat: number, lng: number) => {
    try {
        const geoJSONRes = await apiAxios.get(`/geojson?lat=${lat}&lng=${lng}`)
        const geoJSONData = geoJSONRes.data
        return geoJSONData

    } catch (e) {
        console.error(e)
        return null
    }
}
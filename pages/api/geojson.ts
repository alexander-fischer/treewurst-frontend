import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

const apiAxios = axios.create({
    baseURL: "http://51.144.225.63:4000",
    timeout: 30000,
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { lat, lng } = req.query
    let geoJSONData = null
    try {
        const geoJSONRes = await apiAxios.get(`/geojson?lat=${lat}&lng=${lng}`)
        geoJSONData = geoJSONRes.data

    } catch (e) {
        console.error(e)
        res.status(400).send("")
        return
    }

    res.status(200).send(geoJSONData)
}
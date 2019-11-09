import dynamic from "next/dynamic"
import Meta from "../components/meta"
const Map = dynamic(
    () => import("../components/map"),
    { ssr: false }
)

const RangerView = () => {
    return (
        <div>
            <Meta
                title="Förster" />

            <Map
                width="100%"
                height="500px" />
        </div>
    )
}

export default RangerView
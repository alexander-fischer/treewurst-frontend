import dynamic from "next/dynamic"
import Meta from "../meta"
const Map = dynamic(
    () => import("../map"),
    { ssr: false }
)

const RangerTemplate = () => {
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

export default RangerTemplate
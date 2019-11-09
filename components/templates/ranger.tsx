import dynamic from "next/dynamic"
const Map = dynamic(
    () => import("../map"),
    { ssr: false }
)

const RangerTemplate = () => {
    return (
        <div>
            <div>
                <Map
                    width="100%"
                    height="500px" />
            </div>
        </div>
    )
}

export default RangerTemplate
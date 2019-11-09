import dynamic from "next/dynamic"
const Map = dynamic(
    () => import("../map"),
    { ssr: false }
)

const RangerTemplate = () => {
    return (
        <div>
            <div style={{ marginLeft: "10%", marginRight: "10%" }}>
                <Map
                    width="100%"
                    height="500px" />
            </div>
        </div>
    )
}

export default RangerTemplate
import IssueModel from "../../src/models/issue-model"
import Issues from "../issues"

import dynamic from "next/dynamic"
const Map = dynamic(
    () => import("../map"),
    { ssr: false }
)

interface IRangerTemplateProps {
    issues: IssueModel[]
}

const RangerTemplate = (props: IRangerTemplateProps) => {
    console.log(props.issues)
    return (
        <div>
            <div>
                <Map
                    width="100%"
                    height="500px" />
            </div>
            <Issues />
        </div>
    )
}

export default RangerTemplate
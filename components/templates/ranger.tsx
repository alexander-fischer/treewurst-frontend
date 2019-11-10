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
    return (
        <div>
            <div>
                <Map
                    width="100%"
                    height="500px" />
            </div>
            <div className="flex justify-center mt-4 mb-8">
                <div className="lg:w-1/2 w-5/6 items-center">
                    <Issues
                        issues={props.issues} />
                </div>
            </div>
        </div>
    )
}

export default RangerTemplate
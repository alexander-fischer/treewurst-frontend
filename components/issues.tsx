import { Component } from "react"
import IssueModel, { ISSUE_TYPE } from "../src/models/issue-model"
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

interface IIssuesProps {
    issues: IssueModel[]
}

class Issues extends Component<IIssuesProps, {}> {
    render() {
        console.log(this.props.issues)
        const issues = this.props.issues.map((issue, index) => {
            const lat = issue.latitude.toString().substring(0, 7)
            const lng = issue.longitude.toString().substring(0, 7)

            let type = "unbekannt"
            switch (issue.issueType) {
                case ISSUE_TYPE.ANIMAL:
                    type = "Tier"
                    break

                case ISSUE_TYPE.DAMAGED_TREE:
                    type = "Baum beschädigt"
                    break

                case ISSUE_TYPE.HEALTHY_TREE:
                    type = "Gesunder Baum"
                    break

                case ISSUE_TYPE.MISC:
                    type = "Verschiedenes"
                    break

                case ISSUE_TYPE.TREE_DEAD:
                    type = "Toter Baum"
                    break

                case ISSUE_TYPE.TREE_SICK:
                    type = "Kranker Baum"
                    break

                default:
                    break
            }

            const status = issue.isResolved ?
                "Erledigt" :
                <button onClick={() => this.updateIssue(issue)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Erledigt?
                </button>

            return (
                <tr key={index}>
                    <td className="border px-4 py-2">{issue.description}</td>
                    <td className="border px-4 py-2">{`${lat}, ${lng}`}</td>
                    <td className="border px-4 py-2">{type}</td>
                    <td className="border px-4 py-2">{status}</td>
                </tr>
            )
        })

        return (
            <table className="table-auto" >
                <thead>
                    <tr>
                        <th className="px-4 py-2">Beschreibung</th>
                        <th className="px-4 py-2">Koordinaten</th>
                        <th className="px-4 py-2">Typ</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {issues}
                </tbody>
            </table>
        )
    }

    updateIssue = async (issue: IssueModel) => {
        const db = firebase.firestore()
        await db.collection("issues").doc(issue.id).update({
            issue: issue.id,
            description: issue.description,
            latitude: issue.latitude,
            longitude: issue.longitude,
            issueType: issue.issueType,
            isResolved: true
        })
    }

}

export default Issues
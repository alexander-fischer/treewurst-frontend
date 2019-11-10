import IssueModel from "../src/models/issue-model"

interface IIssuesProps {
    issues: IssueModel[]
}

const Issues = (props: IIssuesProps) => {
    const issues = props.issues.map((issue, index) => {
        return (
            <tr key={index}>
                <td className="border px-4 py-2">{issue.description}</td>
                <td className="border px-4 py-2">{`${issue.latitude}, ${issue.longitude}`}</td>
                <td className="border px-4 py-2">{issue.issueType}</td>
            </tr>
        )
    })

    return (
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Beschreibung</th>
                    <th className="px-4 py-2">Koordinaten</th>
                    <th className="px-4 py-2">Typ</th>
                </tr>
            </thead>
            <tbody>
                {issues}
            </tbody>
        </table>
    )
}

export default Issues
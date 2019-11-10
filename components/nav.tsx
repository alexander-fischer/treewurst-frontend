import React, { Component } from "react"
import RangerTemplate from "./templates/ranger"
import IssueTemplate from "./templates/issue"
import IssueModel from "../src/models/issue-model"

interface INavProps {
    selectTemplate: (template: any) => void
    setIssue: (issue: IssueModel) => void
}

class Nav extends Component<INavProps, {}> {
    render() {
        return (
            <nav>
                <div className="flex justify-center bg-gray-100 p-4 w-full">
                    <div className="flex w-full text-gray-700">
                        <div className="p-2">
                            <a className=""
                                onClick={this.selectIssueTemplate}
                                style={{ cursor: "pointer" }}>Home</a>
                        </div>
                        <span className="p-2" style={{ marginLeft: "auto", marginRight: "5px" }}>
                            <a onClick={this.selectRangerTemplate}
                                style={{ cursor: "pointer" }}>Holger Förster</a>
                        </span>
                        <img src="holger.jpg"
                            style={{ height: "40px", width: "40px", cursor: "pointer", borderRadius: "5px" }}
                            onClick={this.selectRangerTemplate} />
                    </div>
                </div>
            </nav>
        )
    }

    selectRangerTemplate = () => {
        const selectedTemplate = <RangerTemplate />
        this.props.selectTemplate(selectedTemplate)
    }

    selectIssueTemplate = () => {
        const selectedTemplate = <IssueTemplate
            setIssue={this.props.setIssue} />
        this.props.selectTemplate(selectedTemplate)
    }
}

export default Nav
import React, { Component } from "react"
import RangerTemplate from "./templates/ranger"
import IssueTemplate from "./templates/issue"

interface INavProps {
    selectTemplate: (template: any) => void
}

class Nav extends Component<INavProps, {}> {
    render() {
        return (
            <nav>
                <div className="flex">
                    <a onClick={this.selectIssueTemplate}
                        style={{ cursor: "pointer" }}>Home</a>

                    <a onClick={this.selectRangerTemplate}
                        style={{ cursor: "pointer" }}>Förster</a>
                </div>
            </nav>
        )
    }

    selectRangerTemplate = () => {
        const selectedTemplate = <RangerTemplate />
        this.props.selectTemplate(selectedTemplate)
    }

    selectIssueTemplate = () => {
        const selectedTemplate = <IssueTemplate />
        this.props.selectTemplate(selectedTemplate)
    }
}

export default Nav

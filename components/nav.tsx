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
                <div className="flex justify-center bg-gray-100 p-4 w-full">
                    <div className="flex lg:w-1/3 w-5/6 text-gray-700">
                        <div className="p-2">
                            <a className=""
                                onClick={this.selectIssueTemplate}
                                style={{ cursor: "pointer" }}>Home</a>
                        </div>

                        <div className="p-2">
                            <a className=""
                                onClick={this.selectRangerTemplate}
                                style={{ cursor: "pointer" }}>Förster</a>
                        </div>
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
        const selectedTemplate = <IssueTemplate />
        this.props.selectTemplate(selectedTemplate)
    }
}

export default Nav

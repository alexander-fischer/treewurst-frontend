import React, { Component } from "react"
import Nav from "../components/nav"
import Meta from "../components/meta"
import { withRouter } from "next/router"
import { WithRouterProps } from "next/dist/client/with-router"
import IssueTemplate from "../components/templates/issue"

class Index extends Component<WithRouterProps, { selectedTemplate: any }> {

    constructor(props: WithRouterProps) {
        super(props)

        const selectedTemplate = <IssueTemplate />
        this.state = {
            selectedTemplate
        }
    }

    render() {
        const { selectedTemplate } = this.state
        return (
            <div>
                <Meta
                    title="TreeWurst" />
                <Nav
                    selectTemplate={this.selectTemplate} />

                {selectedTemplate}
            </div>
        )
    }

    selectTemplate = (template: any) => {
        this.setState({ selectedTemplate: template })
    }
}

export default withRouter(Index)

import React, { Component } from "react";
import Nav from "../components/nav";
import Meta from "../components/meta";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
import IssueTemplate from "../components/templates/issue";

class Index extends Component<WithRouterProps, { selectedTemplate: any; app: any; issues: any[] }> {
	constructor(props: WithRouterProps) {
		super(props);

		const selectedTemplate = <IssueTemplate />;
		this.state = {
			selectedTemplate,
			app: null,
			issues: [],
		};
	}

	render() {
		const { selectedTemplate, issues } = this.state;
		return (
			<div style={{ color: "#626262" }}>
				<Meta title="TreeWurst" />
				<Nav issues={issues} selectTemplate={this.selectTemplate} />

				{selectedTemplate}
			</div>
		);
	}

	componentDidMount() {
		this.getIssues();
	}

	getIssues = () => {
		const issues = [{ "description": "Baum ist kaputt", "id": "2019-11-10T06:16:15.556Z", "isResolved": true, "issue": "2019-11-10T06:16:15.556Z", "issueType": "DAMAGED_TREE", "latitude": 51.02963758157046, "longitude": 13.738744754694709 }, { "description": "Das ist mal ein sehr gesunder Baum!", "id": "2019-11-10T09:06:56.848Z", "isResolved": true, "issue": "2019-11-10T09:06:56.848Z", "issueType": "HEALTHY_TREE", "latitude": 51.02967422939689, "longitude": 13.738581951416377 }, { "description": "Mein Lieblingsbaum ist leider krank :(", "id": "2019-11-10T10:20:19.314Z", "isResolved": true, "issue": "2019-11-10T10:20:19.314Z", "issueType": "TREE_SICK", "latitude": 51.029638356121545, "longitude": 13.738745106393345 }, { "description": "Eine Teewurst hat mich attackiert!!", "id": "2019-11-10T10:25:10.161Z", "issueType": "MISC", "latitude": 51.02983188383219, "longitude": 13.738948871144228 }, { "description": "Tut mir leid!", "id": "2019-11-10T12:43:46.814Z", "issueType": "DAMAGED_TREE", "latitude": 51.0303567, "longitude": 13.7444765 }, { "description": "TEST", "id": "2019-11-11T14:07:49.158Z", "issueType": "DAMAGED_TREE", "latitude": 51.0560541, "longitude": 13.731939599999999 }]
		this.setState({ issues })
	};

	selectTemplate = (template: any) => {
		this.setState({ selectedTemplate: template });
	};
}

export default withRouter(Index);

import React, { Component } from "react";
import RangerTemplate from "./templates/ranger";
import IssueTemplate from "./templates/issue";
import IssueModel from "../src/models/issue-model";
import WoodList from "./woodList";
import WoodDetailView from "./detailView";
import Wood from "../src/wood";
import AddWoodPage from "./addWood";

interface INavProps {
	selectTemplate: (template: any) => void;
	setIssue: (issue: IssueModel) => void;
	issues: IssueModel[];
}

class Nav extends Component<INavProps, {}> {
	render() {
		return (
			<nav>
				<div className="flex justify-center bg-gray-100 p-4 w-full">
					<div className="flex w-full text-gray-700">
						<div className="p-2">
							<a className="" onClick={this.selectIssueTemplate} style={{ cursor: "pointer" }}>
								Home
							</a>
							<a className="ml-4" onClick={this.selectWoodListTemplate} style={{ cursor: "pointer" }}>
								Wälder
							</a>
						</div>
						<span className="p-2" style={{ marginLeft: "auto", marginRight: "5px" }}>
							<a onClick={this.selectRangerTemplate} style={{ cursor: "pointer" }}>
								Holger Förster
							</a>
						</span>
						<img
							src="holger.jpg"
							style={{ height: "40px", width: "40px", cursor: "pointer", borderRadius: "5px" }}
							onClick={this.selectRangerTemplate}
						/>
					</div>
				</div>
			</nav>
		);
	}

	selectRangerTemplate = () => {
		const selectedTemplate = <RangerTemplate issues={this.props.issues} />;
		this.props.selectTemplate(selectedTemplate);
	};

	selectIssueTemplate = () => {
		const selectedTemplate = <IssueTemplate setIssue={this.props.setIssue} />;
		this.props.selectTemplate(selectedTemplate);
	};

	selectWoodListTemplate = () => {
		const selectedTemplate = (
			<WoodList
				onSelectAdd={() => this.selectAddWoodTemplate()}
				onSelectTile={(item: Wood) => this.selectWoodTileTemplate(item)}
			/>
		);
		this.props.selectTemplate(selectedTemplate);
	};

	selectWoodTileTemplate = (item: Wood) => {
		const selectedTemplate = <WoodDetailView woodItem={item} />;
		this.props.selectTemplate(selectedTemplate);
	};

	selectAddWoodTemplate = () => {
		const selectedTemplate = <AddWoodPage />;
		this.props.selectTemplate(selectedTemplate);
	};
}

export default Nav;

import React, { Component } from "react";
import WoodTile from "./woodTile";
import PageTitle from "./PageTitle";
import CheckBox from "./checkbox";
import CustomButton from "./button";

interface IWoodListProps {}

export default class WoodList extends Component<IWoodListProps, {}> {
	state = {
		items: [
			{
				id: "wood-id1",
				ranger_id: "ranger1",
				name: "Wood1",
				location: "Dresden",
				size_square_meters: 2000000,
				composition: {
					percentage_deciduous: 70,
					percentage_conifer: 30,
					percentage_dead_trees: 0,
				},
			},
			{
				id: "wood-id2",
				ranger_id: "ranger2",
				name: "Wood2",
				location: "Dresden",
				size_square_meters: 2000000,
				composition: {
					percentage_deciduous: 50,
					percentage_conifer: 50,
					percentage_dead_trees: 0,
				},
			},
			{
				id: "wood-id3",
				ranger_id: "ranger3",
				name: "Wood3",
				location: "Dresden",
				size_square_meters: 2000000,
				composition: {
					percentage_deciduous: 45,
					percentage_conifer: 55,
					percentage_dead_trees: 0,
				},
			},
		],
	};

	onCheckBoxStateChanged(filter: string, enabled: boolean) {
		console.log(filter);
		console.log(enabled);
	}

	onAddButtonClick() {}

	render() {
		let counter = 0;
		let list = this.state.items.map(item => {
			counter++;

			return <WoodTile odd={counter} woodItem={item} />;
		});

		return (
			<div className="wood-list-container">
				<PageTitle text="Wälder" />
				<div className="wood-list-filter">
					<CheckBox
						text="Filter 1"
						onCheckedStateChanged={enabled => this.onCheckBoxStateChanged("filter1", enabled)}
					></CheckBox>
					<CheckBox
						text="Filter 2"
						onCheckedStateChanged={enabled => this.onCheckBoxStateChanged("filter2", enabled)}
					></CheckBox>
					<div className="wood-list-add-button">
						<CustomButton onClick={() => this.onAddButtonClick()} text="Wald allokalisieren"></CustomButton>
					</div>
				</div>
				<div className="wood-list">{list}</div>
				<style jsx>{`
					.wood-list-filter {
						position: relative;
						display: flex;
						flex-direction: row;
						align-items: center;
						height: 90px;
					}
					.wood-list-container {
						display: flex;
						justify-content: center;
						flex-direction: column;
						padding: 20px;
						height: 90vh;
						margin: 0;
					}

					.wood-list-add-button {
						position: absolute;
						right: 0px;
					}

					.wood-list {
						height: 100%;
						width: 100%;
						background: #c4c4c4;
						box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
						border-radius: 5px;
						display: flex;
						flex-direction: column;
					}
				`}</style>
			</div>
		);
	}
}

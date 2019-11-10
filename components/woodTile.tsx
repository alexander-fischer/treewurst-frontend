import React, { Component } from "react";
import Wood, { TreeType } from "../src/wood";

interface ICustomButtonProps {
	woodItem: Wood;
	odd: number;
}

function getIconForSpecies(ts: TreeType) {
	return <img style={{ height: "35px", fill: "red" }} src={"/icons/" + ts + ".svg"} />;
}

function createTypesDiversityElement(percentage: number, species: TreeType) {
	return (
		<div>
			<div className="wood-tile-types-container">
				<span className="wood-tile-types-percentage">{percentage}%</span>
				{getIconForSpecies(species)}
			</div>
			<style jsx>{`
				.wood-tile-types-container {
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-left: 10px;
					margin-right: 10px;
				}

				.wood-tile-types-percentage {
					font-size: 24px;
					margin-left: 25px;
					margin-right: 10px;
				}
			`}</style>
		</div>
	);
}

export default class WoodTile extends Component<ICustomButtonProps, {}> {
	state = {};

	render() {
		const { name, location, size_square_meters, composition } = this.props.woodItem;

		let treeDiverList: [number, TreeType][] = [];

		if (composition.percentage_deciduous > 0) {
			treeDiverList.push([composition.percentage_deciduous, "deciduous"]);
		}
		if (composition.percentage_conifer > 0) {
			treeDiverList.push([composition.percentage_conifer, "conifer"]);
		}

		treeDiverList.sort(function(a, b) {
			return a[0] - b[0];
		});

		let renderTypes = treeDiverList.map(element => {
			return createTypesDiversityElement(element[0], element[1]);
		});

		console.log("counter", this.props.odd);

		return (
			<div>
				<div className={"tile-container " + (this.props.odd % 2 === 0 ? "even-element" : "odd-element")}>
					<span className="wood-tile-name">{name}</span>
					<span className="wood-tile-location">{location}</span>
					<span className="wood-tile-size">{size_square_meters}</span>
					<div className="wood-tile-types">{renderTypes}</div>
				</div>
				<style jsx>{`
					.tile-container {
						border: 1px solid #c6c6c6;
						box-sizing: border-box;
						display: flex;
						flex-direction: row;
						height: 70px;
						padding-top: 5px;
						padding-bottom: 5px;
						padding-left: 15px;
						padding-right: 15px;
						overflow: hidden;
						align-items: center;
						position: relative;
						cursor: pointer;
					}

					.even-element {
						background-color: #ebebeb;
					}

					.odd-element {
						background-color: #f6f6f6;
					}

					.wood-tile-name {
						font-size: 24px;
						color: black;
					}
					.wood-tile-location {
						margin-left: 50px;
						margin-right: 50px;
					}

					.wood-tile-size {
					}

					.wood-tile-types {
						position: absolute;
						right: 5px;
						display: flex;
						flex-direction: row;
					}
				`}</style>
			</div>
		);
	}
}

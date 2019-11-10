import React, { Component } from "react";
import PageTitle from "./pageTitle";
import CustomButton from "./button";

interface IAddWoodPageProps {}

export default class AddWoodPage extends Component<IAddWoodPageProps, {}> {
	state = {};

	onClickFinish() {}
	onClickResetSelection() {}

	render() {
		return (
			<div className="add-wood-container">
				<PageTitle text="Wald Allokation" />
				<div className="add-wood-content">
					<div className="add-wood-map"></div>
					<div className="add-wood-sidebar">
						<div className="add-wood-task">
							<span className="add-wood-task-title">1. Auswahl auf Karte</span>
							<span className="add-wood-task-desc">Wählen Sie Ihr Gebiet auf der Karte.</span>
						</div>
						<div className="add-wood-task">
							<span className="add-wood-task-title">2. Name</span>
							<CustomButton
								small
								text="Auswahl zurücksetzen"
								onClick={() => this.onClickResetSelection()}
							/>
							<span className="add-wood-task-desc">Wählen Sie Ihr Gebiet auf der Karte.</span>
						</div>
						<div className="add-wood-task">
							<span className="add-wood-task-title">3. Fertigstellen</span>
						</div>
						<div className="add-wood-add-button">
							<CustomButton text="Fertigstellen" onClick={() => this.onClickFinish()} />
						</div>
					</div>
				</div>
				<style jsx>{`
					.add-wood-container {
						display: flex;
						justify-content: center;
						flex-direction: column;
						padding: 20px;
						height: 90vh;
						margin: 0;
					}
					.add-wood-content {
						display: flex;
						flex-direction: row;
						height: 100%;
						background: #ffffff;
						box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.47);
					}

					.add-wood-map {
						width: 75%;
						height: 100%;
						background-color: black;
					}

					.add-wood-sidebar {
						position: relative;
						display: flex;
						flex-direction: column;
						height: 100%;
						width: 25%;
						padding: 20px;
					}

					.add-wood-task {
						height: 25%;
					}

					.add-wood-task-title {
						font-size: 19px;
						display: flex;
						flex-direction: row;
						margin-top: 7px;
						margin-bottom: 7px;
					}

					.add-wood-task-desc {
						font-size: 15px;
						padding: 10px;
					}

					.add-wood-add-button {
						left: 50%;
						right: 50%;
						bottom: 20px;
					}
				`}</style>
			</div>
		);
	}
}
import React, { Component } from "react";
import Wood from "../src/wood";
import PageTitle from "./pageTitle";

interface IWoodDetailViewProps {
    woodItem: Wood,
}

export default class WoodDetailView extends Component<IWoodDetailViewProps, {}> {
	state = {};

	render() {
		return (
			<div className="wood-details-container">
				<PageTitle text={this.props.woodItem.name} />
                <div>
                    
                </div>
                <div className="wood-details-content">
                    <div className="wood-details-shape"></div>
                    <div className="wood-details-sidebar">
                    </div>
                </div>
                
				<style jsx>{`
					.wood-details-container {
                        position: relative;
						display: flex;
						justify-content: center;
						flex-direction: column;
						padding: 20px;
						height: 90vh;
						margin: 0;
                    }
                    
                    .wood-details-content {
						display: flex;
						flex-direction: row;
						height: 100%;
						background: #ffffff;
						box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.47);
					}

					.wood-details-shape {
						width: 75%;
						height: 100%;
					}

					.wood-details-sidebar {
						position: relative;
						display: flex;
						flex-direction: column;
						height: 100%;
						width: 25%;
						padding: 20px;
					}

				`}</style>
			</div>
		);
	}
}

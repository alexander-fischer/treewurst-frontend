import React, { Component } from "react";
import Wood from "../src/wood";
import PageTitle from "./pageTitle";

interface IWoodDetailViewProps {
	woodItem: Wood,
}

import dynamic from "next/dynamic"
const Chart = dynamic(
	() => import("react-apexcharts"),
	{ ssr: false }
)

export default class WoodDetailView extends Component<IWoodDetailViewProps, {}> {
	state = {
		options: {
			labels: ['Nadelbäume', 'Tothölzer', 'Laubbäume']
		},
		series: [this.props.woodItem.composition.percentage_conifer, this.props.woodItem.composition.percentage_dead_trees, this.props.woodItem.composition.percentage_deciduous],
	};

	render() {
		return (
			<div className="wood-details-container">
				<PageTitle text={this.props.woodItem.name} />
				<div className="c">
					<img src="/icons/map-marker.svg"></img>
				</div>
				<div className="wood-details-content">
					<div className="wood-details-shape">
					</div>
					<div className="wood-details-sidebar">
						<div className="donut">
							<Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
						</div>
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
					
					.c {
						display: flex;
						justify-content: center;
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

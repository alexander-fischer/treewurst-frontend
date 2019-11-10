import React, { Component } from "react";

interface ICustomButtonProps {
	text: string;
	onClick: () => void;
	small?: boolean;
}

export default class CustomButton extends Component<ICustomButtonProps, {}> {
	state = {};

	render() {
		if (this.props.small) {
		}
		return (
			<div>
				<div className={"button-shape " + (this.props.small ? "small" : "large")}>{this.props.text}</div>
				<style jsx>{`
					.button-shape {
						background-color: #ffffff;
						border: 1px solid #c6c6c6;
						box-sizing: border-box;
						box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
						display: flex;
						justify-content: center;
						align-items: center;
						cursor: pointer;
						text-align: center;
						user-select: none;
					}

					.large {
						border-radius: 30px;
						width: 200px;
						font-size: 19px;
						padding: 5px;
						font-weight: 300;
					}

					.small {
						border-radius: 20px;
						width: 170px;
						font-size: 15px;
						padding: 3px;
						font-weight: 200;
					}

					.button-shape:hover {
						background-color: #cccccc;
					}
				`}</style>
			</div>
		);
	}
}

import React, { Component } from "react";

interface IPageTitleProps {
	text: string;
}

export default class PageTitle extends Component<IPageTitleProps, {}> {
	render() {
		return (
			<div>
				<div className="page-title-container">
					<span className="page-title-text">{this.props.text}</span>
				</div>

				<style jsx>{`
					.page-title-container {
						margin-bottom: 20px;
					}
					.page-title-text {
						font-size: 40px;
						font-style: normal;
						font-weight: 100;
					}
				`}</style>
			</div>
		);
	}
}

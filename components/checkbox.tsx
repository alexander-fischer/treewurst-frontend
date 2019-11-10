import React, { Component } from "react";

interface ICheckBoxProps {
	text: string;
	onCheckedStateChanged: (checked: boolean) => void;
}

export default class CheckBox extends Component<ICheckBoxProps, {}> {
	state = {
		enabled: false,
	};

	render() {
		return (
			<label className="md:w-2/3 block text-gray-500 font-bold">
				<input className="mr-2 leading-tight" type="checkbox" />
				<span className="text-sm">{this.props.text}</span>
			</label>
		);
	}
}

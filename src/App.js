import React, { Component } from "react";
import { Blob } from "react-blob";
import "./App.css";

//init date and time variables//
let d, h, m, s, color, blobStyle;

//function to display time
const displayTime = () => {
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();

	//add 0 to hms less than 10
	if (h < 10) {
		h = `0${h}`;
	}
	if (m < 10) {
		m = `0${m}`;
	}
	if (s < 10) {
		s = `0${s}`;
	}

	//set color format
	color = `#${h}${m}${s}`;

	//styles
	blobStyle = {
		color: "white",
		fontSize: "175px",
		backgroundColor: color
	};
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { date: color };
	}

	componentDidMount() {
		setInterval(displayTime(), 1000);
		this.setState({
			date: color
		});

		console.log(this.state.date);
	}

	render() {
		return (
			<div className="App">
				<Blob style={blobStyle} size="5em" textAlign="center">
					<span>{this.state.date}</span>
				</Blob>
			</div>
		);
	}
}

export default App;

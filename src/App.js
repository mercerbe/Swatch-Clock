import React, { Component } from "react";
import { Blob } from "react-blob";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			time: new Date()
		};
	}

	componentDidMount() {
		setInterval(this.update, 1000);
	}

	update = () => {
		this.setState({
			time: new Date()
		});
	};

	render() {
		let h = this.state.time.getHours();
		let m = this.state.time.getMinutes();
		let s = this.state.time.getSeconds();
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
		const color = `#${h}${m}${s}`;

		return (
			<div className="App">
				<Blob className="blob" style={{color: "white", backgroundColor: color}} size="5em" textAlign="center">
					<span>{color}</span>
				</Blob>
			</div>
		);
	}
}

export default App;

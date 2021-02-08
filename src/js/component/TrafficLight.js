import React from "react";

export class TraficcLight extends React.Component {
	constructor() {
		super();
		//aqui van las propiedades del semaforo
		this.state = {
			//este sera el estado inicial
			clicked: "red"
		};
	}

	render() {
		let newRedLightClass = "";
		let newYellowLightClass = "";
		let newGreenLightClass = "";

		if (this.state === "red") {
			newRedLightClass = "light-glow";
		} else if (this.state === "yellow") {
			newYellowLightClass = "light-glow";
		} else if (this.state === "green") {
			newGreenLightClass = "light-glow";
		}

		return (
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="col-lg-2 col-md-6 traffic-light-container mt-5 justify-content-center">
						<div
							className={
								"traffic-light-red mb-1 col-12" +
								" " +
								newRedLightClass
							}
							onClick={() =>
								this.setState({
									clicked: "red"
								})
							}
						/>
						<div
							className={
								"traffic-light-yellow mb-1" +
								" " +
								newYellowLightClass
							}
							onClick={() =>
								this.setState({
									clicked: "yellow"
								})
							}
						/>
						<div
							className={
								"traffic-light-green" + " " + newGreenLightClass
							}
							onClick={() =>
								this.setState({
									clicked: "green"
								})
							}
						/>
					</div>
				</div>
			</div>
		);
	}
}

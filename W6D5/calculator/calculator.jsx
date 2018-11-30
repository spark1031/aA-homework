import React from "react";

class Calculator extends React.Component {
	constructor() {
		super();
		this.state = {
			num1: "",
			num2: "",
			result: 0
		};
		this.setNum1 = this.setNum1.bind(this);
		this.setNum2 = this.setNum2.bind(this);
	}

	setNum1(e) {
		e.preventDefault();
		let num = e.target.value;
		if (num) {
			num = parseInt(num);
		} else {
			num = "";
		}
		this.setState({ num1: num });
	}

	setNum2(e) {
		e.preventDefault();
		let num = e.target.value;
		if (num) {
			num = parseInt(num);
		} else {
			num = "";
		}
		this.setState({ num2: num });
	}

	add(e) {
		e.preventDefault();
		const num = this.state.num1 + this.state.num2;
		this.setState({ result: num });
	}

	subtract(e) {
		e.preventDefault();
		const num = this.state.num1 - this.state.num2;
		this.setState({ result: num });
	}

	multiply(e) {
		e.preventDefault();
		const num = this.state.num1 * this.state.num2;
		this.setState({ result: num });
	}

	divide(e) {
		e.preventDefault();
		const num = this.state.num1 / this.state.num2;
		this.setState({ result: num });
	}

	clear(e) {
		this.setState();
	}

	render() {
		return (
			<div>
				<h1>{this.state.result}</h1>
				<input onChange={this.setNum1} value={this.state.num1} />
				<input onChange={this.setNum2} value={this.state.num2} />
				<button onClick={this.add} />
				<button onClick={this.subtract} />
				<button onClick={this.multiply} />
				<button onClick={this.divide} />

				<button onClick={this.clear} />
			</div>
		);
	}
}

export default Calculator;

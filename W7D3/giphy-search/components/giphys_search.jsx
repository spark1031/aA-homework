import React from "react";

import GiphysIndex from "./giphys_index";

class GiphysSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ""
		};
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({ searchTerm: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.fetchSearchGiphys(this.state.searchTerm);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input
						type="text"
						value={this.state.searchTerm}
						onChange={this.handleChange.bind(this)}
					/>
					<input type="submit" value="Submit" />
				</form>
				<br />
				<GiphysIndex giphys={this.props.giphys} />
			</div>
		);
	}
}

export default GiphysSearch;

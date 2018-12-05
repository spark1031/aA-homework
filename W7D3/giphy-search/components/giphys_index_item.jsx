import React from "react";
import giphysReducer from "../reducers/giphys_reducer";

const GiphysIndexItem = ({ giphy }) => {
	return (
		<iframe
			src={giphy.embed_url}
			width="480"
			height="356"
			frameBorder="0"
			className="giphy-embed"
			allowFullScreen
		/>
	);
};

export default GiphysIndexItem;

import React from "react";

import GiphysIndexItem from "./giphys_index_item";

const GiphysIndex = ({ giphys }) => (
	<div>
		{giphys.map(giphy => {
			return <GiphysIndexItem key={giphy.id} giphy={giphy} />;
		})}
	</div>
);

export default GiphysIndex;

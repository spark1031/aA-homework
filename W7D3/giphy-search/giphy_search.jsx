import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { fetchSearchGiphys } from "./util/api_util";
// import {
// 	receiveSearchGiphys,
// 	fetchSearchGiphys
// } from "./actions/giphy_actions";

document.addEventListener("DOMContentLoaded", () => {
	// console.log("loaded");
	window.fetchSearchGiphys = fetchSearchGiphys;
	const store = configureStore();
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store} />, root);
});

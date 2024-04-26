import React from "react";
import { useSelector } from "react-redux";
import store from "./utils/store";
import { Link } from "react-router-dom";

const SideBar = () => {
	const isMenuOpen = useSelector((store) => store.app.isSideBarOpen);

	return isMenuOpen ? (
		<div className="shadow-lg col-span-1 p-2 mt-24 fixed rounded-lg">
			<ul className="pb-5">
				<li><Link to= "/">Home</Link></li>
				<li>Shorts</li>
				<li>Videos</li>
				<li>Live</li>
			</ul>

			<h1 className="font-bold">Subscriptions</h1>
			<ul>
				<li>Music</li>
				<li>Gaming</li>
				<li>Movies</li>
				<li>Sports</li>
			</ul>
			<h1 className="font-bold pt-5">Watch Later</h1>
			<ul>
				<li>Music</li>
				<li>Gaming</li>
				<li>Movies</li>
				<li>Sports</li>
			</ul>
		</div>
	) : null;
};

export default SideBar;

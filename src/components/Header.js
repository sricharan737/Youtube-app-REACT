import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheResults } from "./utils/searchSlice";

const Header = () => {
	const dispatch = useDispatch();
	const toggleSideMenuBar = () => {
		dispatch(toggleSideBar());
	};
	const [searchQuery, setSearchQuery] = useState("");
	const [searchSuggestions, setSearchSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const searchCache = useSelector(store => store.search);

	/**
	 * This is how our cache looks
	 * 
	 * {
	 * 	"iphone": ["iphone 11", "iphone 14"]
	 * }
	 */

	useEffect(() => {
		const timer = setTimeout(() => { 
			if(searchCache[searchQuery]) {
				setSearchSuggestions(searchCache[searchQuery])
			} else {
				getSearchSuggestions();
			} }, 200);

		// As this is the return function inside the useEffect,when the componenet is unmounted ( change in search bar) the timer clears out
		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	const getSearchSuggestions = async () => {
		const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const data = await response.json();
		setSearchSuggestions(data[1]);

		//update the cache
		dispatch(cacheResults({
			[searchQuery] : data[1]
		}))

		
	};

	console.log(searchSuggestions);

	return (
		<div className="fixed grid grid-flow-col shadow-md w-full z-50 bg-white">
			<div className="flex col-span-1 m-2 p-2">
				<img
					onClick={() => toggleSideMenuBar()}
					className="w-10 h-10 mx-1 cursor-pointer "
					alt="hamburger menu"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
				/>
				<a href="/">
					<img
						className="w-40 h-10 mx-1"
						alt="youtube logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
					/>
				</a>
			</div>

			<div className="col-span-10 m-2 p-2">
				<input
					className="w-1/2 px-4 border border-gray-400 p-2  rounded-s-full"
					type="text"
					value={searchQuery}
					onChange={(e) => {
						setSearchQuery(e.target.value);
					}}
					onFocus={() => setShowSuggestions(true)}
					onBlur={() => setShowSuggestions(false)}
				/>
				<button className="border border-gray-400 rounded-e-full px-5 p-2 bg-gray-300">
					🔍
				</button>
				{showSuggestions && searchQuery.length > 0 && (
					<div className="fixed bg-white py-2 px-5 w-[43rem] rounded-lg shadow-md">
						<ul>
							{searchSuggestions.map((x) => (
								<li key={x} className="py-2 px-3 hover:bg-gray-100">
									{x}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>

			<div className="col-span-1 p-2 m-2">
				<img
					className="w-12  h-12"
					alt="user-icon"
					src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
				/>
			</div>
		</div>
	);
};

export default Header;

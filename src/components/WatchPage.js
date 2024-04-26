import React, { useEffect, useImperativeHandle } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
	const [searchParams] = useSearchParams();

	console.log(searchParams.get("v"));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeSideBar());
	});

	return (
		<div className="col-span-11 m-2 p-2">
			<iframe
				width="1280"
				height="700"
				src={"https://www.youtube.com/embed/" + searchParams.get("v")}
				title="Youtube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen></iframe>
		</div>
	);
};

export default WatchPage;

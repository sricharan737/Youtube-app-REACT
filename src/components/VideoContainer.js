import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		const data = await fetch(YOUTUBE_VIDEOS_API);
		const json = await data.json();
		setVideos(json.items);
	};

	return (
		<div className="flex flex-wrap mt-32 ml-32">
			{videos.map((x) => (
				<Link key={x.id} to={"/watch?v=" + x.id}>
					<VideoCard  info={x} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;

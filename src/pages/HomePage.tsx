import '../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function HomePage() {

	const [expanded, setExpanded] = useState(false);

	const toggleSidebar = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<h1>home</h1>
		</>
	)
}

export default HomePage
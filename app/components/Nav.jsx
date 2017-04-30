import React from 'react';
import { Link, IndexLink } from 'react-router'

const Nav = () => {
	return(
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">
						React Timer Application
					</li>
					<li>
						<IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
					</li>
					<li>
						<Link to="/countdown" activeClassName="active-link">Count-Down</Link>
					</li>
				</ul>
			</div>
			<div className="top-bar-right">
				<ul className="menu">
					<li className="menu-text">
						Created by <a href="http://www.github.com/chrisqtran3" target="_blank">Chris Tran</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;

import React from 'react'
import Nav from 'Nav';

const Main = ({ children }) => {
	return(
		<div>
			<Nav />
			<div className="row">
				<div className="column small-centered medium-6 large-4">
					{children}
				</div>
			</div>
		</div>
	);
}

export default Main;

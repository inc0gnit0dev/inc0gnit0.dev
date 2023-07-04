import React from 'react';
import './index.scss';

import { NavLink } from 'react-router-dom';

interface PageHeaderProps {}

const PageHeader: React.FC<PageHeaderProps> = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-dark">
				<div className="container">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<NavLink className="bttn-nav" to="/about">
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default PageHeader;

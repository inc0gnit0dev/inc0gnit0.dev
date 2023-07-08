import React from 'react';

interface RedirectIconProps {}

const RedirectIcon: React.FC<RedirectIconProps> = (
	props: RedirectIconProps
) => (
	<svg
		className="redirect-icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 200 200"
		fill="currentColor"
		{...props}
	>
		<path d="M94 20.4c0 .3 13.1 13.1 23.7 23.2l5.3 4.9-22 20.8C88.9 80.8 79 90.5 79 90.8c0 .4 6.6 6.9 14.6 14.5l14.5 13.8 19.2-18.3c10.6-10.1 20.7-19.6 22.5-21.3l3.2-2.9 9.3 9c5 4.9 11.6 11.1 14.5 13.9l5.2 4.9V20h-44c-24.2 0-44 .2-44 .4z" />
		<path d="M27.3 36c-2.5 1.1-5.1 3.3-6.3 5.2-1.9 3.2-2 4.9-2 63.8 0 57.6.1 60.6 1.9 63.4 1 1.5 3.2 3.7 4.7 4.7 2.8 1.8 5.9 1.9 67.4 1.9 62.2 0 64.6-.1 67.7-2 6.3-3.8 6.8-6 7.1-31.1l.3-22.6-7.3-6.8-7.3-6.7-.3 27.6-.2 27.6H34V48h58.5l-7.1-7-7.2-7H54.9c-20.9 0-23.9.2-27.6 2z" />
	</svg>
);
export default RedirectIcon;

import React, { useMemo } from 'react';
import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faDiscord,
	faTwitch,
	faSteam,
	faBattleNet,
} from '@fortawesome/free-brands-svg-icons';
import { Tooltip, Typography } from '@mui/material';

interface SocialButtonProps {
	href: string;
	icon: 'GitHub' | 'Discord' | 'Twitch' | 'Steam' | 'Battle.net';
	target?: '_self' | '_blank';
}

const mapStringToIcon = (iconStr: string): IconProp => {
	switch (iconStr) {
		case 'GitHub':
			return faGithub;
		case 'Discord':
			return faDiscord;
		case 'Twitch':
			return faTwitch;
		case 'Steam':
			return faSteam;
		case 'Battle.net':
			return faBattleNet;
	}
	return faLink;
};

const SocialButton: React.FC<SocialButtonProps> = (
	props: SocialButtonProps
) => {
	const icon: IconProp = useMemo(() => {
		return mapStringToIcon(props.icon);
	}, [props.icon]);

	return (
		<Tooltip title={<Typography>{props.icon}</Typography>}>
			<a
				className="bttn-social"
				href={props.href}
				target={props.target}
				rel="noreferrer noopener"
			>
				<FontAwesomeIcon icon={icon} />
			</a>
		</Tooltip>
	);
};

SocialButton.defaultProps = {
	target: '_self',
};

export default SocialButton;

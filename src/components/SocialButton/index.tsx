import React, { useMemo } from 'react';
import './index.scss';

import { Button, Tooltip, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { infoNotificationOptions } from '../../helpers/notificationHelper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faDiscord,
	faTwitch,
	faSteam,
	faBattleNet,
	faXbox,
} from '@fortawesome/free-brands-svg-icons';
import RedirectIcon from '../../icons/RedirectIcon';

export type SocialButtonIcon = 'GitHub' | 'Discord' | 'Twitch' | 'Steam' | 'Battle.net' | 'Xbox';

interface SocialButtonProps {
	icon: SocialButtonIcon;
	to?: string;
	openInNewTab?: boolean;
	copyOnClick?: string;
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
		case 'Xbox':
			return faXbox;
	}
	return faLink;
};

const SocialButton: React.FC<SocialButtonProps> = (
	{ icon, to = '', openInNewTab = false, copyOnClick = '' }: SocialButtonProps
) => {
	const { enqueueSnackbar } = useSnackbar();

	const iconProp: IconProp = useMemo(() => {
		return mapStringToIcon(icon);
	}, [icon]);

	if (copyOnClick) {
		return (
			<div className="social-bttn">
				<Tooltip
					title={<Typography>{copyOnClick}</Typography>}
					placement="top"
				>
					<Button
						className="social-bttn-icon"
						onClick={() => {
							navigator.clipboard.writeText(copyOnClick);
							enqueueSnackbar(
								`'${copyOnClick}' copied to clipboard`,
								infoNotificationOptions
							);
						}}
					>
						<FontAwesomeIcon icon={iconProp} />
					</Button>
				</Tooltip>
				<div>{icon}</div>
			</div>
		);
	}
	return (
		<div className="social-bttn">
			<Button
				className="social-bttn-icon"
				href={to!}
				target={openInNewTab ? '_blank' : '_self'}
				rel="noreferrer noopener"
			>
				<FontAwesomeIcon icon={iconProp} />
			</Button>
			<span className="title">
				<span className="title-text">{icon}</span>
				<RedirectIcon />
			</span>
		</div>
	);
};

export default SocialButton;

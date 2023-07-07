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
	faXbox,
} from '@fortawesome/free-brands-svg-icons';
import { Button, Tooltip, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { infoNotificationOptions } from '../../helpers/notificationHelper';

interface SocialButtonProps {
	icon: 'GitHub' | 'Discord' | 'Twitch' | 'Steam' | 'Battle.net' | 'Xbox';
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
	props: SocialButtonProps
) => {
	const { enqueueSnackbar } = useSnackbar();

	const icon: IconProp = useMemo(() => {
		return mapStringToIcon(props.icon);
	}, [props.icon]);

	if (props.copyOnClick) {
		return (
			<div>
				<Tooltip
					title={<Typography>{props.copyOnClick}</Typography>}
					placement="top"
				>
					<Button
						className="bttn-social"
						onClick={() => {
							navigator.clipboard.writeText(props.copyOnClick!);
							enqueueSnackbar(
								`'${props.copyOnClick}' copied to clipboard`,
								infoNotificationOptions
							);
						}}
					>
						<FontAwesomeIcon icon={icon} />
					</Button>
				</Tooltip>
				<div>{props.icon}</div>
			</div>
		);
	}
	return (
		<div>
			<Button
				className="bttn-social"
				href={props.to!}
				target={props.openInNewTab ? '_blank' : '_self'}
				rel="noreferrer noopener"
			>
				<FontAwesomeIcon icon={icon} />
			</Button>
			<div>{props.icon}</div>
		</div>
	);
};

SocialButton.defaultProps = {
	to: '',
	openInNewTab: false,
	copyOnClick: '',
};

export default SocialButton;

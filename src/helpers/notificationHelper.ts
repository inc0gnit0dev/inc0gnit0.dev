import type { OptionsObject } from "notistack";

export const commonNotificationOptions: OptionsObject = {
	anchorOrigin: {
		horizontal: 'right',
		vertical: 'bottom',
	},
};

export const infoNotificationOptions: OptionsObject = {
	...commonNotificationOptions,
	variant: 'default',
};

import { px } from 'styled-system';

const primary = '#183661';
const secondary = '#0e0e0e';
const tertiary = '#282828';
const quartenary = '#d9e0e6';

const danger = '#FF423D';
const warning = '#FCA321';
const success = '#1AC135';
const info = '#1496E1';

const colors = {
	white: '#FBFBFB',
	background: {
		main: '#f8f8f8',
		light: 'rgba(255,255,255,0.71)',
		dark: '#e1e1e1'
	},
	text: {
		main: '#0e0e0e',
		light: '#66696e',
		dark: '#000000',
	},
	primary: {
		main: primary,
		semilight: '#A5ABBD',
		light: '#717787',
		dark: '#122142',
	},
	secondary: {
		main: secondary,
		semilight: '#F6F9FF',
		light: '#3192FA',
		dark: secondary,
	},
	tertiary: {
		main: tertiary,
		light: '#BA8474',
		semilight: '#FCE6E4',
		dark: '#56423D',
	},
	quartenary: {
		main: quartenary,
		light: '#ebf2f8',
		dark: quartenary,
	},
	danger: {
		main: danger,
		semilight: '#ffa1a1',
		light: '#ffebeb',
		dark: '#dc2823',
	},
	warning: {
		main: warning,
		semilight: '#fdd190',
		light: '#fff5e6',
		dark: '#ee8d00',
	},
	success: {
		main: success,
		semilight: '#8ce09a',
		light: '#f0fdf2',
		dark: '#16a52d',
	},
	info: {
		main: info,
		semilight: '#90cbee',
		light: '#e9f4fb',
		dark: '#1078b4',
	},

	statusIdle: {
		main: '#89c683',
	},
	statusConfiguring: {
		main: '#ffb25e',
	},
	statusUpdating: {
		main: '#75C5F5',
	},
	statusPostProvisioning: {
		main: '#aa96d5',
	},
	statusOffline: {
		main: '#fd7c7c',
	},
	statusInactive: {
		main: '#d3d6db',
	},
	gray: {
		main: '#c6c8c9',
		light: '#f4f4f4',
		dark: '#9f9f9f',
	},
};

const defaultControlHeight = 38;
const emphasizedControlHeight = 48;

export const breakpoints = [576, 768, 992, 1200];

export const space = [
	2,
	6,
	12,
	20,
	defaultControlHeight,
	emphasizedControlHeight,
	128,
];

export const fontSizes = [14, 16, 24, 30, 42, 54, 64, 72, 92];
export const weights = [400, 700];

export const radius = 3;

export const font = `'Cabin', Helvetica, sans-serif`;
export const titleFont = `'Arvo', Futura, sans-serif`;
export const monospace = `'Roboto Mono', 'Courier New', monospace`;


export default {
	breakpoints,
	space,
	fontSizes,
	weights,
	font,
	titleFont,
	monospace,
	colors,
	radius,
	global: {
		font: {
			family: font,
			size: '14px',
			height: 1.5,
		},
		control: {
			disabled: {
				opacity: 0.4,
			},
			border: {
				radius: '4px',
				color: colors.quartenary.main,
			},
		},
		colors: {
			focus: 'none',
			placeholder: colors.secondary.semilight,
		},
		selected: {
			background: colors.primary.main,
		},
		hover: {
			background: {
				color: colors.quartenary.main,
				opacity: 1,
			},
			color: {
				dark: 'inherit',
				light: 'inherit',
			},
		},
		active: {
			background: {
				color: colors.quartenary.main,
				opacity: 1,
			},

			color: {
				dark: 'inherit',
				light: 'inherit',
			},
		},
		drop: {
			border: {
				radius: '4px',
			},
			zIndex: 45,
			// TODO: Border color should be tertiary.main once the TODOs in the Select component are resolved.
			extend: `
				color: ${colors.secondary.main}; border: 1px solid ${colors.quartenary.main};
				animation-duration: 0s;
			`,
		},
		input: {
			weight: 400,
		},
	},
	button: {
		height: '38px',
		font: {
			family: font,
			weight: 400,
		},
		border: {
			width: '1px',
			radius: '20px',
			color: colors.text.main,
		},
		padding: {
			horizontal: '20px',
		},
	},
	radioButton: {
		border: {
			width: '1px',
			color: {
				dark: colors.quartenary.main,
				light: colors.quartenary.main,
			},
		},
		hover: {
			border: {
				color: {
					dark: colors.tertiary.main,
					light: colors.tertiary.main,
				},
			},
		},
		check: {
			color: {
				dark: 'white',
				light: 'white',
			},
		},
		// This actually sets the circle diameter to 6px;
		icon: { size: '12px' },
		gap: '10px',
		size: '20px',
	},
	select: {
		icons: {
			color: colors.secondary.main,
		},
		control: {
			extend: `color: ${colors.secondary.main}`,
		},
	},
	layer: {
		container: {
			zIndex: 40,
		},
		zIndex: 30,
	},
	text: {
		medium: {
			size: '14px',
			height: '1.5',
		},
	},
	tab: {
		extend: `padding: 2px 12px`,
		color: colors.secondary.main,
		margin: 'none',
		border: {
			size: 'xsmall',
			color: colors.quartenary.main,
			active: {
				color: colors.primary.main,
			},
			hover: {
				color: colors.quartenary.main,
			},
		},
		hover: {
			color: colors.primary.dark,
		},
		active: {
			color: colors.primary.main,
		},
	},
	checkBox: {
		size: '20px',
		color: colors.primary.main,
		border: {
			color: {
				dark: colors.quartenary.main,
				light: colors.quartenary.main,
			},
			width: '1px',
		},
		check: {
			radius: '4px',
			thickness: '2px',
		},
		hover: {
			border: {
				color: {
					dark: colors.quartenary.main,
					light: colors.quartenary.main,
				},
			},
		},
		toggle: {
			color: {
				dark: colors.primary.main,
				light: colors.quartenary.main,
			},
			radius: '20px',
			size: '40px',
			knob: {},
		},
	},
	link: {
		hover: {
			color: 'inherit'
		}
	}
};
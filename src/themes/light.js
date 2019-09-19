import { breakpoints,
	space,
	weights,
	fontSizes,
	font,
	titleFont,
	monospace,
	radius, } from './commonProperties'

const colors = {
	white: '#f5f5f5',
	background: {
		main: '#fbfbfb',
		light: 'rgba(255,255,255,0.80)',
		dark: '#e1e1e1'
	},
	text: {
		main: '#0e0e0e',
		light: '#93969b',
		dark: '#000000',
	},
	primary: {
		main: '#183661',
		semilight: '#A5ABBD',
		light: '#717787',
		dark: '#122142',
	},
	secondary: {
		main: '#4391F9',
		semilight: '#baf5fc',
		light: '#65bef9',
		dark: '#3f6ed0'
	},
	tertiary: {
		main: '#252525',
		light: '#BA8474',
		semilight: '#FCE6E4',
		dark: '#2b221f',
	},
	quartenary: {
		main: '#d9e0e6',
		light: '#ebf2f8',
		dark: 'rgba(217,224,230,0.68)',
	},
	danger: {
		main: '#FF423D',
		semilight: '#ffa1a1',
		light: '#ffebeb',
		dark: '#dc2823',
	},
	warning: {
		main: '#FCA321',
		semilight: '#fdd190',
		light: '#fff5e6',
		dark: '#ee8d00',
	},
	success: {
		main: '#1AC135',
		semilight: '#8ce09a',
		light: '#f0fdf2',
		dark: '#16a52d',
	},
	info: {
		main: '#1496E1',
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




export default {
	dark: false,
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
			size: '16px',
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
			zIndex: 8,
		},
		zIndex: 9,
	},
	text: {
		medium: {
			size: '16px',
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
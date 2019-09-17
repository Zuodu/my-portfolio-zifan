import { breakpoints,
	space,
	weights,
	fontSizes,
	font,
	titleFont,
	monospace,
	radius, } from './commonProperties'

const colors = {
	background: {
		main: '#1d2331',
		light: 'rgba(40,46,61,0.71)',
		dark: '#0b1a2a'
	},
	text: {
		main: '#e4e4e4',
		light: '#cdcdcd',
		dark: '#dedede',
	},
	primary: {
		main: '#0a91ab',
		semilight: '#0ac6e1',
		light: '#0aa6c1',
		dark: '#09667b',
	},
	secondary: {
		main: '#ffc045',
		semilight: '#bbdeff',
		light: '#3192FA',
		dark: '#ffc045',
	},
	tertiary: {
		main: '#d7dfe1',
		light: '#ffe27c',
		semilight: '#d7dfe1',
		dark: '#d7dfe1',
	},
	quartenary: {
		main: '#0a91ab',
		light: '#0a91ab',
		dark: '#0a6273',
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
		main: '#222831',
		light: '#303841',
		dark: '#0a0e15',
	},
};

export default {
	dark: true,
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
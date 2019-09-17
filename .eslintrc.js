module.exports = {
	parser: 'babel-eslint',
	extends: ['airbnb', 'prettier'],
	plugins: ['react', 'jsx-a11y', 'import', 'react-hooks'],
	rules: {
		semi: 0,
		'comma-dangle': 0,
		'global-require': 0,
		'no-unused-expressions': 0,
		'react/prop-types': 0,
		'react/destructuring-assignment': 0,
		'react/jsx-max-props-per-line': 0,
		'import/no-unresolved': 0,
		'import/no-webpack-loader-syntax': 0,
		'import/no-named-as-default': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'react/prefer-stateless-function': 0,
		'react/no-danger': 0,
		'no-multi-spaces': 0,
		'no-unused-vars': 0,
		'jsx-a11y/anchor-has-content': 0,
		'jsx-a11y/img-redundant-alt': 0,
		'jsx-a11y/label-has-for': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'arrow-body-style': 0,
		'react/forbid-prop-types': 0,
		'react/require-default-props': 0,
		camelcase: 0,
		indent: [2, 'tab'],
		'no-tabs': 0,
		'react/jsx-indent': 0,
		'no-console': 0,
		'import/prefer-default-export': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'react/no-unescaped-entities': 0,
		'react/jsx-closing-tag-location': 0,
		'react/jsx-filename-extension': 0,
		'function-paren-newline': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-first-prop-new-line': 0,
		'react/jsx-indent-props': 0,
		'import/no-extraneous-dependencies': 0,
		'object-curly-newline': 0,
		'no-restricted-globals': 0,
		'arrow-parens': 0,
		'import/no-useless-path-segments': 0,
		'import/no-cycle': 0,
		'no-mixed-spaces-and-tabs': 0,
		'no-nested-ternary': 0,
		'jsx-a11y/media-has-caption': 0,
		'jsx-a11y/label-has-associated-control': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
	globals: {
		fetch: 1,
		localStorage: 1,
		window: 1,
	},
}

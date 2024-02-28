// https://prettier.io/docs/en/options.html
module.exports = {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	importOrder: ['^@', '^[a-zA-Z0-9-]+', '^[./]'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	jsxSingleQuote: true,
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-organize-imports'
	],
	printWidth: 80,
	quoteProps: 'consistent',
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'all',
	useTabs: true,
};

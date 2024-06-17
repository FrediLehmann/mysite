/** @type {import("prettier").Options} */
const config = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	bracketSameLine: true,
	plugins: ['prettier-plugin-tailwindcss']
};

module.exports = config;

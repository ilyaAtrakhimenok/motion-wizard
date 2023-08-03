module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./'],
				extensions: [
					'.ios.js',
					'.android.js',
					'.ios.jsx',
					'.android.jsx',
					'.js',
					'.jsx',
					'.json',
					'.ts',
					'.tsx',
					'stories.tsx',
					'.stories.tsx',
				],
				alias: {
					'@assets': './assets',
					'@components': './src/components',
					'@screens': './src/screens',
					'@navigation': './src/navigation',
					'@hooks': './src/hooks',
					'@ui': './src/ui',
					'@theme': './src/theme',
					'@types': './src/types',
				},
			},
		],
		'react-native-reanimated/plugin',
	],
};

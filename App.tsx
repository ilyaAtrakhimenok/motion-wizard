import React from 'react';

import { colors } from '@theme/colors';

import { SafeAreaView, StatusBar, Text } from 'react-native';

function App(): JSX.Element {
	return (
		<SafeAreaView>
			<StatusBar backgroundColor={colors.white} />
			<Text>Helllo</Text>
		</SafeAreaView>
	);
}

export default App;

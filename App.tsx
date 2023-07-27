import React from 'react';

import { colors } from '@theme/colors';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from '@navigation/RootStack';

import { StatusBar } from 'react-native';

function App(): JSX.Element {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor={colors.white} barStyle='dark-content' />
			<RootNavigation />
		</NavigationContainer>
	);
}

export default App;

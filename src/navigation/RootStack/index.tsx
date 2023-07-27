import { createStackNavigator } from '@react-navigation/stack';
import { MenuScreen } from '@screens/Menu';
import { SwipesScreen } from '@screens/Swipes';

import { ROOT_STACK_SCREEN_NAMES } from './constants';

import type { RootStackParamsList } from './types';

const RootStack = createStackNavigator<RootStackParamsList>();

export const RootNavigation = () => {
	return (
		<RootStack.Navigator initialRouteName={ROOT_STACK_SCREEN_NAMES.MENU} screenOptions={{ headerShown: false }}>
			<RootStack.Screen name={ROOT_STACK_SCREEN_NAMES.MENU} component={MenuScreen} />
			<RootStack.Screen name={ROOT_STACK_SCREEN_NAMES.SWIPES} component={SwipesScreen} />
		</RootStack.Navigator>
	);
};

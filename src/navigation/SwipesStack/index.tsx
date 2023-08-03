import { createStackNavigator } from '@react-navigation/stack';
import { SwipeScreen } from '@screens/Swipe';

import { SWIPE_STACK_SCREEN_NAMES } from './constants';

import type { SwipeStackParamsList } from './types';

const SwipeStack = createStackNavigator<SwipeStackParamsList>();

export const SwipeNavigation = () => {
	return (
		<SwipeStack.Navigator initialRouteName={SWIPE_STACK_SCREEN_NAMES.SWIPE_UP} screenOptions={{ headerShown: false }}>
			<SwipeStack.Screen name={SWIPE_STACK_SCREEN_NAMES.SWIPE_UP} component={SwipeScreen} />
			<SwipeStack.Screen name={SWIPE_STACK_SCREEN_NAMES.SWIPE_DOWN} component={SwipeScreen} />
			<SwipeStack.Screen name={SWIPE_STACK_SCREEN_NAMES.SWIPE_RIGHT} component={SwipeScreen} />
			<SwipeStack.Screen name={SWIPE_STACK_SCREEN_NAMES.SWIPE_LEFT} component={SwipeScreen} />
		</SwipeStack.Navigator>
	);
};

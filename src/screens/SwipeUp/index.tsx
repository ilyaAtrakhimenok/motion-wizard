import { SwiperHelper } from '@components/SwipeHelper';
import { SwipeDirections } from '@components/SwipeHelper/types';

import { View } from 'react-native';

export const SwipeUpScreen = () => {
	return (
		<View>
			<SwiperHelper direction={SwipeDirections.UP} />
		</View>
	);
};

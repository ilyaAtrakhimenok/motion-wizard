import { useState } from 'react';

import { SwiperHelper } from '@components/SwipeHelper';
import { SwipeDirections } from '@components/SwipeHelper/types';
import { SwipeSheet } from '@components/SwipeSheet';
import { ROOT_STACK_SCREEN_NAMES } from '@navigation/RootStack/constants';

import { swipeDirectionsSequence } from './constants';

import type { SwipeScreenProps } from './types';

export const SwipeScreen = ({ navigation }: SwipeScreenProps) => {
	const [currentSwipeDirection, setCurrentSwipeDirection] = useState<SwipeDirections>(SwipeDirections.UP);

	const handleNextSwipeDirection = () => {
		const indexOfNext = swipeDirectionsSequence.indexOf(currentSwipeDirection) + 1;
		const nextDirection = swipeDirectionsSequence[indexOfNext];
		if (nextDirection !== undefined) {
			setCurrentSwipeDirection(nextDirection);
		} else {
			navigation.navigate(ROOT_STACK_SCREEN_NAMES.MENU);
		}
	};

	return (
		<>
			<SwipeSheet handleNextSwipeDirection={handleNextSwipeDirection} direction={currentSwipeDirection} />
			<SwiperHelper direction={currentSwipeDirection} />
		</>
	);
};

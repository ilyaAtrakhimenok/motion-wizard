import { SwipeDirections } from '@components/SwipeHelper/types';

import type { GestureEventPayload, PanGestureHandlerEventPayload } from 'react-native-gesture-handler';

export const swipeSheetDirections = {
	[SwipeDirections.UP]: {
		type: 'vertical',
		title: 'Swipe Up',
		translateYFinishDirection: -1000,
		translateXFinishDirection: null,
		translateXBoardDirection: null,
	},
	[SwipeDirections.DOWN]: {
		type: 'vertical',
		title: 'Swipe Down',
		translateYFinishDirection: 1000,
		translateXFinishDirection: null,
		translateXBoardDirection: null,
	},
	[SwipeDirections.LEFT]: {
		type: 'horizontal',
		title: 'Swipe Left',
		translateYFinishDirection: null,
		translateXFinishDirection: -500,
		translateXBoardDirection: -150,
	},
	[SwipeDirections.RIGHT]: {
		type: 'horizontal',
		title: 'Swipe Right',
		translateYFinishDirection: null,
		translateXFinishDirection: 500,
		translateXBoardDirection: 150,
	},
} as const;

export const checkSwipe = (direction: SwipeDirections, event: Readonly<GestureEventPayload & PanGestureHandlerEventPayload>) => {
	'worklet';
	switch (direction) {
		case SwipeDirections.UP:
			if (event.translationY < -200) {
				return true;
			} else {
				return false;
			}
		case SwipeDirections.DOWN:
			if (event.translationY > 200) {
				return true;
			} else {
				return false;
			}
		case SwipeDirections.LEFT:
			if (event.translationX < -200) {
				return true;
			} else {
				return false;
			}
		case SwipeDirections.RIGHT:
			if (event.translationX > 200) {
				return true;
			} else {
				return false;
			}
		default:
			return false;
	}
};

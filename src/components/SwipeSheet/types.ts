import type { SwipeDirections } from '@components/SwipeHelper/types';

export type SwipeSheetProps = {
	direction: SwipeDirections;
	handleNextSwipeDirection: () => void;
};

import { SwipeDirections } from '@components/SwipeHelper/types';

const { UP, DOWN, RIGHT, LEFT } = SwipeDirections;

export const swipeDirectionsSequence = [UP, DOWN, RIGHT, LEFT] as const;

import { SwipeDirections } from './types';

export const swiperHelperTranslateYAnimations = {
	[SwipeDirections.UP]: -100,
	[SwipeDirections.DOWN]: 100,
	[SwipeDirections.LEFT]: 0,
	[SwipeDirections.RIGHT]: 0,
} as const;

export const swiperHelperTranslateXAnimations = {
	[SwipeDirections.UP]: 0,
	[SwipeDirections.DOWN]: 0,
	[SwipeDirections.LEFT]: -100,
	[SwipeDirections.RIGHT]: 100,
} as const;

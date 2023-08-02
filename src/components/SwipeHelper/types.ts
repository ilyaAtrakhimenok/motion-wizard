export type SwipeHelperProps = {
	direction: SwipeDirections;
	disabled?: boolean;
};

export enum SwipeDirections {
	UP = 'up',
	DOWN = 'down',
	RIGHT = 'right',
	LEFT = 'left',
}

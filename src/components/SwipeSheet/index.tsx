import { Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import type { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
	runOnJS,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from 'react-native-reanimated';

import { styles } from './styles';
import { checkSwipe, swipeSheetDirections } from './constants';

import type { SwipeSheetProps } from './types';

export const SwipeSheet = ({ direction, handleNextSwipeDirection }: SwipeSheetProps) => {
	const translateY = useSharedValue(0);
	const translateX = useSharedValue(0);

	const { translateYFinishDirection, translateXFinishDirection, type, title } = swipeSheetDirections[direction];

	const resetAnimation = () => {
		'worklet';
		translateX.value = withSpring(0);
		translateY.value = withSpring(0);
	};

	const finishSwipe = () => {
		'worklet';
		if (translateYFinishDirection !== null) {
			translateY.value = withTiming(translateYFinishDirection, {}, (finished) => {
				if (finished === true) {
					resetAnimation();
					runOnJS(handleNextSwipeDirection)();
				}
			});
		}
		if (translateXFinishDirection !== null) {
			translateX.value = withTiming(translateXFinishDirection, {}, (finished) => {
				if (finished === true) {
					resetAnimation();
					runOnJS(handleNextSwipeDirection)();
				}
			});
		}
	};

	const swipeEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
		onActive: (event) => {
			if (type === 'vertical') {
				translateY.value = event.translationY;
			}
			if (type === 'horizontal') {
				translateX.value = event.translationX;
			}
		},
		onEnd: (event) => {
			const isSwiped = checkSwipe(direction, event);
			if (isSwiped) {
				finishSwipe();
			} else {
				resetAnimation();
			}
		},
	});

	const sheetStyle = useAnimatedStyle(
		() => ({
			transform: [{ translateY: translateY.value }, { translateX: translateX.value }],
		}),
		[]
	);

	return (
		<View style={styles.wrapper}>
			<PanGestureHandler onGestureEvent={swipeEvent}>
				<Animated.View style={[styles.sheet, sheetStyle]}></Animated.View>
			</PanGestureHandler>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

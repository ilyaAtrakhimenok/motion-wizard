import { useEffect } from 'react';

import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

import { TAP_ICON_SIZE, WINDOW_HEIGHT, styles } from './styles';
import { swiperHelperTranslateXAnimations, swiperHelperTranslateYAnimations } from './constants';

import type { SwipeHelperProps } from './types';

export const SwiperHelper = ({ direction, disabled }: SwipeHelperProps) => {
	const translateX = useSharedValue(0);
	const translateY = useSharedValue(0);

	const translateAnimatedStyles = useAnimatedStyle(
		() => ({
			transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
		}),
		[]
	);

	const animateSwiperHelper = () => {
		const translateXValueToAnimaate = swiperHelperTranslateXAnimations[direction];
		const translateYValueToAnimaate = swiperHelperTranslateYAnimations[direction];

		translateX.value = withRepeat(withTiming(translateXValueToAnimaate, { duration: 2000 }), -1);
		translateY.value = withRepeat(withTiming(translateYValueToAnimaate, { duration: 2000 }), -1);
	};

	useEffect(() => {
		animateSwiperHelper();
	}, []);

	if (disabled === true) return null;

	return (
		<Animated.Image
			style={[
				styles.tapIcon,
				{
					position: 'absolute',
					alignSelf: 'center',
					marginTop: WINDOW_HEIGHT / 2 - TAP_ICON_SIZE / 2,
				},
				translateAnimatedStyles,
			]}
			source={require('@assets/tap.png')}
		/>
	);
};

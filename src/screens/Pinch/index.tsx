import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { styles } from './styles';

import type { PinchScreenProps } from './types';

export const PinchScreen = ({ navigation }: PinchScreenProps) => {
	const scale = useSharedValue(1);
	const savedScale = useSharedValue(1);

	const rotation = useSharedValue(1);
	const savedRotation = useSharedValue(0);

	const pinchGesture = Gesture.Pinch()
		.onUpdate((e) => {
			scale.value = savedScale.value * e.scale;
		})
		.onEnd(() => {
			savedScale.value = scale.value;
		});

	const pinchStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	return (
		<View style={styles.wrapper}>
			<GestureDetector gesture={pinchGesture}>
				<Animated.View style={[styles.square, pinchStyle]} />
			</GestureDetector>
		</View>
	);
};

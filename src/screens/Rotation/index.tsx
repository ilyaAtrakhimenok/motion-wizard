import { useEffect, useState } from 'react';

import { ROOT_STACK_SCREEN_NAMES } from '@navigation/RootStack/constants';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Text, View } from 'react-native';

import { styles } from './styles';

import type { RotationScreenProps } from './types';

export const RotationScreen = ({ navigation }: RotationScreenProps) => {
	const [rotationCount, setRotationCount] = useState(0);
	const rotation = useSharedValue(0);
	const savedRotation = useSharedValue(0);

	const rotationGesture = Gesture.Rotation()

		.onUpdate((e) => {
			rotation.value = savedRotation.value + e.rotation;

			if (e.rotation + savedRotation.value < -6.3 * (rotationCount + 1)) {
				runOnJS(setRotationCount)(rotationCount + 1);
			}
		})
		.onEnd((e) => {
			savedRotation.value = rotation.value;
		});

	const rotateStyle = useAnimatedStyle(() => ({
		transform: [{ rotateZ: `${(rotation.value / Math.PI) * 180}deg` }],
	}));

	useEffect(() => {
		if (rotationCount >= 3) {
			navigation.navigate(ROOT_STACK_SCREEN_NAMES.MENU);
		}
	}, [rotationCount]);

	return (
		<View style={styles.wrapper}>
			<Text>You need 3 rotations to complete</Text>
			<Text>Current rotations {rotationCount}</Text>
			<GestureDetector gesture={rotationGesture}>
				<Animated.View style={[styles.square, rotateStyle]}></Animated.View>
			</GestureDetector>
		</View>
	);
};

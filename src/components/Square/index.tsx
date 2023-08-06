import type { FC } from 'react';

import Animated from 'react-native-reanimated';
import type { AnimateProps } from 'react-native-reanimated';
import type { ViewProps } from 'react-native';

import { styles } from './styles';

export const Square: FC<AnimateProps<ViewProps>> = ({ style, ...props }) => {
	return <Animated.View style={[styles.square, style]} {...props} />;
};

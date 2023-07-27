import { colors } from '@theme/colors';

import { Text, TouchableHighlight } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

export const AppButtton = ({ children, style, ...props }: TouchableOpacityProps) => {
	return (
		<TouchableHighlight activeOpacity={0.95} underlayColor={colors.aqua} style={[styles.wrapper, style]} {...props}>
			<Text style={styles.text}>{children}</Text>
		</TouchableHighlight>
	);
};

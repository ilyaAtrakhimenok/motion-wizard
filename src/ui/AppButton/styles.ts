import { colors } from '@theme/colors';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	wrapper: {
		justifyContent:'center',
		paddingVertical: 15,
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.black,
		borderRadius: 24,
	},
	text: {
		fontSize: 15,
		fontWeight: '400',
		color: colors.black,
		textAlign: 'center',
	},
});

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 50,
	},
	square: {
		width: 200,
		height: 200,
		backgroundColor: 'blue',
		borderTopWidth: 10,
		borderTopColor: 'red',
	},
});

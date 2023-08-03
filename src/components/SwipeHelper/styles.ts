import { Dimensions, StyleSheet } from 'react-native';

export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;

export const TAP_ICON_SIZE = 100;

export const styles = StyleSheet.create({
	tapIcon: {
		maxWidth: TAP_ICON_SIZE,
		maxHeight: TAP_ICON_SIZE,
	},
});

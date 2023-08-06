import { AppButtton } from '@ui/AppButton';
import { ROOT_STACK_SCREEN_NAMES } from '@navigation/RootStack/constants';

import { ScrollView, View } from 'react-native';

import { styles } from './styles';

import type { MenuScreenProps } from './types';

export const MenuScreen = ({ navigation }: MenuScreenProps) => {
	const handleNavigate = (routeName: ROOT_STACK_SCREEN_NAMES) => () => {
		navigation.navigate(routeName);
	};

	return (
		<ScrollView style={styles.wrapper}>
			<View style={styles.menuWrapper}>
				<AppButtton onPress={handleNavigate(ROOT_STACK_SCREEN_NAMES.SWIPES)}>Swipes</AppButtton>
				<AppButtton onPress={handleNavigate(ROOT_STACK_SCREEN_NAMES.ROTATION)}>Rotation</AppButtton>
				<AppButtton onPress={handleNavigate(ROOT_STACK_SCREEN_NAMES.MENU)}>Menu</AppButtton>
				<AppButtton onPress={handleNavigate(ROOT_STACK_SCREEN_NAMES.MENU)}>Menu</AppButtton>
			</View>
		</ScrollView>
	);
};

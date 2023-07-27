import type { ROOT_STACK_SCREEN_NAMES } from '@navigation/RootStack/constants';
import type { RootStackParamsList } from '@navigation/RootStack/types';
import type { StackScreenProps } from '@react-navigation/stack';

export type MenuScreenProps = StackScreenProps<RootStackParamsList, ROOT_STACK_SCREEN_NAMES.MENU>;

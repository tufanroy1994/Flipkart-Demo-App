import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {
  BottomTabStackParamList,
  RootStackParamList,
} from '../navigation/types/RootStackTypes';

const useAppNavigation = (
  screenName: keyof RootStackParamList | keyof BottomTabStackParamList,
) => {
  type Props = StackScreenProps<
    RootStackParamList & BottomTabStackParamList,
    typeof screenName
  >;
  type ScreenNavigationProp = Props['navigation'];

  const navigation = useNavigation<ScreenNavigationProp>();
  return navigation;
};

export default useAppNavigation;

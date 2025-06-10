import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {
  BottomTabStackParamList,
  RootStackParamList,
  TopTabStackParamList,
} from '../navigation/types/RootStackTypes';

const useAppNavigation = (
  screenName:
    | keyof RootStackParamList
    | keyof BottomTabStackParamList
    | keyof TopTabStackParamList,
) => {
  type Props = StackScreenProps<
    RootStackParamList & BottomTabStackParamList & TopTabStackParamList,
    typeof screenName
  >;
  type ScreenNavigationProp = Props['navigation'];

  const navigation = useNavigation<ScreenNavigationProp>();
  return navigation;
};

export default useAppNavigation;

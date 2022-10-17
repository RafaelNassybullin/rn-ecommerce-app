import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favorite } from "../views/FavoritesScreen";
import { Info } from "../views/InfoScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export const FavoriteNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Favorite"
        component={Favorite}
        options={{ headerShown: false }}
      />
      <Screen
        name="InfoScreen"
        component={Info}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

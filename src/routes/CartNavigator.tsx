import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../views/CartView";
import { Info } from "../views/InfoScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export const CartNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="InfoScreen"
        component={Info}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

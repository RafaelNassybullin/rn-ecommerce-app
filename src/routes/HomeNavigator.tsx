import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../views/HomeScreen";
import { Info } from "../views/InfoScreen";

const { Navigator, Screen } = createNativeStackNavigator();

interface HomeNavigatorProps {}

export const HomeNavigator: FC<HomeNavigatorProps> = () => {
  return (
    <>
      <Navigator>
        <Screen
          name="HomeScreen"
          component={Home}
          options={{ headerShown: false }}
        />
        <Screen
          name="InfoScreen"
          component={Info}
          options={{
            headerShown: true,
          }}
        />
      </Navigator>
    </>
  );
};

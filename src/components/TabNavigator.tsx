import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { cartReselect, favoriteReselect } from "../store";
import { IData } from "../interface";
import { FavoriteNavigator, HomeNavigator, CartNavigator } from "../routes";

interface TabNavigatorProps {}

const Tab = createBottomTabNavigator();

export const TabNavigator: FC<TabNavigatorProps> = () => {
  const favorites: IData[] = useSelector(favoriteReselect);
  const carts: IData[] = useSelector(cartReselect);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "crimson",
          tabBarInactiveTintColor: "black",
          tabBarBadgeStyle: {
            color: "white",
            backgroundColor: "crimson",
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={({ navigation }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
              >
                {focused ? (
                  <Ionicons name={"home"} size={size} color={color} />
                ) : (
                  <Ionicons name={"home-outline"} size={size} color={color} />
                )}
              </TouchableOpacity>
            ),
            headerShown: false,
          })}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoriteNavigator}
          options={({ navigation }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
                {focused ? (
                  <Ionicons name={"heart"} size={size} color={color} />
                ) : (
                  <Ionicons name={"heart-outline"} size={size} color={color} />
                )}
              </TouchableOpacity>
            ),
            tabBarBadge: favorites.length > 0 ? favorites.length : undefined,
          })}
        />
        <Tab.Screen
          name="Carts"
          component={CartNavigator}
          options={({ navigation }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <TouchableOpacity>
                {focused ? (
                  <Ionicons name={"cart"} size={size} color={color} />
                ) : (
                  <Ionicons name={"cart-outline"} size={size} color={color} />
                )}
              </TouchableOpacity>
            ),
            tabBarBadge: carts.length > 0 ? carts.length : undefined,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

import { ScrollView } from "react-native";
import { Container } from "../style";
import { FavoriteItem } from "../components/FavoriteItem/FavoriteItem";
import { useSelector } from "react-redux";
import { cartReselect } from "../store";
import { FC } from "react";
import { Empty } from "../components/Empty";

interface CartProps {
  navigation?: any;
}

export const Cart: FC<CartProps> = ({ navigation }) => {
  const carts = useSelector(cartReselect);

  return (
    <ScrollView>
      <Container>
        {carts.length ? (
          <>
            {carts.map((cart: any) => (
              <FavoriteItem key={cart.id} navigation={navigation} data={cart} />
            ))}
          </>
        ) : (
          <Empty text={"Cart is empty!"} icon={"cart"} iconColor={"#7072d2"} />
        )}
      </Container>
    </ScrollView>
  );
};

import { ScrollView, Text } from "react-native";
import { Container } from "../style";
import { Empty } from "../components/Empty";
import { FavoriteItem } from "../components/FavoriteItem/FavoriteItem";
import { useSelector } from "react-redux";
import { favoriteReselect } from "../store";
import { FC } from "react";

interface FavoriteScreenProps {
  navigation?: any;
}

export const Favorite: FC<FavoriteScreenProps> = ({ navigation }) => {
  const favorites = useSelector(favoriteReselect);

  return (
    <ScrollView>
      <Container>
        {favorites.length ? (
          <>
            {favorites.map((favorite: any) => (
              <FavoriteItem
                key={favorite.id}
                navigation={navigation}
                data={favorite}
              />
            ))}
          </>
        ) : (
          <Empty
            text={"Not favorites yet!"}
            icon={"heart"}
            iconColor={"crimson"}
          />
        )}
      </Container>
    </ScrollView>
  );
};

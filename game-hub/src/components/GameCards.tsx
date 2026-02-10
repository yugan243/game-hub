import { Card, Image, HStack } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconLists from "./PlatformIconLists";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";


interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card.Root width='400px' borderRadius={10} overflow="hidden" maxW="sm">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <HStack justifyContent='space-between'>
            <PlatformIconLists
            platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCards;

import { Card, Image } from "@chakra-ui/react"
import type { Game } from "../hooks/useGames"

interface Props {
    game: Game
}

const GameCards = ( { game } : Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" maxW='sm' >
        <Image src={game.background_image} />
        <Card.Body >
            <Card.Title fontSize='2xl'>{game.name}</Card.Title>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCards
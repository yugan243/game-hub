import usePlatforms from "@/hooks/usePlatforms";
import { Menu, Button, Portal } from "@chakra-ui/react";

const PlatformSelector = () => {
    const { data, error} = usePlatforms();

    if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Platforms
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map(platform => <Menu.Item value={platform.name}>{platform.name}</Menu.Item>)}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;

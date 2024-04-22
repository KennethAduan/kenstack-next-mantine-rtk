"use client";

import {
  Anchor,
  Button,
  Group,
  Title,
  useMantineColorScheme,
  Text,
} from "@mantine/core";
import classes from "../components/ui/Welcome.module.css";
function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColorScheme("light")}>Light</Button>
      <Button onClick={() => setColorScheme("dark")}>Dark</Button>
      <Button onClick={() => setColorScheme("auto")}>Auto</Button>
    </Group>
  );
}

function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This project serves as a starting template for utilizing Mantine with
        Next.js 14 and Redux Toolkit with persistence.{" "}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit page.tsx file.
      </Text>
    </>
  );
}
const Home = () => {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
};

export default Home;

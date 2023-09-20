import { VStack, Text, Button } from "@chakra-ui/react";

interface IEmptyStateProps {
  title: string;
}
export default function EmptyState({ title }: IEmptyStateProps): JSX.Element {
  return (
    <VStack width="100%" gap={6}>
      <Text as="h2" fontWeight="bold" fontSize="lg" textAlign="center">
        {title}
      </Text>
      <Button width="fit-content" as="a" href="/" colorScheme="teal">
        Back to Home
      </Button>
    </VStack>
  );
}

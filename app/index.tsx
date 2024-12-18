import { ExternalLink } from "@tamagui/lucide-icons";
import { PlaceholderImage } from "components/PlaceholderImage";
import React from "react";
import {
  YStack,
  H2,
  XStack,
  Paragraph,
  Anchor,
  Button,
  Form,
  H4,
  Spinner,
  Input,
  H6,
  H5,
} from "tamagui";

export default function IndexScreen() {
  const [status, setStatus] = React.useState<
    "off" | "submitting" | "submitted"
  >("off");

  return (
    <YStack
      f={1}
      ai="center"
      px="$10"
      alignItems="center"
      justifyContent="center"
      bg="$background"
      gap="$8"
    >
      <YStack alignItems="center" gap="$2">
        <PlaceholderImage />
        <H2>Welcome!</H2>
      </YStack>

      <Form
        alignItems="center"
        minWidth={300}
        gap="$2"
        onSubmit={() => console.log("submitting")}
        backgroundColor="$background"
        px="$5"
      >
        <YStack width="100%" gap="$2">
          <Input flex={1} size="$4" placeholder={`Username`} />
          <Input flex={1} size="$4" placeholder={`Password`} />
        </YStack>
        <Form.Trigger asChild disabled={status !== "off"} width="100%">
          <Button
            icon={status === "submitting" ? () => <Spinner /> : undefined}
          >
            Submit
          </Button>
        </Form.Trigger>
        <YStack alignItems="center" pt="$2">
          <Paragraph size="$2" color="gray">
            Terms & Conditions
          </Paragraph>
          <Paragraph size="$2" color="gray">
            Privacy Policy
          </Paragraph>
        </YStack>
      </Form>
    </YStack>
  );
}

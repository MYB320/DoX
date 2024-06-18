import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import {
  XStack,
  YStack,
  Text,
  SizableText,
  Paragraph,
  Avatar,
  ScrollView,
  CardHeader,
  View,
} from 'tamagui';

import { Container, Subtitle, Title } from '../tamagui.config';

export default function Details() {
  return (
    <Container>
      <ScrollView>
        <YStack pb="$2">
          <XStack alignItems="flex-end">
            <Title>Dox</Title>
            <Text color="$blue10">Beta</Text>
          </XStack>
          <Subtitle fontSize={20}>
            Elevate Your Productivity with Effortless Task Management.
          </Subtitle>
        </YStack>
        <YStack paddingVertical="$4" gap="$2">
          <Text fontSize={16} fontWeight="600" color="#38434D">
            Made by:
          </Text>
          <Link href="https://github.com/MYB320" onPress={() => Haptics.selectionAsync()}>
            <View>
              <CardHeader flexDirection="row" alignItems="center" gap="$2">
                <Avatar circular size="$6">
                  <Avatar.Image src="https://avatars.githubusercontent.com/MYB320" />
                  <Avatar.Fallback bc="myb" />
                </Avatar>
                <YStack>
                  <SizableText size="$4">Mohamed Yasser Boureghida</SizableText>
                  <Text fontSize={14} fontWeight="400" color="#38434D">
                    MYB320
                  </Text>
                </YStack>
              </CardHeader>
            </View>
          </Link>
        </YStack>
        <YStack>
          <Text fontSize={16} fontWeight="600" color="#38434D">
            Description:
          </Text>
          <Paragraph color="#38434D">
            "Dox" is a cutting-edge to-do application currently in its beta version. This innovative
            productivity tool is designed to help users efficiently manage their tasks and stay
            organized. With an intuitive user interface and a range of features, Dox allows users to
            create, prioritize, and track their to-do lists seamlessly. The beta version offers a
            sneak peek into the application's capabilities, providing users with an opportunity to
            experience its functionality and contribute feedback for further improvements. Stay
            tuned for the official release to enjoy a streamlined and powerful solution for tackling
            your daily tasks with Dox.
          </Paragraph>
        </YStack>
      </ScrollView>
    </Container>
  );
}

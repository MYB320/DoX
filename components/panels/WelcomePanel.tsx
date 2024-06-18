import { Image, Paragraph, SizableText, Square, View } from 'tamagui';

export default function WelcomePanel() {
  return (
    <View flex={1} justifyContent="center">
      <Square size={110} backgroundColor="black" circular mb="$10" alignSelf="center">
        <Image source={{ uri: require('~/assets/adaptive-icon.png'), width: 150, height: 150 }} />
      </Square>
      <SizableText size="$10" pb="$4">
        Welcome to DoX
      </SizableText>
      <Paragraph size="$5" color="$gray10">
        A sleek to-do application and experience the power of mobile task management with this
        intuitive app.
      </Paragraph>
    </View>
  );
}

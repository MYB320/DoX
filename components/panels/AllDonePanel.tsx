import { Image, Paragraph, SizableText, Square, View } from 'tamagui';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AllDonePanel() {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Square size={110} backgroundColor="black" circular alignSelf="center" mb="$4">
        <MaterialCommunityIcons name="check" size={100} color="white" />
      </Square>
      <SizableText size="$10" pb="$4">
        All Done
      </SizableText>
      <Paragraph size="$5" color="$gray10">
        Have fun, be productive and organized
      </Paragraph>
    </View>
  );
}

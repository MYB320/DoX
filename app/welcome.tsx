import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, SizableText, View, XStack } from 'tamagui';

export default function welcome({ start }: { start: () => void }) {
  const [step, setStep] = useState(1);
  const changePanel = () => {
    if (step < 4) setStep(step + 1);
  };
  return (
    <View flex={1}>
      <View flex={1} justifyContent="center" alignContent="center">
        <SizableText size="$10" textAlign="center">
          Welcome to DoX
        </SizableText>
      </View>
      {step === 4 ? (
        <View p="$4">
          <Button onPress={start}>let's start</Button>
        </View>
      ) : (
        <XStack justifyContent="space-between" alignItems="center" p="$4">
          <XStack gap="$2">
            <Feather name={step === 1 ? 'x-circle' : 'circle'} size={18} />
            <Feather name={step === 2 ? 'x-circle' : 'circle'} size={18} />
            <Feather name={step === 3 ? 'x-circle' : 'circle'} size={18} />
            <Feather name={step === 4 ? 'x-circle' : 'circle'} size={18} />
          </XStack>
          <Button size="$3" onPress={changePanel}>
            Next
          </Button>
        </XStack>
      )}
    </View>
  );
}

import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, XStack } from 'tamagui';
import AllDonePanel from '~/components/panels/AllDonePanel';
import WelcomePanel from '~/components/panels/WelcomePanel';
import { Container } from '~/tamagui.config';

export default function WelcomeScreen({ start }: { start: () => void }) {
  const [stepIndex, setStepIndex] = useState(0);
  const panels = [<WelcomePanel />, <AllDonePanel />];
  const changePanel = () => {
    if (stepIndex < panels.length - 1) setStepIndex(stepIndex + 1);
  };
  return (
    <Container flex={1} p="$4">
      {panels[stepIndex]}
      <XStack marginTop="auto" justifyContent="space-between" alignItems="center">
        <XStack gap="$2">
          {panels.map((_, index) => (
            <Feather
              key={index}
              name={index === stepIndex ? 'x-circle' : 'circle'}
              color={index === stepIndex ? 'black' : 'gray'}
              size={20}
            />
          ))}
        </XStack>
        {stepIndex === panels.length - 1 ? (
          <Button onPress={start}>let's start</Button>
        ) : (
          <Button size="$4" onPress={changePanel}>
            Continue
          </Button>
        )}
      </XStack>
    </Container>
  );
}

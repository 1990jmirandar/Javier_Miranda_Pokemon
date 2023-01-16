import React from 'react';
import { render, RenderResult, screen, within } from '@testing-library/react-native';
import { HomeScreen } from '../../src/screens/HomeScreen';
jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 }
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    SafeAreaView: jest.fn().mockImplementation(({ children }) => children),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  }
});

let component: RenderResult;
describe('<HomeScreen />', () => {
  beforeEach(() => {
    component = render(<HomeScreen />);
  });
  it("render <ActivityIndicator /> when wait for response of api", () => {
    expect(component.getByTestId("loadingListPokemon")).toBeDefined();
  });
});
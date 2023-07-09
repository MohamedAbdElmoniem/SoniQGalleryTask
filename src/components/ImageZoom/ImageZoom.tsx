import * as React from 'react';
import {Animated, Dimensions, ImageStyle, StyleSheet} from 'react-native';
import {
  PinchGestureHandler,
  PinchGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';

export const ImageZoom: React.FC<{
  imageStyle?: ImageStyle;
  imageURI?: string;
}> = ({imageStyle, imageURI}) => {
  const scaleVal = new Animated.Value(1);
  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: {
          scale: scaleVal,
        },
      },
    ],
    {
      useNativeDriver: false,
    },
  );

  const handleReset = (e: PinchGestureHandlerStateChangeEvent) => {
    if (e.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scaleVal, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <PinchGestureHandler
      onGestureEvent={onPinchEvent}
      onHandlerStateChange={handleReset}>
      <Animated.Image
        source={{uri: imageURI}}
        style={{
          ...styles.image,
          ...imageStyle,
          transform: [
            {perspective: 200},
            {
              scale: scaleVal.interpolate({
                inputRange: [0.9, 100],
                outputRange: [0.9, 100],
                extrapolateLeft: 'clamp',
              }),
            },
          ],
          zIndex: scaleVal.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 9999],
          }),
        }}
      />
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
  },
});

export default ImageZoom;

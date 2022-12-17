/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default () => {
  // const ref = useRef(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     ref.current?.play();
  //   }, 2000);
  // }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LottieView
        autoPlay
        // ref={ref}
        style={{
          width: 150,
          // backgroundColor: 'light-blue',
          // height: 200,
        }}
        source={require('../../assets/animations/loading.json')}
      />
    </View>
  );
};
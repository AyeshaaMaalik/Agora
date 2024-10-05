import React, { useState } from 'react';
import { Text, View, LogBox } from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';

LogBox.ignoreLogs([
  '`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method',
  '`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method',
]);

const App = () => {
  const [videoCall, setVideoCall] = useState(true);

  const connectionData = {
    appId: '05d3303bf94942e399a5edb891e2f395',
    channel: 'test',
  };

  const rtcCallbacks = {
    EndCall: () => {
      console.log('Call ended');
      setVideoCall(false);
    },
  };

  console.log("Video Call State:", videoCall);

  return (
    <View style={{ flex: 1 }}>
      {videoCall ? (
        <AgoraUIKit
          connectionData={connectionData}
          rtcCallbacks={rtcCallbacks}
        />
      ) : (
        <Text
          onPress={() => {
            console.log('Start Call Pressed');
            setVideoCall(true);
          }}
          style={{ fontSize: 18, textAlign: 'center', marginTop: 50 }}
        >
          Start Call
        </Text>
      )}
    </View>
  );
};

export default App;

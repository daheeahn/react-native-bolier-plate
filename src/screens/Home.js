import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>hi</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Sub')}>
        <Text>go to sub</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

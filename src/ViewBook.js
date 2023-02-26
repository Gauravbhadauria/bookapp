import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';
const ViewBook = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#1F1F1F'}}>
      <Pdf
        trustAllCerts={false}
        horizontal
        source={{
          uri: 'https://www.africau.edu/images/default/sample.pdf',
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onLoadProgress={() => <ActivityIndicator color={'#000'} size="large" />}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={{flex: 1, backgroundColor: '#1F1F1F'}}
        enablePaging={true}
      />
    </View>
  );
};

export default ViewBook;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActivityIndicator } from 'react-native';
import { navigationRef } from '../../utils/navigation';
import { ActionCreators } from '../../redux/action';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';

const Stack = createStackNavigator();

const AppStack = props => {
  return (
    <Stack.Navigator
      // initialRouteName={'MyAccount'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />

    </Stack.Navigator>
  );
};


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isApiCall: true,
    };
  }

  render() {
    setTimeout(
      () =>
        this.setState({
          isApiCall: false,
        }),
      1300,
    );

    if (this.state.isApiCall) {
      return (
        <ActivityIndicator
          style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
          }}
          color={'red'}
          size="large"
        />
      );
    } else {
      return (
        <NavigationContainer ref={navigationRef}>
          <AppStack />
        </NavigationContainer>
      );
    }
  }
}

const mapStateToProps = ({ authReducer }) => {
  if (authReducer) {
    return {
      authReducer: authReducer,
    };
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

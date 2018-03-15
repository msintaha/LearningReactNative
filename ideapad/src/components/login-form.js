import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import InnerSection from './inner-section';
import { connect } from 'react-redux';
import { authInputChange, login } from '../actions';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';

class LoginForm extends Component {
  login() {
    const { email, password } = this.props;
    this.props.login({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <FormValidationMessage>{this.props.error}</FormValidationMessage>
      );
    }
  }

  showButton() {
    if (this.props.loading) {
      return (
        <View style={styles.spinnerStyle}>
          <ActivityIndicator size={'small'} />
        </View>
      );
    }
    return(
      <Button backgroundColor={'#3BD3D4'} onPress={this.login.bind(this)} title="Login" />
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <InnerSection>
          <FormInput
            value={this.props.email}
            placeholder="Email"
            onChangeText={text => this.props.authInputChange({prop: 'email', value: text})}
          />
        </InnerSection>

        <InnerSection>
          <FormInput
            value={this.props.password}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => this.props.authInputChange({prop: 'password', value: text})}
          />
        </InnerSection>

        {this.renderError()}
        <InnerSection>
          {this.showButton()}
        </InnerSection>
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'white'
  }
};

function mapStateToProps(state) {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { authInputChange, login })(LoginForm);

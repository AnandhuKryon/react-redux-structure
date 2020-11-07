import React, { createContext } from 'react';

export const TokenContext = createContext();

class ContextProvider extends React.Component {
  setValue = ({ token, refreshtoken }) => {
    //this.setState({ value: { token, refreshtoken } });
  };

  setIntialData = () => {
    // if (localStorage.getItem('tokens')) {
    //   return JSON.parse(localStorage.getItem('tokens'));
    // } else {
    //   return {
    //     token: 'inital_token',
    //     refreshtoken: 'initial_refreshtoken',
    //   };
    // }
  };

  state = {
    setValue: this.setValue,
    value: this.setIntialData(),
  };

  componentDidUpdate(_, prevState) {
    // if (JSON.stringify(this.state.value) !== JSON.stringify(prevState)) {
    //   localStorage.setItem('tokens', JSON.stringify(this.state.value))
    // } else {
    //   console.log('false');
    // }
  }

  render() {
    return (
      <TokenContext.Provider value={this.state}>
        {this.props.children}
      </TokenContext.Provider>
    );
  }
}

export default ContextProvider;

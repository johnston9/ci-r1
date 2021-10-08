import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleSignIn = () => {
        this.setState({
          isLoggedIn: true,
        });
        console.log(this);
      };

      handleSignOut = () => {
        this.setState({
          isLoggedIn: false,
        });
        console.log(this);
      };
 
    // single method that handles both SignIn and SignOut
    toggleIsLoggedIn = () => {
        this.setState((prevState) => ({
        isLoggedIn: !prevState.isLoggedIn,
        }));
    };

    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                handleSignIn={this.handleSignIn}
                handleSignOut={this.handleSignOut}
                isLoggedIn={this.state.isLoggedIn} />
            </div>
        )
    }
}

export default MethodsAsPropsParent
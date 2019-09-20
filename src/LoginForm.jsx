import React, { PureComponent, createRef } from 'react';
// import { isServer } from './utilities.js';

export class LoginForm extends PureComponent {
  constructor() {
    super();
    this.loginUser = this.loginUser.bind(this);
    this.userNameRef = createRef(null);
    this.passwordRef = createRef(null);
  }
  loginUser(evt) {
    // const userName = this.userNameRef.current.value;
    // const password = this.passwordRef.current.value;
    window.localStorage.setItem('loginCred', 'blahblah')
    console.log('userloggedin successfully');
    window.location.reload();
    window.scrollTo(0, 0);
    evt.preventDefault();
  }
  render() {
    return (
      <div className='login-form'>
        <div
          style={{
            marginBottom: '10px',
          }}
        >
          Please login to continue...
        </div>
        <form onSubmit={this.loginUser} autoComplete='true'>
          <input
            ref={this.userNameRef}
            type='email'
            placeholder='Enter email'
            className='login-element'
            required
          />
          <input
            ref={this.passwordRef}
            type='password'
            placeholder='Enter Password'
            className='login-element'
            required
          />
          <input
            type='submit'
            className='login-element'
          />
        </form>
      </div>
    )
  }
}

export default LoginForm

import React, { PureComponent, Fragment } from 'react'
import './App.css';
// import { isServer } from './utilities.js';
import imageData from './data.js';
import Bricks from './Brick.jsx';
import LoginForm from './LoginForm.jsx';

export default class App extends PureComponent {
  constructor() {
    super();
    this.logoutUser = this.logoutUser.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
    this.state = {
      isLoggedIn: false,
      colCount: 5
    };
  }

  logoutUser() {
    window.localStorage.removeItem('loginCred');
    window.location.reload();
    window.scrollTo(0, 0);
  }

  resizeHandler() {
    // console.log('resizing...');
    this.setState({
      colCount: Math.floor(window.innerWidth / 320)
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (window.localStorage.getItem('loginCred')) {
      this.setState({
        isLoggedIn: true
      });
    }
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler, { capture: true, passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler, { capture: true, passive: true });
  }

  render() {
    return (
      <div className='main-wrapper'>
        {
          this.state.isLoggedIn
          ? <Fragment>
              <div className='wall' style={{ columnCount: this.state.colCount }}>
              {
                imageData.photos.photo.map(data => {
                  return (
                    <Bricks
                      key={data.id}
                      farm_id={data.farm}
                      server={data.server}
                      photo_id={data.id}
                      secret={data.secret}
                    />
                  );
                })
              }
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  paddingRight: '20px',
                  paddingBottom: '20px'
                }}
              >
                <div
                  style={{
                    width: '100px',
                    color: 'white',
                    backgroundColor: 'red',
                    borderRadius: '5px',
                    height: '40px',
                    lineHeight: '40px',
                    fontSize: '16px',
                    textAlign: 'center'
                  }}
                  onClick={this.logoutUser}
                >
                  Logout
                </div>
              </div>
            </Fragment>
          : <LoginForm/>
        }
      </div>
    );
  }
}

import { useState, useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import Link from 'next/link';
export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password
    },
    onSuccess: () => Router.push('/')
  });

  const onSubmit = async event => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <div className="uk-section  uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport>
    <div className="uk-width-1-1">
      <div className="uk-container">
        <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
          <div className="uk-width-1-1@m">
            <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
              <h3 className="uk-card-title uk-text-center">Complaint Management Portal</h3>
              <form onSubmit={onSubmit}>
                {errors}
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
              
                    <input className="uk-input uk-form-large" type="text" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"/>
                  </div>
                </div>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    
                    <input  value={password}
                      onChange={e => setPassword(e.target.value)} 
                      className="uk-input uk-form-large" type="password" placeholder="Password"/>	
                  </div>
                </div>
                <div className="uk-margin">
                  <button className="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button>
                </div>
                <div className="uk-text-small uk-text-center">
                  Not registered?  <Link href="/auth/signup"><a href="#">Create Customer Account</a></Link> 
                </div>
                <div className="uk-text-small uk-text-center">
                  <Link href="/auth/adminsignup">
                  <a href="#">Create Admin Account </a>
                  </Link>
                </div>
             
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};

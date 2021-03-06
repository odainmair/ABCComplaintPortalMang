import { useState, useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import FormPanel from '../../components/FormPanel';
import registrationAdminModel from '../../models/registrationAdminModel';

export default () => {
  const { doRequest, errors } = useRequest({
    url: '/api/users/signupforadmin',
    method: 'post',
    body: {
      
    },
    onSuccess: () =>  Router.push('/')
  
  });

  const onSubmit = async event => {
    
    let registerModel={}
    console.log("odai"+JSON.stringify(registrationAdminModel))
    registrationAdminModel.map(m =>registerModel[m.name]=m.value);
    let bodyRequest ={email:registerModel["email"],
    name:registerModel["name"],
    phoneNumber:registerModel["phoneNumber"],
    password:registerModel["password"],
    }
  
  

    await doRequest(bodyRequest);
  };

  return (
    <div className="uk-container uk-container-small">
      {errors}
      <FormPanel title="Admin Registration Form" btnName="Register" submitCallback={onSubmit} model={registrationAdminModel} />
    </div>
  );
};

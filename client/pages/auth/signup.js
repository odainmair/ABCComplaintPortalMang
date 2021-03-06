import { useState, useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import FormPanel from '../../components/FormPanel';
import registerFormModel from '../../models/registrationModel';

export default () => {
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      
    },
    onSuccess: () =>  Router.push('/')
  
  });

  const onSubmit = async event => {
    
    let registerModel={}
    console.log("odai"+JSON.stringify(registerFormModel))
    registerFormModel.map(m =>registerModel[m.name]=m.value);
    let bodyRequest ={email:registerModel["email"],
    name:registerModel["name"],
    education:registerModel["education"],
    gender:registerModel["gender"],
    phoneNumber:registerModel["phoneNumber"],
    address:registerModel["address"],
    password:registerModel["password"],
    }
  
  

    await doRequest(bodyRequest);
  };

  return (
    <div className="uk-container uk-container-small">
      {errors}
      <FormPanel title="Customer Registration Form" btnName="Register" submitCallback={onSubmit} model={registerFormModel} />
    </div>
  );
};

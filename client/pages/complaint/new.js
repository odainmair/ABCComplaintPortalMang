import { useState, useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import FormPanel from '../../components/FormPanel';
import newComplaintModel from '../../models/newComplaintModel';

export default () => {
  const { doRequest, errors } = useRequest({
    url: '/api/complaints',
    method: 'post',
    body: {
      
    },
    onSuccess: () =>  Router.push('/')
  
  });

  const onSubmit = async event => {
  
    let complaintModel={}
    console.log("odai"+JSON.stringify(newComplaintModel))
    newComplaintModel.map(m =>complaintModel[m.name]=m.value);
    let bodyRequest ={subject:complaintModel["subject"],
    complainType:complaintModel["complainType"],
    description:complaintModel["description"],
    severity:complaintModel["severity"],
    preferedLanguage:complaintModel["preferedLanguage"],
   
    }
  
  

    await doRequest(bodyRequest);
  };

  return (
    <div className="uk-container uk-container-small">
      {errors}
      <FormPanel title="Create Complaint" btnName="Submit" submitCallback={onSubmit} model={newComplaintModel} />
    </div>
  );
};

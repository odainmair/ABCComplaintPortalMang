import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import updateStatusComplaintModel from '../../models/updateStatusComplaintModel';
import FormPanel from '../../components/FormPanel';
const ComplaintShow = ({ currentUser,complaint }) => {
    const { doRequest, errors } = useRequest({
        url: '/api/complaints/updatestatus/'+complaint.id,
        method: 'put',
        body: {
          
        },
        onSuccess: () =>  Router.push('/')
      
      });

  const onSubmit = async event => {
    
    let statusComplaintModel={}
    console.log("odai"+JSON.stringify(updateStatusComplaintModel))
    updateStatusComplaintModel.map(m =>statusComplaintModel[m.name]=m.value);
    let bodyRequest ={
    status:statusComplaintModel["status"],
    }
  
  

    await doRequest(bodyRequest);
  };
  return (
        <div>
        <div className="uk-section uk-section-small uk-section-muted uk-margin-top">
            <div className="uk-container">

                <h3>Complaint Details</h3>

                <div className="uk-grid">
                    <div className="uk-width-1-2">
                        <p className="uk-comment-meta  uk-text-normal uk-margin-remove"><span className="uk-link-reset" >Subject</span></p>
                        <h5 className="uk-comment-title uk-margin-remove-top"><span className="uk-link-reset" >{complaint.subject}</span></h5>
                    </div>
                    <div className="uk-width-1-2">
                        <p className="uk-comment-meta  uk-text-normal uk-margin-remove"><span className="uk-link-reset" >Status</span></p>
                        <h5 className="uk-comment-title uk-margin-remove-top"><span className="uk-link-reset" >{complaint.status}</span></h5>
                    </div>
                    <div className="uk-width-1-2 uk-margin-top">
                        <p className="uk-comment-meta  uk-text-normal uk-margin-remove"><span className="uk-link-reset" >Complaint ID</span></p>
                        <h5 className="uk-comment-title uk-margin-remove-top"><span className="uk-link-reset" >{complaint.id}</span></h5>
                    </div>
                    <div className="uk-width-1-2 uk-margin-top">
                        <p className="uk-comment-meta  uk-text-normal uk-margin-remove"><span className="uk-link-reset" >Severity</span></p>
                        <h5 className="uk-comment-title uk-margin-remove-top"><span className="uk-link-reset" >{complaint.severity}</span></h5>
                    </div>
                    <div className="uk-width-1-2 uk-margin-top">
                        <p className="uk-comment-meta  uk-text-normal uk-margin-remove"><span className="uk-link-reset" >Complaint Type</span></p>
                        <h5 className="uk-comment-title uk-margin-remove-top"><span className="uk-link-reset" >{complaint.complainType}</span></h5>
                    </div>
                    <div className="uk-width-1-2 uk-margin-top">
                        <p className="uk-comment-meta  uk-text-normal uk-margin-remove"><span className="uk-link-reset" >Opened By</span></p>
                        <h5 className="uk-comment-title uk-margin-remove-top"><span className="uk-link-reset" >{complaint.openedBy}</span></h5>
                    </div>
                    <div className="uk-width-1-1 uk-margin-top">
                        <p className="uk-comment-meta  uk-text-normal uk-margin-remove"><span className="uk-link-reset" >Details</span></p>
                        <h5 className="uk-comment-title uk-margin-remove-top"><span className="uk-link-reset" >{complaint.description}</span></h5>
                    </div>
                    
                </div>
            </div>
        </div> 
          { currentUser.isAdmin && <div className="uk-margin-top uk-container uk-container-small">
                {errors}
                <FormPanel  btnName="Update Status" submitCallback={onSubmit} model={updateStatusComplaintModel} />
           
            </div>}
        </div>
  );
};

ComplaintShow.getInitialProps = async (context, client,currentUser) => {
  const { complaintId } = context.query;
  const { data } = await client.get(`/api/complaints/${complaintId}`);

  return { complaint: data };
};

export default ComplaintShow;
import buildClient from '../api/build-client';
import Signin from "./auth/signin";
import Link from 'next/link';
const LandingPage = ({ currentUser,complaints }) => {
  const complaintList = complaints.map((complaint) => {
    return (
      <tr key={complaint.id}>
      
        <td>        
          <Link href="/complaint/[complaintId]" as={`/complaint/${complaint.id}`}>
            <a>{complaint.subject}</a>
          </Link>
        </td>
        <td>{complaint.complainType}</td>
        <td>
          <Link href="/complaint/[complaintId]" as={`/complaint/${complaint.id}`}>
            <a>{complaint.id}</a>
          </Link>
        </td>
        <td>{complaint.severity}</td>
        <td>{complaint.status}</td>
      </tr>
    );
  });

  return currentUser ? (
    <div>
    <p className="uk-margin-top uk-comment-meta  uk-text-normal">  Hello  {currentUser.fullName} ( {currentUser.email}  )</p>
    <div className="uk-section uk-section-small uk-section-muted uk-margin-top">
      <div className="uk-container">
        <h3>Complaint Details</h3>
        <table className="uk-table uk-table-hover uk-table-divider">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Complaint Type</th>
              <th>Complaint ID</th>
              <th>Serverity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{complaintList}</tbody>
        </table>
      </div>
    </div>
    </div>
  ) : (
    <Signin/>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  if (currentUser){
    const { data } = await client.get('/api/complaints');
    return {complaints:data};
  }
  return {complaints:[]};
};

export default LandingPage;

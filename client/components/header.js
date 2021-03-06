import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
 
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'View All Compliants', href: '/' },
    currentUser && !currentUser.isAdmin && { label: 'Create Complaint', href: '/complaint/new' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' }
  
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={label} className="nav-item">
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">ABC Company <span className="uk-comment-meta  uk-text-normal">(Complaint Management Portal)</span></a>
      </Link>
     
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};

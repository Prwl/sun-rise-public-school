import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/team">Our Team</Link>
        </li>
        {/* <li>
          <Link to="#0">FAQ's</Link>
        </li> */}
        <li>
          <Link to="/links">Important Link's</Link>
        </li>
        <li>
          <Link to="/faq">Write to us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
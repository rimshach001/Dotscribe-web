import React from 'react';
import { Link } from 'react-router-dom';

const ResetFooter = () => (
  <div className="foot grid mt-2">
    <div className="lg:col-7 col-6 last">&copy; 2023, DotScribe</div>
    <div className="lg:col-5 col-6 flex justify-content-start pr-6">
      <Link to="/terms">Terms and Conditions</Link>
      <Link to="/privacy" className="pl-6">
        Privacy
      </Link>
      <Link to="/blog" className="pl-6">
        Blog
      </Link>
      <Link to="/license" className="pl-6">
        License
      </Link>
    </div>
  </div>
);
ResetFooter.displayName = 'ResetFooter';
export default ResetFooter;

import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='bg-configThird text-center text-white' >
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Virgosofts © 2024 ,
        <a className='text-white ml-2' href='https://Virgosofts.com/' style={{ textDecoration: "none" }}>
          All Rights Reserved
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;

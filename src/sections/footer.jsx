import React from 'react'
import 'font-awesome/css/font-awesome.css'
import './footer.css'

const thisYear = new Date().getFullYear()
const Footer = () => (
  <footer id='footer'>
    <div className='footer-top'>
      <div className='container'>
        <div className='row'>
          {/*
          <div className='col-lg-3 col-md-6 footer-info'>
            <h3>Greysphere</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
          </div>

          <div className='col-lg-3 col-md-6 footer-links'>
            <h4>Useful Links</h4>
            <ul>
              <li><i className='ion-ios-arrow-right' /> <a href='#'>Home</a></li>
              <li><i className='ion-ios-arrow-right' /> <a href='#'>About us</a></li>
              <li><i className='ion-ios-arrow-right' /> <a href='#'>Services</a></li>
              <li><i className='ion-ios-arrow-right' /> <a href='#'>Terms of service</a></li>
              <li><i className='ion-ios-arrow-right' /> <a href='#'>Privacy policy</a></li>
            </ul>
          </div>
          */}
          <div className='col-lg-3 col-md-6 footer-contact'>
            <h4>Contact Us</h4>
            <p>
              <strong>Registered office :</strong> <br />11 Victor Road, Teddington, Middlesex. TW11 8SP. <br />
              <strong>Phone:</strong> +44 (0)208 255 4384<br />
              <strong>Email:</strong> hello@greysphere.co.uk<br />
            </p>

            <div className='social-links'>
              <a href='https://twitter.com/greysphere_uk' className='twitter'><i className='fa fa-twitter' /></a>
              <a href='#' className='facebook'><i className='fa fa-facebook' /></a>
              <a href='https://linkedin.com/company/greysphere-ltd' className='linkedin'><i className='fa fa-linkedin' /></a>
            </div>

          </div>
          {/*
          <div className='col-lg-3 col-md-6 footer-newsletter'>
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
            <form action='' method='post'>
              <input type='email' name='email' /><input type='submit' value='Subscribe' />
            </form>
          </div>
          */}
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='copyright'>
        &copy; Copyright  2005 - {thisYear}. All rights reserved.
        <br />
        Greysphere Ltd. Registered in England &amp; Wales No. 5382284. VAT Registration No. 858210131
      </div>
    </div>
  </footer>
)

export default Footer

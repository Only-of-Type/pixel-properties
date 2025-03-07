function Footer() {
  return (
    <footer className='footer-wrapper'>
      <div className='address-content'>
        <img src='/logo.png' alt='Go To Pixel Properties Homepage' />
        <address>
          <p className='display3'>Pixel Properties Office</p>
          <p>123 Starman Lane</p>
          <p>Onett, Eagleland 11111</p>
          <p>
            <span className='bold'>Phone:</span>
            <a href='tel:+555-555-5555'> 555-555-5555</a>
          </p>
          <p>
            <span className='bold'>Toll Free:</span>
            <a href='tel:+800-555-5555'> 800-555-5555</a>
          </p>
        </address>
      </div>
      <div className='footer-links'>
        <div className='external-link-wrapper'>
          <a
            className='external-link'
            href='https://www.nar.realtor'
            title='National Association of Realtors. Opens a new window.'
            target='_blank'
          >
            <img src='/icon-realtor.jpg' alt='' role='presentation' />
          </a>
          <a
            className='external-link'
            href='https://www.hud.gov/program_offices/fair_housing_equal_opp'
            title='US Department of Housing and Urban Development. Opens a new window.'
            target='_blank'
            rel='nofollow'
          >
            <img src='/icon-equal-housing.jpg' alt='' role='presentation' />
          </a>
        </div>
        <nav id='footer-nav'>
          <ul className='nav'>
            <li>
              <a href='#'>Agents Only Login</a>
            </li>
            <li>
              <a href='#'>Disclaimer</a>
            </li>
            <li>
              <a href='#'>Terms of Use</a>
            </li>
            <li>
              <a href='#'>ADA Accessibility</a>
            </li>
          </ul>
        </nav>
        <p className='copyright'>
          &copy;2025 Pixel Properties (Demo Site, not a real company)
        </p>
      </div>
    </footer>
  );
}
export default Footer;

function Nav() {
  return (
    <nav id='main-nav'>
      <a href='javascript:void(0)' title='Go to Delta Media Group Homepage'>
        <img src='/delta-logo-white.png' alt='' role='presentation' />
      </a>
      <button className='mobile-nav'>
        <img src='/icon-hamburger.png' alt='Open Navigation' />
      </button>
      <ul className='main-nav-links nav'>
        <li>
          <a href='javascript:void(0)'>Search Properties</a>
        </li>
        <li>
          <a href='javascript:void(0)'>Buying</a>
        </li>
        <li>
          <a href='javascript:void(0)'>Selling</a>
        </li>
        <li>
          <a href='javascript:void(0)'>Agents</a>
        </li>
        <li>
          <a href='javascript:void(0)'>Contact</a>
        </li>
        <li>
          <a href='javascript:void(0)'>330-555-5555</a>
        </li>
        <li>
          <button
            className='sign-in-button'
            onClick={(e) => e.preventDefault()}
          >
            Sign Up&nbsp;/&nbsp;Login
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;

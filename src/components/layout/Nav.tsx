function Nav() {
  return (
    <nav id='main-nav'>
      <a className='logo' href='#' title='Go to Pixel Properties Homepage'>
        <img src='/logo.svg' alt='' role='presentation' />
      </a>
      <button className='mobile-nav'>
        <img src='/icon-hamburger.png' alt='Open Navigation' />
      </button>
      <ul className='main-nav-links nav'>
        <li>
          <a href='#'>Search Properties</a>
        </li>
        <li>
          <a href='#'>Buying</a>
        </li>
        <li>
          <a href='#'>Selling</a>
        </li>
        <li>
          <a href='#'>Agents</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
        <li>
          <a href='#'>555-555-5555</a>
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

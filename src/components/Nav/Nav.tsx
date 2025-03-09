import Button from '../Button/Button';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav id='main-nav' className={styles.mainNav}>
      <a
        className={styles.logo}
        href='#'
        title='Go to Pixel Properties Homepage'
      >
        <img src='/logo.svg' alt='' role='presentation' />
      </a>
      <button className={styles.mobileNavButton}>
        <img src='/icon-hamburger.png' alt='Open Navigation' />
      </button>
      <menu className={`${styles.mainNavLinks} ${styles.nav}`}>
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
          <Button label='Login' />
        </li>
      </menu>
    </nav>
  );
}
export default Nav;

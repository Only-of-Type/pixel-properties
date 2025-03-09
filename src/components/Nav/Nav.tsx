import Button from '../Button/Button';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav id='main-nav' className={styles.mainNav}>
      <a
        className={`${styles.link} ${styles.logo}`}
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
          <a className={styles.link} href='#'>
            Find a Home
          </a>
        </li>
        <li>
          <a className={styles.link} href='#'>
            Sell a Home
          </a>
        </li>
        <li>
          <a className={styles.link} href='#'>
            Agents
          </a>
        </li>
        <li>
          <a className={styles.link} href='#'>
            About Us
          </a>
        </li>
        <li>
          <a className={styles.link} href='#'>
            Contact
          </a>
        </li>
        <li>
          <Button label='Login' />
        </li>
      </menu>
    </nav>
  );
}
export default Nav;

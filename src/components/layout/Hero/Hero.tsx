import Button from '../../Button/Button';
import Input from '../../Input/Input';
import styles from './Hero.module.css';
import LocationIcon from '../../../assets/location-icon.svg?react';
import SearchIcon from '../../../assets/search-icon.svg?react';

function Hero() {
  return (
    <section id='hero'>
      <div className={styles.container}>
        <p className={`${styles.headline} display1`}>
          {' '}
          Welcome <span className='bold'>Home</span>
        </p>
        <h1 className='display3'>
          Find your next home in the Onett, Eagleland area
        </h1>
        <form action='' name='search-form'>
          <div className={styles.searchContainer}>
            <Input
              label='Enter a City or Zip Code'
              hideLabel
              placeholder='Enter a City or Zip Code'
            />
            <span className={styles.buttonContainer}>
              <Button icon={SearchIcon} buttonIconOnly label='Submit Search' />
            </span>
          </div>
        </form>

        <Button label='Search Near Me' icon={LocationIcon} />
      </div>
    </section>
  );
}
export default Hero;

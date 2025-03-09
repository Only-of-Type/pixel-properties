import styles from './MosaicCTA.module.css';
import MosaicCTABlock from './MosaicCTABlock';
import House from '../../../assets/house-icon.svg?react';
import CheckCircle from '../../../assets/check-circle-icon.svg?react';
import LocationIcon from '../../../assets/location-icon.svg?react';

function MosaicCTA() {
  return (
    <section id='midpage-ctas'>
      <div className={styles.ctaWrapper}>
        <MosaicCTABlock
          link='#'
          icon={House}
          title='Open Houses'
          text='Plan your weekend home hunting by exploring our upcoming open
            houses.'
        />
        <MosaicCTABlock
          link='#'
          icon={CheckCircle}
          title='Create Account'
          text='Sign up and be the first to see the newest listings emailed daily.'
        />
        <MosaicCTABlock
          link='#'
          icon={LocationIcon}
          title='Search by Map'
          text='Find the perfect neighborhood with our advanced map search.'
        />
      </div>
    </section>
  );
}
export default MosaicCTA;

function MidpageCTABlock() {
  return (
    <section id='midpage-ctas'>
      <div className='cta-wrapper'>
        <a className='midpage-cta' href='#;'>
          <img src='/icon-open-house.jpg' alt='' role='presentation' />
          <h2 className='display4'>Open Houses</h2>
          <p>
            Plan your weekend home hunting by exploring our upcoming open
            houses.
          </p>
        </a>
        <a className='midpage-cta' href='#'>
          <img src='/icon-create-account.jpg' alt='' role='presentation' />
          <h2 className='display4'>Create Account</h2>
          <p>
            Sign up and be the first to see the newest listings emailed daily.
          </p>
        </a>
        <a className='midpage-cta' href='#'>
          <img src='/icon-map-search.jpg' alt='' role='presentation' />
          <h2 className='display4'>Search by Map</h2>
          <p>Find the perfect neighborhood with our advanced map search.</p>
        </a>
      </div>
    </section>
  );
}
export default MidpageCTABlock;

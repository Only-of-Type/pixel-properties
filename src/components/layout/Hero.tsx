function Hero() {
  return (
    <section id='hero'>
      <div className='hero'>
        <p className='hero-headline display1'>
          {' '}
          Welcome <span className='bold'>Home</span>
        </p>
        <h1 className='display3'>
          Find your next home in the Onett, Eagleland area
        </h1>
        <form action='' name='search-form'>
          <div className='search-box'>
            <input
              type='search'
              name='search'
              id='search'
              placeholder='Enter a City, School District, or Zip Code'
            />
            <button className='search-button' type='submit'>
              <img src='/search-button.jpg' alt='Submit Search' />
            </button>
          </div>
        </form>
        <button
          className='button-map-search'
          onClick={(e) => e.preventDefault()}
        >
          Search Near Me<span className='search-icon'></span>
        </button>
      </div>
    </section>
  );
}
export default Hero;

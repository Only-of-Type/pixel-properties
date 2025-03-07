import { useState, useEffect } from 'react';
import { formatter } from '../../util/utils';

export interface FeaturedListingType {
  id: string;
  picture: string;
  address: string;
  price: string;
  beds: string;
  baths: string;
}

function FeaturedListings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Bad Response');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error as Error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <h2 className='display2 featured-listings-headline'>Featured Listings</h2>
      <ul className='featured-listings-wrapper'>
        {data
          ? data.map(
              ({
                id,
                picture,
                address,
                price,
                beds,
                baths,
              }: FeaturedListingType) => {
                return (
                  <li key={id} className='featured-listing'>
                    <a
                      className='featured-listing-link'
                      href='#'
                      title='View Details on 1234 Main Street'
                    >
                      <img
                        src={`/` + picture}
                        className='featured-home-image'
                        alt='1234 Main Street Single Family Home: 4 Beds 2 Baths'
                      />
                      <div className='featured-listing-text raleway-semi-bold '>
                        <p>{address}</p>
                        <p>{formatter.format(Number(price))}</p>
                        <p>
                          Beds: {beds} &#8226; Baths: {baths}
                        </p>
                      </div>
                    </a>
                  </li>
                );
              }
            )
          : 'Loading'}
      </ul>
    </section>
  );
}
export default FeaturedListings;

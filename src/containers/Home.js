import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { Helmet } from 'react-helmet';
import axios from "axios"
import ListingForm from '../components/ListingForm';
import Listings from '../components/Listings';
import Pagination from '../components/Pagination';







const Home = () => {
    const [listings, setListings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [listingsPerPage, setlistingsPerPage] = useState(3);
	const [active, setActive] = useState(1);
    const [count, setCount] = useState(0);
   
    const [previous, setPrevious] = useState('');
    const [next, setNext] = useState('');

    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;
    const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing);

    const visitPage = (page) => {
        setCurrentPage(page);
        setActive(page);
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/listings/?page=1`);
                console.log(res.data.results)
                setListings(res.data.results);
                setCount(res.data.count);
                setPrevious(res.data.previous);
                setNext(res.data.next);
                
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    const previous_number = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage-1);
            setActive(currentPage-1);
        }
    };

    const next_number = () => {
        if (currentPage !== Math.ceil(listings.length/3)) {
            setCurrentPage(currentPage+1);
            setActive(currentPage+1);
        }
	};
	
	const displayListings = () => {
        let display = [];
        let result = [];

        listings.map(listing => {
            return display.push(
                <Card
                    title={listing.title}
                    address={listing.address}
                    city={listing.city}
                    state={listing.state}
                    price={listing.price}
                    sale_type={listing.sale_type}
                    home_type={listing.home_type}
                    bedrooms={listing.bedrooms}
                    bathrooms={listing.bathrooms}
                    sqft={listing.sqft}
                    photo_main={listing.photo_main}
                    slug={listing.slug}
                />
            );
        });

        for (let i = 0; i < listings.length; i += 3) {
            result.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {display[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i+1] ? display[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i+2] ? display[i+2] : null}
                    </div>
                </div>
            );
        }

        return result;
    };

    return (                                       
        <main className='about'>
                 
          <header className='about__header'>
          
            <Helmet>
                <title>Realest Estate - Home</title>
                <meta
                    name='description'
                    content='Realest Estate Home Page'
                />
            </Helmet>
		
            <section className='home__form'>
			<div className="home-container">
					{/* <h1> TIM'S REAL ESTATE </h1> */}
				<h4> We’ll help you find a place you’ll love.</h4>
				</div>

                <ListingForm setListings={setListings} />
            </section>
            
            
         </header>
        
         
		    <section className='listings__listings'>
                <Listings listings={currentListings} />
            </section>
            <section className='listings__pagination'>
                <div className='row'>
                    {
                        listings.length !== 0 ? (
                            <Pagination
                                itemsPerPage={listingsPerPage}
                                count={count}
                                visitPage={visitPage}
                                previous={previous_number}
                                next={next_number}
                                active={active}
                                setActive={setActive}
                            />
                        ) : null
                    }
                </div>

            </section>
				
        </main>

    
    );
};


export default Home;








// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
// 	MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";




// export default class Home extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			name: 'Leon'
// 		};
// 	}
// 	render() {
// 		return (
            
// 			<div className="home">
                
// 				<div className="home-container">
// 					<h1> TIM'S REAL ESTATE </h1>
// 					<h4> We’ll help you find a place you’ll love.</h4>
// 					<div className="searchcontainer">
// 						<div className="searchbar">
// 							<label>
// 								Location:
// 								<input className="locationsearch " type="text" name="name" />
// 							</label>
// 						</div>

// 						<div className="searchbar2">
// 							<label>
// 								Price:
// 								<input type="text" name="name" />
// 							</label>

// 							<label>
// 								Key words:
// 								<input type="text" name="name" />
// 							</label>

// 							<a href="/listings" className="register-btn">
// 						SUBMIT
// 					</a>
// 						</div>
						
			
	
// 					</div>
// 				</div>
               
// 			</div>
            
// 		);
// 	}
// }
import React from 'react';
import { Button } from 'react-bootstrap';

const Home: React.FC = () => {

    return (
        <>
            <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
                <div className="d-flex flex-column flex-center text-center p-10">
                    <div className="card card-flush w-lg-650px py-5">
                        <div className="card-body py-15 py-lg-20">
                            <h1 className="fw-bolder fs-2hx text-gray-900 mb-4">In Progress!</h1>
                            <div className="fw-semibold fs-6 text-gray-500 mb-7">
                                This Service Providers page is currently under construction. Please check back later.
                            </div>
                            <div className="mb-3">
                                {/* <img
                                    src="/media/auth/giphy.gif"
                                    className="mw-100 mh-300px theme-light-show"
                                    alt="404 Error Light"
                                />
                                <img
                                    src="/media/auth/giphy.gif"
                                    className="mw-100 mh-300px theme-dark-show"
                                    alt="404 Error Dark"
                                /> */}
                            </div>
                            <div className="mb-0">
                                <Button variant="contained" color="primary" href="/users">
                                    Return Home
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;


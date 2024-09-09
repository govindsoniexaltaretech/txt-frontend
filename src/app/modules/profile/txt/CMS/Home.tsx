import React from 'react';

const Home: React.FC = () => {

    return (
        <>
            <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
                <div className='d-flex flex-column flex-column-fluid'>
                    <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                        <div id="kt_app_toolbar_container" className="app-container d-flex flex-stack container-xxl">
                            <div
                                id="kt_page_title"
                                data-kt-swapper="true"
                                data-kt-swapper-mode="prepend"
                                data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                                className="page-title d-flex flex-wrap me-3 flex-column justify-content-center"
                            >
                                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 my-0 flex-column justify-content-center">
                                    InProgresss
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;


import React from "react";

const SubscriptionDetails = () => {
    return (
        <>
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                <div
                    id="kt_app_toolbar_container"
                    className="app-container d-flex flex-stack container-xxl"
                >
                    <div
                        id="kt_page_title"
                        data-kt-swapper="true"
                        data-kt-swapper-mode="prepend"
                        data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                        className="page-title d-flex flex-wrap me-3 flex-column justify-content-center"
                    >
                        <h1 className="page-heading d-flex text-gray-900 fw-bold fs-2 my-0 flex-column justify-content-center">
                            Current Subscription
                        </h1>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0">
                <div className="card-body p-0">
                    <div className="row mb-7">
                        <label className="col-lg-3 fs-4 fw-bolder text-gray-900">Subscription ID</label>
                        <div className="col-lg-9">
                            <span className="fw-bolder fs-4 text-muted">SUB123456</span>
                        </div>
                    </div>

                    <div className="row mb-7">
                        <label className="col-lg-3 fs-4 fw-bolder text-gray-900">Plan Name</label>
                        <div className="col-lg-9 fv-row">
                            <span className="fw-bold fs-4 text-muted">Buyer Premium Plan (Sale)</span>
                        </div>
                    </div>

                    <div className="row mb-7">
                        <label className="col-lg-3 fs-4 fw-bolder text-gray-900">Start Date</label>
                        <div className="col-lg-9 fv-row">
                            <span className="fw-bold fs-4 text-muted">06-06-2024 18:00</span>
                        </div>
                    </div>

                    <div className="row mb-7">
                        <label className="col-lg-3 fs-4 fw-bolder text-gray-900">Renewal Date</label>
                        <div className="col-lg-9 fv-row">
                            <span className="fw-bold fs-4 text-muted">06-10-2024 18:00</span>
                        </div>
                    </div>

                    <div className="row mb-7">
                        <label className="col-lg-3 fs-4 fw-bolder text-gray-900">Features Included</label>
                        <div className="col-lg-9 fv-row">
                            <span className="fw-bold fs-4 text-muted">Premium support, Access to exclusive listings, Free home inspections</span>
                        </div>
                    </div>

                    <div className="row mb-7">
                        <label className="col-lg-3 fs-4 fw-bolder text-gray-900">Payment Method</label>
                        <div className="col-lg-9 fv-row">
                            <div className="symbol-label">
                                <img src="/media/logos/visa.png" alt="Property" className="w-5" />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-7">
                        <label className="col-lg-3 fs-4 fw-bolder text-gray-900">Subscription Fee</label>
                        <div className="col-lg-9 fv-row">
                            <span className="fw-bold fs-4 text-muted">đ 35.99</span>
                        </div>
                    </div>

                    <div className="row mb-7">
                        <label className="col-lg-3 fs-4 fw-bolder text-gray-900">Status</label>
                        <div className="col-lg-9 fv-row" style={{marginTop: "-.6rem"}}>
                            <a className='btn btn-light btn-light-success btn-sm p-2'>
                                <span className="fw-bold fs-4">None</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscriptionDetails;

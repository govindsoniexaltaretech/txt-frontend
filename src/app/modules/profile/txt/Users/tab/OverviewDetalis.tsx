import React from 'react';

const OverviewDetalis = () => {
  return (
    <>
      <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0">
        <div className="card-body p-0">
          <div className="row mb-7">
            <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Location</label>
            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-muted">Vietnam</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Currency</label>
            <div className="col-lg-8 fv-row">
              <span className="fw-bold fs-6 text-muted">đ VND</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Language</label>
            <div className="col-lg-8 fv-row">
              <span className="fw-bold fs-6 text-muted">English</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Subscription</label>
            <div className="col-lg-8 fv-row">
              <a className='btn btn-light btn-light-warning btn-sm'>
                <span className="fw-bold fs-6">None</span>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items my-2">
          <div className=''>
            <i className="iconend border border-gray-300 border rounded py-3 px-4 me-6 mb-3 bi bi-pencil"></i>
          </div>
          <div className=''>
            <i className="iconend border border-gray-300 border rounded py-3 px-4 me-6 mb-3 bi bi-trash3"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewDetalis;

import React from 'react';

const OverviewDetalis = () => {
  return (
    <>
      <div className="d-flex flex-wrap flex-stack mb-2 card-header flex-nowrap border-0">
        <div className="card-body p-0">
          <div className="row mb-7">
            <label className="col-lg-3 fs-4 fw-bolder text-gray-900">Location</label>
            <div className="col-lg-9">
              <span className="fw-bolder fs-4 text-muted"><img src="/media/logos/vietnam_phn.png" alt="" className="w-3" style={{ paddingRight: '4px', width: "2rem" }} />Vietnam</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-3 fs-4 fw-bolder text-gray-900">Currency</label>
            <div className="col-lg-9 fv-row">
              <span className="fw-bold fs-4 text-muted">₫ VND</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-3 fs-4 fw-bolder text-gray-900">Language</label>
            <div className="col-lg-9 fv-row">
              <span className="fw-bold fs-4 text-muted">English</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-3 fs-4 fw-bolder text-gray-900">Subscription</label>
            <div className="col-lg-9 fv-row" style={{marginTop: "-.6rem"}}>
              <a className='btn btn-light btn-light-warning btn-sm'>
                <span className="fw-bold fs-4">None</span>
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

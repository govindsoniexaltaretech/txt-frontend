import React, { useState } from 'react';

// Define the type for the status
type Status = 'Scheduled' | 'Rescheduled' | 'Completed';

interface Aservice {
    service_id: number;
    service_property_type: string;
    service_typel: string;
    service_provider: string;
    date_time: string;
    status: Status;
}

// Unique data
const aservices: Aservice[] = [
    {
        service_id: 9752,
        service_property_type: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        service_typel: 'Curtain cleaning',
        service_provider: 'Taylor Smith',
        date_time: '06-06-2024 18:00',
        status: 'Scheduled',
    },
    {
        service_id: 9352,
        service_property_type: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        service_typel: 'AC Cleaning',
        service_provider: '',
        date_time: '07-06-2024 14:00',
        status: 'Rescheduled',
    },
    {
        service_id: 3233,
        service_property_type: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        service_typel: 'Curtain Cleaning',
        service_provider: 'Olivia Thomas',
        date_time: '08-06-2024 09:00',
        status: 'Completed',
    },
    {
        service_id: 5666,
        service_property_type: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        service_typel: 'Bathroom Cleaning',
        service_provider: 'Gems Andrew',
        date_time: '09-06-2024 11:00',
        status: 'Scheduled',
    },
    {
        service_id: 7778,
        service_property_type: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        service_typel: 'AC Cleaning',
        service_provider: 'Olivia Thomas',
        date_time: '08-06-2024 09:00',
        status: 'Completed',
    },
    {
        service_id: 6009,
        service_property_type: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        service_typel: 'Plumbing',
        service_provider: 'Gems Andrew',
        date_time: '09-06-2024 11:00',
        status: 'Scheduled',
    }
];

const statusColors: { [key in Status]: string } = {
    Scheduled: '#3E97FF',
    Rescheduled: '#7239EA',
    Completed: '#50CD89',
};

const ServicesList: React.FC = () => {

    const [selectedService, setSelectedService] = useState<number | null>(null);

    const handleRowClickService = (id: number) => {
        setSelectedService(id);
    };

    const handleBackClickService = () => {
        setSelectedService(null);
    };

    return (
        <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
            <div className='d-flex flex-column flex-column-fluid'>
                <div className="card-body py-4">
                    <div className="table-responsive">
                        <table id="kt_table_users" className="table align-middle table-row-dashed fs-6 gy-5">
                            {!selectedService && (
                                <thead>
                                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                        <th className="min-w-125px">Service Id</th>
                                        <th className="min-w-125px">Service</th>
                                        <th className="min-w-125px">Service Type</th>
                                        <th className="min-w-125px">Date & Time Availed</th>
                                        <th className="min-w-125px">Service Provider</th>
                                        <th className="text-end min-w-100px">Status</th>
                                    </tr>
                                </thead>
                            )}

                            <tbody className="text-gray-600 fw-bold">
                                {aservices.map((aservice) => (
                                    <React.Fragment key={aservice.service_id}>
                                        {(selectedService === null || selectedService === aservice.service_id) && (

                                            <tr
                                                onClick={() => handleRowClickService(aservice.service_id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {!selectedService && (
                                                    <>
                                                        <td>{aservice.service_id}</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol overflow-hidden me-3">
                                                                    <a href="#">
                                                                        <div className="symbol-label">
                                                                            <img src={aservice.service_property_type} alt={`Property ${aservice.service_id}`} className="w-100" />
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{aservice.service_typel}</td>
                                                        <td>{aservice.date_time}</td>
                                                        <td>{aservice.service_provider}</td>
                                                        <td className="text-end min-w-100px">
                                                            <div
                                                                className="badge"
                                                                style={{
                                                                    backgroundColor: statusColors[aservice.status as Status] || '#CCCCCC',
                                                                    color: '#fff',
                                                                    padding: '5px 10px',
                                                                    borderRadius: '5px',
                                                                    fontWeight: 'bold'
                                                                }}
                                                            >
                                                                {aservice.status}
                                                            </div>
                                                        </td>
                                                    </>
                                                )}
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {selectedService && (
                        <>
                            {aservices
                                .filter(aservice => aservice.service_id === selectedService)
                                .map(aservice => (
                                    <div key={aservice.service_id}>
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
                                                        Service Details
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0">
                                            <div className="card-body p-0">
                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Service ID</label>
                                                    <div className="col-lg-8">
                                                        <span className="fw-bolder fs-6 text-muted">{aservice.service_id}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Address</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">756 Nguyen Hue Boulevard, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Date & Time</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{aservice.date_time}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Type of Service</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{aservice.service_typel}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Price</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">đ 35.99</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Payment Method</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">Credit Card</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Payment Status</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <a className='btn btn-light btn-light-success btn-sm p-2'>
                                                            <span className="fw-bold fs-6">{aservice.status}</span>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="d-flex align-items my-2">
                                                <div className=''>
                                                    <div className="row mb-7" style={{ justifyContent: 'center' }}>
                                                        <div className="col-lg-8 fv-row">
                                                            <div className="symbol-label">
                                                                <img src={aservice.service_property_type} alt={`Property ${aservice.service_id}`} style={{ width: '100%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ justifyContent: 'center' }}>
                                                        <button onClick={handleBackClickService} className="btn btn-primary" style={{ width: "auto" }}>
                                                            Back to List
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </>
                    )}
                    {!selectedService && (
                        <div className="row">
                            <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                                {/* Add any content if needed here */}
                            </div>
                            <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                                <div id="kt_table_users_paginate">
                                    <ul className="pagination">
                                        <li className="page-item previous">
                                            <a href="#" className="page-link">
                                                <i className="previous"></i>
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a href="#" className="page-link">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">5</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">6</a>
                                        </li>
                                        <li className="page-item next">
                                            <a href="#" className="page-link">
                                                <i className="next"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ServicesList;

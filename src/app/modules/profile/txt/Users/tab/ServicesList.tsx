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
        service_property_type: '/media/logos/service/1.jpg',
        service_typel: 'Curtain cleaning',
        service_provider: 'Taylor Smith',
        date_time: '06-06-2024 18:00',
        status: 'Scheduled',
    },
    {
        service_id: 9352,
        service_property_type: '/media/logos/service/2.png',
        service_typel: 'AC Cleaning',
        service_provider: '',
        date_time: '07-06-2024 14:00',
        status: 'Rescheduled',
    },
    {
        service_id: 3233,
        service_property_type: '/media/logos/service/3.png',
        service_typel: 'Curtain Cleaning',
        service_provider: 'Olivia Thomas',
        date_time: '08-06-2024 09:00',
        status: 'Completed',
    },
    {
        service_id: 5666,
        service_property_type: '/media/logos/service/4.png',
        service_typel: 'Bathroom Cleaning',
        service_provider: 'Gems Andrew',
        date_time: '09-06-2024 11:00',
        status: 'Scheduled',
    },
    {
        service_id: 7778,
        service_property_type: '/media/logos/service/5.png',
        service_typel: 'AC Cleaning',
        service_provider: 'Olivia Thomas',
        date_time: '08-06-2024 09:00',
        status: 'Completed',
    },
    {
        service_id: 6009,
        service_property_type: '/media/logos/service/6.png',
        service_typel: 'Plumbing',
        service_provider: 'Gems Andrew',
        date_time: '09-06-2024 11:00',
        status: 'Scheduled',
    }
];


const getRoleStyles = (status: Status) => {
    switch (status) {
        case 'Scheduled':
            return { color: '#3E97FF', backgroundColor: '#EEF6FF' };
        case 'Completed':
            return { color: '#50CD89', backgroundColor: '#E8FFF3' };
        case 'Rescheduled':
            return { color: '#7239EA', backgroundColor: '#F8F5FF' };
        default:
            return {};
    }
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
                        <table id="kt_table_users" className="table align-middle table-row-dashed fs-5 gy-5">
                            {!selectedService && (
                                <thead>
                                    <tr className="text-start text-muted fw-bolder fs-5 text gs-0">
                                        <th className="min-w-125px">Service Id</th>
                                        <th className="min-w-125px">Service</th>
                                        <th className="min-w-125px">Service Type</th>
                                        <th className="min-w-125px">Date & Time Availed</th>
                                        <th className="min-w-125px">Service Provider</th>
                                        <th className="text-center min-w-100px">Status</th>
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
                                                            <div className="d-flex align-items-center" style={{ justifyContent: "start" }}>
                                                                <div className="symbol overflow-hidden me-3" style={{ borderRadius: "0" }}>
                                                                    <a href="#">
                                                                        <div className="symbol-label" style={{ borderRadius: "0" }}>
                                                                            <img src={aservice.service_property_type} alt={`Property ${aservice.service_id}`} className="w-100" />
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{aservice.service_typel}</td>
                                                        <td>{aservice.date_time}</td>
                                                        <td>{aservice.service_provider}</td>
                                                        <td className="text-center min-w-100px">
                                                            <div
                                                                className="badge"
                                                                style={{
                                                                    ...getRoleStyles(aservice.status),
                                                                    padding: '1rem'
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
                                                    <h1 className="page-heading d-flex text-gray-900 fw-bold fs-1 my-0 flex-column justify-content-center">
                                                        Service Details
                                                    </h1>
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
                                        </div>
                                        <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0">
                                            <div className="card-body p-0">
                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Service ID</label>
                                                    <div className="col-lg-8">
                                                        <span className="fw-bolder fs-2 text-muted">{aservice.service_id}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Address</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-2 text-muted">756 Nguyen Hue Boulevard, Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Date & Time</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-2 text-muted">{aservice.date_time}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Type of Service</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-2 text-muted">{aservice.service_typel}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Price</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-2 text-muted">đ 35.99</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Payment Method</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-2 text-muted">Credit Card</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Payment Status</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <a className='btn btn-light btn-light-success btn-sm p-2' style={{ marginTop: '-0.6rem' }}>
                                                            <span className="fw-bold fs-2">{aservice.status}</span>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="d-flex align-items my-2">
                                                {/* <div className=''>
                                                    <div className="row mb-7" style={{ justifyContent: 'center' }}>
                                                        <div className="col-lg-8 fv-row">
                                                            <div className="symbol-label">
                                                                <img src={aservice.service_property_type} alt={`Property ${aservice.service_id}`} style={{ width: '30rem' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ justifyContent: 'end' }}>
                                                        <button onClick={handleBackClickService} className="btn btn-primary" style={{ width: "auto" }}>
                                                            Back to List
                                                        </button>
                                                    </div>
                                                </div> */}

                                                <div className=''>
                                                    {/* <div className="row mb-7" style={{ justifyContent: 'center' }}>
                                                        <div className="col-lg-8 fv-row">
                                                            <div className="symbol-label">
                                                                <img src={appointment.property_type} alt={`Property ${appointment.id}`} style={{ width: '30rem' }} />
                                                            </div>
                                                        </div>
                                                    </div> */}

                                                    <div className="row mb-7" style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <div
                                                            className="col-lg-1"
                                                            style={{
                                                                cursor: 'pointer',
                                                                fontSize: '2rem',
                                                                border: '1px solid #fff',
                                                                position: 'relative',
                                                                background: '#fff',
                                                                zIndex: 999999,
                                                                boxShadow: '1px 1px 1px 1px #f9f9f9',
                                                                borderRadius: '0 4px 4px 0',
                                                                right: '-8%',
                                                            }}
                                                        >
                                                            {/* Previous Button */}
                                                            <i className="bi bi-arrow-left" style={{ cursor: 'pointer', fontSize: '2rem' }}></i>
                                                        </div>
                                                        <div className="col-lg-10" style={{ overflow: 'hidden'}}>
                                                            <div className="symbol-label" style={{ position: 'relative' }}>
                                                                <img src={aservice.service_property_type} alt={`Property ${aservice.service_id}`} style={{ width: '26rem', display: 'block', margin: '0 auto' }} />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-lg-1"
                                                            style={{
                                                                cursor: 'pointer',
                                                                fontSize: '2rem',
                                                                border: '1px solid #fff',
                                                                position: 'relative',
                                                                background: '#fff',
                                                                zIndex: 999999,
                                                                boxShadow: '1px 1px 1px 1px #f9f9f9',
                                                                borderRadius: '0 4px 4px 0',
                                                                left: '-8%',
                                                            }}
                                                        >
                                                            {/* Next Button */}
                                                            <i className="bi bi-arrow-right" style={{ cursor: 'pointer', fontSize: '2rem' }}></i>
                                                        </div>
                                                    </div>

                                                    {/* Dots below the image */}
                                                    <div className="dots" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                                        <span style={{ height: '10px', width: '10px', backgroundColor: '#fff', borderRadius: '50%', display: 'inline-block', margin: '-3rem 5px', zIndex: "999" }}></span>
                                                        <span style={{ height: '10px', width: '10px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block', margin: '-3rem 5px', zIndex: "999" }}></span>
                                                        <span style={{ height: '10px', width: '10px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block', margin: '-3rem 5px', zIndex: "999" }}></span>
                                                    </div>

                                                    <div className="row" style={{ justifyContent: 'end' }}>
                                                        {/* <button onClick={handleBackClick} className="btn btn-primary" style={{ width: "auto" }}>
                                                            Back to List
                                                        </button> */}
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

import React, { useState } from 'react';

type Status = 'Scheduled' | 'Rescheduled' | 'Completed';

interface Appointment {
    id: number;
    property_type: string;
    address: string;
    appointment_type: string;
    date_time: string;
    status: Status;
}

const appointments: Appointment[] = [
    {
        id: 3451,
        property_type: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        address: '123 Elm Street',
        appointment_type: 'Property Tour',
        date_time: '06-06-2024 18:00',
        status: 'Scheduled',
    },
    {
        id: 2352,
        property_type: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        address: '456 Oak Avenue',
        appointment_type: 'Property Tour',
        date_time: '07-06-2024 14:00',
        status: 'Rescheduled',
    },
    {
        id: 3212,
        property_type: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        address: '789 Pine Road',
        appointment_type: 'Virtual Tour',
        date_time: '08-06-2024 09:00',
        status: 'Completed',
    },
    {
        id: 4234,
        property_type: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        address: '101 Maple Lane',
        appointment_type: 'Property Tour',
        date_time: '09-06-2024 11:00',
        status: 'Scheduled',
    },
];

const statusColors: { [key in Status]: string } = {
    Scheduled: '#3E97FF',
    Rescheduled: '#7239EA',
    Completed: '#50CD89',
};

const AppointmentList: React.FC = () => {

    const [selectedAppointment, setSelectedAppointment] = useState<number | null>(null);

    const handleRowClick = (id: number) => {
        setSelectedAppointment(id);
    };

    const handleBackClick = () => {
        setSelectedAppointment(null);
    };

    return (
        <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
            <div className='d-flex flex-column flex-column-fluid'>
                <div className="card-body py-4">
                    <div className="table-responsive">
                        <table id="kt_table_users" className="table align-middle table-row-dashed fs-6 gy-5">
                            {!selectedAppointment && (
                                <thead>
                                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                        <>
                                            <th className="min-w-125px">Id</th>
                                            <th className="min-w-125px">Property Type</th>
                                            <th className="min-w-125px">Address</th>
                                            <th className="min-w-125px">Appointment Type</th>
                                            <th className="min-w-125px">Date & Time</th>
                                            <th className="text-end min-w-100px">Status</th>
                                        </>
                                    </tr>
                                </thead>
                            )}
                            <tbody className="text-gray-600 fw-bold">
                                {appointments.map((appointment) => (
                                    <React.Fragment key={appointment.id}>
                                        {(selectedAppointment === null || selectedAppointment === appointment.id) && (
                                            <tr
                                                onClick={() => handleRowClick(appointment.id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {!selectedAppointment && (
                                                    <>
                                                        <td>{appointment.id}</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol overflow-hidden me-3">
                                                                    <a href="#">
                                                                        <div className="symbol-label">
                                                                            <img src={appointment.property_type} alt={`Property ${appointment.id}`} className="w-100" />
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{appointment.address}</td>
                                                        <td>{appointment.appointment_type}</td>
                                                        <td>{appointment.date_time}</td>
                                                        <td className="text-end min-w-100px">
                                                            <div
                                                                className="badge"
                                                                style={{
                                                                    backgroundColor: statusColors[appointment.status as Status] || '#CCCCCC',
                                                                    color: '#fff',
                                                                    padding: '5px 10px',
                                                                    borderRadius: '5px',
                                                                    fontWeight: 'bold'
                                                                }}
                                                            >
                                                                {appointment.status}
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
                    {selectedAppointment && (
                        <>
                            {appointments
                                .filter(appointment => appointment.id === selectedAppointment)
                                .map(appointment => (
                                    <div key={appointment.id}>
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
                                                        Property details
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0">
                                            <div className="card-body p-0">
                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">ID</label>
                                                    <div className="col-lg-8">
                                                        <span className="fw-bolder fs-6 text-muted">{appointment.id}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Address</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{appointment.address}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Property Type</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">Independent House</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Age of Property</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">5+ Years</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Preferred Tenant</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">Family</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Posted on</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{appointment.date_time}</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="d-flex align-items my-2">
                                                <div className=''>
                                                    <div className="row mb-7" style={{ justifyContent: 'center' }}>
                                                        <div className="col-lg-8 fv-row">
                                                            <div className="symbol-label">
                                                                <img src={appointment.property_type} alt={`Property ${appointment.id}`} style={{ width: '100%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ justifyContent: 'center' }}>
                                                        <button onClick={handleBackClick} className="btn btn-primary" style={{ width: "auto" }}>
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
                    {!selectedAppointment && (
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

export default AppointmentList;

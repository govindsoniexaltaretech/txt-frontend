import React, { useState } from 'react';

type AppointmentStatus = 'Scheduled' | 'Requested' | 'Completed' | 'Rescheduled' | 'Cancelled' ;

interface AppointmentDetails {
    Appointment_id: number;
    Appointment_icon: string;
    Appointment_location: string;
    Appointment_category: string;
    Appointment_due_date: string;
    Appointment_status: AppointmentStatus;
}
const AppointmentsList: AppointmentDetails[] = [
    {
        Appointment_id: 3354,
        Appointment_icon: '/media/logos/appointment/1.png',
        Appointment_location: 'Property Tour',
        Appointment_category: 'Buyer & Owner',
        Appointment_due_date: '27-07-2024 18:00',
        Appointment_status: 'Scheduled',
    },
    {
        Appointment_id: 2485,
        Appointment_icon: '/media/logos/appointment/2.png',
        Appointment_location: 'Property Visit',
        Appointment_category: 'Buyer & Owner',
        Appointment_due_date: '27-07-2024 17:00',
        Appointment_status: 'Scheduled',
    },
    {
        Appointment_id: 3574,
        Appointment_icon: '/media/logos/appointment/3.png',
        Appointment_location: 'Surveyor Appointment',
        Appointment_category: 'Property inspector & Owner',
        Appointment_due_date: '27-07-2024 14:00',
        Appointment_status: 'Scheduled',
    },
    {
        Appointment_id: 2482,
        Appointment_icon: '/media/logos/appointment/4.png',
        Appointment_location: 'Property Visit',
        Appointment_category: 'Buyer & Owner',
        Appointment_due_date: '25-07-2024 13:00',
        Appointment_status: 'Rescheduled',
    },
    {
        Appointment_id: 4875,
        Appointment_icon: '/media/logos/appointment/5.png',
        Appointment_location: 'Financial Consultation',
        Appointment_category: 'Property valuer & Buyer',
        Appointment_due_date: '24-07-2024 14:00',
        Appointment_status: 'Completed',
    },
    {
        Appointment_id: 6475,
        Appointment_icon: '/media/logos/appointment/6.png',
        Appointment_location: 'Surveyor Appointment',
        Appointment_category: 'Property inspector & Owner',
        Appointment_due_date: '23-07-2024 15:00',
        Appointment_status: 'Completed',
    },
    {
        Appointment_id: 2288,
        Appointment_icon: '/media/logos/appointment/1.png',
        Appointment_location: 'Property Visit',
        Appointment_category: 'Buyer & Owner',
        Appointment_due_date: '22-07-2024 10:00',
        Appointment_status: 'Rescheduled',
    },
    {
        Appointment_id: 3544,
        Appointment_icon: '/media/logos/appointment/2.png',
        Appointment_location: 'Property Tour',
        Appointment_category: 'Buyer & Owner',
        Appointment_due_date: '22-07-2024 11:00',
        Appointment_status: 'Cancelled',
    },
    {
        Appointment_id: 3665,
        Appointment_icon: '/media/logos/appointment/3.png',
        Appointment_location: 'Property Visit',
        Appointment_category: 'Buyer & Owner',
        Appointment_due_date: '25-07-2024 12:15',
        Appointment_status: 'Cancelled',
    },
    {
        Appointment_id: 9354,
        Appointment_icon: '/media/logos/appointment/1.png',
        Appointment_location: 'Property Tour',
        Appointment_category: 'Buyer & Owner',
        Appointment_due_date: '27-07-2024 18:00',
        Appointment_status: 'Scheduled',
    }
];


const getRoleStyles = (Appointment_status: AppointmentStatus) => {
    switch (Appointment_status) {
        case 'Scheduled':
            return { color: '#3E97FF', backgroundColor: '#EEF6FF' };
        case 'Completed':
            return { color: '#50CD89', backgroundColor: '#E8FFF3' };
        case 'Requested':
            return { color: '#FFC300', backgroundColor: '#FFF8DD' };
        case 'Rescheduled':
            return { color: '#7239EA', backgroundColor: '#F8F5FF' };
        case 'Cancelled':
            return { color: '#F1416C', backgroundColor: '#FFF5F8' };
        default:
            return {};
    }
};

const ServicesHList: React.FC = () => {
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
                        <table id="kt_table_Appointments" className="table align-middle table-row-dashed fs-5 gy-5">
                            {!selectedAppointment && (
                                <thead>
                                    <tr className="text-start text-muted fw-bolder fs-5 text gs-0">
                                        <>
                                            <th className="min-w-125px">Id</th>
                                            <th className="min-w-125px">Property</th>
                                            <th className="text-center min-w-125px">Appointment Type</th>
                                            <th className="text-center min-w-125px">Appointment Between</th>
                                            <th className="text-center min-w-125px">Date & Time</th>
                                            <th className="text-center min-w-100px">Status</th>
                                        </>
                                    </tr>
                                </thead>
                            )}
                            <tbody className="text-gray-600 fw-bold">
                                {AppointmentsList.map((Appointment) => (
                                    <React.Fragment key={Appointment.Appointment_id}>
                                        {(selectedAppointment === null || selectedAppointment === Appointment.Appointment_id) && (
                                            <tr
                                                onClick={() => handleRowClick(Appointment.Appointment_id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {!selectedAppointment && (
                                                    <>
                                                        <td>{Appointment.Appointment_id}</td>
                                                        <td className='text-center'>
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol overflow-hidden me-3" style={{ borderRadius: "0"}}>
                                                                    <a href="#">
                                                                        <div className="symbol-label" style={{ borderRadius: "0"}}>
                                                                            <img src={Appointment.Appointment_icon} alt={`Appointment ${Appointment.Appointment_id}`} className="w-100" />
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='text-center'>{Appointment.Appointment_location}</td>
                                                        <td className='text-center'>{Appointment.Appointment_due_date}</td>
                                                        <td className='text-center'>{Appointment.Appointment_category}</td>
                                                        <td className="text-center min-w-100px">
                                                            <div
                                                                className="badge"
                                                                style={{
                                                                    ...getRoleStyles(Appointment.Appointment_status),
                                                                    padding: '1rem'
                                                                }}
                                                            >
                                                                {Appointment.Appointment_status}
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
                    {selectedAppointment && (
                        <>
                            {AppointmentsList
                                .filter(Appointment => Appointment.Appointment_id === selectedAppointment)
                                .map(Appointment => (
                                    <div key={Appointment.Appointment_id}>
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
                                                        Appointment Details
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0">
                                            <div className="card-body p-0">
                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Service Id</label>
                                                    <div className="col-lg-8">
                                                        <span className="fw-bolder fs-6 text-muted">{Appointment.Appointment_id}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Service Type</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{Appointment.Appointment_location}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Icon</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">Independent Appointment</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Service Provider</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{Appointment.Appointment_category}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Date & Time</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{Appointment.Appointment_due_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items my-2">
                                                <div className=''>
                                                    <div className="row mb-7" style={{ justifyContent: 'center' }}>
                                                        <div className="col-lg-8 fv-row">
                                                            <div className="symbol-label">
                                                                <img src={Appointment.Appointment_icon} alt={`Property ${Appointment.Appointment_id}`} style={{ width: '100%' }} />
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
                </div>
            </div>
        </div>
    );
};

export default ServicesHList;

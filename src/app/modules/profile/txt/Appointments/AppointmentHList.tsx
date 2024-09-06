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
        Appointment_id: 1011,
        Appointment_icon: '/media/logos/appointment/1.png',
        Appointment_location: 'Property Tour',
        Appointment_category: 'Dog Walking',
        Appointment_due_date: '14-14-2024 10:00',
        Appointment_status: 'Scheduled',
    },
    {
        Appointment_id: 2021,
        Appointment_icon: '/media/logos/appointment/2.png',
        Appointment_location: '321 Birch Road',
        Appointment_category: 'Package Delivery',
        Appointment_due_date: '15-15-2024 12:00',
        Appointment_status: 'Requested',
    },
    {
        Appointment_id: 3031,
        Appointment_icon: '/media/logos/appointment/3.png',
        Appointment_location: '654 Willow Drive',
        Appointment_category: 'Cleaning',
        Appointment_due_date: '16-16-2024 14:00',
        Appointment_status: 'Completed',
    },
    {
        Appointment_id: 4041,
        Appointment_icon: '/media/logos/appointment/4.png',
        Appointment_location: '789 Spruce Lane',
        Appointment_category: 'Laundry',
        Appointment_due_date: '17-17-2024 16:00',
        Appointment_status: 'Rescheduled',
    },
    {
        Appointment_id: 5051,
        Appointment_icon: '/media/logos/appointment/5.png',
        Appointment_location: '159 Chestnut Avenue',
        Appointment_category: 'Meal Preparation',
        Appointment_due_date: '18-18-2024 18:00',
        Appointment_status: 'Cancelled',
    },
    {
        Appointment_id: 6061,
        Appointment_icon: '/media/logos/appointment/6.png',
        Appointment_location: '951 Redwood Street',
        Appointment_category: 'Grocery Delivery',
        Appointment_due_date: '19-19-2024 20:00',
        Appointment_status: 'Scheduled',
    },
    {
        Appointment_id: 7071,
        Appointment_icon: '/media/logos/appointment/1.png',
        Appointment_location: '357 Aspen Road',
        Appointment_category: 'Babysitting',
        Appointment_due_date: '20-20-2024 22:00',
        Appointment_status: 'Requested',
    },
    {
        Appointment_id: 8081,
        Appointment_icon: '/media/logos/appointment/2.png',
        Appointment_location: '753 Fir Avenue',
        Appointment_category: 'Pet Grooming',
        Appointment_due_date: '21-21-2024 06:00',
        Appointment_status: 'Completed',
    },
    {
        Appointment_id: 9091,
        Appointment_icon: '/media/logos/appointment/3.png',
        Appointment_location: '852 Maple Street',
        Appointment_category: 'Lawn Mowing',
        Appointment_due_date: '22-22-2024 08:00',
        Appointment_status: 'Rescheduled',
    },
    {
        Appointment_id: 10102,
        Appointment_icon: '/media/logos/appointment/4.png',
        Appointment_location: '963 Pine Crescent',
        Appointment_category: 'House Cleaning',
        Appointment_due_date: '23-23-2024 10:00',
        Appointment_status: 'Cancelled',
    },
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

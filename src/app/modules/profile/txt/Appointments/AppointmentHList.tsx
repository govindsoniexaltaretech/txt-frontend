import React, { useState } from 'react';

type AppointmentStatus = 'Scheduled' | 'Requested' | 'Completed' | 'Rescheduled' | 'Cancelled';

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

// Second part 


type Status_two = 'Scheduled' | 'Rescheduled' | 'Approved';
type Updated_by_two = 'Owner' | 'Buyer';

interface Appointment_two {
    date_time_two: string;
    status_two: Status_two;
    discussed_date_time_two: string;
    updated_by_two: Updated_by_two;
    note_two: string;
}

const appointments_two: Appointment_two[] = [
    {
        date_time_two: '06-06-2024 08:00',
        status_two: 'Scheduled',
        discussed_date_time_two: '06-06-2024 08:00',
        updated_by_two: 'Owner',
        note_two: 'Appointment Scheduled By Owner.',
    },
    {
        date_time_two: '06-06-2024 18:00',
        status_two: 'Approved',
        discussed_date_time_two: '06-06-2024 18:00',
        updated_by_two: 'Owner',
        note_two: 'Appointment Approved By Owner.',
    },
    {
        date_time_two: '06-06-2024 18:00',
        status_two: 'Rescheduled',
        discussed_date_time_two: '06-06-2024 18:00',
        updated_by_two: 'Buyer',
        note_two: 'Appointment Rescheduled By Buyer.',
    },
    {
        date_time_two: '06-06-2024 18:00',
        status_two: 'Approved',
        discussed_date_time_two: '06-06-2024 18:00',
        updated_by_two: 'Owner',
        note_two: 'Appointment Approved By Owner.',
    },
    {
        date_time_two: '06-06-2024 18:00',
        status_two: 'Rescheduled',
        discussed_date_time_two: '06-06-2024 18:00',
        updated_by_two: 'Buyer',
        note_two: 'Appointment Rescheduled By Buyer.',
    },

];


const getRoleStyles_two = (status_two: Status_two) => {
    switch (status_two) {
        case 'Scheduled':
            return { color: '#3E97FF', backgroundColor: '#EEF6FF' };
        case 'Approved':
            return { color: '#50CD89', backgroundColor: '#E8FFF3' };
        case 'Rescheduled':
            return { color: '#7239EA', backgroundColor: '#F8F5FF' };
        default:
            return {};
    }
};


const getRoleStyles_updated_two = (updated_by_two: Updated_by_two) => {
    switch (updated_by_two) {
        case 'Owner':
            return { color: '#3E97FF', backgroundColor: '#EEF6FF' };
        case 'Buyer':
            return { color: '#7239EA', backgroundColor: '#F8F5FF' };
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
        <>
            {!selectedAppointment && (
                <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
                    <div className='d-flex flex-column flex-column-fluid'>
                        <div className='card'>

                            <div className="card-body py-4">

                                <>
                                    <div className="card-header border-0 pt-6">
                                        <div className="card-title">
                                            <div className="d-flex align-items-center position-relative my-1">
                                                <i className="ki-duotone ki-magnifier fs-1 position-absolute ms-6">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </i>
                                                <input
                                                    type="text"
                                                    data-kt-user-table-filter="search"
                                                    className="form-control form-control-solid w-250px ps-14"
                                                    placeholder="Search"
                                                    value=""
                                                />
                                            </div>
                                        </div>
                                        <div className="card-toolbar">
                                            <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                                                <div className='rest' style={{ paddingRight: '.7rem' }}>
                                                    <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" style={{ width: '14rem', justifyContent: 'space-between', display: 'flex' }}>
                                                        Appointment Type<i className="ki-duotone ki-down fs-5 m-0"></i>

                                                    </a>
                                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4">
                                                        <div className="menu-item px-3">
                                                            <a className="menu-link px-3">Edit</a>
                                                        </div>
                                                        <div className="menu-item px-3">
                                                            <a className="menu-link px-3" data-kt-users-table-filter="delete_row">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='rest' style={{ paddingRight: '.7rem' }}>
                                                    <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" style={{ width: '14rem', justifyContent: 'space-between', display: 'flex' }}>
                                                        Appointment Between<i className="ki-duotone ki-down fs-5 m-0"></i>

                                                    </a>
                                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4">
                                                        <div className="menu-item px-3">
                                                            <a className="menu-link px-3">Edit</a>
                                                        </div>
                                                        <div className="menu-item px-3">
                                                            <a className="menu-link px-3" data-kt-users-table-filter="delete_row">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='rest' style={{ paddingRight: '0rem' }}>
                                                    <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" style={{ width: '14rem', justifyContent: 'space-between', display: 'flex' }}>
                                                        Status<i className="ki-duotone ki-down fs-5 m-0"></i>
                                                    </a>
                                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4">
                                                        <div className="menu-item px-3">
                                                            <a className="menu-link px-3">Edit</a>
                                                        </div>
                                                        <div className="menu-item px-3">
                                                            <a className="menu-link px-3" data-kt-users-table-filter="delete_row">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table id="kt_table_Appointments" className="table align-middle table-row-dashed fs-5 gy-5">
                                            {!selectedAppointment && (
                                                <thead>
                                                    <tr className="text-start text-muted fw-bolder fs-5 text gs-0">
                                                        <>
                                                            <th className="text-center min-w-125px">Id</th>
                                                            <th className="text-center min-w-125px">Property</th>
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
                                                                        <td className='text-center'>{Appointment.Appointment_id}</td>
                                                                        <td className='text-center'>
                                                                            <div className="align-items-center">
                                                                                <div className="symbol overflow-hidden me-3" style={{ borderRadius: "0" }}>
                                                                                    <a href="#">
                                                                                        <div className="symbol-label" style={{ borderRadius: "0" }}>
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
                                </>

                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectedAppointment && (
                <>
                    {AppointmentsList
                        .filter(Appointment => Appointment.Appointment_id === selectedAppointment)
                        .map(appointment => (
                            <>
                                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                                    <div className='card'>
                                        <div className="card-body py-4">
                                            <div key={appointment.Appointment_id}>
                                                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6 pb-4">
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
                                                                Appointment details
                                                            </h1>
                                                        </div>
                                                        <div className="d-flex align-items my-2">

                                                            <button
                                                                onClick={handleBackClick}
                                                                style={{
                                                                    border: 'none',
                                                                    background: 'transparent'
                                                                }}
                                                            >
                                                                <div className=''>
                                                                    <i className="iconend border border-gray-300 border rounded py-3 px-4 me-6 mb-3 bi bi-arrow-left"></i>
                                                                </div>
                                                            </button>

                                                            <div className=''>
                                                                <i className="iconend border border-gray-300 border rounded py-3 px-4 me-6 mb-3 bi bi-pencil"></i>
                                                            </div>
                                                            <div className=''>
                                                                <i className="iconend border border-gray-300 border rounded py-3 px-4 me-6 mb-3 bi bi-trash3"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0 pt-4">
                                                    <div className="card-body p-0">
                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Appointment Id</label>
                                                            <div className="col-lg-8">
                                                                <span className="fw-bolder fs-2 text-muted">{appointment.Appointment_id}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Appointment Type</label>
                                                            <div className="col-lg-8 fv-row">
                                                                <span className="fw-bold fs-2 text-muted">{appointment.Appointment_location}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Appointment Between</label>
                                                            <div className="col-lg-8 fv-row">
                                                                <span className="fw-bold fs-2 text-muted">{appointment.Appointment_category}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Date & Time</label>
                                                            <div className="col-lg-8 fv-row">
                                                                <span className="fw-bold fs-2 text-muted">{appointment.Appointment_due_date}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Status</label>
                                                            <div
                                                                className="col-lg-8 fv-row"
                                                                style={{
                                                                    ...getRoleStyles(appointment.Appointment_status),
                                                                    padding: '1rem',
                                                                    width: 'auto'
                                                                }}
                                                            >
                                                                <span className="fw-bold fs-2">{appointment.Appointment_status}</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="d-flex align-items my-2">
                                                        <div className=''>
                                                            <div className="row mb-7" style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                                <div
                                                                    className="col-lg-1"
                                                                    style={{
                                                                        cursor: 'pointer',
                                                                        fontSize: '2rem',
                                                                        border: '1px solid #fff',
                                                                        position: 'relative',
                                                                        background: '#fff',
                                                                        zIndex: 2,
                                                                        boxShadow: '1px 1px 1px 1px #f9f9f9',
                                                                        borderRadius: '0 4px 4px 0',
                                                                        right: '-8%',
                                                                        paddingLeft: '0rem'
                                                                    }}
                                                                >
                                                                    {/* Previous Button */}
                                                                    <i className="bi bi-arrow-left" style={{ cursor: 'pointer', fontSize: '2rem' }}></i>
                                                                </div>
                                                                <div className="col-lg-10" style={{ overflow: 'hidden' }}>
                                                                    <div className="symbol-label" style={{ position: 'relative' }}>
                                                                        <img src={appointment.Appointment_icon} alt={`Property ${appointment.Appointment_id}`} style={{ width: '26rem', display: 'block', margin: '0 auto' }} />
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
                                                                        zIndex: 2,
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
                                                                <span style={{ height: '10px', width: '10px', backgroundColor: '#fff', borderRadius: '50%', display: 'inline-block', margin: '-3rem 5px', zIndex: "2" }}></span>
                                                                <span style={{ height: '10px', width: '10px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block', margin: '-3rem 5px', zIndex: "2" }}></span>
                                                                <span style={{ height: '10px', width: '10px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block', margin: '-3rem 5px', zIndex: "2" }}></span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                                    <div className='card'>
                                        <div className="card-body py-4">
                                            <div id="kt_app_content" className="app-content flex-column-fluid">
                                                <div className="card-header border-0 p-0">
                                                    <div className="card-title">
                                                        <div className="d-flex align-items-center position-relative my-1">
                                                            <i className="ki-duotone ki-magnifier fs-1 position-absolute ms-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                            <input
                                                                type="text"
                                                                data-kt-user-table-filter="search"
                                                                className="form-control form-control-solid w-250px ps-14"
                                                                placeholder="Search"
                                                                value=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="card-toolbar">
                                                        <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                                                            <div className='rest' style={{ paddingRight: '0rem' }}>
                                                                <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" style={{ width: '14rem', justifyContent: 'space-between', display: 'flex' }}>
                                                                    Status<i className="ki-duotone ki-down fs-5 m-0"></i>
                                                                </a>
                                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4">
                                                                    <div className="menu-item px-3">
                                                                        <a className="menu-link px-3">Edit</a>
                                                                    </div>
                                                                    <div className="menu-item px-3">
                                                                        <a className="menu-link px-3" data-kt-users-table-filter="delete_row">
                                                                            Delete
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='rest' style={{ paddingLeft: '.7rem' }}>
                                                                <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" style={{ width: '14rem', justifyContent: 'space-between', display: 'flex' }}>
                                                                    Pick date range<i className="bi bi-x-lg fs-5 m-0"></i>
                                                                </a>
                                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4">
                                                                    <div className="menu-item px-3">
                                                                        <a className="menu-link px-3">Edit</a>
                                                                    </div>
                                                                    <div className="menu-item px-3">
                                                                        <a className="menu-link px-3" data-kt-users-table-filter="delete_row">
                                                                            Delete
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table id="kt_table_users" className="table align-middle table-row-dashed fs-5 gy-5">
                                                    <thead>
                                                        <tr className="text-start text-muted fw-bolder fs-4 gs-0">
                                                            <>
                                                                <th className="text-center min-w-125px">Date & Time</th>
                                                                <th className="text-center min-w-125px">Status</th>
                                                                <th className="text-center min-w-125px">Discussed Date & Time</th>
                                                                <th className="text-center min-w-125px">Updated By</th>
                                                                <th className="text-center min-w-100px">Notes</th>
                                                            </>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-gray-600 fs-4 fw-bold">
                                                        {appointments_two.map((appointments_two) => (
                                                            <tr
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                <>
                                                                    <td className="text-center">{appointments_two.date_time_two}</td>
                                                                    <td className="text-center min-w-100px">
                                                                        <div
                                                                            className="badge"
                                                                            style={{
                                                                                ...getRoleStyles_two(appointments_two.status_two),
                                                                                padding: '1rem'
                                                                            }}
                                                                        >
                                                                            {appointments_two.status_two}
                                                                        </div>
                                                                    </td>

                                                                    <td className="text-center">{appointments_two.discussed_date_time_two}</td>
                                                                    <td className="text-center min-w-100px">
                                                                        <div
                                                                            className="badge"
                                                                            style={{
                                                                                ...getRoleStyles_updated_two(appointments_two.updated_by_two),
                                                                                padding: '1rem'
                                                                            }}
                                                                        >
                                                                            {appointments_two.updated_by_two}
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">{appointments_two.note_two}</td>
                                                                </>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                </>
            )}
        </>

    );
};

export default ServicesHList;

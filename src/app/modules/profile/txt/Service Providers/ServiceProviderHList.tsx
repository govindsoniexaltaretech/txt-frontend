import React, { useState } from 'react';

type ServiceProviderHStatus = 'Active' | 'Inactive';

interface ServiceProviderHDetails {
    id: number;
    name: string;
    email: string;
    serviceType: string;
    phone: string;
    rating: number;
    dateOnboarded: string;
    ServiceProviderH_status: ServiceProviderHStatus;
}
const ServiceProviderHsList: ServiceProviderHDetails[] = [
    {
        id: 3354,
        name: "Nguyen Van A",
        serviceType: 'Cleaning',
        phone: "012-345-6789",
        email: "nguyenvana@example.com",
        rating: 4.8,
        dateOnboarded: '14-02-2024 10:30',
        ServiceProviderH_status: 'Active',
    },
    {
        id: 2485,
        name: "Tran Thi B",
        serviceType: 'Plumbing',
        phone: "098-765-4321",
        email: "tranthib@example.com",
        rating: 4.5,
        dateOnboarded: '15-03-2024 12:45',
        ServiceProviderH_status: 'Inactive',
    },
    {
        id: 3574,
        name: "Le Van C",
        serviceType: 'Electrical',
        phone: "091-234-5678",
        email: "levanc@example.com",
        rating: 4.7,
        dateOnboarded: '16-04-2024 09:15',
        ServiceProviderH_status: 'Active',
    },
    {
        id: 2482,
        name: "Pham Thi D",
        serviceType: 'Cleaning',
        phone: "092-233-3444",
        email: "phamthid@example.com",
        rating: 4.6,
        dateOnboarded: '17-05-2024 14:20',
        ServiceProviderH_status: 'Active',
    },
    {
        id: 4875,
        name: "Hoang Van E",
        serviceType: 'Plumbing',
        phone: "093-111-2222",
        email: "hoangvane@example.com",
        rating: 4.8,
        dateOnboarded: '18-06-2024 17:00',
        ServiceProviderH_status: 'Inactive',
    },
    {
        id: 6475,
        name: "Do Thi F",
        serviceType: 'Electrical',
        phone: "094-444-5555",
        email: "dothif@example.com",
        rating: 4.9,
        dateOnboarded: '19-07-2024 08:30',
        ServiceProviderH_status: 'Active',
    },
    {
        id: 2288,
        name: "Nguyen Van G",
        serviceType: 'Cleaning',
        phone: "095-777-8888",
        email: "nguyenvang@example.com",
        rating: 4.8,
        dateOnboarded: '20-08-2024 11:45',
        ServiceProviderH_status: 'Active',
    },
    {
        id: 3544,
        name: "Pham Thi H",
        serviceType: 'Plumbing',
        phone: "096-666-7777",
        email: "phamthih@example.com",
        rating: 4.7,
        dateOnboarded: '21-09-2024 16:30',
        ServiceProviderH_status: 'Inactive',
    },
    {
        id: 3665,
        name: "Tran Van I",
        serviceType: 'Electrical',
        phone: "097-333-4444",
        email: "tranvani@example.com",
        rating: 4.6,
        dateOnboarded: '22-10-2024 09:00',
        ServiceProviderH_status: 'Active',
    },
    {
        id: 3054,
        name: "Le Thi J",
        serviceType: 'Cleaning',
        phone: "098-555-6666",
        email: "lethij@example.com",
        rating: 4.5,
        dateOnboarded: '23-11-2024 13:20',
        ServiceProviderH_status: 'Active',
    }
];


const getRoleStyles = (ServiceProviderH_status: ServiceProviderHStatus) => {
    switch (ServiceProviderH_status) {
        case 'Active':
            return { color: '#50CD89', backgroundColor: '#E8FFF3' };
        case 'Inactive':
            return { color: '#F1416C', backgroundColor: '#FFF5F8' };
        default:
            return {};
    }
};

const ServiceProviderHList: React.FC = () => {
    const [selectedServiceProviderH, setSelectedServiceProviderH] = useState<number | null>(null);

    const handleRowClick = (id: number) => {
        setSelectedServiceProviderH(id);
    };

    const handleBackClick = () => {
        setSelectedServiceProviderH(null);
    };

    return (
        <>
            {!selectedServiceProviderH && (
                <div className='card'>
                    <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
                        <div className='d-flex flex-column flex-column-fluid'>
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
                                                        Service Type<i className="ki-duotone ki-down fs-5 m-0"></i>

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
                                        <table id="kt_table_ServiceProviderHs" className="table align-middle table-row-dashed fs-5 gy-5">
                                            {!selectedServiceProviderH && (
                                                <thead>
                                                    <tr className="text-start text-muted fw-bolder fs-5 text gs-0">
                                                        <>
                                                            <th className="text-center min-w-125px">ID</th>
                                                            <th className="text min-w-125px">Users</th>
                                                            <th className="text-center min-w-125px">Service Type</th>
                                                            <th className="text-center min-w-125px">Phone Number</th>
                                                            <th className="text-center min-w-100px">Rating</th>
                                                            <th className="text-center min-w-100px">Date Onboarded</th>
                                                            <th className="text-center min-w-100px">Status</th>
                                                            <th className="text-center min-w-100px">Action</th>
                                                        </>
                                                    </tr>
                                                </thead>
                                            )}
                                            <tbody className="text-gray-600 fw-bold">
                                                {ServiceProviderHsList.map((ServiceProviderH) => (
                                                    <React.Fragment key={ServiceProviderH.id}>
                                                        {(selectedServiceProviderH === null || selectedServiceProviderH === ServiceProviderH.id) && (
                                                            <tr
                                                                // onClick={() => handleRowClick(ServiceProviderH.id)}
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                {!selectedServiceProviderH && (
                                                                    <>
                                                                        <td className="text-center">{ServiceProviderH.id}</td>
                                                                        <td>
                                                                            <a href="/users-overview">
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="text-gray-600 d-flex flex-column fw-bold fs-5 text-muted">
                                                                                        <a href="/users-overview">

                                                                                            <span
                                                                                                className="text-gray-600 fw-bold fs-5 text-muted text-hover-primary mb-1"
                                                                                            >
                                                                                                {ServiceProviderH.name}
                                                                                            </span>
                                                                                        </a>

                                                                                        <a href="/users-overview">
                                                                                            <span className="text-gray-600 fw-bold fs-5 text-muted text-hover-primary mb-1">{ServiceProviderH.email}</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-center">{ServiceProviderH.serviceType}</td>
                                                                        <td className='text-center'>
                                                                            <div className="fw-thin fs-4"><img src="/media/logos/vietnam_phn.png" alt={ServiceProviderH.name} className="w-5" style={{ paddingRight: '4px' }} />{ServiceProviderH.phone}</div>
                                                                        </td>
                                                                        <td className="text-center">{ServiceProviderH.rating}</td>
                                                                        <td className="text-center">{ServiceProviderH.dateOnboarded}</td>
                                                                        <td className="text-center min-w-100px">
                                                                            <div
                                                                                className="badge"
                                                                                style={{
                                                                                    ...getRoleStyles(ServiceProviderH.ServiceProviderH_status),
                                                                                    padding: '1rem'
                                                                                }}
                                                                            >
                                                                                {ServiceProviderH.ServiceProviderH_status}
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <div
                                                                                className="text-center d-flex align-items my-2"
                                                                                style={{ justifyContent: "center" }}
                                                                            >
                                                                                <div className="">
                                                                                    <i className="iconend border border-gray-300 border rounded py-3 px-4 me-6 mb-3 bi bi-pencil"></i>
                                                                                </div>
                                                                                <div className="">
                                                                                    <i className="iconend border border-gray-300 border rounded py-3 px-4 me-6 mb-3 bi bi-trash3"></i>
                                                                                </div>
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
                                </>

                                {!selectedServiceProviderH && (

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
                </div>
            )}

            {/* {selectedServiceProviderH && (
                <>
                    {ServiceProviderHsList
                        .filter(ServiceProviderH => ServiceProviderH.id === selectedServiceProviderH)
                        .map(ServiceProviderH => (
                            <>
                                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                                    <div className='card'>
                                        <div className="card-body py-4">
                                            <div key={ServiceProviderH.id}>
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
                                                                Service details
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
                                                <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0">
                                                    <div className="card-body p-0">
                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Property Id</label>
                                                            <div className="col-lg-8">
                                                                <span className="fw-bolder fs-2 text-muted">{ServiceProviderH.id}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Property Type</label>
                                                            <div className="col-lg-8 fv-row">
                                                                <span className="fw-bold fs-2 text-muted">{ServiceProviderH.ServiceProviderH_location}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Address</label>
                                                            <div className="col-lg-8 fv-row">
                                                                <span className="fw-bold fs-2 text-muted">{ServiceProviderH.ServiceProviderH_category}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Date Uploaded</label>
                                                            <div className="col-lg-8 fv-row">
                                                                <span className="fw-bold fs-2 text-muted">{ServiceProviderH.ServiceProviderH_due_date}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Status</label>
                                                            <div
                                                                className="col-lg-8 fv-row"
                                                                style={{
                                                                    ...getRoleStyles(ServiceProviderH.ServiceProviderH_status),
                                                                    padding: '1rem',
                                                                    width: 'auto'
                                                                }}
                                                            >
                                                                <span className="fw-bold fs-2">{ServiceProviderH.ServiceProviderH_status}</span>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                </>
            )} */}
        </>
    );
};

export default ServiceProviderHList;

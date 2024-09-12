import React, { useState } from 'react';

type SystemUsersHListHStatus = 'Active' | 'Inactive';

interface SystemUsersHListHDetails {
    id: number;
    name: string;
    email: string;
    role: string;
    phone: string;
    added_date: string;
    last_login_page: string;
    SystemUsersHListH_status: SystemUsersHListHStatus;
}
const SystemUsersHListHsList: SystemUsersHListHDetails[] = [
    {
        id: 3354,
        name: "Nguyen Van A",
        role: 'Property Manager',
        phone: "012-345-6789",
        email: "nguyenvana@example.com",
        added_date: '13-02-2024 10:30',
        last_login_page: '14-02-2024 10:30',
        SystemUsersHListH_status: 'Active',
    },
    {
        id: 2485,
        name: "Tran Thi B",
        role: 'Content Manager',
        phone: "098-765-4321",
        email: "tranthib@example.com",
        added_date: '14-03-2024 12:45',
        last_login_page: '15-03-2024 12:45',
        SystemUsersHListH_status: 'Inactive',
    },
    {
        id: 3574,
        name: "Le Van C",
        role: 'Service Provider Manager',
        phone: "091-234-5678",
        email: "levanc@example.com",
        added_date: '15-04-2024 09:15',
        last_login_page: '16-04-2024 09:15',
        SystemUsersHListH_status: 'Active',
    },
    {
        id: 2482,
        name: "Pham Thi D",
        role: 'Property Manager',
        phone: "092-233-3444",
        email: "phamthid@example.com",
        added_date: '16-05-2024 14:20',
        last_login_page: '17-05-2024 14:20',
        SystemUsersHListH_status: 'Active',
    },
    {
        id: 4875,
        name: "Hoang Van E",
        role: 'Content Manager',
        phone: "093-111-2222",
        email: "hoangvane@example.com",
        added_date: '17-06-2024 17:00',
        last_login_page: '18-06-2024 17:00',
        SystemUsersHListH_status: 'Inactive',
    },
    {
        id: 6475,
        name: "Do Thi F",
        role: 'Service Provider Manager',
        phone: "094-444-5555",
        email: "dothif@example.com",
        added_date: '18-07-2024 08:30',
        last_login_page: '19-07-2024 08:30',
        SystemUsersHListH_status: 'Active',
    },
    {
        id: 2288,
        name: "Nguyen Van G",
        role: 'Property Manager',
        phone: "095-777-8888",
        email: "nguyenvang@example.com",
        added_date: '19-08-2024 11:45',
        last_login_page: '20-08-2024 11:45',
        SystemUsersHListH_status: 'Active',
    },
    {
        id: 3544,
        name: "Pham Thi H",
        role: 'Content Manager',
        phone: "096-666-7777",
        email: "phamthih@example.com",
        added_date: '20-09-2024 16:30',
        last_login_page: '21-09-2024 16:30',
        SystemUsersHListH_status: 'Inactive',
    },
    {
        id: 3665,
        name: "Tran Van I",
        role: 'Service Provider Manager',
        phone: "097-333-4444",
        email: "tranvani@example.com",
        added_date: '21-10-2024 09:00',
        last_login_page: '22-10-2024 09:00',
        SystemUsersHListH_status: 'Active',
    },
    {
        id: 3054,
        name: "Le Thi J",
        role: 'Property Manager',
        phone: "098-555-6666",
        email: "lethij@example.com",
        added_date: '22-11-2024 13:20',
        last_login_page: '23-11-2024 13:20',
        SystemUsersHListH_status: 'Active',
    }
];


const getRoleStyles = (SystemUsersHListH_status: SystemUsersHListHStatus) => {
    switch (SystemUsersHListH_status) {
        case 'Active':
            return { color: '#50CD89', backgroundColor: '#E8FFF3' };
        case 'Inactive':
            return { color: '#F1416C', backgroundColor: '#FFF5F8' };
        default:
            return {};
    }
};

const SystemUsersHList: React.FC = () => {
    const [selectedSystemUsersHListH, setSelectedSystemUsersHListH] = useState<number | null>(null);

    const handleRowClick = (id: number) => {
        setSelectedSystemUsersHListH(id);
    };

    const handleBackClick = () => {
        setSelectedSystemUsersHListH(null);
    };

    return (
        <>
            {!selectedSystemUsersHListH && (
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
                                        <table id="kt_table_SystemUsersHListHs" className="table align-middle table-row-dashed fs-5 gy-5">
                                            {!selectedSystemUsersHListH && (
                                                <thead>
                                                    <tr className="text-start text-muted fw-bolder fs-5 text gs-0">
                                                        <>
                                                            <th className="text-center min-w-125px">ID</th>
                                                            <th className="text min-w-125px">Users</th>
                                                            <th className="text-center min-w-125px">Role</th>
                                                            <th className="text-center min-w-125px">Phone Number</th>
                                                            <th className="text-center min-w-100px">Date Added</th>
                                                            <th className="text-center min-w-100px">Last Login</th>
                                                            <th className="text-center min-w-100px">Status</th>
                                                            <th className="text-center min-w-100px">Action</th>
                                                        </>
                                                    </tr>
                                                </thead>
                                            )}
                                            <tbody className="text-gray-600 fw-bold">
                                                {SystemUsersHListHsList.map((SystemUsersHListH) => (
                                                    <React.Fragment key={SystemUsersHListH.id}>
                                                        {(selectedSystemUsersHListH === null || selectedSystemUsersHListH === SystemUsersHListH.id) && (
                                                            <tr
                                                                // onClick={() => handleRowClick(SystemUsersHListH.id)}
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                {!selectedSystemUsersHListH && (
                                                                    <>
                                                                        <td className="text-center">{SystemUsersHListH.id}</td>
                                                                        <td>
                                                                            <a href="/users-overview">
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="text-gray-600 d-flex flex-column fw-bold fs-5 text-muted">
                                                                                        <a href="/users-overview">

                                                                                            <span
                                                                                                className="text-gray-600 fw-bold fs-5 text-muted text-hover-primary mb-1"
                                                                                            >
                                                                                                {SystemUsersHListH.name}
                                                                                            </span>
                                                                                        </a>

                                                                                        <a href="/users-overview">
                                                                                            <span className="text-gray-600 fw-bold fs-5 text-muted text-hover-primary mb-1">{SystemUsersHListH.email}</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        </td>
                                                                        <td className="text-center">{SystemUsersHListH.role}</td>
                                                                        <td className='text-center'>
                                                                            <div className="fw-thin fs-4"><img src="/media/logos/vietnam_phn.png" alt={SystemUsersHListH.name} className="w-5" style={{ paddingRight: '4px' }} />{SystemUsersHListH.phone}</div>
                                                                        </td>
                                                                        <td className="text-center">{SystemUsersHListH.added_date}</td>
                                                                        <td className="text-center">{SystemUsersHListH.last_login_page}</td>
                                                                        <td className="text-center min-w-100px">
                                                                            <div
                                                                                className="badge"
                                                                                style={{
                                                                                    ...getRoleStyles(SystemUsersHListH.SystemUsersHListH_status),
                                                                                    padding: '1rem'
                                                                                }}
                                                                            >
                                                                                {SystemUsersHListH.SystemUsersHListH_status}
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

                                {!selectedSystemUsersHListH && (

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
        </>
    );
};

export default SystemUsersHList;


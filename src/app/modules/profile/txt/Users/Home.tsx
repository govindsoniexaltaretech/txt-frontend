import React from 'react';

const users = [
    {
        id: 1,
        name: 'Emma Smith',
        email: 'smith@kpmg.com',
        role: 'Buyer',
        mobilenumber: '98128278474',
        registerationnumber: '06-06-2024 18:00',
        currency: '$',
        avatar: '/metronic8/react/demo1/media/avatars/300-6.jpg',
    },
    {
        id: 2,
        name: 'Melody Macy',
        email: 'melody@altbox.com',
        role: 'Owner',
        mobilenumber: '755-584-678',
        registerationnumber: '06-06-2024 18:00',
        currency: '$',
        avatar: null,
        avatarInitial: 'M',
        avatarColor: 'bg-light-danger text-danger',
    },
    {
        id: 3,
        name: 'Max Smith',
        email: 'max@kt.com',
        role: 'Home Services',
        mobilenumber: '755-584-678',
        registerationnumber: '06-06-2024 18:00',
        currency: '$',
        avatar: '/metronic8/react/demo1/media/avatars/300-1.jpg',
    },
    {
        id: 4,
        name: 'Sean Bean',
        email: 'sean@dellito.com',
        role: 'Support',
        mobilenumber: '985-584-678',
        registerationnumber: '06-06-2024 18:00',
        currency: '$',
        avatar: '/metronic8/react/demo1/media/avatars/300-5.jpg',
    },
];

const Home = () => {
    return (
        <>
            <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
                <div className='d-flex flex-column flex-column-fluid'>
                    <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                        <div id="kt_app_toolbar_container" className="app-container d-flex flex-stack container-xxl">
                            <div
                                id="kt_page_title"
                                data-kt-swapper="true"
                                data-kt-swapper-mode="prepend"
                                data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                                className="page-title d-flex flex-wrap me-3 flex-column justify-content-center"
                            >
                                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 my-0 flex-column justify-content-center">
                                    Users
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div id="kt_app_content" className="app-content flex-column-fluid">
                        <div id="kt_app_content_container" className="app-container container-xxl">
                            <div className="row g-5 g-xl-10">

                                {/* Active Projects Card */}
                                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3">

                                    {/* Professionals Card */}
                                    <div className="card card-flush h-md-auto mb-5 mb-xl-10">
                                        <div className="card-header pt-5">
                                            <div className="card-title d-flex flex-column">
                                                <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">23,604</span>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-end pe-0">
                                            <span className="text-gray-500 pt-1 fw-semibold fs-6">Total no. of Users</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Projects Card */}
                                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3">

                                    {/* Professionals Card */}
                                    <div className="card card-flush h-md-auto mb-5 mb-xl-10">
                                        <div className="card-header pt-5">
                                            <div className="card-title d-flex flex-column">
                                                <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">4,567</span>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-end pe-0">
                                            <span className="text-gray-500 pt-1 fw-semibold fs-6">No. of Buyers</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Projects Card */}
                                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3">

                                    {/* Professionals Card */}
                                    <div className="card card-flush h-md-auto mb-5 mb-xl-10">
                                        <div className="card-header pt-5">
                                            <div className="card-title d-flex flex-column">
                                                <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">19,860</span>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-end pe-0">
                                            <span className="text-gray-500 pt-1 fw-semibold fs-6">No. of Owners</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Projects Card */}
                                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3">

                                    {/* Professionals Card */}
                                    <div className="card card-flush h-md-auto mb-5 mb-xl-10">
                                        <div className="card-header pt-5">
                                            <div className="card-title d-flex flex-column">
                                                <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">2,145</span>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-end pe-0">
                                            <span className="text-gray-500 pt-1 fw-semibold fs-6">No. of Services Users</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card">
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
                                                placeholder="Search user"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                    <div className="card-toolbar">
                                        <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                                            <button type="button" className="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                <i className="ki-duotone ki-filter fs-2"><span className="path1"></span><span className="path2"></span></i>Filter
                                            </button>
                                            <button type="button" className="btn btn-light-primary me-3">
                                                <i className="ki-duotone ki-exit-up fs-2"><span className="path1"></span><span className="path2"></span></i>Export
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                <i className="ki-duotone ki-plus fs-2"></i>Add User
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body py-4">
                                    <div className="table-responsive">
                                        <table id="kt_table_users" className="table align-middle table-row-dashed fs-6 gy-5">
                                            <thead>
                                                <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                                    <th className="w-10px pe-2">
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                            <input className="form-check-input" type="checkbox" data-kt-check="false" data-kt-check-target="#kt_table_users .form-check-input" />
                                                        </div>
                                                    </th>
                                                    <th className="min-w-125px">Users</th>
                                                    <th className="min-w-125px">Role</th>
                                                    <th className="min-w-125px">Mobile Number</th>
                                                    <th className="min-w-125px">Registration Date</th>
                                                    <th className="min-w-125px">Currency</th>
                                                    <th className="text-end min-w-100px">Messaging App</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600 fw-bold">
                                                {users.map((user) => (
                                                    <tr key={user.id}>
                                                        <td>
                                                            <div className="form-check form-check-custom form-check-solid">
                                                                <input className="form-check-input" type="checkbox" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    {user.avatar ? (
                                                                        <a href="#">
                                                                            <div className="symbol-label">
                                                                                <img src={user.avatar} alt={user.name} className="w-100" />
                                                                            </div>
                                                                        </a>
                                                                    ) : (
                                                                        <a href="#">
                                                                            <div className={`symbol-label fs-3 ${user.avatarColor}`}>
                                                                                {user.avatarInitial}
                                                                            </div>
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="d-flex flex-column">
                                                                    <a href="#" className="text-gray-800 text-hover-primary mb-1">
                                                                        {user.name}
                                                                    </a>
                                                                    <span>{user.email}</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className='badge badge-light-success'>{user.role}</div>
                                                        </td>
                                                        <td>
                                                            <div className="fw-bolder">{user.mobilenumber}</div>
                                                        </td>
                                                        <td>
                                                            {user.registerationnumber && (
                                                                <div className="fw-bolder">{user.registerationnumber}</div>
                                                            )}
                                                        </td>
                                                        <td>{user.currency}</td>
                                                        <td className="text-end min-w-100px">
                                                            <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                Actions<i className="ki-duotone ki-down fs-5 m-0"></i>
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
                                                        </td>
                                                    </tr>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

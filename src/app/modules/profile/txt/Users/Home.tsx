import React from 'react';

type UserRole = 'Buyer' | 'Owner' | 'Home Services';

type User = {
    id: number;
    name: string;
    email: string;
    role: UserRole;  // Ensure role is of type UserRole
    mobilenumber: string;
    registerationnumber: string;
    currency: string;
    avatar: string | null;
    avatar_action: string;
    avatarInitial?: string;
    avatarColor?: string;
};

const users: User[] = [
    {
        id: 1,
        name: 'Kim Ji-Soo',
        email: 'kimjisoo@soundcloud.com',
        role: 'Buyer',
        mobilenumber: '755-584-678',
        registerationnumber: '06-06-2024 18:00',
        currency: '₫',
        avatar: '/metronic8/react/demo1/media/avatars/300-6.jpg',
        avatar_action: '/metronic8/react/demo1/media/logos/talk.png',
    },
    {
        id: 2,
        name: 'Suzuki Aoi',
        email: 'suzukiaoi@privacy.gov.au',
        role: 'Owner',
        mobilenumber: '755-584-678',
        registerationnumber: '06-06-2024 18:00',
        currency: '₫',
        avatar: null,
        avatarInitial: 'M',
        avatarColor: 'bg-light-danger text-danger',
        avatar_action: '/metronic8/react/demo1/media/logos/line.png',

    },
    {
        id: 3,
        name: 'Takahashi Sora',
        email: 'takahashisora@uiuc.edu',
        role: 'Home Services',
        mobilenumber: '755-584-678',
        registerationnumber: '06-06-2024 18:00',
        currency: '₫',
        avatar: '/metronic8/react/demo1/media/avatars/300-1.jpg',
        avatar_action: '/metronic8/react/demo1/media/logos/line.png',

    },
    {
        id: 4,
        name: 'Wang Wei',
        email: 'wangwei17@abc.net.au',
        role: 'Buyer',
        mobilenumber: '755-584-678',
        registerationnumber: '06-06-2024 18:00',
        currency: '₫',
        avatar: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        avatar_action: '/metronic8/react/demo1/media/logos/line.png',

    },
];


const getRoleStyles = (role: UserRole) => {
    switch (role) {
        case 'Buyer':
            return { color: '#3E97FF', backgroundColor: '#EEF6FF' };
        case 'Owner':
            return { color: '#50CD89', backgroundColor: '#E8FFF3' };
        case 'Home Services':
            return { color: '#7239EA', backgroundColor: '#F8F5FF' };
        default:
            return {};
    }
};


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
                                            <i
                                                className="bi bi-people"
                                                style={{
                                                    fontSize: '1.8rem',
                                                    color: 'rgb(126, 130, 153)',
                                                    background: 'rgb(249, 249, 249)',
                                                    display: 'flex',
                                                    padding: '.7rem',
                                                    height: 'max-content',
                                                }}
                                            ></i>

                                        </div>
                                        <div className="card-header pt-0">
                                            <div className="card-title d-flex flex-column">
                                                <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">23,604</span>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-end pe-0">
                                            <span className="text-gray-500 pt-1 fw-semibold fs-3">Total no. of Users</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Projects Card */}
                                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3">

                                    {/* Professionals Card */}
                                    <div className="card card-flush h-md-auto mb-5 mb-xl-10">
                                        <div className="card-header pt-5">
                                            <i
                                                className="bi bi-bag"
                                                style={{
                                                    fontSize: '1.8rem',
                                                    color: '#2884EF',
                                                    background: '#EEF6FF',
                                                    display: 'flex',
                                                    padding: '.7rem',
                                                    height: 'max-content',
                                                }}
                                            ></i>
                                        </div>
                                        <div className="card-header pt-5">
                                            <div className="card-title d-flex flex-column">
                                                <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">4,567</span>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-end pe-0">
                                            <span className="text-gray-500 pt-1 fw-semibold fs-3">No. of Buyers</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Projects Card */}
                                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3">

                                    {/* Professionals Card */}
                                    <div className="card card-flush h-md-auto mb-5 mb-xl-10">
                                        <div className="card-header pt-5">
                                            <i
                                                className="bi bi-key"
                                                style={{
                                                    fontSize: '1.8rem',
                                                    color: '#47BE7D',
                                                    background: '#E8FFF3',
                                                    display: 'flex',
                                                    padding: '.7rem',
                                                    height: 'max-content',
                                                }}
                                            ></i>
                                        </div>
                                        <div className="card-header pt-5">
                                            <div className="card-title d-flex flex-column">
                                                <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">19,860</span>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-end pe-0">
                                            <span className="text-gray-500 pt-1 fw-semibold fs-3">No. of Owners</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Projects Card */}
                                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3">

                                    {/* Professionals Card */}
                                    <div className="card card-flush h-md-auto mb-5 mb-xl-10">
                                        <div className="card-header pt-5">
                                            <i
                                                className="bi bi-house"
                                                style={{
                                                    fontSize: '1.8rem',
                                                    color: '#7239EA',
                                                    background: '#F8F5FF',
                                                    display: 'flex',
                                                    padding: '.7rem',
                                                    height: 'max-content',
                                                }}
                                            ></i>
                                        </div>
                                        <div className="card-header pt-5">
                                            <div className="card-title d-flex flex-column">
                                                <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">2,145</span>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-end pe-0">
                                            <span className="text-gray-500 pt-1 fw-semibold fs-3">No. of Services Users</span>
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
                                            {/* <button type="button" className="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                <i className="ki-duotone ki-filter fs-2"><span className="path1"></span><span className="path2"></span></i>Filter
                                            </button>
                                            <button type="button" className="btn btn-light-primary me-3">
                                                <i className="ki-duotone ki-exit-up fs-2"><span className="path1"></span><span className="path2"></span></i>Export
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                <i className="ki-duotone ki-plus fs-2"></i>Add User
                                            </button> */}
                                            <div className='rest' style={{ paddingRight: '.7rem' }}>
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
                                            <div className='rest' style={{ paddingRight: '0rem' }}>
                                                <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" style={{ width: '14rem', justifyContent: 'space-between', display: 'flex' }}>
                                                    Role<i className="ki-duotone ki-down fs-5 m-0"></i>
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
                                <div className="card-body py-4">
                                    <div className="table-responsive">
                                        <table id="kt_table_users" className="table align-middle table-row-dashed fs-6 gy-5">
                                            <thead>
                                                <tr className="text-start text-muted fw-bold fs-5 text gs-0">
                                                    <th className="min-w-125px">Users</th>
                                                    <th className="min-w-125px">Role</th>
                                                    <th className="min-w-125px">Mobile Number</th>
                                                    <th className="min-w-125px">Registration Date</th>
                                                    <th className="min-w-125px" style={{ textAlign: 'center' }}>Currency</th>
                                                    <th className="text-end min-w-100px">Messaging App</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600 fw-bold">
                                                {users.map((user) => (
                                                    <tr key={user.id}>
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
                                                            <div
                                                                className="badge"
                                                                style={getRoleStyles(user.role)}
                                                            >
                                                                {user.role}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="fw-thin fs-4"><img src="/metronic8/react/demo1/media/logos/vietnam_phn.png" alt={user.name} className="w-5" style={{ paddingRight: '4px' }} />{user.mobilenumber}</div>
                                                        </td>
                                                        <td>
                                                            {user.registerationnumber && (
                                                                <div className="fw-thin fs-4">{user.registerationnumber}</div>
                                                            )}
                                                        </td>
                                                        <td className="fw-thin fs-4 align-items-center" style={{ textAlign: 'center' }}>{user.currency}</td>
                                                        <td className="text-center min-w-100px">
                                                            {/* <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
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
                                                            </div> */}
                                                            <img src={user.avatar_action} alt={user.name} className="w-5" style={{ paddingRight: '4px', textAlign: 'center' }} />
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

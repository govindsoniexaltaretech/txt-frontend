import React from 'react';
import SubscriptionHList from './SubscriptionHList';

const Home: React.FC = () => {

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
                                    Subscriptions
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
                                                className="bi bi-gift-fill"
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
                                                <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">17,986</span>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-end pe-0">
                                            <span className="text-gray-500 pt-1 fw-semibold fs-3">Free Plan Users</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Projects Card */}
                                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3">

                                    {/* Professionals Card */}
                                    <div className="card card-flush h-md-auto mb-5 mb-xl-10">
                                        <div className="card-header pt-5">
                                            <i
                                                className="bi bi-trophy-fill"
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
                                                <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">5,876</span>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-end pe-0">
                                            <span className="text-gray-500 pt-1 fw-semibold fs-3">Basic Plan Users</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Projects Card */}
                                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3">

                                    {/* Professionals Card */}
                                    <div className="card card-flush h-md-auto mb-5 mb-xl-10">
                                        <div className="card-header pt-5">
                                            <i
                                                className="bi bi-award"
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
                                                <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">3,765</span>
                                            </div>
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-end pe-0">
                                            <span className="text-gray-500 pt-1 fw-semibold fs-3">Premium Plan Users</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Active Projects Card */}
                                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3">

                                    {/* Professionals Card */}
                                    <div className="card card-flush h-md-auto mb-5 mb-xl-10">
                                        <div className="card-header pt-5">
                                            <i
                                                className="bi bi-plus"
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
                                        <div className="card-header pt-5 card-title d-flex">
                                            <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">22,005</span>
                                            <span className="text-gray-500 pt-1 fw-semibold fs-7"> 82.79% Subscribers</span>
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-end pe-0">
                                            <span className="text-gray-500 pt-1 fw-semibold fs-3">Total no. of Subscribed Users</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="kt_app_content" className="app-content flex-column-fluid">
                        <div id="kt_app_content_container" className="app-container container-xxl">
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
                                                placeholder="Search"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                    <div className="card-toolbar">
                                        <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">

                                            <div className='rest' style={{ paddingRight: '.7rem' }}>
                                                <a href="#" className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" style={{ width: '14rem', justifyContent: 'space-between', display: 'flex' }}>
                                                    Plan<i className="ki-duotone ki-down fs-5 m-0"></i>

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
                                                    Duration<i className="ki-duotone ki-down fs-5 m-0"></i>

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
                                <SubscriptionHList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

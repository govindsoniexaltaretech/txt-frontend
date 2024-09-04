import React from 'react';
import ServicesHList from './ServicesHList';

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
                                    Services
                                </h1>
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
                                                placeholder="Search user"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                    <div className="card-toolbar">
                                        <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                                            <div className="text-end min-w-100px">
                                                <a
                                                    href="#"
                                                    className="btn btn-light btn-active-light-primary btn-sm"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Service Type
                                                    <i className="ki-duotone ki-down fs-5 m-0"></i>
                                                </a>
                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4">
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">
                                                            Property Tour                                                        </a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="#"
                                                            className="menu-link px-3"
                                                            data-kt-users-table-filter="delete_row"
                                                        >
                                                            Surveyor Service
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-end min-w-100px" style={{padding: "0 .4rem"}}>
                                                <a
                                                    href="#"
                                                    className="btn btn-light btn-active-light-primary btn-sm"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Service Between
                                                    <i className="ki-duotone ki-down fs-5 m-0"></i>
                                                </a>
                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4">
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">
                                                            Buyer & Owner
                                                        </a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="#"
                                                            className="menu-link px-3"
                                                            data-kt-users-table-filter="delete_row"
                                                        >
                                                            Property inspector & Owner
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-end min-w-100px">
                                                <a
                                                    href="#"
                                                    className="btn btn-light btn-active-light-primary btn-sm"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Status
                                                    <i className="ki-duotone ki-down fs-5 m-0"></i>
                                                </a>
                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4">
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">
                                                            Pending
                                                        </a>
                                                    </div>
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="#"
                                                            className="menu-link px-3"
                                                            data-kt-users-table-filter="delete_row"
                                                        >
                                                            Complete
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ServicesHList />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Home;

import React, { useState } from 'react'
import OverviewDetalis from './tab/OverviewDetalis';
import OverviewDetailsServices from './tab/OverviewDetailsServices';
import AppointmentList from './tab/AppointmentList';
import ServicesList from './tab/ServicesList';
import SubscriptionDetails from './tab/SubscriptionDetails';

const Overview = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('overview');

    // Function to handle tab clicks
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };
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
                                <span className="text-gray-500 pt-1 fw-semibold fs-6">Users - Overview</span>
                            </div>
                        </div>
                    </div>
                    <div id="kt_app_content" className="app-content flex-column-fluid">
                        <div id="kt_app_content_container" className="app-container container-xxl">
                            <div className="card mb-5 mb-xl-10">
                                <div className="card-body pt-9 pb-0">
                                    <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
                                        <div className="me-7 mb-4">
                                            <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                                <img src="/metronic8/react/demo1//media/avatars/300-1.jpg" alt="Metornic" />
                                                <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                                <div className="d-flex flex-column">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <a href="#" className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1">
                                                            Kim Ji-Soo
                                                        </a>
                                                        {/* <a href="#">
                                                            <i className="ki-duotone ki-verify fs-1 text-primary">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                        </a> */}
                                                    </div>
                                                    <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                                                        <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                            <i className="ki-duotone ki-profile-circle fs-4 me-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                            kimjisoo@soundcloud.com
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                            <i className="ki-duotone ki-geolocation fs-4 me-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                            +82 -755-584-678
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
                                                            <i className="ki-duotone ki-sms fs-4 me-1">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                            </i>
                                                            max@kt.com
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="d-flex my-4">
                                                    <a href="#" className="btn btn-sm btn-light me-2" id="kt_user_follow_button">
                                                        <i className="ki-duotone ki-check fs-3 d-none"></i>
                                                        <span className="indicator-label">Follow</span>
                                                        <span className="indicator-progress">
                                                            Please wait...
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    </a>
                                                    <a href="#" className="btn btn-sm btn-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">
                                                        Hire Me
                                                    </a>
                                                    <div className="me-0">
                                                        <button className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                                                            <i className="bi bi-three-dots fs-3"></i>
                                                        </button>
                                                        <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true">
                                                            <div className="px-7 py-5">
                                                                <div className="fs-5 text-gray-900 fw-bolder">Filter Options</div>
                                                            </div>
                                                            <div className="separator border-gray-200"></div>
                                                            <div className="px-7 py-5">
                                                                <div className="mb-10">
                                                                    <label className="form-label fw-bold">Status:</label>
                                                                    <div>
                                                                        <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true">
                                                                            <option></option>
                                                                            <option value="1" selected>Approved</option>
                                                                            <option value="2">Pending</option>
                                                                            <option value="3">In Process</option>
                                                                            <option value="4">Rejected</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-10">
                                                                    <label className="form-label fw-bold">Member Type:</label>
                                                                    <div className="d-flex">
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                                            <input className="form-check-input" type="checkbox" value="1" />
                                                                            <span className="form-check-label">Author</span>
                                                                        </label>
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" value="2" checked />
                                                                            <span className="form-check-label">Customer</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-10">
                                                                    <label className="form-label fw-bold">Notifications:</label>
                                                                    <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                                        <input className="form-check-input" type="checkbox" name="notifications" value="" checked />
                                                                        <label className="form-check-label">Enabled</label>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-end">
                                                                    <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">
                                                                        Reset
                                                                    </button>
                                                                    <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">
                                                                        Apply
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap flex-stack">
                                                <div className="d-flex flex-column flex-grow-1 pe-8">
                                                    <div className="d-flex flex-wrap">
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                                <div className="fs-2 fw-bolder">4500$</div>
                                                            </div>
                                                            <div className="fw-bold fs-6 text-gray-500">Earnings</div>
                                                        </div>
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <i className="ki-duotone ki-arrow-down fs-3 text-danger me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                                <div className="fs-2 fw-bolder">75</div>
                                                            </div>
                                                            <div className="fw-bold fs-6 text-gray-500">Projects</div>
                                                        </div>
                                                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                                <div className="fs-2 fw-bolder">60%</div>
                                                            </div>
                                                            <div className="fw-bold fs-6 text-gray-500">Success Rate</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                                                    <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                                        <span className="fw-bold fs-6 text-gray-500">Profile Completion</span>
                                                        <span className="fw-bolder fs-6">50%</span>
                                                    </div>
                                                    <div className="h-5px mx-3 w-100 bg-light mb-3">
                                                        <div className="bg-success rounded h-5px" role="progressbar" style={{ width: "50%" }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex overflow-auto h-55px">
                                        <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link text-active-primary me-6 ${activeTab === 'overview' ? 'active' : ''}`}
                                                    href="#overview"
                                                    onClick={() => handleTabClick('overview')}
                                                >
                                                    Overview
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link text-active-primary me-6 ${activeTab === 'appointments' ? 'active' : ''}`}
                                                    href="#appointments"
                                                    onClick={() => handleTabClick('appointments')}
                                                >
                                                    Appointments
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link text-active-primary me-6 ${activeTab === 'services' ? 'active' : ''}`}
                                                    href="#services"
                                                    onClick={() => handleTabClick('services')}
                                                >
                                                    Services
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link text-active-primary me-6 ${activeTab === 'subscription' ? 'active' : ''}`}
                                                    href="#subscription"
                                                    onClick={() => handleTabClick('subscription')}
                                                >
                                                    Subscription
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content mb-10">
                        {activeTab === 'overview' && (
                            <div id="overview">
                                {/* Overview Details */}
                                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                                    <div id="kt_app_content_container" className="app-container container-xxl">
                                        <div className="card">
                                            <div className="card-body">
                                                <OverviewDetalis />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="kt_app_content" className="app-content flex-column-fluid pb-4 mb-4">
                                    <div id="kt_app_content_container" className="app-container container-xxl">
                                        <div className="card">
                                            <div className="card-body">
                                                <OverviewDetailsServices />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'appointments' && (
                            <div id="appointments">
                                {/* Appointments Details */}
                                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                                    <div id="kt_app_content_container" className="app-container container-xxl">
                                        <div className="card">
                                            <div className="card-body">
                                                <AppointmentList />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'services' && (
                            <div id="services">
                                {/* Services Details */}
                                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                                    <div id="kt_app_content_container" className="app-container container-xxl">
                                        <div className="card">
                                            <div className="card-body">
                                                <ServicesList />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'subscription' && (
                            <div id="subscription">
                                {/* Subscription Details */}
                                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                                    <div id="kt_app_content_container" className="app-container container-xxl">
                                        <div className="card">
                                            <div className="card-body">
                                                <SubscriptionDetails />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Overview

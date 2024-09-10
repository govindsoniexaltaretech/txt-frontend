import React, { useState } from 'react'
import OverviewDetalis from './tab/OverviewDetalis';
import OverviewDetailsServices from './tab/OverviewDetailsServices';
import AppointmentList from './tab/AppointmentList';
import ServicesList from './tab/ServicesList';
import SubscriptionDetails from './tab/SubscriptionDetails';
import FeedbackList from './tab/FeedbackList';

const Overview = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('overview');
    const [breadcrumbText, setBreadcrumbText] = useState('Overview');

    // Function to handle tab clicks
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);

        // Update breadcrumb text based on the clicked tab
        switch (tab) {
            case 'overview':
                setBreadcrumbText('Overview');
                break;
            case 'appointments':
                setBreadcrumbText('Appointments');
                break;
            case 'services':
                setBreadcrumbText('Services');
                break;
            case 'subscription':
                setBreadcrumbText('Subscription');
                break;
            case 'feedback':
                setBreadcrumbText('Feedback');
                break;
            default:
                setBreadcrumbText('Feedback');
        }
    };

    // Function to handle tab clicks
    // const handleTabClick = (tab: string) => {
    //     setActiveTab(tab);
    // };
    return (
        <>
            <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
                <div className='d-flex flex-column flex-column-fluid'>
                    <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6 sticky-top" style={{ position: 'sticky', top: '0', zIndex: 10 }}>
                        <div id="kt_app_toolbar_container" className="app-container d-flex flex-stack container-xxl">
                            <div
                                id="kt_page_title"
                                data-kt-swapper="true"
                                data-kt-swapper-mode="prepend"
                                data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                                className="page-title d-flex flex-wrap me-3 flex-column justify-content-center"
                            >
                                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 my-0 flex-column justify-content-center">
                                    {breadcrumbText}
                                </h1>
                                <span className="text-gray-500 pt-1 fw-semibold fs-6">Users - {breadcrumbText}</span>
                                {/* <span className="text-gray-500 pt-1 fw-semibold fs-6">Users - Overview</span> */}
                            </div>
                        </div>
                    </div>
                    <div id="kt_app_content" className="app-content flex-column-fluid sticky-top" style={{ position: 'sticky', top: '0', zIndex: 10 }}>
                        <div id="kt_app_content_container" className="app-container container-xxl">
                            <div className="card mb-5 mb-xl-10">
                                <div className="card-body pt-9">
                                    <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
                                        <div className="me-7 mb-4">
                                            <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                                <img src="/media/logos/user1.png" alt="Metornic" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                                <div className="d-flex flex-column">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <a href="#" className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1">
                                                            Kim Ji-Soo
                                                        </a>
                                                    </div>
                                                    <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                                                        <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                            <i className="bi bi-envelope-fill fs-4 me-1"></i>
                                                            kimjisoo@soundcloud.com
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                            <i className="bi bi-telephone-fill fs-4 me-1"></i>
                                                            +82 -755-584-678
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap flex-stack">
                                                <div className="d-flex flex-column flex-grow-1 pe-8">
                                                    <div className="d-flex flex-wrap">
                                                        <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                                                            <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                                <i className="ki-duotone ki-profile-circle fs-4 me-1">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                </i>
                                                                Buyer
                                                            </a>
                                                            <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                                <i className="bi bi-calendar-week fs-4 me-1">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                                Registration Date & Time : 06-06-2024 18:00
                                                            </a>
                                                            <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                                <i className="bi bi-clock-fill fs-4 me-1">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                </i>
                                                                Last Seen : 27-07-2024 16:00
                                                            </a>
                                                            <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                                                <i className="bi bi-phone-fill fs-4 me-1">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                                Android Mi10
                                                            </a>
                                                        </div>
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
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link text-active-primary me-6 ${activeTab === 'documents' ? 'active' : ''}`}
                                                    href='#documents'
                                                    onClick={() => handleTabClick('documents')}
                                                >
                                                    Documents
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className={`nav-link text-active-primary me-6 ${activeTab === 'feedback' ? 'active' : ''}`}
                                                    href='#feedback'
                                                    onClick={() => handleTabClick('feedback')}
                                                >
                                                    Feedback
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
                                        <AppointmentList />
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'services' && (
                            <div id="services">
                                {/* Services Details */}
                                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                                    <div id="kt_app_content_container" className="app-container container-xxl">
                                        <ServicesList />
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
                        {activeTab === 'documents' && (
                            <div id="documents">
                                {/* documents Details */}
                                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                                    <div id="kt_app_content_container" className="app-container container-xxl">
                                        <div className="card">
                                            <div className="card-body">
                                                <h1>Documents Page</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'feedback' && (
                            <div id="feedback">
                                {/* feedback Details */}
                                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                                    <div id="kt_app_content_container" className="app-container container-xxl">
                                        <FeedbackList />
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

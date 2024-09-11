import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import './PropertiesHList.css';

type PropertiesStatus = 'Approved' | 'Pending';

interface PropertiesDetails {
    Properties_id: number;
    name: string;
    email: string;
    avatarInitial?: string;
    avatarColor?: string;
    avatar: string | null;
    Properties_icon: string;
    Properties_location: string;
    Properties_category: string;
    Properties_due_date: string;
    Properties_status: PropertiesStatus;
}
const PropertiessList: PropertiesDetails[] = [
    {
        Properties_id: 3354,
        Properties_icon: '/media/logos/appointment/1.png',
        name: "Kim Ji-Soo",
        email: "kimjisoo@soundcloud.com",
        avatar: "/media/logos/users/1.png",
        Properties_location: 'Apartment',
        Properties_category: '756 Nguyen Hue Boulevard is a prominent street in Ho Chi Minh City, known for its vibrant atmosphere and historic landmarks',
        Properties_due_date: '14-14-2024 10:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 2485,
        name: "Suzuki Aoi",
        email: "suzukiaoi@privacy.gov.au",
        avatar: "/media/logos/users/2.png",
        Properties_icon: '/media/logos/appointment/2.png',
        Properties_location: 'Serviced Apartment',
        Properties_category: '756 Nguyen Hue Boulevard is a prominent street in Ho Chi Minh City, known for its vibrant atmosphere and historic landmarks',
        Properties_due_date: '15-15-2024 12:00',
        Properties_status: 'Pending',
    },
    {
        Properties_id: 3574,
        name: "Takahashi Sora",
        email: "takahashisora@uiuc.edu",
        avatar: "/media/logos/users/3.png",
        Properties_icon: '/media/logos/appointment/3.png',
        Properties_location: 'Duplex Apartment',
        Properties_category: '756 Nguyen Hue Boulevard is a prominent street in Ho Chi Minh City, known for its vibrant atmosphere and historic landmarks',
        Properties_due_date: '16-16-2024 14:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 2482,
        name: "Wang Wei",
        email: "wangwei17@abc.net.au",
        avatar: null,
        avatarInitial: "WW",
        Properties_icon: '/media/logos/appointment/4.png',
        Properties_location: 'Apartment',
        Properties_category: '756 Nguyen Hue Boulevard is a prominent street in Ho Chi Minh City, known for its vibrant atmosphere and historic landmarks',
        Properties_due_date: '17-17-2024 16:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 4875,
        name: "Kim Ji-Soo",
        email: "kimjisoo@soundcloud.com",
        avatar: "/media/logos/users/1.png",
        Properties_icon: '/media/logos/appointment/5.png',
        Properties_location: 'Apartment',
        Properties_category: '756 Nguyen Hue Boulevard is a prominent street in Ho Chi Minh City, known for its vibrant atmosphere and historic landmarks',
        Properties_due_date: '18-18-2024 18:00',
        Properties_status: 'Pending',
    },
    {
        Properties_id: 6475,
        name: "Suzuki Aoi",
        email: "suzukiaoi@privacy.gov.au",
        avatar: "/media/logos/users/2.png",
        Properties_icon: '/media/logos/appointment/6.png',
        Properties_location: 'Penthouse',
        Properties_category: '756 Nguyen Hue Boulevard is a prominent street in Ho Chi Minh City, known for its vibrant atmosphere and historic landmarks',
        Properties_due_date: '19-19-2024 20:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 2288,
        name: "Kim Ji-Soo",
        email: "kimjisoo@soundcloud.com",
        avatar: "/media/logos/users/1.png",
        Properties_icon: '/media/logos/appointment/1.png',
        Properties_location: 'Villa',
        Properties_category: '756 Nguyen Hue Boulevard is a prominent street in Ho Chi Minh City, known for its vibrant atmosphere and historic landmarks',
        Properties_due_date: '20-20-2024 22:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 3544,
        name: "Suzuki Aoi",
        email: "suzukiaoi@privacy.gov.au",
        avatar: "/media/logos/users/2.png",
        Properties_icon: '/media/logos/appointment/2.png',
        Properties_location: 'Independent House ',
        Properties_category: '756 Nguyen Hue Boulevard is a prominent street in Ho Chi Minh City, known for its vibrant atmosphere and historic landmarks',
        Properties_due_date: '21-21-2024 06:00',
        Properties_status: 'Pending',
    },
    {
        Properties_id: 3665,
        name: "Takahashi Sora",
        email: "takahashisora@uiuc.edu",
        avatar: "/media/logos/users/3.png",
        Properties_icon: '/media/logos/appointment/3.png',
        Properties_location: 'Apartment',
        Properties_category: '756 Nguyen Hue Boulevard is a prominent street in Ho Chi Minh City, known for its vibrant atmosphere and historic landmarks',
        Properties_due_date: '22-22-2024 08:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 3054,
        name: "Wang Wei",
        email: "wangwei17@abc.net.au",
        avatar: null,
        avatarInitial: "WW",
        Properties_icon: '/media/logos/appointment/1.png',
        Properties_location: 'Apartment',
        Properties_category: '756 Nguyen Hue Boulevard is a prominent street in Ho Chi Minh City, known for its vibrant atmosphere and historic landmarks',
        Properties_due_date: '14-14-2024 10:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 2085,
        name: "Kim Ji-Soo",
        email: "kimjisoo@soundcloud.com",
        avatar: "/media/logos/users/1.png",
        Properties_icon: '/media/logos/appointment/2.png',
        Properties_location: 'Serviced Apartment',
        Properties_category: '756 Nguyen Hue Boulevard is a prominent street in Ho Chi Minh City, known for its vibrant atmosphere and historic landmarks',
        Properties_due_date: '15-15-2024 12:00',
        Properties_status: 'Pending',
    }
];


const getRoleStyles = (Properties_status: PropertiesStatus) => {
    switch (Properties_status) {
        case 'Approved':
            return { color: '#50CD89', backgroundColor: '#E8FFF3' };
        case 'Pending':
            return { color: '#F6C000', backgroundColor: '#FFF8DD' };
        default:
            return {};
    }
};

const PropertiesHList: React.FC = () => {
    const [selectedProperties, setSelectedProperties] = useState<number | null>(null);
    const [editorContent, setEditorContent] = useState<string>('');

    const handleRowClick = (id: number) => {
        setSelectedProperties(id);
    };

    const handleBackClick = () => {
        setSelectedProperties(null);
    };

    const handleEditorChange = (value: string) => {
        setEditorContent(value);
    };

    return (
        <>
            {!selectedProperties && (
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
                                                        Location<i className="ki-duotone ki-down fs-5 m-0"></i>

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
                                                        Property Type<i className="ki-duotone ki-down fs-5 m-0"></i>

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
                                        <table id="kt_table_Propertiess" className="table align-middle table-row-dashed fs-5 gy-5">
                                            {!selectedProperties && (
                                                <thead>
                                                    <tr className="text-start text-muted fw-bolder fs-5 text gs-0">
                                                        <>
                                                            <th className="text-center min-w-125px">Property ID</th>
                                                            <th className="text min-w-125px">Property</th>
                                                            <th className="text-center min-w-125px">Property  Type</th>
                                                            <th className="text-center min-w-125px">Address</th>
                                                            <th className="text-center min-w-125px">Date Uploaded</th>
                                                            <th className="text-center min-w-100px">Status</th>
                                                        </>
                                                    </tr>
                                                </thead>
                                            )}
                                            <tbody className="text-gray-600 fw-bold">
                                                {PropertiessList.map((Properties) => (
                                                    <React.Fragment key={Properties.Properties_id}>
                                                        {(selectedProperties === null || selectedProperties === Properties.Properties_id) && (
                                                            <tr
                                                                onClick={() => handleRowClick(Properties.Properties_id)}
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                {!selectedProperties && (
                                                                    <>
                                                                        <td className="text-center">{Properties.Properties_id}</td>
                                                                        <td className="text-center">
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="symbol overflow-hidden me-3" style={{ borderRadius: "0" }}>
                                                                                    <a href="#">
                                                                                        <div className="symbol-label" style={{ borderRadius: "0" }}>
                                                                                            <img src={Properties.Properties_icon} alt={`Properties ${Properties.Properties_id}`} className="w-100" />
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-center">{Properties.Properties_location}</td>
                                                                        <td className="text-center">
                                                                            {Properties.Properties_category
                                                                                        .split(" ")
                                                                                        .slice(0, 5)
                                                                                        .join(" ") +
                                                                                        (Properties.Properties_category.split(
                                                                                            " "
                                                                                        ).length > 5
                                                                                            ? "..."
                                                                                            : "")}
                                                                        </td>
                                                                        <td className="text-center">{Properties.Properties_due_date}</td>
                                                                        <td className="text-center min-w-100px">
                                                                            <div
                                                                                className="badge"
                                                                                style={{
                                                                                    ...getRoleStyles(Properties.Properties_status),
                                                                                    padding: '1rem'
                                                                                }}
                                                                            >
                                                                                {Properties.Properties_status}
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

                                {!selectedProperties && (

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

            {selectedProperties && (
                <>
                    {PropertiessList
                        .filter(Properties => Properties.Properties_id === selectedProperties)
                        .map(Properties => (
                            <>
                                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                                    <div className='card'>
                                        <div className="card-body py-4">
                                            <div key={Properties.Properties_id}>
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
                                                                Property details
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
                                                                <span className="fw-bolder fs-2 text-muted">{Properties.Properties_id}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Property Type</label>
                                                            <div className="col-lg-8 fv-row">
                                                                <span className="fw-bold fs-2 text-muted">{Properties.Properties_location}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Address</label>
                                                            <div className="col-lg-8 fv-row">
                                                                <span className="fw-bold fs-2 text-muted">{Properties.Properties_category}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Date Uploaded</label>
                                                            <div className="col-lg-8 fv-row">
                                                                <span className="fw-bold fs-2 text-muted">{Properties.Properties_due_date}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Status</label>
                                                            <div
                                                                className="col-lg-8 fv-row"
                                                                style={{
                                                                    ...getRoleStyles(Properties.Properties_status),
                                                                    padding: '1rem',
                                                                    width: 'auto'
                                                                }}
                                                            >
                                                                <span className="fw-bold fs-2">{Properties.Properties_status}</span>
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
                                                                        <img src={Properties.Properties_icon} alt={`Property ${Properties.Properties_id}`} style={{ width: '26rem', display: 'block', margin: '0 auto' }} />
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
                                    <div className="card">
                                        <div className="card-body py-4">
                                            <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0 pt-4">
                                                <div className="card-body p-0">
                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Owner Details
                                                        </label>
                                                        <div className="col-lg-8 fv-row">
                                                        <a href="/users-overview">
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                    {Properties.avatar ? (
                                                                        <a href="/users-overview">
                                                                            <div className="symbol-label">
                                                                                <img
                                                                                    src={Properties.avatar}
                                                                                    alt={Properties.name}
                                                                                    className="w-80"
                                                                                />
                                                                            </div>
                                                                        </a>
                                                                    ) : (
                                                                        <a href="/users-overview">

                                                                            <div
                                                                                className={`symbol-label fs-4 text-muted ${Properties.avatarColor}`}
                                                                            >
                                                                                {Properties.avatarInitial}
                                                                            </div>
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="text-gray-600 d-flex flex-column fw-bold fs-5 text-muted">
                                                                    <a href="/users-overview">

                                                                        <span
                                                                            className="text-gray-600 fw-bold fs-5 text-muted text-hover-primary mb-1"
                                                                        >
                                                                            {Properties.name}
                                                                        </span>
                                                                    </a>

                                                                    <a href="/users-overview">

                                                                        <span className="text-gray-600 fw-bold fs-5 text-muted text-hover-primary mb-1">{Properties.email}</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Pricing Details
                                                        </label>
                                                        <div className="col-lg-8 fv-row">
                                                            <span className="fw-bold fs-2 text-muted">₫ 45,234</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Property Description
                                                        </label>
                                                        <div className="col-lg-8 fv-row">
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                2 bedroom
                                                            </span>
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                2 bathroom
                                                            </span>
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                1500 Sq Mtr
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Property Amenities
                                                        </label>
                                                        <div className="col-lg-8 fv-row">
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                Fully furnished
                                                            </span>
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                Smoke detector
                                                            </span>
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                Internet Wifi
                                                            </span>
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                AC
                                                            </span>
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                Beds
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Project Amenities
                                                        </label>
                                                        <div className="col-lg-8 fv-row">
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                Swimming pool
                                                            </span>
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                Gym
                                                            </span>
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                100% Power backup
                                                            </span>
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                Gated
                                                            </span>
                                                            <span
                                                                className="fs-4 text-muted badge badge-sm badge-gray-200"
                                                                style={{
                                                                    color: "#4b5675",
                                                                    borderColor: "transparent",
                                                                    backgroundColor: "#f1f1f4",
                                                                    marginRight: "10px"
                                                                }}
                                                            >
                                                                Covered Parking
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Property Documents
                                                        </label>
                                                        <div className="col-lg-8 fv-row">
                                                            <span className="fw-bold fs-2 text-muted"> NOC, Ownership document </span>
                                                        </div>
                                                    </div>
                                                    {
                                                        Properties.Properties_status === 'Approved' ? (
                                                            <div className="row mb-7">
                                                                <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Approved by Admin</label>
                                                                <div className="col-lg-8 fv-row">
                                                                    <span className="fw-bold fs-2 text-muted">John Doe</span>
                                                                </div>
                                                            </div>
                                                        ) : Properties.Properties_status === 'Pending' ? (
                                                            <div className="row mb-7">
                                                                <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Approval</label>
                                                                <div className="col-lg-8 fv-row">
                                                                    <span className="fw-bold fs-2 text-muted">
                                                                        <a className='btn btn-sm fs-4 btn-primary' style={{marginRight: "5px"}}>Approve</a>
                                                                        <a className='btn btn-sm fs-4 btn-danger'>Reject</a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ) : null
                                                    }
                                                </div>
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

export default PropertiesHList;

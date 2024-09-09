import React, { useState } from 'react';

type PropertiesStatus = 'Approved' | 'Pending';

interface PropertiesDetails {
    Properties_id: number;
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
        Properties_location: 'Apartmentt',
        Properties_category: '756 Nguyen Hue Boulevard...',
        Properties_due_date: '14-14-2024 10:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 2485,
        Properties_icon: '/media/logos/appointment/2.png',
        Properties_location: 'Serviced Apartment',
        Properties_category: '756 Nguyen Hue Boulevard...',
        Properties_due_date: '15-15-2024 12:00',
        Properties_status: 'Pending',
    },
    {
        Properties_id: 3574,
        Properties_icon: '/media/logos/appointment/3.png',
        Properties_location: 'Duplex Apartment',
        Properties_category: '756 Nguyen Hue Boulevard...',
        Properties_due_date: '16-16-2024 14:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 2482,
        Properties_icon: '/media/logos/appointment/4.png',
        Properties_location: 'Apartment',
        Properties_category: '756 Nguyen Hue Boulevard...',
        Properties_due_date: '17-17-2024 16:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 4875,
        Properties_icon: '/media/logos/appointment/5.png',
        Properties_location: 'Apartment',
        Properties_category: '756 Nguyen Hue Boulevard...',
        Properties_due_date: '18-18-2024 18:00',
        Properties_status: 'Pending',
    },
    {
        Properties_id: 6475,
        Properties_icon: '/media/logos/appointment/6.png',
        Properties_location: 'Penthouse',
        Properties_category: '756 Nguyen Hue Boulevard...',
        Properties_due_date: '19-19-2024 20:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 2288,
        Properties_icon: '/media/logos/appointment/1.png',
        Properties_location: 'Villa',
        Properties_category: '756 Nguyen Hue Boulevard...',
        Properties_due_date: '20-20-2024 22:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 3544,
        Properties_icon: '/media/logos/appointment/2.png',
        Properties_location: 'Independent Houses ',
        Properties_category: '756 Nguyen Hue Boulevard...',
        Properties_due_date: '21-21-2024 06:00',
        Properties_status: 'Pending',
    },
    {
        Properties_id: 3665,
        Properties_icon: '/media/logos/appointment/3.png',
        Properties_location: 'Apartment',
        Properties_category: '756 Nguyen Hue Boulevard...',
        Properties_due_date: '22-22-2024 08:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 3054,
        Properties_icon: '/media/logos/appointment/1.png',
        Properties_location: 'Apartmentt',
        Properties_category: '756 Nguyen Hue Boulevard...',
        Properties_due_date: '14-14-2024 10:00',
        Properties_status: 'Approved',
    },
    {
        Properties_id: 2085,
        Properties_icon: '/media/logos/appointment/2.png',
        Properties_location: 'Serviced Apartment',
        Properties_category: '756 Nguyen Hue Boulevard...',
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

    const handleRowClick = (id: number) => {
        setSelectedProperties(id);
    };

    const handleBackClick = () => {
        setSelectedProperties(null);
    };

    return (
        <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
            <div className='d-flex flex-column flex-column-fluid'>
                <div className="card-body py-4">
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
                                                // onClick={() => handleRowClick(Properties.Properties_id)}
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
                                                        <td className="text-center">{Properties.Properties_category}</td>
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
                    {selectedProperties && (
                        <>
                            {PropertiessList
                                .filter(Properties => Properties.Properties_id === selectedProperties)
                                .map(Properties => (
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
                                                    <h1 className="page-heading d-flex text-gray-900 fw-bold fs-2 my-0 flex-column justify-content-center">
                                                        Properties Details
                                                    </h1>
                                                </div>
                                                <div className="d-flex align-items my-2">
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
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Property Id</label>
                                                    <div className="col-lg-8">
                                                        <span className="fw-bolder fs-6 text-muted">{Properties.Properties_id}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Property Type</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{Properties.Properties_location}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Property Address</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{Properties.Properties_category}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Date & Time</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{Properties.Properties_due_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items my-2">
                                                <div className=''>
                                                    <div className="row mb-7" style={{ justifyContent: '' }}>
                                                        <div className="col-lg-8 fv-row">
                                                            <div className="symbol-label">
                                                                <img src={Properties.Properties_icon} alt={`Property ${Properties.Properties_id}`} style={{ width: '30rem' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ justifyContent: 'center' }}>
                                                        <button onClick={handleBackClick} className="btn btn-primary" style={{ width: "auto" }}>
                                                            Back to List
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PropertiesHList;

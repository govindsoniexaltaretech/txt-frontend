import React, { useState } from 'react';

type DiscountHStatus = 'Active' | 'In Active';

interface DiscountHDetails {
    DiscountHList_id: string;
    DiscountHList_plan: string;
    DiscountHList_description: string;
    DiscountHList_duration: string;
    DiscountHList_price: string;
    DiscountHList_status: DiscountHStatus;
}

const DiscounttasksList: DiscountHDetails[] = [
    {
        DiscountHList_id: 'COD123001',
        DiscountHList_plan: 'MAX12OFF',
        DiscountHList_description: '20% off on premium plan',
        DiscountHList_duration: '20%',
        DiscountHList_price: '12',
        DiscountHList_status: 'Active',
    },
    {
        DiscountHList_id: 'COD123002',
        DiscountHList_plan: 'MAX10OFF',
        DiscountHList_description: '20% off on premium plan',
        DiscountHList_duration: '10%',
        DiscountHList_price: '2',
        DiscountHList_status: 'In Active',
    },
    {
        DiscountHList_id: 'COD123003',
        DiscountHList_plan: 'MAX15OFF',
        DiscountHList_description: '20% off on premium plan',
        DiscountHList_duration: '15%',
        DiscountHList_price: '30',
        DiscountHList_status: 'Active',
    },
    {
        DiscountHList_id: 'COD123004',
        DiscountHList_plan: 'MAX21OFF',
        DiscountHList_description: '20% off on premium plan',
        DiscountHList_duration: '21%',
        DiscountHList_price: '1',
        DiscountHList_status: 'In Active',
    },
    {
        DiscountHList_id: 'COD123005',
        DiscountHList_plan: 'MAX25OFF',
        DiscountHList_description: '20% off on premium plan',
        DiscountHList_duration: '25%',
        DiscountHList_price: '7',
        DiscountHList_status: 'Active',
    },
    {
        DiscountHList_id: 'COD123006',
        DiscountHList_plan: 'MAX10OFF',
        DiscountHList_description: '20% off on premium plan',
        DiscountHList_duration: '10%',
        DiscountHList_price: '20',
        DiscountHList_status: 'In Active',
    },
    {
        DiscountHList_id: 'COD123007',
        DiscountHList_plan: 'MAX22OFF',
        DiscountHList_description: '20% off on premium plan',
        DiscountHList_duration: '22%',
        DiscountHList_price: '1',
        DiscountHList_status: 'Active',
    },
    {
        DiscountHList_id: 'COD123008',
        DiscountHList_plan: 'MAX20OFF',
        DiscountHList_description: '20% off on premium plan',
        DiscountHList_duration: '15%',
        DiscountHList_price: '5',
        DiscountHList_status: 'In Active',
    },
    {
        DiscountHList_id: 'COD123009',
        DiscountHList_plan: 'MAX20OFF',
        DiscountHList_description: '20% off on premium plan',
        DiscountHList_duration: '20%',
        DiscountHList_price: '15',
        DiscountHList_status: 'Active',
    },
    {
        DiscountHList_id: 'COD123010',
        DiscountHList_plan: 'MAX25OFF',
        DiscountHList_description: '20% off on premium plan',
        DiscountHList_duration: '25%',
        DiscountHList_price: '50',
        DiscountHList_status: 'Active',
    },
    {
        DiscountHList_id: 'COD123011',
        DiscountHList_plan: 'MAX30OFF',
        DiscountHList_description: '20% off on premium plan',
        DiscountHList_duration: '30%',
        DiscountHList_price: '10',
        DiscountHList_status: 'In Active',
    },
    {
        DiscountHList_id: 'COD123012',
        DiscountHList_plan: 'MAX10OFF',
        DiscountHList_description: '20% off on premium plan',
        DiscountHList_duration: '10%',
        DiscountHList_price: '35',
        DiscountHList_status: 'Active',
    },
];



const getRoleStyles = (DiscountHList_status: DiscountHStatus) => {
    switch (DiscountHList_status) {
        case 'Active':
            return { color: '#50CD89', backgroundColor: '#E8FFF3' };
        case 'In Active':
            return { color: '#F1416C', backgroundColor: '#FFF5F8' };
        default:
            return {};
    }
};

const DiscountHList: React.FC = () => {
    const [selectedDiscountH, setSelectedDiscountH] = useState<string | null>(null);

    const handleRowClick = (id: string) => {
        setSelectedDiscountH(id);
    };

    const handleBackClick = () => {
        setSelectedDiscountH(null);
    };

    return (
        <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
            <div className='d-flex flex-column flex-column-fluid'>
                <div className="card-body py-4">
                    <div className="table-responsive">
                        <table id="kt_table_tasks" className="table align-middle table-row-dashed fs-6 gy-5">
                            {!selectedDiscountH && (
                                <thead>
                                    <tr className="text-center text-muted fw-bold fs-5 text gs-0">
                                        <>
                                            <th className="min-w-125px">Code ID</th>
                                            <th className="min-w-125px">Code</th>
                                            <th className="min-w-125px">Description</th>
                                            <th className="min-w-125px">Discount Percentage</th>
                                            <th className="min-w-125px">Max uses</th>
                                            <th className="min-w-125px">Status</th>
                                            <th className="min-w-100px">Actions</th>
                                        </>
                                    </tr>
                                </thead>
                            )}
                            <tbody className="text-center text-gray-600 fw-bold">
                                {DiscounttasksList.map((task) => (
                                    <React.Fragment key={task.DiscountHList_id}>
                                        {(selectedDiscountH === null || selectedDiscountH === task.DiscountHList_id) && (
                                            <tr
                                                onClick={() => handleRowClick(task.DiscountHList_id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {!selectedDiscountH && (
                                                    <>
                                                        <td>{task.DiscountHList_id}</td>
                                                        <td>{task.DiscountHList_plan}</td>
                                                        <td>{task.DiscountHList_description}</td>
                                                        <td>{task.DiscountHList_duration}</td>
                                                        <td>{task.DiscountHList_price}</td>
                                                        <td className="text-center min-w-100px">
                                                            <div
                                                                className="badge"
                                                                style={{
                                                                    ...getRoleStyles(task.DiscountHList_status),
                                                                    padding: '1rem'
                                                                }}
                                                            >
                                                                {task.DiscountHList_status}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-center d-flex align-items my-2" style={{ justifyContent: 'center' }}>
                                                                <div className=''>
                                                                    <i className="iconend border border-gray-300 border rounded py-3 px-4 me-6 mb-3 bi bi-pencil"></i>
                                                                </div>
                                                                <div className=''>
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
                    {!selectedDiscountH && (
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
                    {selectedDiscountH && (
                        <>
                            {DiscounttasksList
                                .filter(task => task.DiscountHList_id === selectedDiscountH)
                                .map(task => (
                                    <div key={task.DiscountHList_id}>
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
                                                        Discount Details
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0">
                                            <div className="card-body p-0">
                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Code Id</label>
                                                    <div className="col-lg-8">
                                                        <span className="fw-bolder fs-6 text-muted">{task.DiscountHList_id}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Code Description</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.DiscountHList_description}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Code</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.DiscountHList_plan}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Discount Percentage</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.DiscountHList_duration}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Max uses</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.DiscountHList_price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items my-2">
                                                <div className=''>
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

export default DiscountHList;

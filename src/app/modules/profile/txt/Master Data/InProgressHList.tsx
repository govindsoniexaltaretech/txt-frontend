import React, { useState } from 'react';

type InProgressHStatus = 'Active' | 'Inactive';

interface InProgressHDetails {
    InProgressHList_id: string;
    InProgressHList_plan: string;
    InProgressHList_description: string;
    InProgressHList_duration: string;
    InProgressHList_price: string;
    InProgressHList_status: InProgressHStatus;
}

const PtasksListInProgress: InProgressHDetails[] = [
    {
        InProgressHList_id: 'SUB123456',
        InProgressHList_plan: 'Buyer Premium Plan (Sale)',
        InProgressHList_description: 'Buyer',
        InProgressHList_duration: 'Quarterly',
        InProgressHList_price: '₫ 35.99',
        InProgressHList_status: 'Active',
    },
    {
        InProgressHList_id: 'SUB123323',
        InProgressHList_plan: 'Buyer Premium Plan (Sale)',
        InProgressHList_description: 'Buyer',
        InProgressHList_duration: 'Monthly',
        InProgressHList_price: '₫ 35.99',
        InProgressHList_status: 'Inactive',
    },
    {
        InProgressHList_id: 'SUB123332',
        InProgressHList_plan: 'Owner Premium Plan',
        InProgressHList_description: 'Owner',
        InProgressHList_duration: 'Monthly',
        InProgressHList_price: '₫ 35.99',
        InProgressHList_status: 'Inactive',
    },
    {
        InProgressHList_id: 'SUB123324',
        InProgressHList_plan: 'Owner Premium Plan',
        InProgressHList_description: 'Owner',
        InProgressHList_duration: 'Quarterly',
        InProgressHList_price: '₫ 35.99',
        InProgressHList_status: 'Active',
    },
    {
        InProgressHList_id: 'SUB123362',
        InProgressHList_plan: 'Owner Premium Plan',
        InProgressHList_description: 'Owner',
        InProgressHList_duration: 'Monthly',
        InProgressHList_price: '₫ 35.99',
        InProgressHList_status: 'Inactive',
    },
    {
        InProgressHList_id: 'SUB123382',
        InProgressHList_plan: 'Buyer Premium Plan (Sale)',
        InProgressHList_description: 'Buyer',
        InProgressHList_duration: 'Monthly',
        InProgressHList_price: '₫ 35.99',
        InProgressHList_status: 'Inactive',
    },
    {
        InProgressHList_id: 'SUB129456',
        InProgressHList_plan: 'Buyer Premium Plan (Sale)',
        InProgressHList_description: 'Buyer',
        InProgressHList_duration: 'Quarterly',
        InProgressHList_price: '₫ 35.99',
        InProgressHList_status: 'Active',
    },
    {
        InProgressHList_id: 'SUB993323',
        InProgressHList_plan: 'Buyer Premium Plan (Sale)',
        InProgressHList_description: 'Buyer',
        InProgressHList_duration: 'Monthly',
        InProgressHList_price: '₫ 35.99',
        InProgressHList_status: 'Inactive',
    },
    {
        InProgressHList_id: 'SUB093332',
        InProgressHList_plan: 'Owner Premium Plan',
        InProgressHList_description: 'Owner',
        InProgressHList_duration: 'Monthly',
        InProgressHList_price: '₫ 35.99',
        InProgressHList_status: 'Inactive',
    },
    {
        InProgressHList_id: 'SUB873324',
        InProgressHList_plan: 'Owner Premium Plan',
        InProgressHList_description: 'Owner',
        InProgressHList_duration: 'Quarterly',
        InProgressHList_price: '₫ 35.99',
        InProgressHList_status: 'Active',
    },
    {
        InProgressHList_id: 'SUB583362',
        InProgressHList_plan: 'Owner Premium Plan',
        InProgressHList_description: 'Owner',
        InProgressHList_duration: 'Monthly',
        InProgressHList_price: '₫ 35.99',
        InProgressHList_status: 'Inactive',
    },
    {
        InProgressHList_id: 'SUB223382',
        InProgressHList_plan: 'Buyer Premium Plan (Sale)',
        InProgressHList_description: 'Buyer',
        InProgressHList_duration: 'Monthly',
        InProgressHList_price: '₫ 35.99',
        InProgressHList_status: 'Inactive',
    },
];


const getRoleStyles = (InProgressHList_status: InProgressHStatus) => {
    switch (InProgressHList_status) {
        case 'Active':
            return { color: '#50CD89', backgroundColor: '#E8FFF3' };
        case 'Inactive':
            return { color: '#F1416C', backgroundColor: '#FFF5F8' };
        default:
            return {};
    }
};

const InProgressHList: React.FC = () => {
    const [selectedInProgressH, setSelectedInProgressH] = useState<string | null>(null);

    const handleRowClick = (id: string) => {
        setSelectedInProgressH(id);
    };

    const handleBackClick = () => {
        setSelectedInProgressH(null);
    };

    return (
        <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
            <div className='d-flex flex-column flex-column-fluid'>
                <div className="card-body py-4">
                    <div className="table-responsive">
                        <table id="kt_table_tasks" className="table align-middle table-row-dashed fs-5 gy-5">
                            {!selectedInProgressH && (
                                <thead>
                                    <tr className="text-center text-muted fw-bold fs-5 text gs-0">
                                        <>
                                            <th className="min-w-125px">InProgress ID</th>
                                            <th className="min-w-125px">Plan</th>
                                            <th className="min-w-125px">Description</th>
                                            <th className="min-w-125px">Duration</th>
                                            <th className="min-w-125px">Price</th>
                                            <th className="min-w-125px">Status</th>
                                            <th className="min-w-100px">Actions</th>
                                        </>
                                    </tr>
                                </thead>
                            )}
                            <tbody className="text-center text-gray-600 fw-bold">
                                {PtasksListInProgress.map((task) => (
                                    <React.Fragment key={task.InProgressHList_id}>
                                        {(selectedInProgressH === null || selectedInProgressH === task.InProgressHList_id) && (
                                            <tr
                                                onClick={() => handleRowClick(task.InProgressHList_id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {!selectedInProgressH && (
                                                    <>
                                                        <td>{task.InProgressHList_id}</td>
                                                        <td>{task.InProgressHList_plan}</td>
                                                        <td>{task.InProgressHList_description}</td>
                                                        <td>{task.InProgressHList_duration}</td>
                                                        <td>{task.InProgressHList_price}</td>
                                                        <td className="text-center min-w-100px">
                                                            <div
                                                                className="badge"
                                                                style={{
                                                                    ...getRoleStyles(task.InProgressHList_status),
                                                                    padding: '1rem'
                                                                }}
                                                            >
                                                                {task.InProgressHList_status}
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
                    {!selectedInProgressH && (
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
                    {selectedInProgressH && (
                        <>
                            {PtasksListInProgress
                                .filter(task => task.InProgressHList_id === selectedInProgressH)
                                .map(task => (
                                    <div key={task.InProgressHList_id}>
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
                                                    InProgress Details
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
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">InProgress Id</label>
                                                    <div className="col-lg-8">
                                                        <span className="fw-bolder fs-6 text-muted">{task.InProgressHList_id}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">InProgress Description</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.InProgressHList_description}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">InProgress Duration</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.InProgressHList_duration}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Date & Time</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.InProgressHList_price}</span>
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

export default InProgressHList;

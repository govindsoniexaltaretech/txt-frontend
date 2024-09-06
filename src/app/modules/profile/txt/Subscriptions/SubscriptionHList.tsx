import React, { useState } from 'react';

type SubscriptionHStatus = 'Active' | 'Inactive';

interface SubscriptionHDetails {
    subscriptionHList_id: string;
    subscriptionHList_plan: string;
    subscriptionHList_description: string;
    subscriptionHList_duration: string;
    subscriptionHList_price: string;
    subscriptionHList_status: SubscriptionHStatus;
}

const tasksListSubscription: SubscriptionHDetails[] = [
    {
        subscriptionHList_id: 'SUB123456',
        subscriptionHList_plan: 'Buyer Premium Plan (Sale)',
        subscriptionHList_description: 'Buyer',
        subscriptionHList_duration: 'Quarterly',
        subscriptionHList_price: '₫ 35.99',
        subscriptionHList_status: 'Active',
    },
    {
        subscriptionHList_id: 'SUB123323',
        subscriptionHList_plan: 'Buyer Premium Plan (Sale)',
        subscriptionHList_description: 'Buyer',
        subscriptionHList_duration: 'Monthly',
        subscriptionHList_price: '₫ 35.99',
        subscriptionHList_status: 'Inactive',
    },
    {
        subscriptionHList_id: 'SUB123332',
        subscriptionHList_plan: 'Owner Premium Plan',
        subscriptionHList_description: 'Owner',
        subscriptionHList_duration: 'Monthly',
        subscriptionHList_price: '₫ 35.99',
        subscriptionHList_status: 'Inactive',
    },
    {
        subscriptionHList_id: 'SUB123324',
        subscriptionHList_plan: 'Owner Premium Plan',
        subscriptionHList_description: 'Owner',
        subscriptionHList_duration: 'Quarterly',
        subscriptionHList_price: '₫ 35.99',
        subscriptionHList_status: 'Active',
    },
    {
        subscriptionHList_id: 'SUB123362',
        subscriptionHList_plan: 'Owner Premium Plan',
        subscriptionHList_description: 'Owner',
        subscriptionHList_duration: 'Monthly',
        subscriptionHList_price: '₫ 35.99',
        subscriptionHList_status: 'Inactive',
    },
    {
        subscriptionHList_id: 'SUB123382',
        subscriptionHList_plan: 'Buyer Premium Plan (Sale)',
        subscriptionHList_description: 'Buyer',
        subscriptionHList_duration: 'Monthly',
        subscriptionHList_price: '₫ 35.99',
        subscriptionHList_status: 'Inactive',
    },
    {
        subscriptionHList_id: 'SUB129456',
        subscriptionHList_plan: 'Buyer Premium Plan (Sale)',
        subscriptionHList_description: 'Buyer',
        subscriptionHList_duration: 'Quarterly',
        subscriptionHList_price: '₫ 35.99',
        subscriptionHList_status: 'Active',
    },
    {
        subscriptionHList_id: 'SUB993323',
        subscriptionHList_plan: 'Buyer Premium Plan (Sale)',
        subscriptionHList_description: 'Buyer',
        subscriptionHList_duration: 'Monthly',
        subscriptionHList_price: '₫ 35.99',
        subscriptionHList_status: 'Inactive',
    },
    {
        subscriptionHList_id: 'SUB093332',
        subscriptionHList_plan: 'Owner Premium Plan',
        subscriptionHList_description: 'Owner',
        subscriptionHList_duration: 'Monthly',
        subscriptionHList_price: '₫ 35.99',
        subscriptionHList_status: 'Inactive',
    },
    {
        subscriptionHList_id: 'SUB873324',
        subscriptionHList_plan: 'Owner Premium Plan',
        subscriptionHList_description: 'Owner',
        subscriptionHList_duration: 'Quarterly',
        subscriptionHList_price: '₫ 35.99',
        subscriptionHList_status: 'Active',
    },
    {
        subscriptionHList_id: 'SUB583362',
        subscriptionHList_plan: 'Owner Premium Plan',
        subscriptionHList_description: 'Owner',
        subscriptionHList_duration: 'Monthly',
        subscriptionHList_price: '₫ 35.99',
        subscriptionHList_status: 'Inactive',
    },
    {
        subscriptionHList_id: 'SUB223382',
        subscriptionHList_plan: 'Buyer Premium Plan (Sale)',
        subscriptionHList_description: 'Buyer',
        subscriptionHList_duration: 'Monthly',
        subscriptionHList_price: '₫ 35.99',
        subscriptionHList_status: 'Inactive',
    },
];


const getRoleStyles = (subscriptionHList_status: SubscriptionHStatus) => {
    switch (subscriptionHList_status) {
        case 'Active':
            return { color: '#50CD89', backgroundColor: '#E8FFF3' };
        case 'Inactive':
            return { color: '#F1416C', backgroundColor: '#FFF5F8' };
        default:
            return {};
    }
};

const SubscriptionHList: React.FC = () => {
    const [selectedSubscriptionH, setSelectedSubscriptionH] = useState<string | null>(null);

    const handleRowClick = (id: string) => {
        setSelectedSubscriptionH(id);
    };

    const handleBackClick = () => {
        setSelectedSubscriptionH(null);
    };

    return (
        <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
            <div className='d-flex flex-column flex-column-fluid'>
                <div className="card-body py-4">
                    <div className="table-responsive">
                        <table id="kt_table_tasks" className="table align-middle table-row-dashed fs-5 gy-5">
                            {!selectedSubscriptionH && (
                                <thead>
                                    <tr className="text-center text-muted fw-bold fs-5 text gs-0">
                                        <>
                                            <th className="min-w-125px">Subscription ID</th>
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
                                {tasksListSubscription.map((task) => (
                                    <React.Fragment key={task.subscriptionHList_id}>
                                        {(selectedSubscriptionH === null || selectedSubscriptionH === task.subscriptionHList_id) && (
                                            <tr
                                                onClick={() => handleRowClick(task.subscriptionHList_id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {!selectedSubscriptionH && (
                                                    <>
                                                        <td>{task.subscriptionHList_id}</td>
                                                        <td>{task.subscriptionHList_plan}</td>
                                                        <td>{task.subscriptionHList_description}</td>
                                                        <td>{task.subscriptionHList_duration}</td>
                                                        <td>{task.subscriptionHList_price}</td>
                                                        <td className="text-center min-w-100px">
                                                            <div
                                                                className="badge"
                                                                style={{
                                                                    ...getRoleStyles(task.subscriptionHList_status),
                                                                    padding: '1rem'
                                                                }}
                                                            >
                                                                {task.subscriptionHList_status}
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
                    {!selectedSubscriptionH && (
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
                    {selectedSubscriptionH && (
                        <>
                            {tasksListSubscription
                                .filter(task => task.subscriptionHList_id === selectedSubscriptionH)
                                .map(task => (
                                    <div key={task.subscriptionHList_id}>
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
                                                    Subscription Details
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
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Subscription Id</label>
                                                    <div className="col-lg-8">
                                                        <span className="fw-bolder fs-6 text-muted">{task.subscriptionHList_id}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Subscription Description</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.subscriptionHList_description}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Subscription Duration</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.subscriptionHList_duration}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Date & Time</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.subscriptionHList_price}</span>
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

export default SubscriptionHList;

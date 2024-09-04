import React, { useState } from 'react';

type SubscriptionHStatus = 'Pending' | 'In Progress' | 'Completed';

interface SubscriptionHDetails {
    subscriptionHList_id: number;
    subscriptionHList_icon: string;
    subscriptionHList_location: string;
    subscriptionHList_category: string;
    subscriptionHList_due_date: string;
    subscriptionHList_status: SubscriptionHStatus;
}

const tasksList: SubscriptionHDetails[] = [
    {
        subscriptionHList_id: 1010,
        subscriptionHList_icon: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        subscriptionHList_location: '456 Maple Drive',
        subscriptionHList_category: 'Grocery Shopping',
        subscriptionHList_due_date: '10-10-2024 14:00',
        subscriptionHList_status: 'Pending',
    },
    {
        subscriptionHList_id: 2020,
        subscriptionHList_icon: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        subscriptionHList_location: '789 Oak Lane',
        subscriptionHList_category: 'House Repair',
        subscriptionHList_due_date: '11-11-2024 09:00',
        subscriptionHList_status: 'In Progress',
    },
    {
        subscriptionHList_id: 3030,
        subscriptionHList_icon: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        subscriptionHList_location: '123 Pine Avenue',
        subscriptionHList_category: 'Gardening',
        subscriptionHList_due_date: '12-12-2024 08:00',
        subscriptionHList_status: 'Completed',
    },
    {
        subscriptionHList_id: 4040,
        subscriptionHList_icon: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        subscriptionHList_location: '234 Cedar Street',
        subscriptionHList_category: 'Car Maintenance',
        subscriptionHList_due_date: '13-13-2024 15:00',
        subscriptionHList_status: 'Pending',
    },
];

const SubscriptionHStatusColors: { [key in SubscriptionHStatus]: string } = {
    Pending: '#FF5733',
    'In Progress': '#FFC300',
    Completed: '#28B463',
};

const SubscriptionHList: React.FC = () => {
    const [selectedSubscriptionH, setSelectedSubscriptionH] = useState<number | null>(null);

    const handleRowClick = (id: number) => {
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
                        <table id="kt_table_tasks" className="table align-middle table-row-dashed fs-6 gy-5">
                            {!selectedSubscriptionH && (
                                <thead>
                                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                        <>
                                            <th className="min-w-125px">Service Id</th>
                                            <th className="min-w-125px">Service</th>
                                            <th className="min-w-125px">Service Type</th>
                                            <th className="min-w-125px">Date & Time Availed</th>
                                            <th className="min-w-125px">Service Provider</th>
                                            <th className="text-end min-w-100px">Status</th>
                                        </>
                                    </tr>
                                </thead>
                            )}
                            <tbody className="text-gray-600 fw-bold">
                                {tasksList.map((task) => (
                                    <React.Fragment key={task.subscriptionHList_id}>
                                        {(selectedSubscriptionH === null || selectedSubscriptionH === task.subscriptionHList_id) && (
                                            <tr
                                                onClick={() => handleRowClick(task.subscriptionHList_id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {!selectedSubscriptionH && (
                                                    <>
                                                        <td>{task.subscriptionHList_id}</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol overflow-hidden me-3">
                                                                    <a href="#">
                                                                        <div className="symbol-label">
                                                                            <img src={task.subscriptionHList_icon} alt={`Task ${task.subscriptionHList_id}`} className="w-100" />
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{task.subscriptionHList_location}</td>
                                                        <td>{task.subscriptionHList_due_date}</td>
                                                        <td>{task.subscriptionHList_category}</td>
                                                        <td className="text-end min-w-100px">
                                                            <div
                                                                className="badge"
                                                                style={{
                                                                    backgroundColor: SubscriptionHStatusColors[task.subscriptionHList_status as SubscriptionHStatus] || '#CCCCCC',
                                                                    color: '#fff',
                                                                    padding: '5px 10px',
                                                                    borderRadius: '5px',
                                                                    fontWeight: 'bold'
                                                                }}
                                                            >
                                                                {task.subscriptionHList_status}
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
                    {selectedSubscriptionH && (
                        <>
                            {tasksList
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
                                                        Task Details
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0">
                                            <div className="card-body p-0">
                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Service Id</label>
                                                    <div className="col-lg-8">
                                                        <span className="fw-bolder fs-6 text-muted">{task.subscriptionHList_id}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Service Type</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.subscriptionHList_location}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Icon</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">Independent Task</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Service Provider</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.subscriptionHList_category}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Date & Time</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.subscriptionHList_due_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items my-2">
                                                <div className=''>
                                                    <div className="row mb-7" style={{ justifyContent: 'center' }}>
                                                        <div className="col-lg-8 fv-row">
                                                            <div className="symbol-label">
                                                                <img src={task.subscriptionHList_icon} alt={`Property ${task.subscriptionHList_id}`} style={{ width: '100%' }} />
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

export default SubscriptionHList;

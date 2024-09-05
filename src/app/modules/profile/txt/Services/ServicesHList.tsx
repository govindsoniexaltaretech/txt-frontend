import React, { useState } from 'react';

type TaskStatus = 'Scheduled' | 'Requested' | 'Completed' | 'Rescheduled' | 'Cancelled' ;

interface TaskDetails {
    task_id: number;
    task_icon: string;
    task_location: string;
    task_category: string;
    task_due_date: string;
    task_status: TaskStatus;
}
const tasksList: TaskDetails[] = [
    {
        task_id: 1011,
        task_icon: '/media/avatars/300-5.jpg',
        task_location: '987 Elm Street',
        task_category: 'Dog Walking',
        task_due_date: '14-14-2024 10:00',
        task_status: 'Scheduled',
    },
    {
        task_id: 2021,
        task_icon: '/media/avatars/300-7.jpg',
        task_location: '321 Birch Road',
        task_category: 'Package Delivery',
        task_due_date: '15-15-2024 12:00',
        task_status: 'Requested',
    },
    {
        task_id: 3031,
        task_icon: '/media/avatars/300-8.jpg',
        task_location: '654 Willow Drive',
        task_category: 'Cleaning',
        task_due_date: '16-16-2024 14:00',
        task_status: 'Completed',
    },
    {
        task_id: 4041,
        task_icon: '/media/avatars/300-9.jpg',
        task_location: '789 Spruce Lane',
        task_category: 'Laundry',
        task_due_date: '17-17-2024 16:00',
        task_status: 'Rescheduled',
    },
    {
        task_id: 5051,
        task_icon: '/media/avatars/300-10.jpg',
        task_location: '159 Chestnut Avenue',
        task_category: 'Meal Preparation',
        task_due_date: '18-18-2024 18:00',
        task_status: 'Cancelled',
    },
    {
        task_id: 6061,
        task_icon: '/media/avatars/300-11.jpg',
        task_location: '951 Redwood Street',
        task_category: 'Grocery Delivery',
        task_due_date: '19-19-2024 20:00',
        task_status: 'Scheduled',
    },
    {
        task_id: 7071,
        task_icon: '/media/avatars/300-12.jpg',
        task_location: '357 Aspen Road',
        task_category: 'Babysitting',
        task_due_date: '20-20-2024 22:00',
        task_status: 'Requested',
    },
    {
        task_id: 8081,
        task_icon: '/media/avatars/300-13.jpg',
        task_location: '753 Fir Avenue',
        task_category: 'Pet Grooming',
        task_due_date: '21-21-2024 06:00',
        task_status: 'Completed',
    },
    {
        task_id: 9091,
        task_icon: '/media/avatars/300-14.jpg',
        task_location: '852 Maple Street',
        task_category: 'Lawn Mowing',
        task_due_date: '22-22-2024 08:00',
        task_status: 'Rescheduled',
    },
    {
        task_id: 10102,
        task_icon: '/media/avatars/300-15.jpg',
        task_location: '963 Pine Crescent',
        task_category: 'House Cleaning',
        task_due_date: '23-23-2024 10:00',
        task_status: 'Cancelled',
    },
];


const getRoleStyles = (task_status: TaskStatus) => {
    switch (task_status) {
        case 'Scheduled':
            return { color: '#3E97FF', backgroundColor: '#EEF6FF' };
        case 'Completed':
            return { color: '#50CD89', backgroundColor: '#E8FFF3' };
        case 'Requested':
            return { color: '#FFC300', backgroundColor: '#FFF8DD' };
        case 'Rescheduled':
            return { color: '#7239EA', backgroundColor: '#F8F5FF' };
        case 'Cancelled':
            return { color: '#F1416C', backgroundColor: '#FFF5F8' };
        default:
            return {};
    }
};

const ServicesHList: React.FC = () => {
    const [selectedTask, setSelectedTask] = useState<number | null>(null);

    const handleRowClick = (id: number) => {
        setSelectedTask(id);
    };

    const handleBackClick = () => {
        setSelectedTask(null);
    };

    return (
        <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
            <div className='d-flex flex-column flex-column-fluid'>
                <div className="card-body py-4">
                    <div className="table-responsive">
                        <table id="kt_table_tasks" className="table align-middle table-row-dashed fs-5 gy-5">
                            {!selectedTask && (
                                <thead>
                                    <tr className="text-start text-muted fw-bolder fs-5 text gs-0">
                                        <>
                                            <th className="min-w-125px">Service Id</th>
                                            <th className="min-w-125px">Service</th>
                                            <th className="min-w-125px">Service Type</th>
                                            <th className="min-w-125px">Date & Time Availed</th>
                                            <th className="min-w-125px">Service Provider</th>
                                            <th className="text-center min-w-100px">Status</th>
                                        </>
                                    </tr>
                                </thead>
                            )}
                            <tbody className="text-gray-600 fw-bold">
                                {tasksList.map((task) => (
                                    <React.Fragment key={task.task_id}>
                                        {(selectedTask === null || selectedTask === task.task_id) && (
                                            <tr
                                                onClick={() => handleRowClick(task.task_id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {!selectedTask && (
                                                    <>
                                                        <td>{task.task_id}</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol overflow-hidden me-3" style={{ borderRadius: "0"}}>
                                                                    <a href="#">
                                                                        <div className="symbol-label" style={{ borderRadius: "0"}}>
                                                                            <img src={task.task_icon} alt={`Task ${task.task_id}`} className="w-100" />
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{task.task_location}</td>
                                                        <td>{task.task_due_date}</td>
                                                        <td>{task.task_category}</td>
                                                        <td className="text-center min-w-100px">
                                                            <div
                                                                className="badge"
                                                                style={{
                                                                    ...getRoleStyles(task.task_status),
                                                                    padding: '1rem'
                                                                }}
                                                            >
                                                                {task.task_status}
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
                    {selectedTask && (
                        <>
                            {tasksList
                                .filter(task => task.task_id === selectedTask)
                                .map(task => (
                                    <div key={task.task_id}>
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
                                                        <span className="fw-bolder fs-6 text-muted">{task.task_id}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Service Type</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.task_location}</span>
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
                                                        <span className="fw-bold fs-6 text-muted">{task.task_category}</span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-6 fw-bolder text-gray-900">Date & Time</label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-6 text-muted">{task.task_due_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items my-2">
                                                <div className=''>
                                                    <div className="row mb-7" style={{ justifyContent: 'center' }}>
                                                        <div className="col-lg-8 fv-row">
                                                            <div className="symbol-label">
                                                                <img src={task.task_icon} alt={`Property ${task.task_id}`} style={{ width: '100%' }} />
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

export default ServicesHList;

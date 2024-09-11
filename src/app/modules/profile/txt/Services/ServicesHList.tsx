import React, { useState } from 'react';

type TaskStatus = 'Scheduled' | 'Requested' | 'Completed' | 'Rescheduled' | 'Cancelled';

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
        task_id: 3354,
        task_icon: '/media/logos/service/1.jpg',
        task_location: 'Curtain cleaning',
        task_category: 'Taylor Smith',
        task_due_date: '30-07-2024 18:00',
        task_status: 'Scheduled',
    },
    {
        task_id: 2485,
        task_icon: '/media/logos/service/2.png',
        task_location: 'AC cleaning',
        task_category: '-',
        task_due_date: '27-07-2024 16:00',
        task_status: 'Requested',
    },
    {
        task_id: 3574,
        task_icon: '/media/logos/service/3.png',
        task_location: 'Curtain cleaning ',
        task_category: 'Taylor Smith',
        task_due_date: '26-07-2024 14:00',
        task_status: 'Completed',
    },
    {
        task_id: 2482,
        task_icon: '/media/logos/service/4.png',
        task_location: 'Curtain cleaning',
        task_category: 'Taylor Smith',
        task_due_date: '24-07-2024 14:00',
        task_status: 'Completed',
    },
    {
        task_id: 4875,
        task_icon: '/media/logos/service/5.png',
        task_location: 'AC cleaning',
        task_category: 'Olivia Thomas',
        task_due_date: '20-07-2024 12:00',
        task_status: 'Scheduled',
    },
    {
        task_id: 6475,
        task_icon: '/media/logos/service/6.png',
        task_location: 'Plumbing',
        task_category: 'Amelia Jones',
        task_due_date: '17-07-2024 09:00',
        task_status: 'Rescheduled',
    },
    {
        task_id: 2288,
        task_icon: '/media/logos/service/1.jpg',
        task_location: 'AC Repair',
        task_category: 'Joel Zoe',
        task_due_date: '15-07-2024 10:00',
        task_status: 'Cancelled',
    },
    {
        task_id: 3544,
        task_icon: '/media/logos/service/2.png',
        task_location: 'AC Repair',
        task_category: 'Taylor Smith',
        task_due_date: '13-07-2024 18:00',
        task_status: 'Cancelled',
    },
    {
        task_id: 3665,
        task_icon: '/media/logos/service/3.png',
        task_location: 'AC cleaning',
        task_category: '-',
        task_due_date: '12-07-2024 13:00',
        task_status: 'Scheduled',
    },
    {
        task_id: 10102,
        task_icon: '/media/logos/service/1.jpg',
        task_location: 'Curtain cleaning',
        task_category: 'Taylor Smith',
        task_due_date: '30-07-2024 18:00',
        task_status: 'Scheduled',
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
        <>
            {!selectedTask && (
                <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
                    <div className='d-flex flex-column flex-column-fluid'>
                        <div className='card'>
                            <div className="card-body py-4">
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
                                                    Service Type<i className="ki-duotone ki-down fs-5 m-0"></i>

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
                                                    Service Between<i className="ki-duotone ki-down fs-5 m-0"></i>

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
                                    <table id="kt_table_tasks" className="table align-middle table-row-dashed fs-5 gy-5">
                                        {!selectedTask && (
                                            <thead>
                                                <tr className="text-start text-muted fw-bolder fs-5 text gs-0">
                                                    <>
                                                        <th className="text-center min-w-125px">Service Id</th>
                                                        <th className="text-center min-w-125px">Service</th>
                                                        <th className="text-center min-w-125px">Service Type</th>
                                                        <th className="text-center min-w-125px">Date & Time Availed</th>
                                                        <th className="text-center min-w-125px">Service Provider</th>
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
                                                                    <td className="text-center">{task.task_id}</td>
                                                                    <td className="text-center">
                                                                        <div className="align-items-center">
                                                                            <div className="symbol overflow-hidden me-3" style={{ borderRadius: "0" }}>
                                                                                <a href="#">
                                                                                    <div className="symbol-label" style={{ borderRadius: "0" }}>
                                                                                        <img src={task.task_icon} alt={`Task ${task.task_id}`} className="w-100" />
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">{task.task_location}</td>
                                                                    <td className="text-center">{task.task_due_date}</td>
                                                                    <td className="text-center">{task.task_category}</td>
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
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectedTask && (
                <>
                    {tasksList
                        .filter(task => task.task_id === selectedTask)
                        .map(task => (
                            <div className='card'>

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
                                                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-1 my-0 flex-column justify-content-center">
                                                    Service details
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
                                                <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Service Id</label>
                                                <div className="col-lg-8">
                                                    <span className="fw-bolder fs-2 text-muted">{task.task_id}</span>
                                                </div>
                                            </div>

                                            <div className="row mb-7">
                                                <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Service Type</label>
                                                <div className="col-lg-8 fv-row">
                                                    <span className="fw-bold fs-2 text-muted">{task.task_location}</span>
                                                </div>
                                            </div>

                                            <div className="row mb-7">
                                                <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Service Provider</label>
                                                <div className="col-lg-8 fv-row">
                                                    <span className="fw-bold fs-2 text-muted">{task.task_category}</span>
                                                </div>
                                            </div>

                                            <div className="row mb-7">
                                                <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Date & Time</label>
                                                <div className="col-lg-8 fv-row">
                                                    <span className="fw-bold fs-2 text-muted">{task.task_due_date}</span>
                                                </div>
                                            </div>

                                            <div className="row mb-7">
                                                <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Status</label>
                                                <div
                                                    className="col-lg-8 fv-row"
                                                    style={{
                                                        ...getRoleStyles(task.task_status),
                                                        padding: '1rem',
                                                        width: 'auto'
                                                    }}
                                                >
                                                    <span className="fw-bold fs-2">{task.task_status}</span>
                                                </div>
                                            </div>

                                        </div>
                                        {/* <div className="d-flex align-items my-2">
                                        <div className=''>
                                            <div className="row mb-7" style={{ justifyContent: '' }}>
                                                <div className="col-lg-8 fv-row">
                                                    <div className="symbol-label">
                                                        <img src={task.task_icon} alt={`Property ${task.task_id}`} style={{ width: '30rem' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{ justifyContent: 'center' }}>
                                                <button onClick={handleBackClick} className="btn btn-primary" style={{ width: "auto" }}>
                                                    Back to List
                                                </button>
                                            </div>
                                        </div>
                                    </div> */}
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
                                                            <img src={task.task_icon} alt={`Property ${task.task_id}`} style={{ width: '26rem', display: 'block', margin: '0 auto' }} />
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
                        ))}
                </>
            )}
        </>
    );
};

export default ServicesHList;

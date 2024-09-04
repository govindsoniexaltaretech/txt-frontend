import React, { useState } from 'react';

type TaskStatus = 'Pending' | 'In Progress' | 'Completed';

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
        task_id: 1010,
        task_icon: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        task_location: '456 Maple Drive',
        task_category: 'Grocery Shopping',
        task_due_date: '10-10-2024 14:00',
        task_status: 'Pending',
    },
    {
        task_id: 2020,
        task_icon: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        task_location: '789 Oak Lane',
        task_category: 'House Repair',
        task_due_date: '11-11-2024 09:00',
        task_status: 'In Progress',
    },
    {
        task_id: 3030,
        task_icon: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        task_location: '123 Pine Avenue',
        task_category: 'Gardening',
        task_due_date: '12-12-2024 08:00',
        task_status: 'Completed',
    },
    {
        task_id: 4040,
        task_icon: '/metronic8/react/demo1/media/avatars/300-5.jpg',
        task_location: '234 Cedar Street',
        task_category: 'Car Maintenance',
        task_due_date: '13-13-2024 15:00',
        task_status: 'Pending',
    },
];

const taskStatusColors: { [key in TaskStatus]: string } = {
    Pending: '#FF5733',
    'In Progress': '#FFC300',
    Completed: '#28B463',
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
                        <table id="kt_table_tasks" className="table align-middle table-row-dashed fs-6 gy-5">
                            {!selectedTask && (
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
                                                                <div className="symbol overflow-hidden me-3">
                                                                    <a href="#">
                                                                        <div className="symbol-label">
                                                                            <img src={task.task_icon} alt={`Task ${task.task_id}`} className="w-100" />
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{task.task_location}</td>
                                                        <td>{task.task_due_date}</td>
                                                        <td>{task.task_category}</td>
                                                        <td className="text-end min-w-100px">
                                                            <div
                                                                className="badge"
                                                                style={{
                                                                    backgroundColor: taskStatusColors[task.task_status as TaskStatus] || '#CCCCCC',
                                                                    color: '#fff',
                                                                    padding: '5px 10px',
                                                                    borderRadius: '5px',
                                                                    fontWeight: 'bold'
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

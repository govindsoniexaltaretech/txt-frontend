import React, { useState } from 'react';
import AppointmentList from '../Users/tab/AppointmentList';

const Home: React.FC = () => {
    const [status, setStatus] = useState<string>('Status'); // Initialize with default value

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value);
    };
    return (
        <>
            <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
                <div className='d-flex flex-column flex-column-fluid'>
                    <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                        <div id="kt_app_toolbar_container" className="app-container d-flex flex-stack container-xxl">
                            <div
                                id="kt_page_title"
                                data-kt-swapper="true"
                                data-kt-swapper-mode="prepend"
                                data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                                className="page-title d-flex flex-wrap me-3 flex-column justify-content-center"
                            >
                                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 my-0 flex-column justify-content-center">
                                    Appointments
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div id="kt_app_content" className="app-content flex-column-fluid">
                        <div id="kt_app_content_container" className="app-container container-xxl">
                            <div className="card">
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
                                                placeholder="Search user"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                    <div className="card-toolbar">
                                        <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                                            <select
                                                name="status"
                                                value={status} // Set the selected value
                                                onChange={handleChange} // Handle change event
                                                className="form-select form-select-white form-select-sm w-125px"
                                                data-control="select2"
                                                data-hide-search="true"
                                            >
                                                <option value="Status">Online</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Declined">Declined</option>
                                                <option value="Accepted">Accepted</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <AppointmentList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

import React, { useState } from 'react';

type CMSHListStatus = 'Published' | 'Draft';

interface CMSHListDetails {
    id: number;
    page_name: string;
    last_updated: string;
    CMSHList_status: CMSHListStatus;
}
const CMSHListsList: CMSHListDetails[] = [
    
    {
        id: 3354,
        page_name: "About Us",
        last_updated: "06-06-2024 18:00",
        CMSHList_status: 'Published',
    },
    {
        id: 3354,
        page_name: "Contact Us",
        last_updated: "06-06-2024 18:00",
        CMSHList_status: 'Published',
    },
    {
        id: 3354,
        page_name: "FAQ",
        last_updated: "06-06-2024 18:00",
        CMSHList_status: 'Draft',
    },
    {
        id: 3354,
        page_name: "Privacy Policy",
        last_updated: "06-06-2024 18:00",
        CMSHList_status: 'Published',
    },
    {
        id: 3354,
        page_name: "Cancellation & Rescheduling Policy",
        last_updated: "06-06-2024 18:00",
        CMSHList_status: 'Published',
    },
    {
        id: 3354,
        page_name: "Terms & Conditions",
        last_updated: "06-06-2024 18:00",
        CMSHList_status: 'Published',
    },
];


const getRoleStyles = (CMSHList_status: CMSHListStatus) => {
    switch (CMSHList_status) {
        case 'Published':
            return { color: '#50CD89', backgroundColor: '#E8FFF3' };
        case 'Draft':
            return { color: '#7239EA', backgroundColor: '#F8F5FF' };
        default:
            return {};
    }
};

const CMSHList: React.FC = () => {
    const [selectedCMSHList, setSelectedCMSHList] = useState<number | null>(null);

    const handleRowClick = (id: number) => {
        setSelectedCMSHList(id);
    };

    const handleBackClick = () => {
        setSelectedCMSHList(null);
    };

    return (
        <>
            {!selectedCMSHList && (
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
                                                <span className="fw-bold fs-2 text-muted">
                                                    <a className='btn btn-sm fs-4 btn-primary'>Create Page</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table id="kt_table_CMSHLists" className="table align-middle table-row-dashed fs-5 gy-5">
                                            {!selectedCMSHList && (
                                                <thead>
                                                    <tr className="text-start text-muted fw-bolder fs-5 text gs-0">
                                                        <>
                                                            <th className="text text min-w-125px px-16">Page Name</th>
                                                            <th className="text min-w-125px">Last Updated</th>
                                                            <th className="text min-w-125px">Updated By</th>
                                                            <th className="text-center min-w-100px">Status</th>
                                                            <th className="text-center min-w-100px">Action</th>
                                                        </>
                                                    </tr>
                                                </thead>
                                            )}
                                            <tbody className="text-gray-600 fw-bold">
                                                {CMSHListsList.map((CMSHList) => (
                                                    <React.Fragment key={CMSHList.id}>
                                                        {(selectedCMSHList === null || selectedCMSHList === CMSHList.id) && (
                                                            <tr
                                                                // onClick={() => handleRowClick(CMSHList.id)}
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                {!selectedCMSHList && (
                                                                    <>
                                                                        <td className="text px-16">{CMSHList.page_name}</td>
                                                                        <td className="text">{CMSHList.last_updated}</td>
                                                                        <td className="text">{CMSHList.id}</td>
                                                                        <td className="text-center min-w-100px">
                                                                            <div
                                                                                className="badge"
                                                                                style={{
                                                                                    ...getRoleStyles(CMSHList.CMSHList_status),
                                                                                    padding: '1rem'
                                                                                }}
                                                                            >
                                                                                {CMSHList.CMSHList_status}
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <div
                                                                                className="text-center d-flex align-items my-2"
                                                                                style={{ justifyContent: "center" }}
                                                                            >
                                                                                <div className="">
                                                                                    <i className="iconend border border-gray-300 border rounded py-3 px-4 me-6 mb-3 bi bi-pencil"></i>
                                                                                </div>
                                                                                <div className="">
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
                                </>

                                {!selectedCMSHList && (

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

            {/* {selectedCMSHList && (
                <>
                    {CMSHListsList
                        .filter(CMSHList => CMSHList.id === selectedCMSHList)
                        .map(CMSHList => (
                            <>
                                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                                    <div className='card'>
                                        <div className="card-body py-4">
                                            <div key={CMSHList.id}>
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
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Property Id</label>
                                                            <div className="col-lg-8">
                                                                <span className="fw-bolder fs-2 text-muted">{CMSHList.id}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Property Type</label>
                                                            <div className="col-lg-8 fv-row">
                                                                <span className="fw-bold fs-2 text-muted">{CMSHList.CMSHList_location}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Address</label>
                                                            <div className="col-lg-8 fv-row">
                                                                <span className="fw-bold fs-2 text-muted">{CMSHList.CMSHList_category}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Date Uploaded</label>
                                                            <div className="col-lg-8 fv-row">
                                                                <span className="fw-bold fs-2 text-muted">{CMSHList.CMSHList_due_date}</span>
                                                            </div>
                                                        </div>

                                                        <div className="row mb-7">
                                                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Status</label>
                                                            <div
                                                                className="col-lg-8 fv-row"
                                                                style={{
                                                                    ...getRoleStyles(CMSHList.CMSHList_status),
                                                                    padding: '1rem',
                                                                    width: 'auto'
                                                                }}
                                                            >
                                                                <span className="fw-bold fs-2">{CMSHList.CMSHList_status}</span>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                </>
            )} */}
        </>
    );
};

export default CMSHList;

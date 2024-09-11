import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./FeedbackList.css";
type Status = "Open" | "In Progress" | "Resolved";
interface FeedbackList {
    complaint_id: number;
    name: string;
    email: string;
    avatarInitial?: string;
    avatarColor?: string;
    avatar: string | null;
    property_type: string;
    description_list: string;
    date_submitted: string;
    date_time: string;
    status: Status;
}
const FeedbackLists: FeedbackList[] = [
    {
        complaint_id: 3451,
        name: "Kim Ji-Soo",
        email: "kimjisoo@soundcloud.com",
        avatar: "/media/logos/users/1.png",
        property_type: "Complaint",
        description_list:
            "I booked a cleaning service for my apartment, but the cleaners arrived two hours late and did not clean the kitchen area as requested. I had to reschedule my plans due to the delay, and the service quality was unsatisfactory. Please address this issue and provide a resolution.",
        date_submitted: "06-06-2024 18:00",
        date_time: "-",
        status: "Open",
    },
    {
        complaint_id: 2352,
        name: "Suzuki Aoi",
        email: "suzukiaoi@privacy.gov.au",
        avatar: "/media/logos/users/2.png",
        property_type: "Feedback",
        description_list:
            "I booked a cleaning service for my apartment, but the cleaners arrived two hours late and did not clean the kitchen area as requested. I had to reschedule my plans due to the delay, and the service quality was unsatisfactory. Please address this issue and provide a resolution.",
        date_submitted: "06-06-2024 18:00",
        date_time: "-",
        status: "Open",
    },
    {
        complaint_id: 3212,
        name: "Takahashi Sora",
        email: "takahashisora@uiuc.edu",
        avatar: "/media/logos/users/3.png",
        property_type: "Complaint",
        description_list:
            "I booked a cleaning service for my apartment, but the cleaners arrived two hours late and did not clean the kitchen area as requested. I had to reschedule my plans due to the delay, and the service quality was unsatisfactory. Please address this issue and provide a resolution.",
        date_submitted: "06-06-2024 18:00",
        date_time: "-",
        status: "Open",
    },
    {
        complaint_id: 4234,
        name: "Wang Wei",
        email: "wangwei17@abc.net.au",
        avatar: null,
        avatarInitial: "WW",
        property_type: "Escalation",
        description_list:
            "I booked a cleaning service for my apartment, but the cleaners arrived two hours late and did not clean the kitchen area as requested. I had to reschedule my plans due to the delay, and the service quality was unsatisfactory. Please address this issue and provide a resolution.",
        date_submitted: "06-06-2024 18:00",
        date_time: "-",
        status: "In Progress",
    },
    {
        complaint_id: 7612,
        name: "Kim Ji-Soo",
        email: "kimjisoo@soundcloud.com",
        avatar: "/media/logos/users/1.png",
        property_type: "Complaint",
        description_list:
            "I booked a cleaning service for my apartment, but the cleaners arrived two hours late and did not clean the kitchen area as requested. I had to reschedule my plans due to the delay, and the service quality was unsatisfactory. Please address this issue and provide a resolution.",
        date_submitted: "06-06-2024 18:00",
        date_time: "08-06-2024 09:00",
        status: "Resolved",
    },
    {
        complaint_id: 8734,
        name: "Suzuki Aoi",
        email: "suzukiaoi@privacy.gov.au",
        avatar: "/media/logos/users/2.png",
        property_type: "Complaint",
        description_list:
            "I booked a cleaning service for my apartment, but the cleaners arrived two hours late and did not clean the kitchen area as requested. I had to reschedule my plans due to the delay, and the service quality was unsatisfactory. Please address this issue and provide a resolution.",
        date_submitted: "06-06-2024 18:00",
        date_time: "09-06-2024 11:00",
        status: "Resolved",
    },
];

const getRoleStyles = (status: Status) => {
    switch (status) {
        case "Open":
            return { color: "#3E97FF", backgroundColor: "#EEF6FF" };
        case "Resolved":
            return { color: "#50CD89", backgroundColor: "#E8FFF3" };
        case "In Progress":
            return { color: "#7239EA", backgroundColor: "#F8F5FF" };
        default:
            return {};
    }
};

const FeedbackHList: React.FC = () => {
    const [selectedFeedbackList, setSelectedFeedbackList] = useState<
        number | null
    >(null);
    const [editorContent, setEditorContent] = useState<string>("");

    const handleRowClick = (id: number) => {
        setSelectedFeedbackList(id);
    };

    const handleBackClick = () => {
        setSelectedFeedbackList(null);
    };

    const handleEditorChange = (value: string) => {
        setEditorContent(value);
    };

    return (
        <>
            {!selectedFeedbackList && (
                <>
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
                                        placeholder="Search"
                                        value=""
                                    />
                                </div>
                            </div>
                            <div className="card-toolbar">
                                <div
                                    className="d-flex justify-content-end"
                                    data-kt-user-table-toolbar="base"
                                >
                                    <div className="rest" style={{ paddingRight: ".7rem" }}>
                                        <a
                                            href="#"
                                            className="btn btn-light btn-active-light-primary btn-sm"
                                            data-kt-menu-trigger="click"
                                            data-kt-menu-placement="bottom-end"
                                            style={{
                                                width: "14rem",
                                                justifyContent: "space-between",
                                                display: "flex",
                                            }}
                                        >
                                            Type<i className="ki-duotone ki-down fs-5 m-0"></i>
                                        </a>
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4">
                                            <div className="menu-item px-3">
                                                <a className="menu-link px-3">Edit</a>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a
                                                    className="menu-link px-3"
                                                    data-kt-users-table-filter="delete_row"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rest" style={{ paddingRight: "0rem" }}>
                                        <a
                                            href="#"
                                            className="btn btn-light btn-active-light-primary btn-sm"
                                            data-kt-menu-trigger="click"
                                            data-kt-menu-placement="bottom-end"
                                            style={{
                                                width: "14rem",
                                                justifyContent: "space-between",
                                                display: "flex",
                                            }}
                                        >
                                            Status<i className="ki-duotone ki-down fs-5 m-0"></i>
                                        </a>
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4">
                                            <div className="menu-item px-3">
                                                <a className="menu-link px-3">Edit</a>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a
                                                    className="menu-link px-3"
                                                    data-kt-users-table-filter="delete_row"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div
                                className="app-main flex-column flex-row-fluid"
                                id="kt_app_main"
                            >
                                <div className="d-flex flex-column flex-column-fluid">
                                    <div className="card-body py-4">
                                        <div className="table-responsive">
                                            <table
                                                id="kt_table_users"
                                                className="table align-middle table-row-dashed fs-5 gy-5"
                                            >
                                                {!selectedFeedbackList && (
                                                    <thead>
                                                        <tr className="text-center text-muted fw-bolder fs-5 gs-0">
                                                            <>
                                                                <th className="min-w-125px">Complaint Id</th>
                                                                <th className="min-w-125px">Users</th>
                                                                <th className="min-w-125px">Type</th>
                                                                <th className="min-w-125px">Description</th>
                                                                <th className="min-w-125px">Date Submitted</th>
                                                                <th className="min-w-125px">Date Closed</th>
                                                                <th className="text-center min-w-100px">
                                                                    Status
                                                                </th>
                                                                <th className="min-w-100px">Actions</th>
                                                            </>
                                                        </tr>
                                                    </thead>
                                                )}
                                                <tbody className="text-gray-600 fs-4 fw-bold">
                                                    {FeedbackLists.map((FeedbackList) => (
                                                        <React.Fragment key={FeedbackList.complaint_id}>
                                                            {(selectedFeedbackList === null ||
                                                                selectedFeedbackList ===
                                                                FeedbackList.complaint_id) && (
                                                                    <tr
                                                                        onClick={() =>
                                                                            handleRowClick(FeedbackList.complaint_id)
                                                                        }
                                                                        style={{ cursor: "pointer" }}
                                                                    >
                                                                        {!selectedFeedbackList && (
                                                                            <>
                                                                                <td className="text-center">
                                                                                    {FeedbackList.complaint_id}
                                                                                </td>
                                                                                <td>
                                                                                    <a href="/users-overview">
                                                                                        <div className="d-flex align-items-center">
                                                                                            <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                                {FeedbackList.avatar ? (
                                                                                                    <a href="/users-overview">
                                                                                                        <div className="symbol-label">
                                                                                                            <img
                                                                                                                src={FeedbackList.avatar}
                                                                                                                alt={FeedbackList.name}
                                                                                                                className="w-80"
                                                                                                            />
                                                                                                        </div>
                                                                                                    </a>
                                                                                                ) : (
                                                                                                    <a href="/users-overview">

                                                                                                        <div
                                                                                                            className={`symbol-label fs-4 text-muted ${FeedbackList.avatarColor}`}
                                                                                                        >
                                                                                                            {FeedbackList.avatarInitial}
                                                                                                        </div>
                                                                                                    </a>
                                                                                                )}
                                                                                            </div>
                                                                                            <div className="text-gray-600 d-flex flex-column fw-bold fs-5 text-muted">
                                                                                                <a href="/users-overview">

                                                                                                    <span
                                                                                                        className="text-gray-600 fw-bold fs-5 text-muted text-hover-primary mb-1"
                                                                                                    >
                                                                                                        {FeedbackList.name}
                                                                                                    </span>
                                                                                                </a>

                                                                                                <a href="/users-overview">

                                                                                                    <span className="text-gray-600 fw-bold fs-5 text-muted text-hover-primary mb-1">{FeedbackList.email}</span>
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </td>

                                                                                <td className="text-center">
                                                                                    {FeedbackList.property_type}
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    {FeedbackList.description_list
                                                                                        .split(" ")
                                                                                        .slice(0, 5)
                                                                                        .join(" ") +
                                                                                        (FeedbackList.description_list.split(
                                                                                            " "
                                                                                        ).length > 5
                                                                                            ? "..."
                                                                                            : "")}
                                                                                </td>

                                                                                <td className="text-center">
                                                                                    {FeedbackList.date_submitted}
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    {FeedbackList.date_time}
                                                                                </td>
                                                                                <td className="text-center min-w-100px">
                                                                                    <div
                                                                                        className="badge"
                                                                                        style={{
                                                                                            ...getRoleStyles(
                                                                                                FeedbackList.status
                                                                                            ),
                                                                                            padding: "1rem",
                                                                                        }}
                                                                                    >
                                                                                        {FeedbackList.status}
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
                                        {!selectedFeedbackList && (
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
                                                                <a href="#" className="page-link">
                                                                    1
                                                                </a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="#" className="page-link">
                                                                    2
                                                                </a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="#" className="page-link">
                                                                    3
                                                                </a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="#" className="page-link">
                                                                    4
                                                                </a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="#" className="page-link">
                                                                    5
                                                                </a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a href="#" className="page-link">
                                                                    6
                                                                </a>
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
                    </div>
                </>
            )}
            {selectedFeedbackList && (
                <>
                    {FeedbackLists.filter(
                        (FeedbackList) => FeedbackList.complaint_id === selectedFeedbackList
                    ).map((FeedbackList) => (
                        <>
                            <div
                                id="kt_app_content"
                                className="app-content flex-column-fluid pt-0 mb-4"
                            >
                                <div className="card">
                                    <div className="card-body py-4">
                                        <div key={FeedbackList.complaint_id}>
                                            <div
                                                id="kt_app_toolbar"
                                                className="app-toolbar py-3 py-lg-6 pb-4"
                                            >
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
                                                            Complaint details
                                                        </h1>
                                                    </div>
                                                    <div className="d-flex align-items my-2">
                                                        <button
                                                            onClick={handleBackClick}
                                                            style={{
                                                                border: "none",
                                                                background: "transparent",
                                                            }}
                                                        >
                                                            <div className="">
                                                                <i className="iconend border border-gray-300 border rounded py-3 px-4 me-6 mb-3 bi bi-arrow-left"></i>
                                                            </div>
                                                        </button>

                                                        <div className="">
                                                            <i className="iconend border border-gray-300 border rounded py-3 px-4 me-6 mb-3 bi bi-pencil"></i>
                                                        </div>
                                                        <div className="">
                                                            <i className="iconend border border-gray-300 border rounded py-3 px-4 me-6 mb-3 bi bi-trash3"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0 pt-4">
                                                <div className="card-body p-0">
                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">
                                                            Complaint ID
                                                        </label>
                                                        <div className="col-lg-8">
                                                            <span className="fw-bolder fs-2 text-muted">
                                                                {FeedbackList.complaint_id}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">
                                                            Name
                                                        </label>
                                                        <div className="col-lg-8">
                                                            <span className="fw-bolder fs-2 text-muted">
                                                                {FeedbackList.name}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">
                                                            Email Id
                                                        </label>
                                                        <div className="col-lg-8">
                                                            <span className="fw-bolder fs-2 text-muted">
                                                                {FeedbackList.email}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">
                                                            Type
                                                        </label>
                                                        <div className="col-lg-8 fv-row">
                                                            <span className="fw-bold fs-2 text-muted">
                                                                {FeedbackList.property_type}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">
                                                            Description
                                                        </label>
                                                        <div className="col-lg-8 fv-row">
                                                            <span className="fw-bold fs-2 text-muted">
                                                                {FeedbackList.description_list}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">
                                                            Date Submitted
                                                        </label>
                                                        <div className="col-lg-8 fv-row">
                                                            <span className="fw-bold fs-2 text-muted">
                                                                {FeedbackList.date_submitted}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">
                                                            Date Closed
                                                        </label>
                                                        <div className="col-lg-8 fv-row">
                                                            <span className="fw-bold fs-2 text-muted">
                                                                {FeedbackList.date_time}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-7">
                                                        <label className="col-lg-4 fs-2 fw-bolder text-gray-900">
                                                            Status
                                                        </label>
                                                        <div className="col-lg-8 fv-row">
                                                            <span className="fw-bold fs-2 text-muted">
                                                                {FeedbackList.status}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="kt_app_content"
                                className="app-content flex-column-fluid pt-0 mb-4"
                            >
                                <div className="card">
                                    <div className="card-body py-4">
                                        <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0 pt-4">
                                            <div className="card-body p-0">
                                                <div className="row mb-7">
                                                    <div className="me-7 mb-4 feedbackimage_two">
                                                        <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative ml-4">
                                                            <img
                                                                src="/media/logos/feed_image.png"
                                                                alt="Metornic"
                                                            />
                                                        </div>
                                                        <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                                            <img
                                                                src="/media/logos/feed_image2.png"
                                                                alt="Metornic"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-2 fw-bolder text-gray-900">
                                                        Response
                                                    </label>
                                                </div>
                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-2 fw-bolder text-gray-900">
                                                        Date:
                                                    </label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-2 text-muted">
                                                            09-07-2024 10:30
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-2 fw-bolder text-gray-900">
                                                        Added By:
                                                    </label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-2 text-muted">
                                                            Admin John Doe
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="row mb-7">
                                                    <label className="col-lg-4 fs-2 fw-bolder text-gray-900">
                                                        Comment:
                                                    </label>
                                                    <div className="col-lg-8 fv-row">
                                                        <span className="fw-bold fs-2 text-muted">
                                                            Contacted the customer to gather more details
                                                            about the issue. Awaiting response.
                                                        </span>
                                                    </div>
                                                </div>
                                                <ReactQuill
                                                    value={editorContent}
                                                    onChange={handleEditorChange}
                                                    theme="snow"
                                                    placeholder="Write something..."
                                                    style={{ minHeight: "100px" }}
                                                    className="custom-quill-editor"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </>
            )}
        </>
    );
};

export default FeedbackHList;

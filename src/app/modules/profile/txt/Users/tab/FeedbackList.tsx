import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './FeedbackList.css';
type Status = 'Open' | 'In Progress' | 'Resolved';
interface FeedbackList {
  complaint_id: number;
  property_type: string;
  description_list: string;
  date_submitted: string;
  date_time: string;
  status: Status;
}
const FeedbackLists: FeedbackList[] = [
  {
    complaint_id: 3451,
    property_type: 'Complaint',
    description_list: 'I booked a cleaning service for my apartment, but the cleaners arrived two hours late and did not clean the kitchen area as requested. I had to reschedule my plans due to the delay, and the service quality was unsatisfactory. Please address this issue and provide a resolution.',
    date_submitted: '06-06-2024 18:00',
    date_time: '-',
    status: 'Open',
  },
  {
    complaint_id: 2352,
    property_type: 'Feedback',
    description_list: 'I booked a cleaning service for my apartment, but the cleaners arrived two hours late and did not clean the kitchen area as requested. I had to reschedule my plans due to the delay, and the service quality was unsatisfactory. Please address this issue and provide a resolution.',
    date_submitted: '06-06-2024 18:00',
    date_time: '-',
    status: 'Open',
  },
  {
    complaint_id: 3212,
    property_type: 'Complaint',
    description_list: 'I booked a cleaning service for my apartment, but the cleaners arrived two hours late and did not clean the kitchen area as requested. I had to reschedule my plans due to the delay, and the service quality was unsatisfactory. Please address this issue and provide a resolution.',
    date_submitted: '06-06-2024 18:00',
    date_time: '-',
    status: 'Open',
  },
  {
    complaint_id: 4234,
    property_type: 'Escalation',
    description_list: 'I booked a cleaning service for my apartment, but the cleaners arrived two hours late and did not clean the kitchen area as requested. I had to reschedule my plans due to the delay, and the service quality was unsatisfactory. Please address this issue and provide a resolution.',
    date_submitted: '06-06-2024 18:00',
    date_time: '-',
    status: 'In Progress',
  },
  {
    complaint_id: 7612,
    property_type: 'Complaint',
    description_list: 'I booked a cleaning service for my apartment, but the cleaners arrived two hours late and did not clean the kitchen area as requested. I had to reschedule my plans due to the delay, and the service quality was unsatisfactory. Please address this issue and provide a resolution.',
    date_submitted: '06-06-2024 18:00',
    date_time: '08-06-2024 09:00',
    status: 'Resolved',
  },
  {
    complaint_id: 8734,
    property_type: 'Complaint',
    description_list: 'I booked a cleaning service for my apartment, but the cleaners arrived two hours late and did not clean the kitchen area as requested. I had to reschedule my plans due to the delay, and the service quality was unsatisfactory. Please address this issue and provide a resolution.',
    date_submitted: '06-06-2024 18:00',
    date_time: '09-06-2024 11:00',
    status: 'Resolved',
  }
];

const getRoleStyles = (status: Status) => {
  switch (status) {
    case 'Open':
      return { color: '#3E97FF', backgroundColor: '#EEF6FF' };
    case 'Resolved':
      return { color: '#50CD89', backgroundColor: '#E8FFF3' };
    case 'In Progress':
      return { color: '#7239EA', backgroundColor: '#F8F5FF' };
    default:
      return {};
  }
};


const FeedbackListList: React.FC = () => {

  const [selectedFeedbackList, setSelectedFeedbackList] = useState<number | null>(null);
  const [editorContent, setEditorContent] = useState<string>('');

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
        <div className="card">
          <div className="card-body">
            <div className='app-main flex-column flex-row-fluid' id="kt_app_main">
              <div className='d-flex flex-column flex-column-fluid'>
                <div className="card-body py-4">
                  <div className="table-responsive">
                    <table id="kt_table_users" className="table align-middle table-row-dashed fs-5 gy-5">
                      {!selectedFeedbackList && (
                        <thead>
                          <tr className="text-center text-muted fw-bolder fs-5 gs-0">
                            <>
                              <th className="min-w-125px">Complaint Id</th>
                              <th className="min-w-125px">Type</th>
                              <th className="min-w-125px">Description</th>
                              <th className="min-w-125px">Date Submitted</th>
                              <th className="min-w-125px">Date Closed</th>
                              <th className="text-center min-w-100px">Status</th>
                              <th className="min-w-100px">Actions</th>
                            </>
                          </tr>
                        </thead>
                      )}
                      <tbody className="text-gray-600 fs-4 fw-bold">
                        {FeedbackLists.map((FeedbackList) => (
                          <React.Fragment key={FeedbackList.complaint_id}>
                            {(selectedFeedbackList === null || selectedFeedbackList === FeedbackList.complaint_id) && (
                              <tr
                                onClick={() => handleRowClick(FeedbackList.complaint_id)}
                                style={{ cursor: 'pointer' }}
                              >
                                {!selectedFeedbackList && (
                                  <>
                                    <td className='text-center'>{FeedbackList.complaint_id}</td>
                                    <td className='text-center'>{FeedbackList.property_type}</td>
                                    <td className='text-center'>
                                      {FeedbackList.description_list.split(' ').slice(0, 5).join(' ') + (FeedbackList.description_list.split(' ').length > 5 ? '...' : '')}
                                    </td>

                                    <td className='text-center'>{FeedbackList.date_submitted}</td>
                                    <td className='text-center'>{FeedbackList.date_time}</td>
                                    <td className="text-center min-w-100px">
                                      <div
                                        className="badge"
                                        style={{
                                          ...getRoleStyles(FeedbackList.status),
                                          padding: '1rem'
                                        }}
                                      >
                                        {FeedbackList.status}
                                      </div>
                                    </td>
                                    <td className='text-center'>
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
        </div>
      )}
      {selectedFeedbackList && (
        <>
          {FeedbackLists
            .filter(FeedbackList => FeedbackList.complaint_id === selectedFeedbackList)
            .map(FeedbackList => (
              <>
                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                  <div className='card'>
                    <div className="card-body py-4">
                      <div key={FeedbackList.complaint_id}>
                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6 pb-4">
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
                        <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0 pt-4">
                          <div className="card-body p-0">
                            <div className="row mb-7">
                              <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Complaint ID
                              </label>
                              <div className="col-lg-8">
                                <span className="fw-bolder fs-2 text-muted">{FeedbackList.complaint_id}</span>
                              </div>
                            </div>

                            <div className="row mb-7">
                              <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Type</label>
                              <div className="col-lg-8 fv-row">
                                <span className="fw-bold fs-2 text-muted">{FeedbackList.property_type}</span>
                              </div>
                            </div>

                            <div className="row mb-7">
                              <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Description</label>
                              <div className="col-lg-8 fv-row">
                                <span className="fw-bold fs-2 text-muted">{FeedbackList.description_list}</span>
                              </div>
                            </div>

                            <div className="row mb-7">
                              <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Date Submitted</label>
                              <div className="col-lg-8 fv-row">
                                <span className="fw-bold fs-2 text-muted">{FeedbackList.date_submitted}</span>
                              </div>
                            </div>

                            <div className="row mb-7">
                              <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Date Closed</label>
                              <div className="col-lg-8 fv-row">
                                <span className="fw-bold fs-2 text-muted">{FeedbackList.date_time}</span>
                              </div>
                            </div>

                            <div className="row mb-7">
                              <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Status</label>
                              <div className="col-lg-8 fv-row">
                                <span className="fw-bold fs-2 text-muted">{FeedbackList.status}</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="kt_app_content" className="app-content flex-column-fluid pt-0 mb-4">
                  <div className="card">
                    <div className="card-body py-4">
                      <div className="d-flex flex-wrap flex-stack mb-6 card-header flex-nowrap border-0 pt-4">
                        <div className="card-body p-0">
                          <div className='row mb-7'>
                            <div className="me-7 mb-4 feedbackimage_two">
                              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative ml-4">
                                <img src="/media/logos/feed_image.png" alt="Metornic" />
                              </div>
                              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                <img src="/media/logos/feed_image2.png" alt="Metornic" />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-7">
                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Response
                            </label>

                          </div>
                          <div className="row mb-7">
                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Date:
                            </label>
                            <div className="col-lg-8 fv-row">
                              <span className="fw-bold fs-2 text-muted">09-07-2024 10:30</span>
                            </div>
                          </div>
                          <div className="row mb-7">
                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Added By:</label>
                            <div className="col-lg-8 fv-row">
                              <span className="fw-bold fs-2 text-muted">Admin John Doe</span>
                            </div>
                          </div>

                          <div className="row mb-7">
                            <label className="col-lg-4 fs-2 fw-bolder text-gray-900">Comment:</label>
                            <div className="col-lg-8 fv-row">
                              <span className="fw-bold fs-2 text-muted">Contacted the customer to gather more details about the issue. Awaiting response.</span>
                            </div>
                          </div>
                          <ReactQuill
                            value={editorContent}
                            onChange={handleEditorChange}
                            theme="snow"
                            placeholder="Write something..."
                            style={{ minHeight: '100px' }}
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

export default FeedbackListList;


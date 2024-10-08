import React from 'react'
import './ViewJobVacancy.css'

const ViewJobVacancy = () => {
  return (
    <div className='main-section-container'>
      <div className='main-section-container-header'>
        <div className='heading'>
          <h2>Job Vacancies</h2>
        </div>
        <div className='search'>
          <input className='search-input' type='text' placeholder='search...' id='search' name='search' />
        </div>
        <div className='pagination-filter'>
          <div className='page-filter'>
            <label>
              Entries per page:
              <select>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </label>
          </div>
          <div className='add'>
              <button className='add-btn'>Add New</button>
          </div>
        </div>
      </div>
      <div className='main-section-container-body'>
          <div className='main-table'>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Job Title</th>
                    <th>Closing Date</th>
                    <th>Company</th>
                    <th>Building</th>
                    <th>No of vacancies</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Software Engineer</td>
                    <td>2024-10-31</td>
                    <td>ICST University Park</td>
                    <td>Admin Building - 3rd Floor</td>
                    <td>2</td>
                    <td>
                      <button class="btn-view">View</button>
                      <button class="btn-edit">Edit</button>
                      <button class="btn-delete">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div className="pagination-footer">
            <button className='previous-btn'>
              Previous
            </button>
            <span>Page 1 of 1</span>
            <button className='next-btn'>
              Next
            </button>
          </div>
      </div>
    </div>
  )
}

export default ViewJobVacancy
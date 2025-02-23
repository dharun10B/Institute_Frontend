import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import './Style.css'

const DashNav = () => {
    const location = useLocation();
  return (
    <div>
              {(location.pathname.startsWith('/Myprofile/admin') || location.pathname === '/Myprofile/admin') && (
                  <div className="subnav-container">
                      <h1 className='subnavheader'>Admin Dashboard</h1>
                      <NavLink to="/Myprofile/admin/dashboard" className="subnavbuttons" activeClassName="active">Dashboard</NavLink>
                      <NavLink to="/Myprofile/admin/students" className="subnavbuttons" activeClassName="active">Students</NavLink>
                      <NavLink to="/Myprofile/admin/teachers" className="subnavbuttons" activeClassName="active">Teachers</NavLink>
                      <NavLink to="/Myprofile/admin/courses" className="subnavbuttons" activeClassName="active">Courses</NavLink>
                      <NavLink to="/Myprofile/admin/batches" className="subnavbuttons" activeClassName="active">Batches</NavLink>
                      <NavLink to="/Myprofile/admin/reports" className="subnavbuttons" activeClassName="active">Reports</NavLink>
                  </div>
              )}
              
        
              {( location.pathname.startsWith('/Myprofile/student') || location.pathname === '/Myprofile/student' ) &&(
                <div className="subnav-container" style={{width:"280px"}}>
                  <h1 className='subnavheader'>Student Dashboard</h1>
                  <NavLink to="/Myprofile/student/dashboard" className="subnavbuttons" activeClassName="active">Dashboard</NavLink>{" "}
                  <NavLink to="/Myprofile/student/courses" className="subnavbuttons" activeClassName="active">My Courses</NavLink>{" "}
                  <NavLink to="/Myprofile/student/course" className="subnavbuttons" activeClassName="active">Course List</NavLink>{" "}
                  <NavLink to="/Myprofile/student/batch" className="subnavbuttons" activeClassName="active">Batch</NavLink>{" "}
                  {/* <NavLink to="/Myprofile/student/profile" className="subnavbuttons" activeClassName="active">Progress</NavLink>{" "} */}
                </div>
              )}
              {( location.pathname.startsWith('/Myprofile/teacher') || location.pathname === '/Myprofile/teacher') && (
                <div className="subnav-container" style={{width:"280px"}}>
                  <h1 className='subnavheader'>Teacher Dashboard</h1>
                  <NavLink to="/Myprofile/teacher/dashboard" className="subnavbuttons">Dashboard</NavLink>{" "}
                  <NavLink to="/Myprofile/teacher/students" className="subnavbuttons" activeClassName="active">Students</NavLink>{" "}
                  <NavLink to="/Myprofile/teacher/createcourse" className="subnavbuttons" activeClassName="active">Courses</NavLink>{" "}
                  <NavLink to="/Myprofile/teacher/batches" className="subnavbuttons" activeClassName="active">Batches</NavLink>{" "}
                </div>
              )}
    </div>
  )
}

export default DashNav
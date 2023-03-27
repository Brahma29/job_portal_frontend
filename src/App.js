import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import LogIn from './pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './components/UserRoute';
import Layout from './pages/global/Layout';
import { ProSidebarProvider } from 'react-pro-sidebar';
import UserJobHistory from './pages/user/UserJobHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminRoute from './components/AdminRoute';
import SingleJob from './pages/SingleJob';
import DashUsers from './pages/admin/DashUsers';
import DashJobs from './pages/admin/DashJobs';
import SignUp from './pages/SignUp';
import CreateJobForm from './pages/admin/CreateJobForm';

const UserDashboardHOC = Layout(UserDashboard);
const UserJobHistoryHOC = Layout(UserJobHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const AdminDashUsersHOC = Layout(DashUsers);
const AdminDashJobsHOC = Layout(DashJobs);
const CreateJobFormHOC = Layout(CreateJobForm);

function App() {
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/job/:id" element={<SingleJob />} />
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboardHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <AdminDashUsersHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/jobs"
                element={
                  <AdminRoute>
                    <AdminDashJobsHOC />
                  </AdminRoute>
                }
              />

              <Route
                path="/admin/jobs/create"
                element={
                  <AdminRoute>
                    <CreateJobFormHOC />
                  </AdminRoute>
                }
              />

              <Route
                path="/user/dashboard"
                element={
                  <UserRoute>
                    <UserDashboardHOC />
                  </UserRoute>
                }
              />
              <Route
                path="/user/jobs"
                element={
                  <UserRoute>
                    <UserJobHistoryHOC />
                  </UserRoute>
                }
              />
              <Route
                path="/user/info"
                element={
                  <UserRoute>
                    <UserInfoDashboardHOC />
                  </UserRoute>
                }
              />
              <Route path="/search/location/:location" element={<Home />} />
              <Route path="/search/:keyword" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

import { useTheme } from '@emotion/react';
import {
  Box,
  Card,
  Container,
  ListItemIcon,
  MenuItem,
  MenuList,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import CardElement from '../components/CardElement';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoadingBox from '../components/Loading';
import Navbar from '../components/Navbar';
import SelectComponent from '../components/SelectComponent';
import { jobLoadAction } from '../redux/actions/jobActions';
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Home = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector(
    (state) => state.loadJobs
  );

  const { palette } = useTheme();
  const dispatch = useDispatch();

  const { keyword, location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = useState('');

  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [dispatch, page, keyword, cat, location]);

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, [dispatch]);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };

  return (
    <>
      <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh' }}>
        <Navbar />
        <Header />
        <Container>
          <Stack
            direction={{ xs: 'column', sm: ' row' }}
            spacing={{ xs: 1, md: 4 }}
          >
            <Box sx={{ flex: 2, p: 2 }}>
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component="h4"
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}
                  >
                    Filter jobs by category
                    <Box>
                      <SelectComponent
                        handleChangeCategory={handleChangeCategory}
                        cat={cat}
                      />
                    </Box>
                  </Typography>
                </Box>
              </Card>
              {/* jobs by location */}
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  {/* <h4>Filter by category</h4> */}
                  <Typography
                    component="h4"
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}
                  >
                    Filter job by location
                  </Typography>
                  <MenuList>
                    {setUniqueLocation &&
                      setUniqueLocation.map((location, i) => (
                        <MenuItem key={i}>
                          <ListItemIcon>
                            <LocationOnIcon
                              sx={{
                                color: palette.secondary.main,
                                fontSize: 18,
                              }}
                            />
                          </ListItemIcon>
                          <Link to={`/search/location/${location}`}>
                            {location}
                          </Link>
                        </MenuItem>
                      ))}
                  </MenuList>
                </Box>
              </Card>
            </Box>
            <Box sx={{ flex: 5, p: 2 }}>
              {loading ? (
                <LoadingBox />
              ) : jobs && jobs.length > 0 ? (
                jobs.map((job) => (
                  <CardElement
                    jobTitle={job.title}
                    description={job.description}
                    key={job._id}
                    id={job._id}
                    category={
                      job.jobType ? job.jobType.jobTypeName : 'No Category'
                    }
                    location={job.location}
                  />
                ))
              ) : (
                <Card sx={{ py: 20, textAlign: 'center' }}>
                  <Typography>No Jobs To Show</Typography>
                </Card>
              )}
              {pages > 1 && (
                <Stack spacing={2}>
                  <Pagination
                    page={page}
                    count={page === 0 ? 1 : pages}
                    onChange={(e, value) => setPage(value)}
                  ></Pagination>
                </Stack>
              )}
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Home;

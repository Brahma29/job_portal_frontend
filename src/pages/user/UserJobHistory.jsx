import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardElement from '../../components/CardElement';
import { userProfileAction } from '../../redux/actions/userAction';

const UserJobHistory = () => {
  const { user } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfileAction());
  }, [dispatch]);
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#fafafa' }}>
        Jobs History
      </Typography>
      <Box>
        {user &&
          user.jobHistory.map((history) => (
            <CardElement
              key={history._id}
              id={history._id}
              jobTitle={history.title}
              description={history.description}
              category={history.jobType ? history.jobType.jobTypeName : ''}
              location={history.location}
            />
          ))}
      </Box>
    </Box>
  );
};

export default UserJobHistory;

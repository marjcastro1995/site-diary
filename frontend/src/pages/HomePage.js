import React from 'react';
import DiaryListComponent from '../components/DiaryList';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container sx={{ marginTop: 2, marginBottom: 2, flex: '1 1 100%' }}>
            <Link to="/create">
                <Button variant="contained" color="primary" fullWidth>
                    Create New Entry
                </Button>
            </Link>
            <DiaryListComponent />
        </Container>
    );
};

export default HomePage;

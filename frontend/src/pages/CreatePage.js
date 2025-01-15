import React from 'react';
import DiaryFormComponent from '../components/DiaryForm';
import { Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CreatePage = () => {
    const navigate = useNavigate();  // useNavigate hook for programmatic navigation

    return (
        <Container>
            <Button onClick={() => navigate('/')} startIcon={<ArrowBackIosIcon />}>
                Back to Diary List
            </Button>
            <Typography variant="h4" gutterBottom sx={{textAlign: 'center', margin: '10px'}}>
                Create New Diary Entry
            </Typography>
            <DiaryFormComponent />
        </Container>
    );
};

export default CreatePage;

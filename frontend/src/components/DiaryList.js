import React, { useEffect, useState } from 'react';
import { fetchDiaries } from '../services/api';
import { Card, CardContent, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const DiaryListComponent = () => {
    const [diaries, setDiaries] = useState([]);

    useEffect(() => {
        const getDiaries = async () => {
            const response = await fetchDiaries();
            setDiaries(response.data);
        };
        getDiaries();
    }, []);

    return (
        <div>
            <Typography variant="h4" gutterBottom sx={{ marginTop: 2, marginBottom: 2, flex: '1 1 100%' }}>
                Diary Entries
            </Typography>
            <Box container spacing={2}>
                {diaries.map((diary) => (
                    <Box item xs={12} sm={6} md={4} key={diary.id} sx={{ marginTop: 2, marginBottom: 2, flex: '1 1 100%' }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{diary.date}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {diary.description.substring(0, 30)}...
                                </Typography>
                                <Link to={`/view/${diary.id}`}>
                                    <Button variant="outlined" fullWidth>
                                        View Details
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </div>
    );
};

export default DiaryListComponent;

import React, { useEffect, useState } from 'react';
import { fetchDiaryById } from '../services/api';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Box, Container, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const DiaryDetailComponent = () => {
    const navigate = useNavigate();  // useNavigate hook for programmatic navigation
    const { id } = useParams();
    const [diary, setDiary] = useState(null);

    useEffect(() => {
        const getDiary = async () => {
            const response = await fetchDiaryById(id);
            setDiary(response.data);
        };
        getDiary();
    }, [id]);

    if (!diary) {
        return <Typography variant="body1">Loading...</Typography>;
    }

    return (
        <Container container spacing={2} sx={{ marginTop: 2, marginBottom: 2, flex: '1 1 100%' }}>
            <Button onClick={() => navigate('/')} startIcon={<ArrowBackIosIcon />}>
                Back to Diary List
            </Button>
            <Box item xs={12}>
                <Card>
                    <CardContent>
                        <Typography variant="h4">{diary.date}</Typography>
                        <Typography variant="body1" paragraph>
                            {diary.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Weather: {diary.weather}
                        </Typography>
                    </CardContent>
                    {diary.imageUrl && (
                        <CardMedia
                            component="img"
                            alt="Diary Image"
                            height="200"
                            image={diary.imageUrl}
                            title="Diary Image"
                        />
                    )}
                </Card>
            </Box>
        </Container>
    );
};

export default DiaryDetailComponent;

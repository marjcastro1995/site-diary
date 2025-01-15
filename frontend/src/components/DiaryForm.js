import React, { useState } from 'react';
import { Container, TextField, Button, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { createDiary } from '../services/api';

const DiaryFormComponent = () => {
    const [formData, setFormData] = useState({
        date: '',
        description: '',
        weather: 'Sunny',
        imageUrl: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createDiary(formData);
        alert('Diary entry created!');
        setFormData({ date: '', description: '', weather: 'Sunny', imageUrl: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Container container spacing={2}>
                <Box item xs={12} sx={{ marginTop: 2, marginBottom: 2, flex: '1 1 100%' }}>
                    <TextField
                        fullWidth
                        label="Date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />
                </Box>
                <Box item xs={12} sx={{ marginTop: 2, marginBottom: 2, flex: '1 1 100%' }}>
                    <TextField
                        fullWidth
                        label="Description"
                        multiline
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        required
                    />
                </Box>
                <Box item xs={12} sx={{ marginTop: 2, marginBottom: 2, flex: '1 1 100%' }}>
                    <FormControl fullWidth>
                        <InputLabel>Weather</InputLabel>
                        <Select
                            value={formData.weather}
                            onChange={(e) => setFormData({ ...formData, weather: e.target.value })}
                        >
                            <MenuItem value="Sunny">Sunny</MenuItem>
                            <MenuItem value="Rainy">Rainy</MenuItem>
                            <MenuItem value="Cloudy">Cloudy</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box item xs={12} sx={{ marginTop: 2, marginBottom: 2, flex: '1 1 100%' }}>
                    <input
                        type="file"
                        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.files[0].name })}
                        style={{ display: 'none' }}
                        id="file-upload"
                    />
                    <label htmlFor="file-upload">
                        <Button variant="outlined" component="span" fullWidth>
                            Upload Image
                        </Button>
                    </label>
                </Box>
                <Box item xs={12} sx={{ marginTop: 2, marginBottom: 2, flex: '1 1 100%' }}>
                    <Button variant="contained" type="submit" fullWidth>
                        Create Diary Entry
                    </Button>
                </Box>
            </Container>
        </form>
    );
};

export default DiaryFormComponent;

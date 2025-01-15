import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import ViewPage from './pages/ViewPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/view/:id" element={<ViewPage />} />
            </Routes>
        </Router>
    );
};

export default App;

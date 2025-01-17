import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Layout from "./component/Layout.tsx";
import About from "./page/About.tsx";
import Project from "./page/Project.tsx";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Project />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
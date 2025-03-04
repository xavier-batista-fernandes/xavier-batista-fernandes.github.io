import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/home/home.tsx';
import { Projects } from './components/pages/projects/projects.tsx';
import { Contact } from './components/pages/contact/contact.tsx';
import { Experience } from './components/pages/experience/experience.tsx';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;

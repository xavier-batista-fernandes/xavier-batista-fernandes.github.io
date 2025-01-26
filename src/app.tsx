import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Projects } from './pages/projects/projects.tsx';
import { Contact } from './pages/contact/contact.tsx';
import { Home } from './pages/home/home.tsx';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;

import './home.css';
import { HeroSection } from './sections/hero-section.tsx';
import { ProjectsSection } from './sections/projects-section.tsx';
import { ExperienceSection } from './sections/experience-section.tsx';
import { ContactsSection } from './sections/contacts-section.tsx';
import { Header } from '../../components/header/header.tsx';

export const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactsSection />
        </>
    );
};

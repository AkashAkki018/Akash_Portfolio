import ThemeToggle from "../components/ThemeToggle";
import Starbackground from "../components/Starbackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/Aboutsection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";






function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">
            
           {/* Theme Toggle */}
           <ThemeToggle />
          

           {/* Backgroundeffects */}
           <Starbackground />
      

           {/*Nav bar */}
           <Navbar />

           
           {/* Main content */}
           <main>

            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          

            
           </main>
          

           {/* footer */}
           <Footer />

        
        </div>
    );
}

export default Home;
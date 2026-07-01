import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { AboutPage } from "@/pages/AboutPage";
import { AcademyPage } from "@/pages/AcademyPage";
import { CoursesPage } from "@/pages/CoursesPage";
import { CourseDetail } from "@/pages/CourseDetail";
import { ContactPage } from "@/pages/ContactPage";
import { Videos } from "@/pages/Videos";
import { Magazines } from "@/pages/Magazines";
import { Register } from "@/pages/Register";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/magazines" element={<Magazines />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;

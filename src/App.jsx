import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import MainContent from "./components/MainContent";
import ProjectDetails from './components/ProjectDetails';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Layout>
  )
}
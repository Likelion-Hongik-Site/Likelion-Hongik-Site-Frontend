import { Routes, Route } from 'react-router-dom';
import { ArchivePage } from '@/pages/ArchivePage';
import { ContactPage } from '@/pages/ContactPage';
import { HomePage } from '@/pages/HomePage';
import { RecruitPage } from '@/pages/RecruitPage';
import { Layout } from '@/components/layout/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} /> {/* 수연 */}
        <Route path="/archive" element={<ArchivePage />} /> {/* 규영 */}
        <Route path="/recruit" element={<RecruitPage />} /> {/* 채영 */}
        <Route path="/contact" element={<ContactPage />} /> {/* 수연 */}
      </Route>
    </Routes>
  );
}

export default App;

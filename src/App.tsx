import { Route, Routes } from 'react-router-dom';
import { ArchivePage } from '@/pages/ArchivePage';
import { ContactPage } from '@/pages/ContactPage';
import { HomePage } from '@/pages/HomePage';
import { RecruitPage } from '@/pages/RecruitPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* 수연 */}
      <Route path="/archive" element={<ArchivePage />} /> {/* 규영 */}
      <Route path="/recruit" element={<RecruitPage />} /> {/* 채영 */}
      <Route path="/contact" element={<ContactPage />} /> {/* 수연 */}
    </Routes>
  );
}

export default App;

import { Outlet } from 'react-router-dom';
import GlobalStyle from './app/styles/globalStyles';
import './index.css';

export default function App() {
  return (
    <main>
      <GlobalStyle />
      <Outlet />
    </main>
  )
}

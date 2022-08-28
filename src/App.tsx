import './App.scss';
import Content from './modules/common/Content';
import MainLayout from './modules/common/MainLayout';
import Sidebar from './modules/common/Sidebar';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Sidebar>
          <span>Sidebar</span>
        </Sidebar>
        <Content>
          <span>Content</span>
        </Content>
      </MainLayout>
    </div>
  );
}

export default App;

import './App.scss';
import Content from './modules/common/Content';
import MainLayout from './modules/common/MainLayout';
import Sidebar from './modules/common/Sidebar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import TransactionsTable from './components/TransactionsTable';
import { transactions } from './tests/testData';



function App() {
  return (
    <div className="App">
      <MainLayout>

        <Sidebar>
          <Typography variant="h4">
            Sidebar
          </Typography>
        </Sidebar>

        <Content>
          <Typography variant="h4">
            Content
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
            padding: '16px 0'
          }}>
            <ButtonGroup size="small">
              <Button sx={{padding: '4px 16px'}} disabled>Add Categories</Button>
              <Button sx={{padding: '4px 16px'}} disabled>Add Tags</Button>
              <Button sx={{padding: '4px 16px'}} disabled>Delete</Button>
            </ButtonGroup>
          </Box>

          <TransactionsTable transactions={transactions} />
        </Content>

      </MainLayout>
    </div >
  );
}

export default App;

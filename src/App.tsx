import './App.scss';
import Content from './modules/common/Content';
import MainLayout from './modules/common/MainLayout';
import Sidebar from './modules/common/Sidebar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Button, ButtonGroup, Chip, Stack, Typography } from '@mui/material';
import TransactionsTable from './components/TransactionsTable';
import { transactions } from './tests/testData';
import TransactionsDateFilter from './components/TransactionsDateFilter';
import TransactionsCommonActions from './components/TransactionsCommonActions';


function App() {

  return (
    <div className="App">
      <MainLayout>

        <Sidebar>
          <Typography variant="h4">
            Sidebar
          </Typography>

          <Stack direction="row" spacing={1}>
            <Chip label="Small" size="small" style={{backgroundColor: 'red', color: 'white'}}/>
          </Stack>
        </Sidebar>

        <Content>
          <Typography variant="h4">
            Content
          </Typography>

          <TransactionsTable transactions={transactions} />
        </Content>

      </MainLayout>
    </div >
  );
}

export default App;

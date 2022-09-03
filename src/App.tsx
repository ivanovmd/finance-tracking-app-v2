import './App.scss';
import Content from './modules/common/Content';
import MainLayout from './modules/common/MainLayout';
import Sidebar from './modules/common/Sidebar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Chip, Stack, Typography, Input, FormControl, OutlinedInput } from '@mui/material';
import TransactionsTable from './components/TransactionsTable';
import { transactions } from './tests/testData';
import CategoryWeights from './components/CategoryWeights';

function App() {

  return (
    <div className="App">
      <MainLayout>

        <Sidebar>
          <Typography variant="h4">
            Sidebar
          </Typography>

          <FormControl fullWidth>
            <OutlinedInput placeholder="Please enter text" size='small' />
          </FormControl>
          <h3>Available Tags</h3>
          <Stack direction="row" spacing={1}>
            <Chip label="Small" size="small" clickable style={{ backgroundColor: 'red', color: 'white' }} />
          </Stack>

          <h3>Applied Tags</h3>
          <Stack direction="row" spacing={1}>
            <Chip label="Small" size="small" clickable style={{ backgroundColor: 'red', color: 'white' }} />
          </Stack>
        </Sidebar>

        <Content>
          <h2>Content</h2>
          <CategoryWeights />
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

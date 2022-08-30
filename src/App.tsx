import './App.scss';
import Content from './modules/common/Content';
import MainLayout from './modules/common/MainLayout';
import Sidebar from './modules/common/Sidebar';
import dayjs, { Dayjs } from 'dayjs';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material';
import TransactionsTable from './components/TransactionsTable';
import { transactions } from './tests/testData';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



function App() {
  const [value, setValue] = useState<Dayjs | null>(
    dayjs(new Date()),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

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

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Start Date"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField size='small' {...params} />}
            />
            <DesktopDatePicker
              label="End Date"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField size='small' {...params} />}
            />
          </LocalizationProvider>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
            padding: '16px 0'
          }}>
            <ButtonGroup size="small">
              <Button sx={{ padding: '4px 16px' }} disabled>Add Categories</Button>
              <Button sx={{ padding: '4px 16px' }} disabled>Add Tags</Button>
              <Button sx={{ padding: '4px 16px' }} disabled>Delete</Button>
            </ButtonGroup>
          </Box>

          <TransactionsTable transactions={transactions} />
        </Content>

      </MainLayout>
    </div >
  );
}

export default App;

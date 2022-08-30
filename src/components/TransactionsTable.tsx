import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import { Transaction } from '../common/types';
import { BaseProps } from '../modules/common/types';

interface TransactionsTableProps extends BaseProps {
    transactions: Transaction[]
}


const columns: GridColDef[] = [
    { field: 'createdAt', headerName: 'Created At', flex: 1, minWidth: 150, valueGetter: (params: GridValueGetterParams) => dayjs(params.row.createdAt).format('MM/DD/YYYY') },
    { field: 'amount', headerName: 'Amount', type: 'number', flex: 1, minWidth: 150, valueGetter: (params: GridValueGetterParams) => `$${params.row.amount}` },
    {
        field: 'description',
        headerName: 'Description',
        description: 'Description of the transaction. You can edit this.',
        sortable: false,
        flex: 1,
        minWidth: 150,
    },
];


export default function TransactionsTable({ transactions }: TransactionsTableProps) {
    return <DataGrid
        rows={transactions}
        loading={!transactions || transactions.length === 0}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        autoHeight
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
    />
}
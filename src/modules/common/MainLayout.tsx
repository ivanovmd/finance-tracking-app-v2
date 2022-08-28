import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Container from '@mui/material/Container';
import { BaseProps } from './types';

export default function MainLayout({ children }: BaseProps) {
    return <Container>
        <Grid container spacing={2}>
            {children}
        </Grid>
    </Container>
}
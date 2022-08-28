import Container from '@mui/material/Container';
import { BaseProps } from './types';

export default function MainLayout({ children }: BaseProps) {
    return <Container>
        {children}
    </Container>
}
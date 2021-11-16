import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material'

export const SearchMeta = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    backgroundColor: '#EBF1FA',
    textAlign: 'left',
    height: '48px',
    padding: theme.spacing(1, 3, 1, 3),
    width: '380px'
}));

export const TextFieldMeta = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#EBF1FA',
    textAlign: 'left',
    height: '48px',
    padding: theme.spacing(1, 3, 1, 3),
    width: '100%'
}));

export const TextAreaMeta = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#EBF1FA',
    textAlign: 'left',
    minHeight: '48px',
    padding: theme.spacing(1, 3, 1, 3),
    width: '100%'
}));
import { Fragment, useState, } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Snackbar,
    Alert,
} from '@mui/material';

export interface DialogPropsType {
    open?: boolean;
    title?: string;
    description?: string | string[];
    children?: JSX.Element | JSX.Element[] | string | string[];
    onClose: () => void;
    showCopy?: boolean;
    template?: string[];
}

export const DialogInitialState = {
    open: false,
    title: 'Taos',
    description: '',
    showCopy: false,
}

export default function Siderbar({
    open = DialogInitialState.open,
    title = DialogInitialState.title,
    description = DialogInitialState.description,
    children,
    onClose,
    showCopy = DialogInitialState.showCopy,
}: DialogPropsType) {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClose = () => {
        onClose();
    };
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    const handleCopy = async () => {
        if (children) {
            if (!navigator.clipboard)
                return;

            try {
                const codeResult = document.getElementById('code-result');
                await navigator.clipboard.writeText(codeResult?.innerText || '');
                setOpenSnackbar(true);
            } catch (err) {
                console.error('Failed to copy!', err);
            }
        }
    };

    return (
        <Fragment>
            <Dialog
                open={open}
                scroll='paper'
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title" sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    {title}
                </DialogTitle>
                <DialogContent>
                    {description ?
                        <DialogContentText id="scroll-dialog-description">
                            {description}
                        </DialogContentText>
                        : children
                    }
                </DialogContent>
                <DialogActions sx={{ mb: '15px' }}>
                    {showCopy ?
                        <Fragment>
                            <Button onClick={handleCopy} color='info' variant='contained' size='small' sx={{ marginRight: '15px', }}>
                                Copy
                            </Button>
                            <Snackbar
                                open={openSnackbar}
                                autoHideDuration={6000}
                                onClose={handleCloseSnackbar}
                                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                            >
                                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                                    Copied to clipboard
                                </Alert>
                            </Snackbar>
                        </Fragment>
                        : null
                    }
                    <Button onClick={handleClose} variant='contained' size='small' sx={{ marginRight: '15px', }}>
                        Accept
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

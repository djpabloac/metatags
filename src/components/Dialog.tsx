import { Fragment, } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export interface DialogPropsType {
    open?: boolean;
    title?: string;
    description?: string | string[];
    children?: JSX.Element | JSX.Element[] | string | string[];
    onClose: () => void;
}

export const DialogInitialState = {
    open: false,
    title: 'Taos',
    description: '',
}

export default function Siderbar({
    open = DialogInitialState.open,
    title = DialogInitialState.title,
    description = DialogInitialState.description,
    children,
    onClose,
}: DialogPropsType) {

    const handleClose = () => {
        onClose();
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
                <DialogActions>
                    <Button onClick={handleClose} autoFocus variant='contained' size='small' sx={{ marginRight: '15px', }}>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

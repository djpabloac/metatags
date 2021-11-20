import {
    Fragment,
    useContext,
    useRef,
    useState,
} from 'react';
import {
    Box,
    Fab,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { classesGlobal } from 'styles/useStyleGlobal';
import Dialog, { DialogInitialState } from "components/Dialog";
import MetaTagContext from 'context/MetaTag/MetaTagContext';

const AllowFormatKind: string[] = [
    "image/png",
    "image/jpeg",
];

export default function MetaTagImage(): JSX.Element {

    const [dialog, setDialog] = useState(DialogInitialState);
    const { MetaTagField, setMetaTag } = useContext(MetaTagContext);
    const inputFile = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputFile.current)
            inputFile.current.click();
    }
    const handleChangeFile = (e: any) => {
        console.log(e.target.files[0]);
        let URLImage = window.URL.createObjectURL(e.target.files[0]);
        setMetaTag('image', URLImage);
        e.target.value = "";
    }
    const handleClose = () => {
        setDialog({
            ...DialogInitialState,
            open: false,
        });
    }
    const allowDropFile = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }
    const dropFile = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        const files = e.dataTransfer.files;
        for (let index = 0; index < files.length; index++) {
            const fileDrop = files[index];
            if (AllowFormatKind.includes(fileDrop.type)) {
                let URLImage = window.URL.createObjectURL(fileDrop);
                setMetaTag('image', URLImage);
            } else {
                setDialog({
                    ...DialogInitialState,
                    open: true,
                    title: 'Formato no permitido.',
                    description: `Los formatos permitidos son ${AllowFormatKind.join(' ')}`,
                });
            }
        }
    }

    return (
        <Fragment>
            <Dialog open={dialog.open} title={dialog.title} description={dialog.description} onClose={handleClose} />
            <div style={{
                height: '200px',
                position: 'relative',
            }}
                onClick={handleClick}
                onDragOver={allowDropFile}
                onDrop={dropFile}
            >
                <Box sx={{
                    alignItems: 'center',
                    backgroundImage: `url("${MetaTagField.image || '/assets/metatagdetail.png'}")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    border: '1px solid #dde5e8',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '200px',
                    justifyContent: 'center',
                    transition: 'all 250ms ease-out',
                    '&:hover': {
                        border: '1px solid blue',
                        transition: 'all 250ms ease-out',
                    },
                    '&:drag': {
                        border: '1px solid blue',
                        transition: 'all 250ms ease-out',
                    },
                    '&::before': {
                        content: `''`,
                        position: 'absolute',
                        background: '#fff',
                        borderRadius: '7px',
                        top: '0',
                        left: '0',
                        opacity: '0.7',
                        width: '100%',
                        height: '100%',
                    },
                }}>
                    <Box>
                        <Fab color="primary" sx={classes.metaTagImageEffect}>
                            <ArrowUpwardIcon style={{
                                fill: 'rgb(42, 129, 251)',
                                fontSize: '30px',
                                fontWeight: 'bolder',
                            }} />
                        </Fab>
                    </Box>
                    <Box sx={classes.metaTagImageText}>
                        DRAG & DROP OR CLICK
                    </Box>
                </Box>
            </div>
            <input ref={inputFile} name='image' type='file' style={{ display: 'none', }}
                accept={AllowFormatKind.toString()}
                onChange={handleChangeFile} />
        </Fragment>
    )
}

const classes = {
    metaTagImageEffect: {
        transition: 'all 250ms ease-out',
        bgcolor: '#D4E6FE',
        '&:hover': {
            bgcolor: '#D4E6FE',
            width: '64px',
            height: '64px',
        },
    },
    metaTagImageText: {
        ...classesGlobal.subHeaderGlobal,
        fontSize: '11px',
        mt: '12px',
        color: '#000',
        zIndex: '99',
    },
} as const;
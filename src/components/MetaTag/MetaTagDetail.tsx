import { Fragment, useState } from 'react';
import {
    Box,
    Typography,
    Fab,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {
    TextFieldMeta,
    TextAreaMeta,
} from "components/UI/material-metatag";
import { classesGlobal } from 'styles/useStyleGlobal';
import { initialMetaTagField } from 'components/MetaTag/Preview';

export default function MetaTagDetail(): JSX.Element {

    const [metaTagField, setMetaTagField] = useState(initialMetaTagField);

    const handlerTitle = (e: any) => setMetaTagField({
        ...metaTagField,
        title: e.target.value
    });

    const handlerDescription = (e: any) => setMetaTagField({
        ...metaTagField,
        description: e.target.value
    });

    return (
        <Fragment>
            <Typography sx={classesGlobal.subHeaderWithSpaceGlobal}>
                MetaTag
            </Typography>
            <form>
                <Box sx={classes.metaTagHead}>
                    <Typography sx={classes.metaTagCaption}>
                        Imagen
                    </Typography>
                    <Typography sx={classes.metaTagCaption}>
                        Recommend 1200×628
                    </Typography>
                </Box>
                <Box sx={classes.metaTagImage}>
                    <Box>
                        <Fab color="primary" sx={classes.metaTagImageEffect}>
                            <ArrowUpwardIcon />
                        </Fab>
                    </Box>
                    <Box sx={classes.metaTagImageText}>
                        DRAG & DROP OR CLICK
                    </Box>
                </Box>
                <Box sx={classes.metaTagHead}>
                    <Typography sx={classes.metaTagCaption}>
                        Title
                    </Typography>
                    <Typography sx={classes.metaTagCaption}>
                        0
                    </Typography>
                </Box>
                <TextFieldMeta
                    placeholder='Title...'
                    value={metaTagField.title}
                    onChange={handlerTitle}
                />
                <Box sx={classes.metaTagHead}>
                    <Typography sx={classes.metaTagCaption}>
                        Description
                    </Typography>
                    <Typography sx={classes.metaTagCaption}>
                        0
                    </Typography>
                </Box>
                <TextAreaMeta
                    placeholder='Description...'
                    value={metaTagField.description}
                    onChange={handlerDescription}
                    multiline
                    rows={4}
                />
            </form>
        </Fragment >
    )
}

const classes = {
    metaTagHead: {
        display: 'flex',
        justifyContent: 'space-between',
        mb: '0.5em',
        mt: '0.5em',
    },
    metaTagCaption: {
        ...classesGlobal.captionGlobal,
    },
    metaTagImage: {
        alignItems: 'center',
        backgroundImage: 'url("/assets/metatagdetail.png")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        border: '1px solid #dde5e8',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '140px',
        justifyContent: 'center',
        '@media screen and (min-width: 1025px)': {
            height: '200px',
        },
    },
    metaTagImageEffect: {
        transition: 'all 250ms ease-out',
    },
    metaTagImageText: {
        ...classesGlobal.subHeaderGlobal,
        fontSize: '14px',
        mt: '12px',
    },
} as const;
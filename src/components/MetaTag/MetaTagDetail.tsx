import {
    Fragment,
    useContext,
} from 'react';
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
import MetaTagContext from 'context/MetaTag/MetaTagContext';

export default function MetaTagDetail(): JSX.Element {

    const { MetaTagField, setMetaTag } = useContext(MetaTagContext);

    const handleChange = (e: any) => setMetaTag(e.target.name as string, e.target.value as string);

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
                    {MetaTagField.titleLength}
                    </Typography>
                </Box>
                <TextFieldMeta
                    placeholder='Title...'
                    name='title'
                    value={MetaTagField.title}
                    onChange={handleChange}
                />
                <Box sx={classes.metaTagHead}>
                    <Typography sx={classes.metaTagCaption}>
                        Description
                    </Typography>
                    <Typography sx={classes.metaTagCaption}>
                        {MetaTagField.descriptionLength}
                    </Typography>
                </Box>
                <TextAreaMeta
                    placeholder='Description...'
                    name='description'
                    value={MetaTagField.description}
                    onChange={handleChange}
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
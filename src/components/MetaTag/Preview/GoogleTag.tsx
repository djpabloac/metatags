import { Fragment, useState } from 'react';
import { classesGlobal } from "styles/useStyleGlobal";
import {
    Box,
    Typography,
} from '@mui/material';
import { initialMetaTagField } from 'components/MetaTag/Preview';

export default function GoogleTag() {
    const [metaTagField, setMetaTagField] = useState(initialMetaTagField);

    return (
        <Fragment>
            <Box sx={classes.metaTagHead}>
                <Typography sx={classes.metaTagCaption}>
                    Google
                </Typography>
                <Box>
                    <Typography>{metaTagField.title}</Typography>
                    <Typography>{metaTagField.url}</Typography>
                    <Typography>{metaTagField.description}</Typography>
                </Box>
            </Box>
        </Fragment>
    )
}

const classes = {
    metaTagHead: {
        mb: '0.5em',
        mt: '0.5em',
    },
    metaTagCaption: {
        ...classesGlobal.captionGlobal,
    },
} as const;
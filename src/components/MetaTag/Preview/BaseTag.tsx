import { Fragment } from 'react';
import { classesGlobal } from "styles/useStyleGlobal";
import {
    Box,
    Divider,
} from '@mui/material';

export default function BaseTag({ children, title = 'Base', marginShort = false}: {children: JSX.Element | JSX.Element[], title?: string, marginShort?: Boolean}) {
    return (
        <Fragment>
            <Divider sx={marginShort ? classes.metaTagCaptionGoogle : classes.metaTagCaption} textAlign='left'>{title}</Divider>
            <Box>
                {children}
            </Box>
        </Fragment>
    )
}

const classes = {
    metaTagCaption: {
        ...classesGlobal.captionGlobal,
        ...classesGlobal.previewMetaTagHead,
    },
    metaTagCaptionGoogle: {
        ...classesGlobal.captionGlobal,
        ...classesGlobal.previewMetaTagHeadGoogle,
    },
} as const;
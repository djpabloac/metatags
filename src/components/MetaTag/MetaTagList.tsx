import { Fragment } from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import { classesGlobal } from "styles/useStyleGlobal";
import {
    GoogleTag,
    FacebookTag,
    TwitterTag,
} from 'components/MetaTag/Preview';

export default function MetaTagList() {
    return (
        <Fragment>
            <Typography sx={classesGlobal.subHeaderWithSpaceGlobal}>
                Preview
            </Typography>
            <Box>
                <GoogleTag />
            </Box>
            <Box>
                <FacebookTag />
            </Box>
            <Box>
                <TwitterTag />
            </Box>
        </Fragment>
    )
}
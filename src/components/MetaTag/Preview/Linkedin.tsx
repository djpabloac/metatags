import { Fragment, useContext } from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import BaseTag from "components/MetaTag/Preview/BaseTag";
import MetaTagContext from 'context/MetaTag/MetaTagContext';

export default function LinkedinTag() {
    const { MetaTagField } = useContext(MetaTagContext);

    return (
        <Fragment>
            <BaseTag title='Linkedin'>
                <Box sx={{
                    backgroundImage: `url("${MetaTagField.image || ''}")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    border: '1px solid #dde5e8',
                    cursor: 'pointer',
                    height: '288px',
                }}>
                </Box>
                <Box sx={{
                    border: '1px solid #dadde1',
                    borderTop: 'none',
                    padding: '8px 16px',
                    color: '#1d2129 !important',
                    background: '#f3f6f8',
                }}>
                    <Typography sx={{
                        color: '#1d2129',
                        fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif',
                        fontSize: '14px',
                        fontWeight: '600',
                        lineHeight: '20px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        wordWrap: 'break-word',
                        maxHeight: '40px',
                    }}>
                        {MetaTagField.title}
                    </Typography>
                    <Typography sx={{
                        color: '#606770',
                        fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif',
                        fontSize: '12px',
                        fontWeight: '400',
                        lineHeight: '16px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        textTransform: 'lowercase',
                        whiteSpace: 'nowrap',
                        wordWrap: 'break-word',
                        maxHeight: '16px',
                    }}>
                        {MetaTagField.getUrlEmpty ? MetaTagField.getUrlEmpty() : MetaTagField.url}
                    </Typography>
                </Box>
            </BaseTag>
        </Fragment>
    )
}

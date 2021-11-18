import { Fragment, useContext } from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import BaseTag from "components/MetaTag/Preview/BaseTag";
import MetaTagContext from 'context/MetaTag/MetaTagContext';

export default function PinterestTag() {
    const { MetaTagField } = useContext(MetaTagContext);

    return (
        <Fragment>
            <BaseTag title='Pinterest'>
                <div style={{
                    width: '236px',
                    height: '123px',
                    position: 'relative',
                }}>
                    <Box sx={{
                        backgroundImage: `url("${MetaTagField.image || ''}")`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        border: '1px solid #dde5e8',
                        cursor: 'zoom-in',
                        borderRadius: '8px',
                        width: '236px',
                        height: '123px',
                        '&:before': {
                            content: `''`,
                            position: 'absolute',
                            background: 'rgba(0,0,0,0.05)',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                        },
                    }}>
                    </Box>
                </div>
                <Box sx={{
                    border: 'none',
                    padding: '4px 8px',
                    color: '#211922 !important',
                    cursor: 'zoom-in',
                    width: '236px',
                }}>
                    <Typography sx={{
                        color: '#333333',
                        fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif',
                        fontSize: '14px',
                        fontWeight: '700',
                        lineHeight: '16.8px',
                        overflow: 'hidden',
                        wordWrap: 'break-word',
                        maxHeight: '40px',
                    }}>
                        {MetaTagField.title}
                    </Typography>
                </Box>
            </BaseTag>
        </Fragment>
    )
}

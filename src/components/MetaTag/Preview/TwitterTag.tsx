import { Fragment, useContext } from 'react';
import {
    Box,
    Typography,
    Fab,
} from '@mui/material';
import BaseTag from "components/MetaTag/Preview/BaseTag";
import MetaTagContext from 'context/MetaTag/MetaTagContext';

export default function TwitterTag() {
    const { MetaTagField } = useContext(MetaTagContext);

    return (
        <Fragment>
            <BaseTag title='Twitter'>
                <Box sx={{
                    alignItems: 'center',
                    backgroundImage: 'url("/assets/metatagdetail.png")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    border: '1px solid #dde5e8',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '140px',
                    justifyContent: 'center',
                    '@media screen and (min-width: 1025px)': {
                        height: '261px',
                    },
                }}>
                </Box>
                <Box sx={{
                    border: '1px solid #dadde1',
                    borderTop: 'none',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                    padding: '10px 12px',
                    color: '#1d2129 !important',
                    background: '#fff',
                }}>
                    <Typography sx={{
                        color: '#18283E',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        lineHeight: '18.375px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        wordWrap: 'break-word',
                        '@media screen and (min-width: 1025px)': {
                            fontSize: '1em',
                            lineHeight: '1.3em',
                            maxHeight: '1.3em',
                        },
                    }}>
                        {MetaTagField.title}
                    </Typography>
                    <Typography sx={{
                        height: '2.6em',
                        maxHeight: '2.6em',
                        marginTop: '0.32333em',
                        lineHeight: '1.3em',
                        letterSpacing: 'normal',
                        wordWrap: 'break-word',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        color: '#18283E',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
                        fontWeight: '400',
                        fontSize: '14px',
                    }}>
                        {MetaTagField.description}
                    </Typography>
                    <Typography sx={{
                        color: '#8899A6',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
                        fontWeight: '400',
                        fontSize: '14px',
                        textTransform: 'lowercase',
                        lineHeight: '1.3125',
                        letterSpacing: 'normal',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        marginTop: '0.32333em',
                    }}>
                        {MetaTagField.url}
                    </Typography>
                </Box>
            </BaseTag>
        </Fragment>
    )
}

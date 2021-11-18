import { Fragment, useContext } from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import BaseTag from "components/MetaTag/Preview/BaseTag";
import MetaTagContext from 'context/MetaTag/MetaTagContext';

export default function FacebookTag() {
    const { MetaTagField } = useContext(MetaTagContext);

    return (
        <Fragment>
            <BaseTag title='Facebook'>
                <Box sx={{
                    backgroundImage: `url("${MetaTagField.image || ''}")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    border: '1px solid #dde5e8',
                    cursor: 'pointer',
                    height: '140px',
                    '@media screen and (min-width: 1025px)': {
                        height: '261px',
                    },
                }}>
                </Box>
                <Box sx={{
                    border: '1px solid #dadde1',
                    borderTop: 'none',
                    padding: '10px 12px',
                    color: '#1d2129 !important',
                    background: '#f2f3f5',
                }}>
                    <Typography sx={{
                        color: '#606770',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontSize: '12px',
                        lineHeight: '11px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                        wordWrap: 'break-word',
                    }}>
                        {MetaTagField.getUrlEmpty ? MetaTagField.getUrlEmpty() : MetaTagField.url}
                    </Typography>
                    <Typography sx={{
                        color: '#1d2129',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: '600',
                        lineHeight: '18px',
                        marginTop: '5px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        wordWrap: 'break-word',
                        '@media screen and (min-width: 1025px)': {
                            fontSize: '16px',
                            lineHeight: '20px',
                        },
                    }}>
                        {MetaTagField.title}
                    </Typography>
                    <Typography sx={{
                        color: '#606770',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontSize: '14px',
                        lineHeight: '20px',
                        marginTop: '3px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        wordWrap: 'break-word',
                        wordBreak: 'break-word',
                    }}>
                        {MetaTagField.description}
                    </Typography>
                </Box>
            </BaseTag>
        </Fragment>
    )
}

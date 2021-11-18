import { Fragment, useContext } from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import BaseTag from "components/MetaTag/Preview/BaseTag";
import MetaTagContext from 'context/MetaTag/MetaTagContext';

export default function SlackTag() {
    const { MetaTagField } = useContext(MetaTagContext);

    return (
        <Fragment>
            <BaseTag title='Slack'>
                <Box sx={{
                    borderLeft: '5px solid #e8e8e8',
                    pl: '12px',
                }}>
                    <Box sx={{
                        color: '#1d2129 !important',
                    }}>
                        <Typography sx={{
                            color: '#717274',
                            fontFamily: '"Noto Sans", "NotoSansJP","Slack-Lato", "Lato","appleLogo", sans-serif',
                            fontSize: '15px',
                            fontWeight: '400',
                            overflow: 'hidden',
                            textTransform: 'lowercase',
                            wordWrap: 'break-word',
                        }}>
                            {MetaTagField.url}
                        </Typography>
                        <Typography sx={{
                            color: '#0576b9',
                            fontFamily: '"Noto Sans", "NotoSansJP","Slack-Lato", "Lato","appleLogo", sans-serif',
                            fontSize: '15px',
                            fontWeight: '700',
                            fontVariantLigatures: 'common-ligatures',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            wordWrap: 'break-word',
                        }}>
                            {MetaTagField.title}
                        </Typography>
                        <Typography sx={{
                            color: '#2c2d30',
                            fontFamily: '"Noto Sans", "NotoSansJP","Slack-Lato", "Lato","appleLogo", sans-serif',
                            fontSize: '15px',
                            wordWrap: 'break-word',
                            wordBreak: 'break-word',
                        }}>
                            {MetaTagField.description}
                        </Typography>
                    </Box>
                    <Box sx={{
                        backgroundImage: `url("${MetaTagField.image || ''}")`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 10%)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        height: '187.2px',
                        maxWidth: '360px',
                        marginTop: '5px',
                    }}>
                    </Box>
                </Box>
            </BaseTag>
        </Fragment>
    )
}

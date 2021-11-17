import { Fragment, useContext } from 'react';
import {
    Typography,
} from '@mui/material';
import BaseTag from "components/MetaTag/Preview/BaseTag";
import MetaTagContext from 'context/MetaTag/MetaTagContext';

export default function GoogleTag() {
    const { MetaTagField } = useContext(MetaTagContext);

    return (
        <Fragment>
            <BaseTag title='Google' marginShort={true}>
                <Typography sx={{
                    display: 'block',
                    letterSpacing: 'normal',
                    color: '#1a0dab',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    '@media screen and (min-width: 770px)': {
                        fontSize: '18px',
                        lineHeight: '1.2',
                    },
                }}>
                    {MetaTagField.title}
                </Typography>
                <Typography sx={{
                    fontSize: '14px',
                    lineHeight: '16px',
                    letterSpacing: 'normal',
                    color: '#006621',
                }}>
                    {MetaTagField.url}
                </Typography>
                <Typography sx={{
                    color: '#545454',
                    fontSize: '13px',
                    lineHeight: '1.4',
                    wordWrap: 'break-word',
                }}>
                    {MetaTagField.description}
                </Typography>
            </BaseTag>
        </Fragment>
    )
}

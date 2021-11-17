import { Fragment, useContext } from 'react';
import {
    Typography,
} from '@mui/material';
import BaseTag from "components/MetaTag/Preview/BaseTag";
import MetaTagContext from 'context/MetaTag/MetaTagContext';

export default function SlackTag() {
    const { MetaTagField } = useContext(MetaTagContext);

    return (
        <Fragment>
            <BaseTag title='Slack'>
                <Typography>{MetaTagField.title}</Typography>
                <Typography>{MetaTagField.url}</Typography>
                <Typography>{MetaTagField.description}</Typography>
            </BaseTag>
        </Fragment>
    )
}

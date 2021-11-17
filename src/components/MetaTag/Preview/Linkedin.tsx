import { Fragment, useContext } from 'react';
import {
    Typography,
} from '@mui/material';
import BaseTag from "components/MetaTag/Preview/BaseTag";
import MetaTagContext from 'context/MetaTag/MetaTagContext';

export default function LinkedinTag() {
    const { MetaTagField } = useContext(MetaTagContext);

    return (
        <Fragment>
            <BaseTag title='Linkedin'>
                <Typography>{MetaTagField.title}</Typography>
                <Typography>{MetaTagField.url}</Typography>
                <Typography>{MetaTagField.description}</Typography>
            </BaseTag>
        </Fragment>
    )
}

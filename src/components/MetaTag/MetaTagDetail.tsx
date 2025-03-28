import {
    Fragment,
    useContext,
} from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import { MetaTagImage } from "components/MetaTag";
import {
    TextFieldMeta,
    TextAreaMeta,
} from "components/UI/material-metatag";
import { classesGlobal } from 'styles/useStyleGlobal';
import MetaTagContext from 'context/MetaTag/MetaTagContext';

export default function MetaTagDetail() {

    const { MetaTagField, setMetaTag } = useContext(MetaTagContext);

    const handleChange = (e: any) => setMetaTag(e.target.name as string, e.target.value as string);

    return (
        <Fragment>
            <Typography sx={classesGlobal.subHeaderWithSpaceGlobal}>
                MetaTag
            </Typography>

            <Box sx={classes.metaTagHead}>
                <Typography sx={classes.metaTagCaption}>
                    Imagen
                </Typography>
                <Typography sx={classes.metaTagCaption}>
                    Recommend 1200×628
                </Typography>
            </Box>
            <MetaTagImage />
            <Box sx={classes.metaTagHead}>
                    <Typography sx={classes.metaTagCaption}>
                        Title
                    </Typography>
                    <Typography sx={classes.metaTagCaption}>
                        {MetaTagField.titleLength}
                    </Typography>
                </Box>
                <TextFieldMeta
                    placeholder='Title...'
                    name='title'
                    value={MetaTagField.title}
                    onChange={handleChange}
                />
                <Box sx={classes.metaTagHead}>
                    <Typography sx={classes.metaTagCaption}>
                        Description
                    </Typography>
                    <Typography sx={classes.metaTagCaption}>
                        {MetaTagField.descriptionLength}
                    </Typography>
                </Box>
                <TextAreaMeta
                    placeholder='Description...'
                    name='description'
                    value={MetaTagField.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                />
        </Fragment>
    )
}

const classes = {
    metaTagHead: {
        display: 'flex',
        justifyContent: 'space-between',
        mb: '0.5em',
        mt: '0.5em',
    },
    metaTagCaption: {
        ...classesGlobal.captionGlobal,
    },
} as const;
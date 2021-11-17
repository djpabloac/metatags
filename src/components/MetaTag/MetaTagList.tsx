import { Fragment, useContext } from 'react';
import {
    Box,
    Button,
    Typography,
} from '@mui/material';
import { classesGlobal } from "styles/useStyleGlobal";
import {
    GoogleTag,
    FacebookTag,
    TwitterTag,
    LinkedinTag,
    PinterestTag,
    SlackTag,
} from 'components/MetaTag/Preview';
import SiderbarContext from "context/Siderbar/SiderbarContext";

export default function MetaTagList() {
    const { selectedSocialNetwork } = useContext(SiderbarContext);
    return (
        <Fragment>
            <Box sx={classes.metaTagPreview}>
                <Typography sx={classesGlobal.subHeaderWithSpaceGlobal}>
                    Preview
                </Typography>
                <Button
                    variant='outlined' size='small'
                    sx={{
                        top: '-15px',
                        fontWeight: 'bold',
                        fontSize: '11px',
                        textTransform: 'uppercase',
                    }}
                >Generate Meta Tags</Button>
            </Box>
            {
                !selectedSocialNetwork || selectedSocialNetwork.length === 0 ? <Typography sx={classes.metaTagCaption}>Selecciona un red social</Typography> :
                    selectedSocialNetwork.map((sn) => {
                        if (sn.name === 'Google')
                            return <GoogleTag />
                        else if (sn.name === 'Facebook')
                            return <FacebookTag />
                        else if (sn.name === 'Twitter')
                            return <TwitterTag />
                        else if (sn.name === 'Linkedin')
                            return <LinkedinTag />
                        else if (sn.name === 'Pinterest')
                            return <PinterestTag />
                        else if (sn.name === 'Slack')
                            return <SlackTag />
                        else
                            return <Typography sx={classes.metaTagCaption}>Configurar la red social {sn.name}</Typography>
                    })
            }
        </Fragment>
    )
}

const classes = {
    metaTagPreview: {
        ...classesGlobal.captionGlobal,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    metaTagCaption: {
        ...classesGlobal.captionGlobal,
        display: 'flex',
        justifyContent: 'center',
    },
} as const;
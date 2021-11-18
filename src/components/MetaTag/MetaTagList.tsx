import {
    Fragment,
    useContext,
    useState,
} from 'react';
import {
    Box,
    Button,
    Typography,
} from '@mui/material';
import { classesGlobal } from "styles/useStyleGlobal";
import {
    BaseTag,
    GoogleTag,
    FacebookTag,
    TwitterTag,
    LinkedinTag,
    PinterestTag,
    SlackTag,
    socialNetworkKing,
} from 'components/MetaTag/Preview';
import {
    MetaTagResult
} from 'components/MetaTag';
import CodeIcon from '@mui/icons-material/Code';
import SiderbarContext from "context/Siderbar/SiderbarContext";

export default function MetaTagList() {
    const { selectedSocialNetwork } = useContext(SiderbarContext);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <Fragment>
            <MetaTagResult open={open} onClose={handleClose}/>
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
                    onClick={handleOpen}
                >
                    <CodeIcon />
                    Generate Meta Tags
                </Button>
            </Box>
            {
                !selectedSocialNetwork || selectedSocialNetwork.length === 0 ? <Typography sx={classes.metaTagCaption}>Selecciona un red social</Typography> :
                    selectedSocialNetwork.map((sn) => {
                        if (sn.name === socialNetworkKing.GOOGLE)
                            return <GoogleTag key={sn._id} />
                        else if (sn.name === socialNetworkKing.FACEBOOK)
                            return <FacebookTag key={sn._id} />
                        else if (sn.name === socialNetworkKing.TWITTER)
                            return <TwitterTag key={sn._id} />
                        else if (sn.name === socialNetworkKing.LINKEDIN)
                            return <LinkedinTag key={sn._id} />
                        else if (sn.name === socialNetworkKing.PINTEREST)
                            return <PinterestTag key={sn._id} />
                        else if (sn.name === socialNetworkKing.SLACK)
                            return <SlackTag key={sn._id} />
                        else
                            return <BaseTag key={sn._id} title={sn.name}><Typography sx={classes.metaTagCaption}>Configurar la red social {sn.name}</Typography></BaseTag>
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
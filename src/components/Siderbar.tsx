import { Fragment, useState, useContext, useEffect } from 'react'
import Image from 'next/image';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Avatar
} from '@mui/material';
import { SocialNetworkType } from "types/socialnetwork.types";
import { classesGlobal } from 'styles/useStyleGlobal';
import { data as dbsocial } from "utils/data";
import SiderbarContext from "context/Siderbar/SiderbarContext";

export default function Siderbar() {

    const [sidebarSocialNetworks, setSidebarSocialNetworks] = useState(dbsocial);
    const { addSelected, removeSelected } = useContext(SiderbarContext);

    useEffect(() => {
        sidebarSocialNetworks.map(s => s.socialNetwork.map(sn => {
            if(sn.checked)
                addSelected(sn);
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlerSocial = (sn: SocialNetworkType) => {
        sn.checked = !sn.checked;
        if(sn.checked){
            addSelected(sn);
        }
        else {
            removeSelected(sn);
        }

        setSidebarSocialNetworks([
            ...sidebarSocialNetworks,
        ]);
    };

    return (
        <Fragment>
            <List
                sx={classes.socialNetworkList}
                subheader={<li />}
            >
                {sidebarSocialNetworks.map((s) => (
                    <li key={`section-${s._id}`}>
                        <ul>
                            <ListSubheader sx={classesGlobal.subHeaderGlobal}>
                                {s.caption}
                            </ListSubheader>
                            {s.socialNetwork.map((sn) => (
                                <ListItem
                                    sx={sn.disabled ? classes.cursorNormal : classes.cursorPointer}
                                    key={`item-${s._id}-${sn._id}`}
                                    onClick={() => {
                                        if (!sn.disabled)
                                            handlerSocial(sn)
                                    }}
                                >
                                    <ListItemIcon>
                                        <Avatar sx={sn.checked ? classes.socialNetworkAvatar : classes.socialNetworkAvatarDisabled} >
                                            <Image src={sn.logo} alt='Meta Tags' width='21' height='18' />
                                        </Avatar>
                                    </ListItemIcon>
                                    <ListItemText sx={sn.checked ? classes.socialNetworkTextNormal : classes.socialNetworkTextDisabled}
                                        primary={sn.name} />
                                </ListItem>
                            ))}
                        </ul>
                    </li>
                ))}
            </List>
        </Fragment>
    )
}


const classes = {
    socialNetworkList: {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        '& ul': { padding: 0 },
    },
    socialNetworkAvatar: {
        ...classesGlobal.transitionGlobal,
        bgcolor: classesGlobal.palette.avatar.bgcolorActive,
    },
    socialNetworkAvatarDisabled: {
        ...classesGlobal.transitionGlobal,
        bgcolor: classesGlobal.palette.avatar.bgcolorDisabled,
    },
    cursorNormal: {
        cursor: 'default',
    },
    cursorPointer: {
        cursor: 'pointer',
    },
    socialNetworkTextNormal: {
        ...classesGlobal.transitionGlobal,
        color: classesGlobal.palette.link.colorActive,
    },
    socialNetworkTextDisabled: {
        ...classesGlobal.transitionGlobal,
        color: classesGlobal.palette.link.colorDisabled,
    }
} as const;
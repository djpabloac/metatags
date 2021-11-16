import { Fragment, useState } from 'react'
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

export default function Siderbar() {

    const [sidebarSocialNetworks, setSidebarSocialNetworks] = useState(dbsocial);

    const handlerSocial = (sn: SocialNetworkType) => {
        console.log(sn);
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
                                    disabled={sn.disabled}
                                    onClick={() => {
                                        if (!sn.disabled)
                                            handlerSocial(sn)
                                    }}
                                >
                                    <ListItemIcon>
                                        <Avatar sx={sn.disabled ? classes.socialNetworkAvatarDisabled : classes.socialNetworkAvatar}>
                                            <Image src={sn.logo} alt='Meta Tags' width='21' height='18' />
                                        </Avatar>
                                    </ListItemIcon>
                                    <ListItemText primary={sn.name} />
                                </ListItem>
                            ))}
                        </ul>
                    </li>
                ))}
            </List>
        </Fragment>
    )
}


const classes ={
    socialNetworkList: {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        '& ul': { padding: 0 },
    },
    socialNetworkAvatar: {
        bgcolor: '#2A81FB',
    },
    socialNetworkAvatarDisabled: {
        bgcolor: '#18283E',
    },
    cursorNormal: {
        cursor: 'default',
    },
    cursorPointer: {
        cursor: 'pointer',
    }
} as const;
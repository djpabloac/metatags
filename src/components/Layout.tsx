import { Fragment } from 'react';
import {
    Grid,
    Box,
} from '@mui/material';
import {
    Navbar,
    Siderbar,
} from 'components'
import {
    MetaTagDetail,
    MetaTagList,
}
    from 'components/MetaTag';

export default function Layout() {

    return (
        <Fragment>
            <Navbar />
            <Box component='main' sx={{minWidth: '900px'}}>
                <Grid container spacing={0}>
                    <Grid
                        size={{ xs: 3, lg: 2, xl: 2 }}
                        sx={{
                        ...classes.borderGrid,
                        paddingLeft: '24px',
                        paddingTop: '24px',
                    }}>
                        <Siderbar />
                    </Grid>
                    <Grid
                        size={{ xs: 4, lg: 5, xl: 5 }}
                        sx={{
                        ...classes.contentGrid,
                        ...classes.borderGrid,
                    }}>
                        <MetaTagDetail />
                    </Grid>
                    <Grid 
                        size={{ xs: 5, lg: 5, xl: 5 }}
                        sx={{
                        ...classes.contentGrid,
                        ...classes.borderGrid,
                        paddingRight: '24px',
                    }}>
                        <MetaTagList />
                    </Grid>
                </Grid>
            </Box>

        </Fragment>
    )
}

const classes = {
    contentGrid: {
        p: '40px 45px 46px 24px',
    },
    borderGrid: {
        borderTop: '1px solid #C7D3D9',
        borderRight: '1px solid #C7D3D9',
        borderBottom: '1px solid #C7D3D9',
    }
} as const;

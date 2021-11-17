import { Fragment } from 'react';
import Image from 'next/image';
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography
} from '@mui/material';
import Search from 'components/Search';
import { classesGlobal } from 'styles/useStyleGlobal';

export default function Navbar(): JSX.Element {

    return (
        <Fragment>
            <AppBar color='transparent' position='static' sx={{
                boxShadow: 'none',
                height: '92px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Toolbar sx={classesGlobal.marginLayoutNavGlobal}>
                    <Box sx={classes.titleContent}>
                        <Image src='/assets/metatags.svg' alt='Meta Tags' width='40' height='40' />
                        <Typography variant="h5" sx={classes.titleCaption}>
                            Meta Tags
                        </Typography>
                    </Box>
                    <Box sx={classes.searchContent}>
                        <Search />
                    </Box>
                    {/* <Button color="inherit">Font Generator</Button> */}
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

const classes = {
    titleContent: {
        display: 'flex',
        alignItems: 'center'
    },
    titleCaption: {
        marginLeft: '16px'
    },
    searchContent: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center'
    }
}
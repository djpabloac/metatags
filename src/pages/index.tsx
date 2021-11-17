import { Fragment } from "react";
import { NextPage } from "next";
import { CssBaseline } from '@mui/material';
import {
  MetaTagState,
  SiderbarState,
}
  from 'context';
import Layout from 'components/Layout';

const Home: NextPage = () => {

  return (
    <Fragment>
      <CssBaseline />
      <SiderbarState>
        <MetaTagState>
          <Layout />
        </MetaTagState>
      </SiderbarState>
    </Fragment>
  );
}

export default Home

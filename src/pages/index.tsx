import { Fragment } from "react";
import { CssBaseline } from '@mui/material'
import Layout from 'components/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <Fragment>
      <CssBaseline />
      <Layout />
    </Fragment>
  );
}

export default Home

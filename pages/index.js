import React from 'react'
import Header from '../src/components/core/Header/'
import Link from  'next/link'
import Head from 'next/head'
import U03V5 from '../src/components/U03V5'
import CT12V0 from '../src/components/CT12V0'
import CB137 from '../src/components/CB137'
import F19 from "../src/components/F19"
import CB79v0x7 from "../src/components/CB79V0X7"
import CB12 from "../src/components/CB12"
import Footer from "../src/components/core/Footer/U10V6"
import CB27 from "../src/components/CB27"
export default function index() {
    return (
        <>
        <Head>
        <title>WebAPP</title>
        <link href="https://www.oracle.com/asset/web/css/redwood-base.css" key="oraclesbase" rel="stylesheet" />
        <link href="https://www.oracle.com/asset/web/css/redwood-styles.css" key="oraclestyles" rel="stylesheet" />
        </Head>
        <Header/>
        <U03V5/>
        <CT12V0/>
        <CB137/>
        <CB27/>
        <F19/>
        <CB79v0x7/>
        <CB12/>
        <Footer/>
        </>
    )
}

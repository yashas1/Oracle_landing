import React from 'react'
import Header from '../src/components/core/Header/'
import Link from  'next/link'
import Head from 'next/head'
export default function index() {
    return (
        <>
        <Head>
        <title>WebAPP</title>
        <link href="https://www.oracle.com/asset/web/css/redwood-base.css" key="oraclesbase" rel="stylesheet" />
        <link href="https://www.oracle.com/asset/web/css/redwood-styles.css" key="oraclestyles" rel="stylesheet" />
        </Head>
        <Header/>
        </>
    )
}

import React from 'react'
import PageTitle from '../../../components/PageTitle'
import {Helmet} from "react-helmet";
import styled from './style.module.scss'
const UserReports = () => {
  return (
    <div className={styled.result_body}>
        <div className={styled.result_container}>
         <div className={styled.pageTitle}>
         <PageTitle title = {'Bütün nəticələr'}/>
         </div>
        </div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Neticeler</title>
            </Helmet>
    </div>
  )
}

export default UserReports
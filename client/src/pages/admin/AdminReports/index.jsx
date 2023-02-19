import React, { useEffect, useState, useMemo  } from 'react'
import PageTitle from '../../../components/PageTitle'
import {Helmet} from "react-helmet";
import styled from './style.module.scss'
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../../redux/loaderSlice/loaderSlice';
import { getAllReports } from '../../../apicalls/reports';
import { message} from 'antd';
import MaterialReactTable from 'material-react-table';
import moment from 'moment';
import { RiQuestionAnswerFill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
const AdminReports = () => {
    const [reportsData, setReportsData] = useState([]);
    console.log(reportsData);
    const dispatch = useDispatch()
   
     const columns = useMemo(
      () => [
        {
            header: 'İstifadəçi Adı',
            accessorKey: 'user.name',
          
          },
        {
          header: 'İmtahan Adı',
          accessorKey: 'exam.name',
        
        },
        {
          header: 'Tarix',
          accessorKey: 'updatedAt',
        },
        {
          header: 'Ümumi Suallar',
          accessorKey: 'exam.questions.length',
        },
        {
          header: 'Lazım olan nəticə',
          accessorKey: 'exam.passingMarks',
        },
        {
            header: 'Düzgün Cavablar',
          accessorKey: 'result.correctAnswer.length',          
          },
        {
          header: 'Status',
          accessorKey: 'result.verdict',
        },
      ],
      [],
     );
      
      const getData = async () => {
        try {
            dispatch(ShowLoading());
            const response = await getAllReports();
            if(response.success){
                setReportsData(response.data)
            }else{
                message.error(response.message)
            }
            dispatch(HideLoading());
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
      };

      useEffect(()=>{
        getData();
      },[])
  return (
    <div className={styled.result_body}>
        <div className={styled.result_container}>
         <div className={styled.pageTitle}>
         <PageTitle title = {'Bütün istifadəçilərin nəticələri'}/>
         </div>

         <div className={styled.table_body}>
          <MaterialReactTable  displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 20,
          },
        }}  columns={columns} data={reportsData} />
         </div>
        </div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Neticeler</title>
            </Helmet>
    </div>
  )
}

export default AdminReports
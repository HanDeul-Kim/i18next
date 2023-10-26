// import logo from './logo.svg';
// import i18next from './index';
import './App.css'
import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next';
// matarial-ui
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function App() {
    const { t, i18n } = useTranslation()
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 200 },
        {
            field: 'firstName',
            headerName: t('name1'),
            width: 300,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: t('name2'),
            width: 300,
            editable: true,
        },
        {
            field: 'age',
            headerName: t('age'),
            type: 'number',
            width: 150,
            editable: true,
        },

    ];
    const rows = [
        { id: 1, lastName: t('memberName1-1'), firstName: t('memberName1-2'), age: 35 },
        { id: 2, lastName: t('memberName2-1'), firstName: t('memberName2-2'), age: 42 },
        { id: 3, lastName: t('memberName3-1'), firstName: t('memberName3-2'), age: 45 },
        { id: 4, lastName: t('memberName1-1'), firstName: t('memberName1-2'), age: 35 },
        { id: 5, lastName: t('memberName2-1'), firstName: t('memberName2-2'), age: 42 },
        { id: 6, lastName: t('memberName3-1'), firstName: t('memberName3-2'), age: 45 },
        { id: 7, lastName: t('memberName1-1'), firstName: t('memberName1-2'), age: 35 },
        { id: 8, lastName: t('memberName2-1'), firstName: t('memberName2-2'), age: 42 },
        { id: 9, lastName: t('memberName3-1'), firstName: t('memberName3-2'), age: 45 }
    ];
    return (
        <div className="App">
            <Header />
            <h1>i18next {t('implemented')}</h1>
            {/* key name이 learn인 텍스트 개행 처리 코드 방법 1 - json파일 객체 내 \n 사용 */}
            {/* <div>{t('learn').split("\n").map((line) => (<div>{line}</div>))}</div> */}
            {/* key name이 learn인 텍스트 개행 처리 코드 방법 2 - json파일에 <br> */}
            <div dangerouslySetInnerHTML={{ __html: t('learn') }} />




            {/* <div>{t('learn').split}</div> */}
            <p className="description">{t('description')}</p>

            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>



            {/* 언어 변경 button */}
            {/* {Object.keys(lngs).map((lng) => (
                <button
                    type="submit"
                    key={lng}
                    onClick={() => i18n.changeLanguage(lng)}
                    disabled={i18n.resolvedLanguage === lng}
                >
                    <img></img>{lngs[lng].nativeName}
                </button>
            ))} */}
        </div>
    );
}
function Header() {

    const { t, i18n } = useTranslation()
    const handleChangeLanguage = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    }
    return (
        <>
            <header className="header">
                <div class="logo">Logo</div>
                <div className="middle">MENU</div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">언어선택</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChangeLanguage}
                    >
                        <MenuItem value="ko">ko(South Korea)</MenuItem>
                        <MenuItem value="jp">jp(Japan)</MenuItem>
                        <MenuItem value="en">en(United States)</MenuItem>
                    </Select>
                </FormControl>
                {/* <select onChange={handleChangeLanguage}>
                    <option>Language</option>
                    <option value="ko">ko(South Korea)</option>
                    <option value="jp">jp(Japan)</option>
                    <option value="en">en(United States)</option>
                </select> */}

                {/* <ul>
                    {Object.keys(lngs).map((lng) => (
                        <li
                            type="submit"
                            key={lng}
                            onClick={() => i18n.changeLangudge(lng)}
                            disabled={i18n.resolvedLafsdffnguage === lng}
                        >
                            <img></img>{lngs[lng].nativeName}
                        </li>
                    ))}
                </ul> */}
            </header>
        </>
    )
}
export default App;
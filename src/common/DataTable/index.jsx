import React from 'react'
import MaterialTable from 'material-table'
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles'
const index = () => {
  const getMuiTheme = () =>
    createTheme({
      overrides: {
        MuiButton: {
          root: {
            fontSize: 14,
            color: '#757998',
          },
        },
        MuiTableCell: {
          root: {
            fontSize: 14,
            paddingLeft: 30,
            color: '#757998',
            borderRight: '1px #ECECEC solid',
          },
          body: {
            color: '#131313',
          },
        },
        MuiTypography: {
          body1: {
            fontSize: 13,
          },
          body2: {
            fontSize: 13,
          },
          caption: {
            fontSize: 14,
          },
        },
        MuiMenuItem: {
          root: {
            fontSize: 13,
          },
        },
        MuiTablePagination: {
          select: {
            fontSize: 13,
          },
        },
        MuiFormLabel: {
          root: {
            fontSize: 13,
          },
        },
        MuiChip: {
          root: {
            fontSize: 13,
          },
        },
        MuiPaper: {
          elevation2: {
            boxShadow: '0px 1px 0px 0px #ddd',
          },
        },
        MuiIconButton: {
          root: {
            backgroundColor: 'transparent !important',
          },
        },
        MuiInputBase: {
          input: {
            fontSize: 13,
          },
        },
      },
    })
  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          options={{ search: false }}
          columns={[
            { title: 'Adı', field: 'name' },
            { title: 'Soyadı', field: 'surname' },
            { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
            {
              title: 'Doğum Yeri',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]}
          data={[
            {
              name: 'Mehmet',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 63,
            },
          ]}
          title=""
        />
      </div>
    </MuiThemeProvider>
  )
}

export default index

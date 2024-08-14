import { Button, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import map from '../../../../public/assets/map2.png';
import { Box } from '@mui/system';



const data = [
  {
    employeeId: '01',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Parameter: 'GIP',
    Condition1:'',
  },
  {
    employeeId: '02',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Parameter: 'CHP',
    Condition1:'',
  },
  {
    employeeId: '03',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Parameter: 'THP',
    Condition1:'',
  },
  {
    employeeId: '04',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Parameter: 'Battery %',
    Condition1:'',
  },
  {
    employeeId: '05',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Parameter: 'Solar Power',
    Condition1:'',
  },
  {
    employeeId: '06',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Parameter: 'Communication',
    Condition1:'',
  },
  {
    employeeId: '07',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Parameter: 'CPU Temperature',
    Condition1:'',
  },
]

function AddWell() {
  const [employeeData, setEmployeeData] = useState(data)

  const onChangeInput = (e, employeeId) => {
    const { name, value } = e.target
    console.log('name', name)
    console.log('value', value)
    console.log('employeeId', employeeId)

    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    )

    console.log('editData', editData)

    setEmployeeData(editData)
  }

  return (
    <div>
      <Paper>

        {/* <Grid item xs={12} sm={6} md={6} lg={6} gap={1} sx={{ display: 'flex', flexDirection: 'column' }} > */}
        <Typography variant='h4'> Physical Details</Typography>
        <Grid container p={1} sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <Grid item sm={6} md={3} xs={12} lg={2}><TextField fullWidth label="Well Number" variant="outlined" /></Grid>
          <Grid item sm={6} md={3} xs={12} lg={2}><TextField fullWidth label="Well Location" variant="outlined" /></Grid>
          <Grid item sm={6} md={3} xs={12} lg={2}><TextField fullWidth label="Well Installation" variant="outlined" /></Grid>
          <Grid item sm={6} md={3} xs={12} lg={2}><TextField fullWidth label="Latitude" variant="outlined" /></Grid>
          <Grid item sm={6} md={3} xs={12} lg={2}><TextField fullWidth label="Longitude" variant="outlined" /></Grid>
        </Grid>
        {/* </Grid> */}

      </Paper>
      <Paper>
        <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }} mt={1} p={1} >
          <Typography variant='h4'>Notification Setting</Typography>
          <Grid item>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: '1.5rem' }}>Parameter</TableCell>
                  <TableCell sx={{ fontSize: '1.5rem' }}>Normal Alert</TableCell>
                  <TableCell sx={{ fontSize: '1.5rem' }}>Condition</TableCell>
                  <TableCell sx={{ fontSize: '1.5rem' }}>Critical Alert</TableCell>
                  <TableCell sx={{ fontSize: '1.5rem' }}>Condition</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employeeData.map(({ employeeId, Parameter, NormalAlert, CriticalAlert, Condition, Condition1 }) => (
                  <TableRow key={employeeId}>
                    <TableCell>
                      <Typography>{Parameter}</Typography>
                    </TableCell>

                    <TableCell>
                      <TextField
                        name="NormalAlert"
                        value={NormalAlert}
                        onChange={(e) => onChangeInput(e, employeeId)}
                        variant="outlined"
                        size="small"
                        style={{ width: '90px' }}
                      />
                    </TableCell>
                    <TableCell>
                    <FormControl variant="outlined" size="small" fullWidth>
                        <Select
                          labelId={`condition-label-${employeeId}`}
                          name="Condition1"
                          value={Condition1}
                          onChange={(e) => onChangeInput(e, employeeId)}
                          size="small"
                          style={{ width: '90px' }}
                        >
                          <MenuItem value="High">High</MenuItem>
                          <MenuItem value="Low">Low</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="CriticalAlert"
                        value={CriticalAlert}
                        onChange={(e) => onChangeInput(e, employeeId)}
                        variant="outlined"
                        size="small"
                        style={{ width: '90px' }}
                      />
                    </TableCell>
                    <TableCell>
                      <FormControl variant="outlined" size="small" fullWidth>
                        <Select
                          labelId={`condition-label-${employeeId}`}
                          name="Condition"
                          value={Condition}
                          onChange={(e) => onChangeInput(e, employeeId)}
                          size="small"
                          style={{ width: '90px' }}
                        >
                          <MenuItem value="High">High</MenuItem>
                          <MenuItem value="Low">Low</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
          <Grid item p={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant='contained'> Add Well</Button>
          </Grid>
        </Grid>
      </Paper>

    </div>
  )
}

export default AddWell

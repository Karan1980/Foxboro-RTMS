import { Button, Card, CardContent, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Box } from "@mui/system";
import AssetsIcon from '@mui/icons-material/AccountBalance';

// -------------------Table Function-------------------------
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  // [`&.${tableCellClasses.body}`]: {
  //   fontSize: 14,
  // },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function ManageAsset() {
  const inputRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const [add, setAdd] = useState([]);

  const handleAdd = () => {
    const value = inputRef?.current.value;
    const value1 = inputRef1?.current.value;
    const value2 = inputRef2?.current.value;
    const value3 = inputRef3?.current.value;

    // Add the values as an object to the state array
    setAdd([...add, { department: value, head: value1, email: value2, phone: value3 }]);

    // Clear the input fields after adding
    inputRef.current.value = null;
    inputRef1.current.value = null;
    inputRef2.current.value = null;
    inputRef3.current.value = null;
  }

  const steps = ["Head of Department", "Manager", "Team Leader"];

  // -------------------------------------Table--------------------------------------------

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      padding: '10px', // Increase padding
      height: '20px',  // Set a specific height
      fontSize: '16px', // Optionally adjust font size for header
      lineHeight: '1.5', // Adjust line height if needed
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('1'),
    createData('2'),
    createData('3'),
    createData('4'),

  ]

  const [parameter, setParameter] = React.useState('');

  const handleChangeParameter = (event) => {
    setParameter(event.target.value);
  };

  return (

    <div>
      <Paper>
        <Grid container gap={1} p={3}>
          <IconButton>
            <AssetsIcon sx={{ fontSize: 30, color: "green " }} />
          </IconButton>
          <Typography variant="h4" mt={1} >Organization </Typography>
          <Grid container spacing={2} padding={2}>
            {/* Organization Name Section */}
            <Grid item xs={12} sm={6} md={4} lg={4} display={'flex'} gap={1}>
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                Display Organization Name
              </Typography>
              <Grid item xs={12} sm={6} md={4} lg={4} >
                <TextField variant="outlined" size="small" fullWidth value={""} />
              </Grid>
            </Grid>

            {/* Subtitle Name Section */}
            <Grid item xs={12} sm={6} md={4} lg={4} display={'flex'} gap={1}>
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                Display Subtitle Name
              </Typography>
              <Grid item xs={12} sm={6} md={4} lg={4} display={'flex'} gap={1}>
                <TextField variant="outlined" size="small" fullWidth value={""} />
              </Grid>
            </Grid>

            {/* Logo Upload Section */}
            <Grid item xs={12} sm={6} md={4} lg={4} display={'flex'} gap={1}>
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                Upload Logo
              </Typography>
              <Grid item xs={12} sm={6} md={4} lg={4} display={'flex'} gap={2}>
                <Button variant="outlined" size="small" component="label" fullWidth>
                  <input
                    type="file"
                    accept="image/*"
                    name="idCardPhoto"
                    hidden

                  />
                  Upload Logo
                </Button>
              </Grid>

            </Grid>
          </Grid>

          {/* Address Details Section */}
          <Grid container spacing={3} padding={2}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                {/* Address Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography variant="h6" sx={{ mb: 1 }}>Address</Typography>
                  <TextField variant="outlined" size="small" fullWidth value={""} />
                </Grid>
                {/* City Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography variant="h6" sx={{ mb: 1 }}>City</Typography>
                  <TextField variant="outlined" size="small" fullWidth value={""} />
                </Grid>
                {/* State Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography variant="h6" sx={{ mb: 1 }}>State</Typography>
                  <TextField variant="outlined" size="small" fullWidth value={""} />
                </Grid>
                {/* Country Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography variant="h6" sx={{ mb: 1 }}>Country</Typography>
                  <TextField variant="outlined" size="small" fullWidth value={""} />
                </Grid>
                {/* Pin Code Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography variant="h6" sx={{ mb: 1 }}>Pin Code</Typography>
                  <TextField variant="outlined" size="small" fullWidth value={""} />
                </Grid>
                {/* Phone Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography variant="h6" sx={{ mb: 1 }}>Phone</Typography>
                  <TextField variant="outlined" size="small" fullWidth value={""} />
                </Grid>
                {/* Fax Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography variant="h6" sx={{ mb: 1 }}>Fax</Typography>
                  <TextField variant="outlined" size="small" fullWidth value={""} />
                </Grid>
                {/* Email Field */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Typography variant="h6" sx={{ mb: 1 }}>Email</Typography>
                  <TextField variant="outlined" size="small" fullWidth />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Paper>
      {/* ------------Input textfield for table------------------- */}
      <Card sx={{ my: 2 }}>
        <CardContent>
          <Grid container spacing={2} gap={4} mt={0.1}>
            {/* ------------------------ADD DEPARTMENT------------------------------ */}
            <Grid item xs={12} sm={3.5} md={3.5} lg={12} gap={1} display='flex' flexDirection={'column'} >
              <Typography variant="h5"> Add Department</Typography>
              <Box display='flex' gap={1}>
                <TextField variant="outlined" size="small" label="Department" inputRef={inputRef} fullWidth />
                <Button variant='contained' onClick={handleAdd} size="small"
                  sx={{
                    backgroundColor: 'green',   // Change button color to green
                    '&:hover': {
                      backgroundColor: 'darkgreen', // Optional: Change color on hover
                    },
                  }}>
                  ADD
                </Button>
              </Box>
              {/* /-----------------------------------------------Table--------------------------------- */}
              <Grid container>
                <TableContainer component={Paper} sx={{ maxHeight: 620, overflow: 'auto' }}>
                  <Table aria-label="customized table" stickyHeader>
                    <TableHead sx={{ backgroundColor: '#8C000B' }}>
                      <TableRow sx={{ backgroundColor: '#8C000B' }}>
                        <StyledTableCell sx={{ fontSize: '18px', width: '15%', backgroundColor: '#8C000B' }}>Department</StyledTableCell>
                        <StyledTableCell sx={{ fontSize: '18px', width: '10%', backgroundColor: '#8C000B' }}></StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="left">1</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>

            {/* ------------------------ADD POSITION------------------------------ */}
            <Grid item xs={12} sm={3.5} md={3.5} lg={12} gap={1} display='flex' flexDirection={'column'}>
              <Typography variant="h5"> Add Position</Typography>
              <Box display='flex' gap={1}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-select-large-label">Department</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-large"
                      value={parameter}
                      label="Well Location"
                      onChange={handleChangeParameter}
                    >
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem>
                      <MenuItem value={1}>Software</MenuItem>
                      <MenuItem value={2}>Hardware</MenuItem>
                      <MenuItem value={3}></MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <TextField variant="outlined" size="small" label="Position" inputRef={inputRef} fullWidth />
                <Button variant='contained' onClick={handleAdd} size="small"
                  sx={{
                    backgroundColor: 'green',   // Change button color to green
                    '&:hover': {
                      backgroundColor: 'darkgreen', // Optional: Change color on hover
                    },
                  }}>
                  ADD
                </Button>
              </Box>
              {/* -----------------------------------------------Table 2------------------------------------------------------ */}
              <Grid container>
                <TableContainer component={Paper} sx={{ maxHeight: 620, overflow: 'auto' }}>
                  <Table aria-label="customized table" stickyHeader>
                    <TableHead >
                      <TableRow  >
                        {/* <StyledTableCell sx={{ fontSize: '18px', width: '25%' }}>Department</StyledTableCell>
                        <StyledTableCell sx={{ fontSize: '18px', width: '25%' }}>Position</StyledTableCell> */}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="left">1</StyledTableCell>

                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
            {/* ------------------------APPROVAL CHAIN------------------------------ */}

            <Grid item xs={12} sm={5} md={5} lg={12} gap={1} display='flex' flexDirection={'column'}>
              <Typography variant="h5"> Approval Chain</Typography>
              <Box display='flex' gap={1}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-select-large-label">Department</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-large"
                      value={parameter}
                      label="Well Location"
                      onChange={handleChangeParameter}
                    >
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem>
                      <MenuItem value={1}>Software</MenuItem>
                      <MenuItem value={2}>Hardware</MenuItem>
                      <MenuItem value={3}></MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <TextField variant="outlined" label="Action" size="small" fullWidth />
                <TextField variant="outlined" label="Level-1" size="small" fullWidth />
                <TextField variant="outlined" label="Level-2" size="small" fullWidth />
                <Button variant='contained' onClick={handleAdd} size="small"
                  sx={{
                    backgroundColor: 'green',   // Change button color to green
                    '&:hover': {
                      backgroundColor: 'darkgreen', // Optional: Change color on hover
                    },
                  }}>
                  ADD
                </Button>
              </Box>
              {/* ----------------------------------------------------Table 3-------------------------------------------------- */}
              <Grid container>
                <TableContainer component={Paper} sx={{ maxHeight: 620, overflow: 'auto' }}>
                  <Table aria-label="customized table" stickyHeader>
                    <TableHead >
                      <TableRow  >
                        {/* <StyledTableCell sx={{ fontSize: '18px', width: '15%' }}>Department</StyledTableCell>
                        <StyledTableCell align="left" sx={{  width: '15%' }}>Action</StyledTableCell>
                        <StyledTableCell align="left" sx={{ fontSize: '18px', width: '15%' }}>Level-1</StyledTableCell>
                        <StyledTableCell align="left" sx={{ fontSize: '18px', width: '15%' }}>Level-2</StyledTableCell> */}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="left">1</StyledTableCell>
                          <StyledTableCell align="left"></StyledTableCell>
                          <StyledTableCell align="left"></StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>

            {/* ------------------------BUTTON BOX------------------------------ */}

            <Grid container mt={2} display={"flex"} justifyContent={"end"} gap={1} flexDirection={{ xs: 'row' }} >
              <Box >
                <Button variant='contained'
                  sx={{
                    backgroundColor: 'green',   // Change button color to green
                    '&:hover': {
                      backgroundColor: 'darkgreen', // Optional: Change color on hover
                    },
                    fontSize: '16px',
                    width: '150px',
                  }}>
                  SAVE
                </Button>
              </Box>
              <Box>
                <Button variant='contained'
                  sx={{
                    backgroundColor: 'green',   // Change button color to green
                    '&:hover': {
                      backgroundColor: 'darkgreen', // Optional: Change color on hover
                    },
                    fontSize: '16px',
                    width: '150px',

                  }}>
                  EDIT
                </Button>
              </Box>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </div >
  );
}

export default ManageAsset;

import React, { useState, useEffect } from "react";
import {
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  FormControl,
  Select,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { addInstallation, addLocation, getLocation, getAllInstallation, getAllInstallations } from '../../apis/wellService.js'
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { state } from "@antv/g2plot/lib/adaptor/common";


function WellDetailAdd() {
  const [location, setLocation] = useState("");
  const [allLocation, setAllLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [insLoading, setInsLoading] = useState(true);
  const [locationMenuItem, setLocationMenuItem] = useState("")
  const [installation, setInstallation] = useState("");
  const [tableInstallation, setTableInstallation] = useState([]);
  const organizationName = useSelector((state) => state.auth.organization)


  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  const handleAddLocation = async () => {

    if (!location) {
      toast.error("Please enter location");
      return;
    }
    try {
      const data = {
        organizationName: organizationName,
        location: location,
      }
      const resp = await addLocation(data);
      if (Object.keys(resp).length <= 1) {
        toast.error("Location already exist");
        return;
      }
      else {
        setAllLocation([...allLocation, location]);
        toast.success(resp.message);
        setLocation("");
      }
    } catch (error) {

      console.log(error);
    }
  }

  const addInstallationForLocation = async () => {
    if (!installation) {
      toast.error("Please enter installation");
      return;
    }
    try {
      const data = {
        organizationName,
        location: locationMenuItem,
        installation: installation,
      }
      const resp = await addInstallation(data);
      if (Object.keys(resp).length <= 1) {
        toast.error("Installation already exist");
        return;
      }
      else {
        toast.success(resp.message);
        const newInstallation = {
          location: locationMenuItem,
          installations: {
            name: installation,
          },
        };
        setTableInstallation([...tableInstallation, newInstallation]);
        setInstallation("");
        setLocationMenuItem("")
        // data.location="";
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    (async () => {
      try {
        const data = await getLocation(organizationName);
        // setAllLocation(resp);
        setAllLocation(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      try {
        const value = await getAllInstallations(organizationName);
        setTableInstallation(value.data)
        setInsLoading(false)
      } catch (error) {
        console.log(error);
      }
    })();

  }, []);


  const [selectedLocation, setSelectedLocation] = useState("");
  const [installations, setInstallations] = useState([]);
  const [loadingInstallations, setLoadingInstallations] = useState(false);



  const handleLocationChange = async (event) => {
    const location = event.target.value;
    setSelectedLocation(location); // Update the selected location
    setLoadingInstallations(true); // Show loading indicator

    try {
      const response = await getAllInstallation(location, organizationName); // Pass organizationName as needed
      setInstallations(response.data); // Update the installations list
    } catch (error) {
      console.error("Error fetching installations:", error);
    } finally {
      setLoadingInstallations(false); // Hide loading indicator
    }
  };





  // Styled components
  const CustomTableCell = styled(TableCell)(({ theme }) => ({
    "&.MuiTableCell-head": {
      backgroundColor: "#8C000B", // Customize background color
      color: theme.palette.common.white,
      padding: "15px",
      fontSize: "16px",
    },
    "&.MuiTableCell-body": {
      fontSize: "14px",
    },
  }));

  const CustomTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };



  return (
    <div>
      <Grid container spacing={2}>
        {/* Add Location */}
        <Grid item lg={4}>
          {/* Input and Add Button */}
          <Grid container spacing={2} alignItems="center">
            <Grid item lg={9.5} xs={12}>
              <TextField label="Add Location" size="small" fullWidth value={location} onChange={(e) => setLocation(e.target.value)} />
            </Grid>
            <Grid item lg={2.5} xs={12}>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                }}
                fullWidth
                onClick={(e) => handleAddLocation()}
              >
                Add
              </Button>
            </Grid>
          </Grid>

          {/* Table */}
          <Grid item mt={2}>
            <TableContainer component={Paper} sx={{ maxHeight: 320, height: 400, overflow: "auto" }}>
              <Table>
                <TableBody>
                  {loading ? <div>Loading ....</div> :

                    (allLocation.length ? allLocation.map((location, index) => (
                      <CustomTableRow key={index}>
                        <CustomTableCell align="left">{location}</CustomTableCell>
                        <CustomTableCell align="left">
                          <IconButton onClick={handleEdit}>
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={handleDelete}>
                            <DeleteIcon />
                          </IconButton>
                        </CustomTableCell>
                      </CustomTableRow>
                    )) : <CustomTableRow>
                      <CustomTableCell align="center">
                        No Locations Available
                      </CustomTableCell>
                    </CustomTableRow>)
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        {/* Add Installation */}
        <Grid item lg={8} >
          <Grid container spacing={2}>
            <Grid item lg={5}>
              <FormControl fullWidth size="small">
                <InputLabel id="dropdown-label">Add Location</InputLabel>

                <Select labelId="location-select-label" id="location-select" label="Choose Option" value={locationMenuItem} onChange={(e) => setLocationMenuItem(e.target.value)}>
                  {
                    loading ? <div>Loading ....</div> : (allLocation.length ? allLocation.map((location, index) => (
                      <MenuItem key={index} value={location}>{location}</MenuItem>
                    )) : <MenuItem>no location</MenuItem>)
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={5}>
              <TextField label="Add Installation" fullWidth size="small" value={installation} onChange={(e) => setInstallation(e.target.value)} />
            </Grid>
            <Grid item lg={2} xs={12}>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                }}
                fullWidth
                onClick={addInstallationForLocation}
              >
                Add
              </Button>
            </Grid>
          </Grid>

          {/* Table */}
          <Grid item mt={2.5}>
            <TableContainer component={Paper} sx={{ maxHeight: 320, height: 400, overflow: "auto" }}>
              <Table>
                <TableBody>
                  {insLoading ? (<Typography>loading...</Typography>) : (tableInstallation?.map((item, index) => (
                    <CustomTableRow key={index} >
                      <CustomTableCell align="left"  >{item.location}</CustomTableCell>
                      <CustomTableCell align="left">{item.installations.name}</CustomTableCell>
                      <CustomTableCell align="right">
                        <IconButton color="primary" onClick={handleEdit}>
                          <EditIcon />
                        </IconButton>
                        <IconButton color="secondary" onClick={handleDelete}>
                          <DeleteIcon />
                        </IconButton>
                      </CustomTableCell>
                    </CustomTableRow>
                  )))}

                </TableBody>

                {/* <TableBody>
                  {tableInstallation?.map((item, index) => (
                    <CustomTableRow key={item.installations._id}>
                      <CustomTableCell align="left">{item.location}</CustomTableCell>

                      <CustomTableCell align="left">{}</CustomTableCell>

                      <CustomTableCell align="right">
                        <IconButton color="primary" onClick={() => handleEdit(item)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton color="secondary" onClick={() => handleDelete(item)}>
                          <DeleteIcon />
                        </IconButton>
                      </CustomTableCell>
                    </CustomTableRow>
                  ))}
                </TableBody> */}

              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>

      {/* --- Well Number--- */}
      <Grid container mt={2.5} mb={2} spacing={3} >
        <Grid item lg={2.7}>
          <FormControl fullWidth size="small">
            <InputLabel id="location-label">Locations</InputLabel>
            <Select
              labelId="location-label"
              id="location-dropdown"
              value={selectedLocation}
              onChange={handleLocationChange}
              label="Select Location"
            >
              {loading ? (
                <MenuItem disabled>Loading...</MenuItem>
              ) : allLocation.length ? (
                allLocation.map((location, index) => (
                  <MenuItem key={index} value={location}>
                    {location}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No locations available</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>

        <Grid item lg={2.7}>
          <FormControl fullWidth size="small">
            <InputLabel id="dropdown-label">Installation</InputLabel>
            <Select
              labelId="dropdown-label"
              id="installation-dropdown"
              value={value2}
              onChange={handleChange2}
              label=" Installation"
            >
              {loadingInstallations ? (
                <MenuItem disabled>Loading...</MenuItem>
              ) : installations.length ? (
                installations.map((installation) => (
                  <MenuItem key={installation._id} value={installation.name}>
                    {installation.name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No installations available</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>

        <Grid item lg={2.7}>
          <FormControl fullWidth size="small">
            <InputLabel id="dropdown-label">Well Type</InputLabel>
            <Select
              labelId="dropdown-label"
              id="dropdown"
              value={value3}
              onChange={handleChange3}
              label="ch Option"
            >
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="option1">Flowing</MenuItem>
              <MenuItem value="option2">Not Flowing</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={2.7}>
          <TextField label="Well Number" fullWidth size="small" />
        </Grid>
        <Grid item lg={1}>
          <Button
            sx={{
              color: "white",
              backgroundColor: "green",
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
            fullWidth
          >
            Add
          </Button>
        </Grid>
        {/* <Grid container p={2} mt={2.5}>
          <TableContainer component={Paper} sx={{ maxHeight: 320, height: 400, overflow: "auto" }}>
            <Table>
              <TableBody>
                <CustomTableRow>
                  <CustomTableCell sx={{width:'20%'}} align="left">Add Location</CustomTableCell>
                  <CustomTableCell sx={{width:'20%'}} align="left">Add Installation</CustomTableCell>
                  <CustomTableCell sx={{width:'20%'}} align="left">Well Type</CustomTableCell>
                  <CustomTableCell sx={{width:'20%'}} align="left">Well Number</CustomTableCell>
                  <CustomTableCell sx={{width:'6%'}} align="right">
                    <IconButton color="primary" onClick={handleEdit}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={handleDelete}>
                      <DeleteIcon />
                    </IconButton>
                  </CustomTableCell>
                </CustomTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default WellDetailAdd;
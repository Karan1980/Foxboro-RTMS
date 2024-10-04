import React from "react";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import Network from "../../../../public/assets/NetworkWire2.jpg";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

// ----------------------Table for Moblie------------------------------

const StyledGridItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.grey[100],
}));

const StyledContent = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: "white",
}));

let data = {
  "Well No": "1",
  Location: "New York",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

let Tata = {
  "Well No": "2",
  Location: "Delhi",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

let Mata = {
  "Well No": "3",
  Location: "UP",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

let Sata = {
  "Well No": "4",
  Location: "MP",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: "10px", // Increase padding
    height: "20px", // Set a specific height
    fontSize: "16px", // Optionally adjust font size for header
    lineHeight: "1.5", // Adjust line height if needed
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
  createData("1"),
  createData("2"),
  createData("3"),
  createData("4"),
  createData("5"),
  createData("6"),
  createData("7"),
  createData("8"),
  // createData('3'),
  // createData('4'),
  // createData('5'),
];

// -------------------------New Born Table--------------------------------------------

const StyleTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyleTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CreateData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const row = [
  CreateData("1"),
  CreateData("2"),
  CreateData("3"),
  CreateData("4"),
];

function DeviceManage() {
  return (
    <div>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "space-between" }}
        pt={2}
        paddingBottom={2}
      >
        <Grid item lg={6} md={6} sm={6} xs={12} display={"flex"} gap={1}>
          <Box sx={{ height: "50px", width: "50px" }}>
            <img src={Network} alt="img" height={"50px"} width={"50px"} />
          </Box>
          <Box>
            <Typography variant="h4">Node Master</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* ----------------------------------Table and Inputs Field-------------------------------- */}
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* ------------------------------Table--------------------------------------------- */}
        <Grid
          item
          lg={1.6}
          md={6}
          sm={8}
          xs={12}
          sx={{ border: "1px solid black" }}
        >
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 620, overflow: "auto" }}
          >
            <Table aria-label="customized table" stickyHeader>
              <TableHead>
                <TableRow>
                  <StyleTableCell sx={{ fontSize: "18px" }}>
                    Device Name
                  </StyleTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((row) => (
                  <StyleTableRow key={row.name}>
                    <StyleTableCell component="th" scope="row">
                      {row.name}
                    </StyleTableCell>
                  </StyleTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {/* ------------------------------Inputs-------------------------------------------- */}
        <Grid
          item
          lg={10.2}
          md={6}
          sm={8}
          xs={12}
          sx={{ border: "1px solid black" }}
        >
          <Grid container spacing={3} p={1}>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Device Name</Typography>
              <TextField variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Cloud ID</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">LoRa ID</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Landmark</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Lattitude</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Longitude</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Scan Timer</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Publish Code</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Subscribe Code</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* --------------------------------Button--------------------------------------------- */}
      <Grid
        container
        mt={2}
        display={"flex"}
        justifyContent={"end"}
        gap={1}
        flexDirection={{ xs: "row" }}
      >
        <Box>
          <Link to="/dashboard/AddDevice" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "green", // Change button color to green
                "&:hover": {
                  backgroundColor: "darkgreen", // Optional: Change color on hover
                },
                fontSize: "16px",
                width: "150px",
              }}
            >
              Add Device
            </Button>
          </Link>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green", // Change button color to green
              "&:hover": {
                backgroundColor: "darkgreen", // Optional: Change color on hover
              },
              fontSize: "16px",
              width: "150px",
            }}
          >
            Submit
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green", // Change button color to green
              "&:hover": {
                backgroundColor: "darkgreen", // Optional: Change color on hover
              },
              fontSize: "16px",
              width: "150px",
            }}
          >
            Cancel
          </Button>
        </Box>
      </Grid>

      {/* ------------------Table for Desktop--------------------------------- */}
      <Grid
        container
        mt={2}
        md={12}
        lg={12}
        sm={5}
        xs={4}
        sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}
      >
        <TableContainer
          component={Paper}
          sx={{ maxHeight: 620, overflow: "auto" }}
        >
          <Table aria-label="customized table" stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Sr No.
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Device Name 
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Cloud ID
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  LoRa ID
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Landmark
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: "18px" }} align="left">
                  Geolocation
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* ---------------------------Table for Moblie------------------------------------- */}

      <Grid
        container
        md={12}
        lg={12}
        sm={12}
        xs={12}
        sx={{ display: { sm: "block", xs: "block", md: "none", lg: "none" } }}
      >
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 600 }}>
          <Grid container mt={2} direction="column">
            {Object.keys(data).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={8}>
                  <Typography variant="body1">{data[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
          {/* ----------------------Dreak---------------------------------- */}
          <Grid container mt={2} direction="column">
            {Object.keys(Tata).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={8}>
                  <Typography variant="body1">{Tata[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
          {/* ----------------------Dreak---------------------------------- */}
          <Grid container mt={2} direction="column">
            {Object.keys(Mata).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={8}>
                  <Typography variant="body1">{Mata[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
          {/* ----------------------Dreak---------------------------------- */}
          <Grid container mt={2} direction="column">
            {Object.keys(Sata).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={8}>
                  <Typography variant="body1">{Sata[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default DeviceManage;

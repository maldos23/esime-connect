import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { EditRounded, FileCopyOutlined, FileCopyRounded } from "@material-ui/icons";
import { AppLayout } from "../components/layouts";
import useDialog from "../hooks/useDialog";

export default function Home() {
  const { handleDialog, Constructor } = useDialog({});
  return (
    <AppLayout>
      <Typography variant="h6">
        <b>Materias de 6° semestre</b>
      </Typography>
      <Toolbar disableGutters>
        <TextField
          select
          margin="dense"
          variant="outlined"
          label="Grupo"
          value="1"
        >
          <MenuItem value="1">Seleccionar grupo</MenuItem>
        </TextField>
      </Toolbar>
      <List>
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            style={{
              display:"flex",
              alignItems: "center",
              width: "100%",
              boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.05)",
              borderRadius: "10px",
              margin: "10px 0px",
            }}
          >
            <ListItem button onClick={handleDialog}>
              <ListItemAvatar>
                <Avatar>A</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="6MV1"
                secondary="Maquinas Hidraulicas"
              />
             
            </ListItem>
            <div>
                <IconButton>
                  <EditRounded/>
                </IconButton>
              </div>
          </div>
        ))}
      </List>
      <Constructor title="Maquinas Hidraulicas" subtitle="6MV1">
        <Avatar></Avatar>
        <ListItemText
        primaryTypographyProps={{variant: "h6"}}
          primary="Armando ramirez"
          secondary={
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link component="a" href="https://outlook.office.com/mail/inbox">https://outlook.office.com/mail/inbox</Link>
              <IconButton>
                <FileCopyOutlined />
              </IconButton>
            </div>
          }
        />

        <br />
        <Typography variant="h6" color="primary">
          <b>Horario</b>
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Lunes</TableCell>
                <TableCell align="center">Martes</TableCell>
                <TableCell align="center">Miercoles</TableCell>
                <TableCell align="center">Jueves</TableCell>
                <TableCell align="center">Viernes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">10:00 - 11:30</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">10:00 - 11:30</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">10:00 - 11:30</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Constructor>
    </AppLayout>
  );
}

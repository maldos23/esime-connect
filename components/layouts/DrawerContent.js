import { TextField } from "@material-ui/core";
import { Fab, FormControl, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { AddRounded } from "@material-ui/icons";
import useDialog from "../../hooks/useDialog";
import { TreeMenu } from "../navigation";

const useStyle = makeStyles((theme) => ({
  fabButton: {
    width: "100%",
    textTransform: "none",
    fontSize: "14px",
    background: "linear-gradient(to right,  #218956, #016936)",
    boxShadow: "none",
    color: "#FFFFFF",
  },
}));

export default function Main() {
  const classes = useStyle();
  const { handleDialog, Constructor } = useDialog({});

  return (
    <>
      <CardContent>
        <Fab
          className={classes.fabButton}
          variant="extended"
          onClick={handleDialog}
        >
          <AddRounded style={{ color: "#FFFFFF", height: 30, width: 30 }} />
          Agregar grupo
        </Fab>
      </CardContent>
      <TreeMenu handleValue={() => {}} />
      <Constructor subtitle="Agregar" title="Grupo de contacto">
        <FormControl margin="normal" fullWidth>
          <TextField
            label="Materia"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Grupo"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Profesor"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Link de contacto"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <Typography>
            <b>Horario</b>
          </Typography>
          <TextField
          type="time"
            label="Lunes"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
           <TextField
          type="time"
            label="Martes"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
           <TextField
          type="time"
            label="Miercoles"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
           <TextField
          type="time"
            label="Jueves"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
           <TextField
          type="time"
            label="Viernes"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </FormControl>
      </Constructor>
    </>
  );
}

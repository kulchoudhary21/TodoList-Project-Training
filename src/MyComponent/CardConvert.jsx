import "../css/CardConvert.css";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@material-ui/core";
import { shadows } from "@mui/system";
import Paper from "@mui/material/Paper";
function CardConvert({
  title_msg,
  name,
  input_msg,
  onConvert,
  output_msg,
  id,
}) {

  // const onConvertA = (e) => {
  //   console.log(e.target.name)
  //   onConvert(e.target.name, e.target.value)
  // }
  return (
    <Box variant="outlined" className="box" sx={{ shadows: 40 }}>
      <Card elevation={20} sx={{ shadows: 40 }} className="main_card">
        <CardContent>
          <Typography variant="h5" color={"#34d2d8"} className="msg">
            {title_msg}
          </Typography>
          <div className="card_input">
            <TextField
              name={name}
              className="tf"
              id={id}
              label={input_msg}
              variant="outlined"
              //onChange={}
            />
            <span style={{ padding: "10px" }}></span>
            <Button
              onClick={onConvert}
              size="large"
              style={{
                padding: "10px",
                backgroundColor: "skyblue",
                textAlign: "center",
              }}
              color="blue"
            >
              Convert
            </Button>
          </div>
          <CardActions className="ca">
            <Paper elevation={20} className="paper">
              {output_msg}
            </Paper>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}
export default CardConvert;

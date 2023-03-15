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
function CardConvert() {
  return (
    <Box variant="outlined" className="box" sx={{ shadows: 40 }}>
      <Card elevation={20} sx={{ shadows: 40 }} className="main_card">
        <CardContent>
          <Typography variant="h4">Money Convertor $ to ₹</Typography>
          <div className="card_input">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <span style={{ padding: "10px" }}></span>
            <Button
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
          <CardActions>
            <Paper elevation={20} className="paper">
              Data
            </Paper>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}
export default CardConvert;

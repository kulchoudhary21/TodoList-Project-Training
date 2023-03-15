import "../css/Edit.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import bold from '../Images/bold.png'
import underline from "../Images/underline.png"
import italic from "../Images/italic.png"
import ReactSwitch from 'react-switch';
export function Edit({onUnderline,onBold,onItalic,onhandleChange,toggle})
{
    return(
        <div className="edit_container">
            <Stack spacing={2} direction="row">
            <Button variant="text" ><img src={underline} height={20} width={20} onClick={onUnderline}/></Button>
            <Button variant="contained"><img src={bold} height={20} width={20} onClick={onBold}/></Button>
            <Button variant="outlined">I<img src={italic} height={20} width={20} onClick={onItalic}/></Button>
            <div>
                <ReactSwitch className="react-switch" checked={toggle}  onChange={onhandleChange}  color="primary" id="rs"/>
            </div>
        </Stack>
        </div>
    );
}
import {AppBar, Toolbar} from '@mui/material';
import imgMo from './assests/linkedin.jpg';

const Header = ()=>{
    return(
        <AppBar color='primary' position='static'>
            <Toolbar>
                <img src={imgMo} width={30}/>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
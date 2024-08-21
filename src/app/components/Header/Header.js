'use client'
import { Box, Typography, styled} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dashboard = styled(Box)`
    color:#497BD1;
    font-weight:600;
    cursor:pointer;
`

const Home = styled(Typography)`
    color:#D3D3D3;
    font-weight:600;
    cursor:pointer;
`
const HeaderContainer = styled(Box)`
    display:flex;
   
`

const InputWrapper = styled(Box)`
    display:flex;
background-color: #eaeff6;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 450px;
  width:450px
`
const InputSearch = styled('input')`
    font-weight: 600;
    border-color: transparent;
    background-color:#eaeff6;
    width:450px;
`

const CustomButtonWrapper = styled(Box)`
display:flex;
gap:60px;


`
const Notification = styled(NotificationsActiveOutlinedIcon)`
    color:#318CE7;
    margin-left:110px;
    cursor:pointer;
`
const Search = styled(SearchIcon)`
    color: #888888;
`

const Profile = styled(AccountCircleIcon)`
    color:grey;
    cursor:pointer;
    font-size:28px;
`
const Header = ()=>{

    return(
        <HeaderContainer>
            <Box>
                <Home> Home {`>`} <Dashboard component="span"> Dashboard V2 </Dashboard></Home>
            </Box>
            
            <InputWrapper>
                <Search/>
                <InputSearch  type= 'text' placeholder="Search anything..."/>
            </InputWrapper>
            <CustomButtonWrapper>
                <Notification/>
                <Profile/>
            </CustomButtonWrapper>
        </HeaderContainer>
        
    )
}

export default Header
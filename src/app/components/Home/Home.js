'use client'
import { Box , styled, Typography} from "@mui/material"
import CachedIcon from '@mui/icons-material/Cached';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const HomeContainer = styled(Box)`
    background-color:#eaeff6;
    padding:35px;
`
const MainHeading = styled(Box)`
font-weight:600;
`
const Button = styled('button')`

    width: 120px;
    height: 37px;
    background-color: white;
    color: grey;
    border: 2px solid #ddd;
    border-radius: 6px;
    font-size:16px
`
const HomeWrapper = styled(Box)`
    display:flex;
    align-items:center;
    justify-content: space-between;
`
const Refresh = styled(CachedIcon)`
padding:5px;
background-color: white;
width: 35px;
border-radius: 6px;
color: grey;
`
const CustomButtons = styled(Box)`
    display:flex;
    align-items:center;
    & > *{
        margin:0px 8px
    }
`

const More = styled(Box)`
background-color: white;
    height: 31px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 28px;
    padding: 3px 0px 0px 3px;
    & > div{
        color:grey;
    }
`
const Divider = styled(Box)`
font-size: x-large;
    font-weight: 200;
    color: darkblue;
`
const Select = styled('select')`
// height: 33px;
font-weight: 600;
color: darkblue;
border: none;
`
const DropDown = styled(Box)`
display:flex;
border: 1px solid darkblue;
    gap: 2px;
    padding:2px;
    background-color:white;
    border-radius:3px
`
const App = ()=>{
    return(
            <HomeContainer>
                    <HomeWrapper>
                        <MainHeading> CNAPP Dashboard </MainHeading>
                        <CustomButtons>
                            <Button> Add widget <Box component='span'>&#42;</Box></Button>
                           <Box><Refresh/></Box>
                           <More><MoreVertIcon htmlColor='grey'/></More>
                           <DropDown>
                            <WatchLaterIcon htmlColor='darkblue'/><Divider component='span'>|</Divider><Select> 
                                <option>  Last 2 Days </option>
                                <option> Last Week </option>
                                <option> Last Month </option>
                            </Select>
                           </DropDown>
                        </CustomButtons>
                    </HomeWrapper>
            </HomeContainer>
    )
}

export default App
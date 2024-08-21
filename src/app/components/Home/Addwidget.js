import { Box, styled, Typography } from "@mui/material";
import {useContext,useState } from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { wid } from "@/app/constants/wid";


import { DataContext } from "@/app/context/DataContext";


const AddWrapper = styled(Box)`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 416px;
  height: 200px;
  border-radius: 15px;
  margin-left: 15px;
  //   cursor: pointer;
`;
const Text = styled("button")`
  color: grey;
  background: white;
  border: 1px solid #ddd;
  padding: 2px 12px;
  cursor: pointer;
`;

const Modal = styled(Dialog)`
  position: absolute;
  left: 910px;
  max-height: 100vh;
  max-width: 100vw;
  margin: 0;
`;
const AddComponent = styled(Box)`
  height: 100vh;
  width: 35vw;
`;
const Heading = styled(Box)`
  display: flex;
  background-color: darkblue;
  justify-content: space-between;
  color: white;
  align-items: center;
  padding: 0px 5px;
`;
const SubHeading = styled(Box)`
  padding: 6px;
  color: black;
`;


const Confirm = styled('button')`
  position:absolute;
  bottom:9px;
  right:0;
  padding: 5px 10px;
border-radius: 3px;
margin-right:3px;
background:darkblue;
color:white;
font-weight:600;
cursor:pointer

`
const Cancel = styled('button') `
position: absolute;
bottom: 9px;
right: 80px;
padding: 5px 10px;
border: 1px solid darkblue;
background: white;
color: darkblue;
font-weight:600;
border-radius: 3px;
cursor:pointer

`

const Addwidget = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("one");
  const [check, setCheck] = useState(true)
  const [text, setText] = useState('')
  const [name, setName] = useState('')

  const data = wid.at.widgets
  

  const {updatedWidget} = useContext(DataContext)

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleCheck=(e)=>{
    if(e.target.checked){
      setCheck(!check)
    }
  }

  const handleConfirm=()=>{
    
    updatedWidget({name,text})
    
  }

  const handleData=(e)=>{
    const id = e.target.id.slice(8,9)
    
    switch(e.target.id){
      case `widgets_${id}_name` :
        setName(e.target.value)
      case `widgets_${id}_text`:
        setText(e.target.value)
    }
  }
  return (
    <AddWrapper>
      <Text onClick={handleClick}>&#42; Add Widget </Text>
      <Modal open={open} onClose={handleClose}>
        <AddComponent>
          <Heading>
            <Typography> Add Widget </Typography>
            <Typography
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </Typography>
          </Heading>
          <SubHeading>
            <Typography>
              Personalize your dashboard by adding the following Widgets
            </Typography>
          </SubHeading>
          <Box>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="CSPM" value="1" />
                  <Tab label="CSPP" value="2" />
                  <Tab label="Image" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <input type="checkbox" onChange={handleCheck} />
                Cloud Accounts
              </TabPanel>
              <TabPanel value="1">
                <input type="checkbox"/>
                Cloud Accounts Risk Assessment
              </TabPanel>
              <TabPanel value="2">
                <input type="checkbox" />
                Top 5 Namespace Specific alerts
              </TabPanel>
              <TabPanel value="2">
                <input type="checkbox"  />
                Workload Alerts
              </TabPanel>
              <TabPanel value="2">
                <input type="text" id='widgets_1_name' onChange={handleData}placeholder=" enter widget name " />
                <br></br>
                <input type="text" id='widgets_1_text'onChange={handleData}placeholder=" enter widget text " />
                
              </TabPanel>
              <TabPanel value="3">
                <input type="checkbox" />
                  Image Risk Assessment
              </TabPanel>
              <TabPanel value="3">
                <input type="checkbox"  />
                  Image Security Issues
              </TabPanel>
              <Box></Box>
            </TabContext>
          </Box>
         <Cancel onClick={()=>setOpen(false)}> Cancel </Cancel>
         <Confirm onClick={handleConfirm}> Confirm </Confirm>
         
        </AddComponent>
      </Modal>
    </AddWrapper>
  );
};

export default Addwidget;

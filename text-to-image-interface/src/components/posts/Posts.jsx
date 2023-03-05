import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Post from "../post/Post";


import { Postss } from "../../dummyData";
import { Posts2, Posts3 } from "../../dummyData";

import "./posts.css";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Posts() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div className="postWrapper">
   <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable"
        scrollButtons="auto"aria-label="basic tabs example">
          <Tab label="3D render" {...a11yProps(0)} />
          <Tab label="Anime" {...a11yProps(1)} />
          <Tab label="Game Art" {...a11yProps(2)} />
          <Tab label="Film" {...a11yProps(3)} />
          <Tab label="Photography" {...a11yProps(4)} />
          <Tab label="Hyperreal" {...a11yProps(5)} />
          <Tab label="Oil Painting Style" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>

      <div className="feed">
      <div className="feedWrapper">
       
        {Postss.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="feed">
      <div className="feedWrapper">
       
        {Posts2.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="feed">
      <div className="feedWrapper">
       
        {Posts3.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
      </TabPanel>
    </Box>
    </div>
  );
}
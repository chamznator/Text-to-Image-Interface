import "./posts.css";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function JustifiedExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
        1
      </Tab>
      <Tab eventKey="profile" title="Profile">
        2
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        3
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        4
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;
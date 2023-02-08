import React from 'react';
import Accordionz from './Accordionz';
import DataGrid from './DataGrid';
import NavBarz from './NavBarz';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Routes, Route, Link } from "react-router-dom";
import TbInvMaster from './TbInvMaster';
import PR from './PR';

const Main = () => {
 
  return (<div>
    <NavBarz />

    <Container className="mt-5">
      <Row>
        <Col xs={3}><Accordionz /></Col>
        <Col>
          <Routes>
            <Route path="/invmaster" element={<TbInvMaster />} />
            <Route path="/pr" element={<PR/>}></Route>
          </Routes> 
        </Col>
      </Row>

    </Container>

  </div>);
}
export default Main;
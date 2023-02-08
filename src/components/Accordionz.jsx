import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Routes, Route, Link } from "react-router-dom"; 
import { useNavigate } from 'react-router-dom';

const Accordionz = () => { 
    const navigate = useNavigate();
    const handleOnclickPR = () => { 
        console.log("halley")
        navigate("/pr") 
    }

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Build File</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>
                            <Link to={"/invmaster"} className="nav-link">
                                InvMaster
                            </Link>
                        </li>


                        <li>InvLocation</li>
                        <li>Invent</li>
                        <li>Supplier</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="1" onClick={handleOnclickPR}>
                <Accordion.Header>
                    PR
                </Accordion.Header>

            </Accordion.Item>

        </Accordion>


    );
}


export default Accordionz;
import React from 'react';
import { useState } from 'react';
import TbInvMasterService from '../services/TbInvMasterService';
import Table from 'react-bootstrap/Table';
import TbInvMasterEdit from './TbInvMasterEdit';
import Pagination from 'react-bootstrap/Pagination';


const TbInvMaster = () => {

    const [itemList, setItemList] = useState(TbInvMasterService.getAll())
    console.log(itemList)
    const [show, setShow] = useState(false)

    function handleShow() {
        setShow(!show)
    }

    const handleDoubleClink = (event) => {
        let key = event.target.getAttribute("keyz")
        setShow(true)
    }

   
    return (
        <div>
            TESTING
        </div>
        // <>
        //     <TbInvMasterEdit Show={show} handleChange={handleShow}></TbInvMasterEdit>
        //     <Table striped bordered hover>
        //         <thead>
        //             <tr>
        //                 <th>#</th>
        //                 <th>Item Name</th>
        //                 <th>Item Desc</th>
        //                 <th>UnitPrice</th>
        //                 <th>Status</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {itemList.map((item) => {
        //                 let ids = Object.values(item)[0]
        //                 return <tr>
        //                     {
        //                         Object.values(item).map((val) => {
        //                             return <td keyz={ids} onDoubleClick={handleDoubleClink}>{val}</td>
        //                         })
        //                     }
        //                 </tr>
        //             })}

        //         </tbody>
        //     </Table>
        //     <Pagination>
        //         <Pagination.First />
        //         <Pagination.Prev />
        //         <Pagination.Item>{1}</Pagination.Item>
        //         <Pagination.Ellipsis />

        //         <Pagination.Item>{10}</Pagination.Item>
        //         <Pagination.Item>{11}</Pagination.Item>
        //         <Pagination.Item active>{12}</Pagination.Item>
        //         <Pagination.Item>{13}</Pagination.Item>
        //         <Pagination.Item disabled>{14}</Pagination.Item>

        //         <Pagination.Ellipsis />
        //         <Pagination.Item>{20}</Pagination.Item>
        //         <Pagination.Next />
        //         <Pagination.Last />
        //     </Pagination>
        // </>
    );
}


export default TbInvMaster;
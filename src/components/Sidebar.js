import React, {useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css'

const Sidebar = () => {

    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);
    const [isOpen3, setIsOpen3] = useState(true);
    
    const handleCollapseOpen = (i) => {
        switch(i) {
            case 1:
              setIsOpen1(!isOpen1);
              break;
            case 2:
                setIsOpen2(!isOpen2);
              break;
            case 3:
                setIsOpen3(!isOpen3);
                break;
            default:
                break;
          }
    }

    return (
        <div className="d-flex">
            <ul>
                <li>
                    <a href="/a" onClick={()=>handleCollapseOpen(1)}>
                    {isOpen1?<i className="fa fa-chevron-up"></i>:<i className="fa fa-chevron-down"></i>}<span className="category">Home</span>
                    </a>
                    {isOpen1 && 
                        <div className="subCategoryGroup">
                            <div><a href="/aa" rel="noopener noreferrer">Service Request</a></div>
                        </div>
                    }
                </li>
                <li>
                    <a href="/a" onClick={()=>handleCollapseOpen(2)} rel="noopener noreferrer">
                    {isOpen2?<i className="fa fa-chevron-up"></i>:<i className="fa fa-chevron-down"></i>}<span className="category">Dashboard</span>
                    </a>
                    {isOpen2 &&
                    <div className="subCategoryGroup">
                        <div><a href="/aa" rel="noopener noreferrer">Overview</a></div>
                        <div><a href="/a" rel="noopener noreferrer">Weekly</a></div>
                        <div><a href="/a" rel="noopener noreferrer">Monthly</a></div>
                        <div><a href="/a" rel="noopener noreferrer">Annually</a></div>
                    </div>
                    }
                </li>
                <li>
                    <a href="/a" onClick={()=>handleCollapseOpen(3)} rel="noopener noreferrer">
                    {isOpen3?<i className="fa fa-chevron-up"></i>:<i className="fa fa-chevron-down"></i>}<span className="category">Contact US</span>
                    </a>
                    {isOpen3 && 
                    <div className="subCategoryGroup">
                        <div><a href="/a" rel="noopener noreferrer">FAQ</a></div>
                        <div><a href="/a" rel="noopener noreferrer">Report Error</a></div>
                    </div>
                    }
                </li>
            </ul>
        </div>
        
    );
}

export default Sidebar;
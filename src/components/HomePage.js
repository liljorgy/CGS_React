import React, {useState, useRef} from 'react';
import SwitchSelector from "./SwitchSelector";
import LocationPane from "./SearchPanes/LocationPane";
import SalesPane from "./SearchPanes/SalesPane";
import StructurePane from "./SearchPanes/StructurePane";
import DetailsPane from "./SearchPanes/DetailsPane";

import classes from "./SearchPanes.module.css";


const HomePage = () => {
    const setLocationDetails = useRef();
    const [reportType, setReportType] = useState('improvedProperty');
    //const [queryDetails, setQueryDetails] = useState({});
    let queryDetails = []
    const handleQueryDetails = (queryValue) => {
        queryDetails = [...queryDetails, queryValue]
        console.log(queryDetails)
    }

    const switchReport = () => {
        if (reportType === 'improvedProperty') {setReportType('land')}
        else {setReportType('improvedProperty')}
    };

    const mySubmit = (event) => {
        queryDetails = []
        setLocationDetails.current.getQueryDetails(event);
    }

    return (
        <React.Fragment>
            <SwitchSelector onSwitch={switchReport}/>
            <div className={classes.searchPanes_row}>
                <LocationPane ref={setLocationDetails} onHandleQueryDetails={handleQueryDetails}/>
                <SalesPane />
                {(reportType === 'improvedProperty') && <StructurePane />}
                {(reportType === 'land') && <DetailsPane />}
            </div>
            <form onSubmit={mySubmit}>
                <button type="submit" id="queryButton">Run Query</button>
            </form>
        </React.Fragment>
        )
};

export default HomePage;

//<form onSubmit={(event) => setLocationDetails.current.getQueryDetails(event)}>

import {useState,forwardRef, useImperativeHandle} from "react";
import classes from '../SearchPanes.module.css';

const DetailsPane = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        setTextInputFields() {
            props.detailsText({utilities: utilities})
            props.detailsText({highestBestUse: highestBestUse})
            props.detailsText({landAreaLow: landAreaLow})
            props.detailsText({landAreaHigh: landAreaHigh})
            props.detailsText({unitPriceLow: unitPriceLow})
            props.detailsText({unitPriceHigh: unitPriceHigh})
        }
    }));

    const [utilities, setUtilities] = useState('');
    const [highestBestUse, setHighestBestUse] = useState('');
    const [landAreaLow, setLandAreaLow] = useState('');
    const [landAreaHigh, setLandAreaHigh] = useState('');
    const [unitPriceLow, setUnitPriceLow] = useState('');
    const [unitPriceHigh, setUnitPriceHigh] = useState('');

    const changeUtiltiesHandler = (event) => {
        setUtilities(event.target.value)
    };
    const changeHighestBestUseHandler = (event) => {
        setHighestBestUse(event.target.value)
    };
    const changeLandAreaLow = (event) => {
        setLandAreaLow(event.target.value)
    };
    const changeLandAreaHigh = (event) => {
        setLandAreaHigh(event.target.value)
    };
    const changeUnitPriceLow = (event) => {
        setUnitPriceLow(event.target.value)
    };
    const changeUnitPriceHigh = (event) => {
        setUnitPriceHigh(event.target.value)
    };

    return (
        <div className={classes.card}>
            <h3>Property Details</h3>
            <input
                placeholder="Utilties"
                className={classes.text_input__width}
                onChange={changeUtiltiesHandler}/><br/>
            <input
                className={classes.text_input__width}
                placeholder="Highest and Best Use"
                onChange={changeHighestBestUseHandler}/><br/>
            <input
                className={classes.text_input__width}
                placeholder="Land Area - Low"
                onChange={changeLandAreaLow}/><br/>
            <input
                className={classes.text_input__width}
                placeholder="Land Area - High"
                onChange={changeLandAreaHigh}/><br/>
            <input
                className={classes.text_input__width}
                placeholder="Unit Price - Low"
                onChange={changeUnitPriceLow}/><br/>
            <input
                className={classes.text_input__width}
                placeholder="Unit Price - High"
                onChange={changeUnitPriceHigh}/><br/>
        </div>
    )
});

export default DetailsPane;
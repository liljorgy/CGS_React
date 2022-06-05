import {useState,forwardRef, useImperativeHandle} from "react";
import classes from "../SearchPanes.module.css";

const SalesPane = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        setTextInputFields() {
            props.salesSelect({salePriceLow: salePriceLow})
            props.salesSelect({salePriceHigh: salePriceHigh})
            props.salesSelect({saleDateLow: saleDateLow})
            props.salesSelect({saleDateHigh: saleDateHigh})
        }
    }));

    const [salePriceLow, setSalePriceLow] = useState('');
    const [salePriceHigh, setSalePriceHigh] = useState('');
    const [saleDateLow, setSaleDateLow] = useState('');
    const [saleDateHigh, setSaleDateHigh] = useState('');

    const changeSalePriceLowHandler = (event) => {
        setSalePriceLow(event.target.value);
    };
    const changeSalePriceHighHandler = (event) => {
        setSalePriceHigh(event.target.value);
    };
    const changeSaleDateLowHandler = (event) => {
        setSaleDateLow(event.target.value);
    };
    const changeSaleDateHighHandler = (event) => {
        setSaleDateHigh(event.target.value);
    };

    return (
        <div className={classes.card}>
            <h3>Sale Details</h3>
            $<input
                placeholder="Sale Price - Low"
                className={classes.text_input__width}
                onChange={changeSalePriceLowHandler}/><br/>
            $<input
                placeholder="Sale Price - High"
                className={classes.text_input__width}
                onChange={changeSalePriceHighHandler}/><br/>
            &nbsp;&nbsp;<input
                type="date"
                placeholder="Sale Date - Low"
                className={classes.text_input__width}
                onChange={changeSaleDateLowHandler}/><br/>
            &nbsp;&nbsp;<input
                type="date"
                placeholder="Sale Date - High"
                className={classes.text_input__width}
                onChange={changeSaleDateHighHandler}/>
        </div>
    )
});

export default SalesPane;
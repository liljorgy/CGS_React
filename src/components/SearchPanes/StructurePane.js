import {useState, forwardRef, useImperativeHandle} from "react";
import classes from '../SearchPanes.module.css';

const StructurePane = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        setTextInputFields() {
            props.structureSelect({structureType: structureType})
            props.structureSelect({sizeLow: sizeLow})
            props.structureSelect({sizeHigh: sizeHigh})
            props.structureSelect({pricePerUnitLow: pricePerUnitLow})
            props.structureSelect({pricePerUnitHigh: pricePerUnitHigh})
        }
    }));

    const [structureType, setStructureType] = useState('');
    const [sizeLow, setSizeLow] = useState('');
    const [sizeHigh, setSizeHigh] = useState('');
    const [pricePerUnitLow, setPricePerUnitLow] = useState('');
    const [pricePerUnitHigh, setPricePerUnitHigh] = useState('');

    const changeStructureTypeHandler = (event) => {
        setStructureType(event.target.value);
    }
    const changeSizeLowHandler = (event) => {
        setSizeLow(event.target.value);
    }
    const changeSizeHighHandler = (event) => {
        setSizeHigh(event.target.value);
    }
    const changePricePerUnitLowHandler = (event) => {
        setPricePerUnitLow(event.target.value);
    }
    const changePricePerUnitHighHandler = (event) => {
        setPricePerUnitHigh(event.target.value);
    }

   return (
       <div className={classes.card}>
           <h3>Structure Details:</h3>
           &nbsp;&nbsp;<input placeholder="Structure Type" onChange={changeStructureTypeHandler}/><br/>
           &nbsp;&nbsp;<input placeholder="Size - Low" onChange={changeSizeLowHandler}/><br/>
           &nbsp;&nbsp;<input placeholder="Size - High" onChange={changeSizeHighHandler}/><br/>
           $<input placeholder="Price per Unit Low" onChange={changePricePerUnitLowHandler}/><br/>
           $<input placeholder="Price per Unit High" onChange={changePricePerUnitHighHandler}/><br/>

       </div>
   )
});

export default StructurePane;
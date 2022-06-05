import React, {useState, forwardRef, useImperativeHandle} from 'react';
import ohioCounties from "../Counties/ohioCounties";
import westVirginiaCounties from "../Counties/westVirginiaCounties";
import pennsylvaniaCounties from "../Counties/pennsylvaniaCounties";
import kentuckyCounties from "../Counties/kentuckyCounties";
import michiganCounties from "../Counties/michiganCounties";
import texasCounties from "../Counties/texasCounties";
import marylandCounties from "../Counties/marylandCounties";
import southCarolinaCounties from "../Counties/southCarolinaCounties";
import indianaCounties from "../Counties/indianaCounties";
import StateDropdown from "../ClickedItems/StateDropdown";
import {Multiselect} from "multiselect-react-dropdown";
import classes from "../SearchPanes.module.css";

const LocationPane = forwardRef((props, ref) => {
    const multiCountySelect = React.createRef();
    const [stateSelected, setStateSelected] = useState('');

    //const [queryDict, setQueryDict] = useState({})

    //const getValues = () => {
        //setQueryValues(stateSelected);
        //setQueryValues(multiCountySelect.current.getSelectedItems())
        //setQueryValues(document.getElementById('formStreet').value)
        //setQueryValues(document.getElementById('formCity').value)
    //}

    useImperativeHandle(ref, () => ({
        getQueryDetails(event) {
            event.preventDefault()
            if (stateSelected) {
                props.onHandleQueryDetails({state: stateSelected});
            }
            if (multiCountySelect.current.value !== '') {
                props.onHandleQueryDetails({county: multiCountySelect.current.getSelectedItems()})
            }
            if (document.getElementById('formStreet').value) {
                props.onHandleQueryDetails({street: document.getElementById('formStreet').value})
            }
            if (document.getElementById('formCity').value) {
                props.onHandleQueryDetails({city: document.getElementById('formCity').value})
            }
        }
    }));

    const [countyOptions, setCountyOptions] = useState([]);

    const clickStateHandler = (clickedStateData) => {
        if (clickedStateData.target.value === '') {
            setCountyOptions([]);
        }
        else {
            setStateSelected(clickedStateData.target.value)
        }
        if (clickedStateData.target.value === 'Ohio') {
            setCountyOptions(ohioCounties)
        }
        else if (clickedStateData.target.value === 'West Virginia') {
            setCountyOptions(westVirginiaCounties)
        }
        else if (clickedStateData.target.value === 'Pennsylvania') {
            setCountyOptions(pennsylvaniaCounties)
        }
        else if (clickedStateData.target.value === 'Kentucky') {
            setCountyOptions(kentuckyCounties)
        }
        else if (clickedStateData.target.value === 'Michigan') {
            setCountyOptions(michiganCounties)
        }
        else if (clickedStateData.target.value === 'Texas') {
            setCountyOptions(texasCounties)
        }
        else if (clickedStateData.target.value === 'Indiana') {
            setCountyOptions(indianaCounties)
        }
        else if (clickedStateData.target.value === 'Maryland') {
            setCountyOptions(marylandCounties)
        }
        else if (clickedStateData.target.value === 'South Carolina') {
            setCountyOptions(southCarolinaCounties)
        }
    }


    return (
      <div className={classes.card}>
          <h3>Location Details</h3>
          <StateDropdown onClick={clickStateHandler} /><br/>
          <Multiselect
              placeholder="--Select County--"
              options={countyOptions.options}
              displayValue="name"
              emptyRecordMsg="Select a state"
              ref={multiCountySelect}
              closeIcon="close"
              avoidHighlightFirstOption="true"
              />
          <input
              className={classes.text_input__width}
              name="street"
              placeholder="Street"
              id='formStreet'
              /> <br />
          <input
              className={classes.text_input__width}
              name="city"
              placeholder="City"
              id='formCity' /> <br />
      </div>
    );
});

export default LocationPane;

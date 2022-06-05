import classes from '../SearchPanes.module.css';

const StateDropdown = (props) => {

    return (
        <select className={classes.searchPanes_dropdown} onClick={props.onClick}>
            <option value="">--Select State--</option>
            <option value="Ohio">Ohio</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Indiana">Indiana</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Maryland">Maryland</option>
            <option value="Michigan">Michigan</option>
            <option value="South Carolina">South Carolina</option>
            <option value="Texas">Texas</option>
        </select>
    );
};

export default StateDropdown
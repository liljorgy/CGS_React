import classes from '../SearchPanes.module.css';

function CountyDropdown(props) {
    return (
        <select className={classes.searchPanes_dropdown}>
            <option value="">--Select County--</option>
            <option value="Holmes">Holmes</option>
            <option value="Stark">Stark</option>
            <option value="Tuscarawas">Tuscarawas</option>
        </select>
    );
}

export default CountyDropdown;
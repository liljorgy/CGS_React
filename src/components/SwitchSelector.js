import SwitchButton from "./ClickedItems/SwitchButton";
import classes from './ClickedItems/SwitchButton.module.css';

const SwitchSelector = (props) => {
    return (
        <div className={classes.inline_text}>
            <div className={classes.improved_property}>Improved Property</div>
            <SwitchButton onSwitch={props.onSwitch}/>
            <div className={classes.improved_property}>Land Sale</div>
        </div>
    )
};

export default SwitchSelector;
import classes from './SwitchButton.module.css';

const SwitchButton = (props) => {

    return (
        <div className={classes.div_switch}>
            <input
                onChange={props.onSwitch}
                type="checkbox"
                className={classes.react_switch_checkbox}
                id={`react-switch-new`}
            />
            <label
                className={classes.react_switch_label}
                htmlFor={`react-switch-new`}
                >
                <span className={classes.react_switch_button}/>
            </label>
        </div>
    )
};
//style={{ background: props.onSwitch && '#06D6A0' }}

export default SwitchButton;

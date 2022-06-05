import LocationPane from "./SearchPanes/LocationPane";
import SalesPane from "./SearchPanes/SalesPane";
import DetailsPane from "./SearchPanes/DetailsPane";
import StructurePane from "./SearchPanes/StructurePane";
import classes from "./SearchPanes.module.css"

const SearchSwitch = (props) => {
    return (
        <div className={classes.searchPanes_row}>
            <LocationPane />
            <SalesPane />
            {!props.switchReportType && <StructurePane />}
            {props.switchReportType && <DetailsPane />}
        </div>
    )
};

export default SearchSwitch;
import LocationPane from "./SearchPanes/LocationPane";
import SalesPane from "./SearchPanes/SalesPane";
import StructurePane from "./SearchPanes/StructurePane";
import classes from "./SearchPanes.module.css";

const ImprovedPropertySearchPanes = () => {
    let queryDatapoints = []

    const queryHandler = (queryData) => {
        queryDatapoints = [...queryDatapoints, queryData ]
    }

    return (
        <div>
            <div className={classes.searchPanes_row}>
                <LocationPane locationSelect={queryHandler} />
                <SalesPane salesSelect={queryHandler} />
                <StructurePane structureSelect={queryHandler} />
            </div>
        </div>
    )
};

export default ImprovedPropertySearchPanes;
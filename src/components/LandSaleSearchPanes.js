import LocationPane from "./SearchPanes/LocationPane";
import SalesPane from "./SearchPanes/SalesPane";
import DetailsPane from "./SearchPanes/DetailsPane";
import classes from "./SearchPanes.module.css";

const LandSaleSearchPanes = () => {
    let queryDatapoints = []

    const queryHandler = (queryData) => {
        queryDatapoints = [...queryDatapoints,
        queryData
        ]
    };

    return (
        <div>
            <div className={classes.searchPanes_row}>
                <LocationPane locationSelect={queryHandler} />
                <SalesPane salesSelect={queryHandler} />
                <DetailsPane detailsText={queryHandler} />
            </div>
        </div>
    )
};

export default LandSaleSearchPanes;
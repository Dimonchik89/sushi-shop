import { Box, Typography } from "@mui/material"

import "../../style/helper.scss";
import "../../style/workTime.scss";

const WorkTimeSchedule = ({title, time}) => {

    return (
        <Box 
            className="d-flex space-between work-tine__schedule-item"
        >
            <Typography>
                {title}
            </Typography>
            <Typography>
                {time}
            </Typography>
        </Box>
    )
}
export default WorkTimeSchedule;
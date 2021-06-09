import React from 'react'
import { Typography } from '@material-ui/core'
import SubPlate from '../ConsoleComponentChild/SubPlate'

export default function ConsolePlate() {
    return (
        <div className="pl-4 pt-2 pb-5">
            <h3>Plate</h3>
            <Typography variant="h5">Use Console UI custome plate styles accross your projects for clean and better user interface.</Typography>

            <h4>Examples</h4>
            <Typography variant="Paragraph">Console UI plate include several predefine styles each having its own purpose.</Typography>

            <SubPlate />
        </div>
    )
}

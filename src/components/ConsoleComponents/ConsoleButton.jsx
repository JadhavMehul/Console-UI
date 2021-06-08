import { Typography } from '@material-ui/core'
import React from 'react'
import SubButton from '../ConsoleComponentChild/SubButton'

export default function ConsoleButton() {
    return (
        <div className="pl-4 pt-2 pb-5">
            <h3>Buttons</h3>
            <Typography variant="h5">Use Console UI custome button styles accross your projects.</Typography>

            <h4>Examples</h4>
            <Typography variant="Paragraph">Console UI buttons include several predefine styles each having its own purpose.</Typography>

            <SubButton />
        </div>
    )
}

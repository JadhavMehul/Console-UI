import { Typography } from '@material-ui/core'
import React from 'react'
import SubCard from '../ConsoleComponentChild/SubCard'

export default function ConsoleCard() {
    return (
        <div className="pl-4 pt-2 pb-5">
            <h3>Card</h3>
            <Typography variant="h5">Use Console UI custome Card styles accross your projects for better user interface.</Typography>

            <h4>Examples</h4>
            <Typography variant="Paragraph">Console UI cards include several predefine styles each having its own purpose.</Typography>

            <SubCard />
        </div>
    )
}

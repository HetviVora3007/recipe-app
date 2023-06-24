import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import './Loading.css'

const Loading = () => {
    return (
        <>
            <div className='loadingpage-maincontainer'>
                <CircularProgress disableShrink />
            </div>
        </>
    )
}

export default Loading
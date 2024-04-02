import {useEffect, useState} from 'react';

import { config , useClient, useMicrophoneAndCameraTracks, CHANNEL } from "../settings"
import { Grid } from '@material-ui/core';


export default function VideoCall(props) {
    const {setInCall} = props

    const [ users, setUsers ] = useState([])
    const [start, setStart ] = useState(false)

    const client = useClient()

    const {ready, tracks } = useMicrophoneAndCameraTracks()

    useEffect(() => {}, [client, CHANNEL, ready, tracks])
    
    



}
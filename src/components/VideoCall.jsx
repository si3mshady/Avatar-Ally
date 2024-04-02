import {useEffect, useState} from 'react';

import { config , useClient, useMicrophoneAndCameraTracks, CHANNEL } from "../settings"
import { Grid } from '@material-ui/core';


export default function VideoCall(props) {
    const {setInCall} = props

    const [ users, setUsers ] = useState([])
    const [start, setStart ] = useState(false)

    const client = useClient()

    const {ready, tracks } = useMicrophoneAndCameraTracks()

    useEffect(() => {

     client.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "audio") {
            if (user.audioTrack) user.audioTrack.stop()
        }

        if (mediaType === "video") {

            setUsers((previousUsers) => {
                return previousUsers.filter((User) => User.uid !== user.id)
            })
        }
     })   

     client.on('user-published', async (user,mediaType) => {

        await client.subscribe(user, mediaType)

        if (mediaType === "video") {

            setUsers((previousUsers) => {

                return [...previousUsers, user]
            })
        }

        if (mediaType === "audio") {

            user.audioTrack.play()
        }
        
     })

    }, [client, CHANNEL, ready, tracks])

    



}
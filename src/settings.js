import React from "react";
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const APP_ID = "4045ca4346b742879dbde13e9e757f8b"
const TOKEN = "007eJxTYLi2fr/N/HNHV3zpkVkY/7yjuKdH9Io72+as9eVP3ab8VDmmwGBiYGKanGhibGKWZG5iZGFumZKUkmponGqZam5qnmaR9EKHO60hkJEhInA3MyMDBIL4XAyJZYkliUWJOTmVDAwA2v4jvQ=="

export const config = {mode: "rtc", codec: "vp8", appId: APP_ID, token: TOKEN }
export const useClient  = createClient(config)
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks()
export const CHANNEL = "avatarally";

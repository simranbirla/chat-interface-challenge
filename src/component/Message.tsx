import { Mic } from 'lucide-react'
import { formatAMPM } from '../utils/formatMessage'

export enum Sender {
    "USER" = 'user',
    "AI" = "ai"
}

export enum MsgType {
    "VOICE" = "voice",
    "TEXT" = "text"
}

export type IMessage = {
    id: string,
    sender: Sender,
    timestamp: string,
    content: string,
    type?: MsgType
}

export default function Message({ sender, timestamp, content, type }: IMessage) {
    return (
        <div className={`p-4 rounded-xl text-base my-2 font-light max-w-[80%] flex flex-col gap-1  md:max-w-[45%] ${sender === Sender.USER ? "bg-blue-600 justify-end self-end text-white" : "bg-white self-start"}`}>

            {type === MsgType.VOICE && <p className={`text-xs  ${sender === Sender.USER ? "text-gray-300" : "text-gray-700"} flex gap-1 items-center`}>
                <Mic className='size-3' />  Voice message
            </p>}
            <p>
                {content}
            </p>
            <p className={`text-xs  ${sender === Sender.USER ? "text-gray-300" : "text-gray-700"}`}>
                {formatAMPM(timestamp)}
            </p>
        </div>
    )
}

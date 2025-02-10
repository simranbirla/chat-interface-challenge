import { Mic } from 'lucide-react'
import { formatAMPM } from '../../utils/formatMessage'
import { MsgType, Sender } from '../../utils/enums'
import { TMessage } from '../../types/messages'


export default function Message({ type, timestamp, content, msgType }: TMessage) {

    return (
        <div className={`p-4 rounded-xl text-base my-2 font-light max-w-[80%] flex flex-col gap-1  md:max-w-[45%] ${type === Sender.USER ? "bg-blue-600 justify-end self-end text-white" : "bg-white dark:bg-[#222] dark:text-white self-start"}`}>

            {msgType === MsgType.VOICE && <p className={`text-xs  ${type === Sender.USER ? "text-gray-300" : "text-gray-700"} flex gap-1 items-center`}>
                <Mic className='size-3' />  Voice message
            </p>}
            <p>
                {content}
            </p>
            <p className={`text-xs  ${type === Sender.USER ? "text-gray-300" : "text-gray-700 dark:text-gray-400"}`}>
                {formatAMPM(timestamp)}
            </p>
        </div>
    )
}

import { useContext, useState } from 'react'
import SpeechModal from './SpeechModal';
import { Mic, MicOff, Send } from 'lucide-react';
import { MessageStore } from '../context/MessagesContext';
import { MsgType, Sender } from '../utils/enums';
import { useSpeechRecognition } from 'react-speech-recognition';

export type TTextForm = {
    handleText: (textMsg: string) => void,
    text: string
}

export default function TextForm({ handleText, text }: TTextForm) {
    const { addMessage } = useContext(MessageStore)
    const speechEnabled = localStorage.getItem("speech") ?? "true"
    const [open, setOpen] = useState<boolean>(false)
    const {
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();


    const handleModal = () => {
        if (!browserSupportsSpeechRecognition) {
            alert("Browser not supported")
        } else {
            handleOpen(true)
        }
    }

    const handleOpen = (isOpen: boolean) => {
        setOpen(isOpen)
    }

    const handleSend = async () => {
        if (!text) return
        await addMessage({
            content: text,
            msgType: MsgType.TEXT,
            id: crypto.randomUUID(),
            timestamp: new Date().toDateString(),
            type: Sender.USER
        })

        handleText('')
    }


    return (
        <>
            <div className='flex gap-2 w-full items-center'>
                <input onChange={(e) => handleText(e.target.value)} value={text} type="text" placeholder='Write your question here..' className='w-[90%] text-base p-2 rounded-3xl border-2 dark:border-gray-500 border-gray-100' />
                {speechEnabled ? <div className='size-10 p-2 rounded-full bg-gray-400 text-gray-800 cursor-pointer' onClick={() => handleModal()}>
                    <Mic className='size-6' />
                </div> : <div className='size-10 p-2 rounded-full bg-gray-400 text-gray-800 cursor-pointer'>
                    <MicOff className='size-6' />
                </div>}
                <div className='size-10 p-2 rounded-full bg-blue-600 text-white cursor-pointer' onClick={handleSend}>
                    <Send className='size-6' />
                </div>
            </div>
            {open && <SpeechModal open={open} handleOpen={handleOpen} />}
        </>
    )
}

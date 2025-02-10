import React, { useContext, useState } from 'react'
import SpeechModal from './SpeechModal';
import { Mic, Send } from 'lucide-react';
import { MessageStore } from '../context/MessagesContext';
import { MsgType, Sender } from '../utils/enums';
import { useSpeechRecognition } from 'react-speech-recognition';

export default function TextForm() {
    const [text, setText] = useState('');
    const { addMessage } = useContext(MessageStore)
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

        setText('')
    }


    return (
        <>
            <div className='flex gap-2 w-full items-center'>
                <input onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder='Write your question here..' className='w-[90%] text-base p-2 rounded-3xl border-2 border-gray-100' />
                <div className='size-10 p-2 rounded-full bg-gray-400 text-gray-800 cursor-pointer' onClick={() => handleModal()}>
                    <Mic className='size-6' />
                </div>
                <div className='size-10 p-2 rounded-full bg-blue-600 text-white cursor-pointer' onClick={handleSend}>
                    <Send className='size-6' />
                </div>
            </div>
            {open && <SpeechModal open={open} handleOpen={handleOpen} />}
        </>
    )
}

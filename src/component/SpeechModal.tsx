import { Mic, Send, X } from 'lucide-react';
import { useContext, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { MessageStore } from '../context/MessagesContext';
import { MsgType, Sender } from '../utils/enums';


export type TSpeechModal = {
    open: boolean;
    handleOpen: (isOpen: boolean) => void
}

export default function SpeechModal({ handleOpen }: TSpeechModal) {
    const { addMessage } = useContext(MessageStore)

    const {
        transcript,
        listening,
    } = useSpeechRecognition();


    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true })
    }, [])


    const handleClose = () => {
        SpeechRecognition.stopListening()
        handleOpen(false)
    }

    const sendMessage = async () => {
        if (!transcript) {
            handleClose()
        } else {
            await addMessage({
                id: crypto.randomUUID(),
                msgType: MsgType.VOICE,
                content: transcript,
                type: Sender.USER,
                timestamp: new Date().toString()
            })
            handleClose()
        }


    }


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative bg-white p-6 rounded-2xl shadow-lg w-80 min-h-80 flex flex-col gap-2 items-center justify-center">
                <button
                    className="absolute top-3 right-3 text-gray-500 cursor-pointer hover:text-gray-700"
                    onClick={() => handleClose()}
                >
                    <X size={24} />
                </button>

                <div className='p-8 rounded-full animate-pulse bg-blue-300'>
                    <Mic size={60} className="text-blue-500" />
                </div>
                {!listening && <p className='text-sm'>Cannot hear</p>}
                <p className='text-xs'>{transcript}</p>
                <button
                    className="absolute bottom-3 right-3 text-blue-500 cursor-pointer hover:text-gray-700"
                    onClick={() => sendMessage()}
                >
                    <Send size={24} />
                </button>
            </div>
        </div>
    );
}

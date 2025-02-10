import { Loader2, MessageSquare, Settings } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react'
import { suggestionMessages } from '../utils/data';
import Message from './Message';
import SuggestionTexts from './SuggestionTexts';
import TextForm from './TextForm';
import { MessageStore } from '../context/MessagesContext';
import { useNavigate } from 'react-router';

export default function MessageWindow() {
    const [text, setText] = useState('');
    const { messages, loading } = useContext(MessageStore)
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const navigate = useNavigate()

    const handleText = (textMsg: string) => {
        setText(textMsg)
    }

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }

    }, [loading, messages]);

    return (
        <div className='w-[100vw] h-[100vh] dark:bg-black dark:text-white flex justify-center items-center'>
            <div className='w-[80%] h-[80%] shadow-2xl dark:ring-2 dark:ring-white/20 flex flex-col chat-box '>
                <div className='flex justify-between items-center border-b-gray-50 dark:border-b-gray-800 border-b-2 px-6 py-2 '>
                    <div className='flex gap-2 items-center'>
                        <div className='size-18 p-2 bg-blue-600 text-white rounded-full text-center flex justify-center item'>

                            <MessageSquare className='size-10 m-auto text-center' />
                        </div>
                        <div>
                            <p className='font-semibold'>AI chat Assistant</p>
                            <p className='text-gray-600 dark:text-gray-300 text-sm'>Speech Recognition Enabled</p>
                        </div>
                    </div>
                    <div className='cursor-pointer settings' onClick={() => navigate('/settings')}>
                        <Settings className='size-8 text-gray-500' />
                    </div>
                </div>
                <div ref={messagesEndRef} className='all-messages bg-gray-200 dark:bg-gray-900 overflow-y-auto flex gap-2 flex-col px-6 dark:border-b-gray-800 border-b-gray-50 border-b-2 min-h-[50%]'>
                    {messages.map(msg => <Message key={msg.id} {...msg} />)}
                    {loading && <div className={` loader p-4 rounded-xl text-base my-2 font-light max-w-[80%] flex flex-col gap-1  md:max-w-[45%] bg-white dark:bg-[#222] dark:text-white self-start`}>
                        <Loader2 className='animate-spin size-12' />
                    </div>}
                </div>

                <div className='px-6 py-2 flex gap-3 suggestions border-b-gray-50 dark:border-b-gray-800 border-b-2'>
                    {suggestionMessages.map((msg, id) => <SuggestionTexts handleText={handleText} data={msg} key={id} />)}
                </div>
                <div className='px-6 py-2'>
                    <TextForm text={text} handleText={handleText} />
                </div>
            </div>
        </div>
    )
}

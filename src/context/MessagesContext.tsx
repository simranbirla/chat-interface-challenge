import { createContext, useState } from "react";
import { TMessage } from "../types/messages";
import axios from 'axios';
import { mockData } from "../utils/data";

export interface IMessageContext {
    messages: TMessage[]
    addMessage: (message: TMessage) => void
    error: string
    loading: boolean
}

export const MessageStore = createContext({} as IMessageContext);


export const MessageProvider = ({ children }: { children: React.ReactElement }) => {
    const [messages, setMessages] = useState<TMessage[]>(mockData);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);



    const addMessage = async (message: TMessage) => {
        try {
            messages.push({
                type: message.type,
                content: message.content,
                id: message.id,
                timestamp: message.timestamp,
            })
            setMessages(messages)
            setLoading(true)
            const data = await axios.post('https://run.mocky.io/v3/093fc88b-1c4f-4cff-96bb-72f84dcbc2f4', {
                type: message.type,
                content: message.content,

            }, {
                withCredentials: false,
                headers: {
                    "Content-Type": 'application/json',
                }
            })

            messages.push(data.data)
            setMessages(messages)
        } catch (e) {
            console.log("something went wrong", e)
            setError("Could not process your data")
        } finally {
            setLoading(false)
        }


    }

    return <MessageStore.Provider value={{ messages, addMessage, error, loading }}>{children}</MessageStore.Provider>
}
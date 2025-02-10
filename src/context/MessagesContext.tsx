import { createContext, useReducer } from "react";
import { TMessage } from "../types/messages";
import axios from "axios";
import { mockData } from "../utils/data";

export interface IMessageContext {
    messages: TMessage[];
    addMessage: (message: TMessage) => void;
    error: string;
    loading: boolean;
}

export type Action =
    | { type: "ADD_MESSAGE"; payload: TMessage }
    | { type: "ADD_MESSAGE_SUCCESS"; payload: TMessage }
    | { type: "ADD_MESSAGE_FAILURE"; payload: string };

const initialState: IMessageContext = {
    messages: mockData,
    addMessage: () => { },
    error: "",
    loading: false,
};

const messageReducer = (state: IMessageContext, action: Action): IMessageContext => {
    switch (action.type) {
        case "ADD_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, action.payload],
                loading: true,
            };
        case "ADD_MESSAGE_SUCCESS":
            return {
                ...state,
                messages: [...state.messages, action.payload],
                loading: false,
            };
        case "ADD_MESSAGE_FAILURE":
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const MessageStore = createContext<IMessageContext>(initialState);

export const MessageProvider = ({ children }: { children: React.ReactElement }) => {
    const [state, dispatch] = useReducer(messageReducer, initialState);

    const addMessage = async (message: TMessage) => {
        try {
            dispatch({ type: "ADD_MESSAGE", payload: message });

            const { data } = await axios.post(
                "https://run.mocky.io/v3/093fc88b-1c4f-4cff-96bb-72f84dcbc2f4",
                {
                    type: message.type,
                    content: message.content,
                },
                {
                    withCredentials: false,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            dispatch({ type: "ADD_MESSAGE_SUCCESS", payload: data });
        } catch (e) {
            console.error("Error:", e);
            dispatch({ type: "ADD_MESSAGE_FAILURE", payload: "Could not process your data" });
        }
    };

    return (
        <MessageStore.Provider value={{ ...state, addMessage }}>
            {children}
        </MessageStore.Provider>
    );
};

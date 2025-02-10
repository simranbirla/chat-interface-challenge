import { TMessage } from './../types/messages';
import { Sender } from "../utils/enums";

export const mockData: TMessage[] = [
    {
        "type": Sender.USER,
        "content": "Hey, how are you?",
        "timestamp": "2025-02-10T10:15:30Z",
        "id": "550e8400-e29b-41d4-a716-446655440000"
    },
    {
        "type": Sender.AI,
        "content": "I'm doing well! How about you?",
        "timestamp": "2025-02-10T10:15:35Z",
        "id": "550e8400-e29b-41d4-a716-446655440001"
    },
    {
        "type": Sender.USER,
        "content": "I'm good too! Can you generate some more mock messages?",
        "timestamp": "2025-02-10T10:16:00Z",
        "id": "550e8400-e29b-41d4-a716-446655440002"
    },
]

export const suggestionMessages = [
    "Tell me something new", "Suggest a new feature", "Performance"
]

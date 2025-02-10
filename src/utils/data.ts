import { IMessage, Sender } from "../component/Message";

export const mockData: IMessage[] = [
    {
        "sender": Sender.USER,
        "content": "Hey, how are you?",
        "timestamp": "2025-02-10T10:15:30Z",
        "id": "550e8400-e29b-41d4-a716-446655440000"
    },
    {
        "sender": Sender.AI,
        "content": "I'm doing well! How about you?",
        "timestamp": "2025-02-10T10:15:35Z",
        "id": "550e8400-e29b-41d4-a716-446655440001"
    },
    {
        "sender": Sender.USER,
        "content": "I'm good too! Can you generate some more mock messages?",
        "timestamp": "2025-02-10T10:16:00Z",
        "id": "550e8400-e29b-41d4-a716-446655440002"
    },
    {
        "sender": Sender.AI,
        "content": "Of course! Here are some additional messages.",
        "timestamp": "2025-02-10T10:16:10Z",
        "id": "550e8400-e29b-41d4-a716-446655440003"
    },
    {
        "sender": Sender.USER,
        "content": "Great! Now I have test data for my chat feature.",
        "timestamp": "2025-02-10T10:16:30Z",
        "id": "550e8400-e29b-41d4-a716-446655440004"
    },
    {
        "sender": Sender.AI,
        "content": "Glad to help! Let me know if you need anything else.",
        "timestamp": "2025-02-10T10:16:45Z",
        "id": "550e8400-e29b-41d4-a716-446655440005"
    },
    {
        "sender": Sender.AI,
        "content": "Of course! Here are some additional messages.",
        "timestamp": "2025-02-10T10:16:10Z",
        "id": "550e8400-e29b-41d4-a716-446655440003"
    },
    {
        "sender": Sender.USER,
        "content": "Great! Now I have test data for my chat feature.",
        "timestamp": "2025-02-10T10:16:30Z",
        "id": "550e8400-e29b-41d4-a716-446655440004"
    },
    {
        "sender": Sender.AI,
        "content": "Glad to help! Let me know if you need anything else.",
        "timestamp": "2025-02-10T10:16:45Z",
        "id": "550e8400-e29b-41d4-a716-446655440005"
    }
]

export const suggestionMessages = [
    "Tell me something new", "Suggest a new feature", "Performance"
]

import { MsgType, Sender } from "../utils/enums"

export type TMessage = {
    id: string,
    timestamp: string,
    content: string,
    msgType?: MsgType,
    type: Sender
}


export default function SuggestionTexts({ data, handleText }: { data: string, handleText: (textMsg: string) => void }) {
    return (
        <div className="rounded-3xl bg-gray-200 p-2 text-xs cursor-pointer text-gray-600 dark:bg-gray-700 dark:text-gray-50" onClick={() => handleText(data)}>{data}</div>
    )
}

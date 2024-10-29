import { useState } from "react";

export default function Ui() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you?", isUser: false, timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) },
        { text: "I'm just browsing!", isUser: true, timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) },
  ]);
  const [input, setInput] = useState("");

  function handleChange() {
    setOpen(!open);
  }

  function handleSendMessage() {
    if (input.trim() !== "") {
      
      setMessages((prevMessages) => [
        ...prevMessages,
          { text: input, isUser: true, timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }
      ]);

     
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Thank you for your message. Let me assist you further.",
            isUser: false,
            timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }
        ]);
      }, 1000);

      setInput(""); 
    }
  }

  return (
    <>
      <div className="m-2 h-screen ">
        <div className="relative h-full">
          <div
            className={
              open
                ? "absolute right-[30%] bottom-5 bg-indigo-600 rounded-3xl p-2 text-white -scale-x-100 shadow-sm"
                : "absolute right-[4%] bottom-5 bg-indigo-600 rounded-3xl p-2 text-white -scale-x-100 shadow-sm"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7"
              onClick={handleChange}
            >
              <path
                fillRule="evenodd"
                d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={
              open === true
                ? "absolute right-[4%] bottom-5 bg-indigo-600 rounded-3xl p-2 text-white -scale-x-100 shadow-sm"
                : "hidden"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7"
              onClick={handleChange}
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {open && (
            <div className="absolute bottom-20 right-[5%] w-[400px] min-h-[450px] shadow-xl h-80 rounded-lg overflow-hidden">
              <h1 className="text-white py-3.5 px-2.5 font-semibold bg-indigo-600 rounded-tr-lg rounded-tl-lg">
                Support Chat
              </h1>
              <div className="h-[78%] overflow-y-auto p-2">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-2 flex ${
                      message.isUser ? "justify-end" : "items-center gap-1.5"
                    }`}
                  >
                    {!message.isUser && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 bg-yellow-100 rounded-[50%] p-0.5 text-yellow-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <div className="flex flex-col items-end gap-1 ">
                      <h5
                        className={`${
                          message.isUser
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-100"
                        } p-3 rounded-lg`}
                      >
                        {message.text}
                      </h5>
                      <span className="text-xs text-gray-400">
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="">
                <input
                  type="text"
                  className="w-[100%] p-1.5 border-t outline-none "
                  placeholder="Type a reply..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

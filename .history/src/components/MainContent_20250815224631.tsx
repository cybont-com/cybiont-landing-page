import React from 'react';
import { ChatMessage } from '../data/chatData';

interface MainContentProps {
  chatMessages: ChatMessage[];
}

export function MainContent({ chatMessages }: MainContentProps) {
  return (
    <main className="relative bg-white border-l-neutral-200 flex basis-[0%] flex-col grow overflow-hidden border-r-black/90 border-y-black/90 border-l">
      <div className="relative items-center bg-white border-b-neutral-200 flex h-8 justify-between p-2 border-t-black/90 border-x-black/90 border-b">
        <div className="items-center gap-x-1 flex basis-0 grow justify-start gap-y-1">
          <button aria-label="Refresh chat" type="button" className="text-black items-center bg-transparent grid h-8 justify-items-center outline-transparent -outline-offset-1 outline outline-1 w-8 p-0 rounded-[5px]">
            <span className="items-center flex fill-black/90 h-8 justify-center w-8 rounded-[5px]">
              <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-10.svg" alt="Icon" className="h-6 w-6" />
            </span>
          </button>
          <span className="relative flex h-8 min-w-8 outline-transparent -outline-offset-1 outline outline-1 w-8 rounded-[5px]">
            <label className="absolute font-[450] items-center flex h-full justify-center tracking-[0.05504px] w-full rounded-[5px] inset-0 font-inter">
              <span className="items-center flex fill-black/90 h-8 justify-center w-8 rounded-[5px]">
                <div className="relative fill-black/90">
                  <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-11.svg" alt="Icon" className="h-6 w-6" />
                </div>
              </span>
            </label>
          </span>
        </div>

        <div className="items-center gap-x-2 flex basis-[0%] grow justify-center gap-y-2"></div>

        <div className="items-center gap-x-2 flex basis-0 grow justify-end gap-y-2">
          <div className="mr-1">
            <span className="items-center gap-x-1 flex flex-row-reverse grow h-10 justify-end gap-y-1 mr-1">
              <div className="contents">
                <button aria-label="Multiplayer tools" className="relative text-black items-center bg-transparent flex h-6 justify-center outline-transparent outline outline-2 text-center pl-0 pr-0.5 py-0 rounded-[50px]">
                  <span className="block">
                    <span className="relative block">
                      <div className="relative items-center flex basis-[30px] shrink-0 h-10 justify-center w-6">
                        <div className="flex">
                          <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-12.svg" alt="Icon" />
                          <div>
                            <span className="relative text-black/90 text-xs items-center bg-slate-500 flex shrink-0 h-6 justify-center leading-6 uppercase w-6 overflow-hidden rounded-[100%]">
                              <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-13.svg" alt="Icon" className="h-full w-full" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </span>
                  </span>
                  <span className="items-center flex"></span>
                </button>
              </div>
              <div className="relative h-full w-[22px]">
                <div className="absolute flex flex-row-reverse justify-start w-[154px] -right-2">
                  <span className="block -ml-2">
                    <span className="relative block">
                      <button aria-label="Follow Danil" className="absolute text-black bg-transparent block h-6 text-center translate-x-[-50.0%] translate-y-[-50.0%] w-6 z-[2] border p-0 rounded-[50%] border-solid border-transparent left-2/4 top-2/4"></button>
                      <div className="relative items-center flex basis-[30px] shrink-0 h-10 justify-center w-[30px]">
                        <div className="flex">
                          <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-14.svg" alt="Icon" />
                          <div>
                            <div className="relative text-xs items-center flex shrink-0 h-6 justify-center leading-6 text-center uppercase w-6 overflow-hidden rounded-[100%] border-2 border-solid border-white">
                              <img alt="" src="https://c.animaapp.com/med4n8puZPF82F/assets/b0761c1c-2b0a-4baf-8249-836339d451d5.png" className="w-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                  </span>
                </div>
              </div>
            </span>
          </div>
          <button aria-label="Open full-screen view" type="button" className="text-black items-center bg-transparent grid h-8 justify-items-center outline-transparent -outline-offset-1 outline outline-1 w-8 p-0 rounded-[5px]">
            <span className="items-center flex fill-black/90 h-8 justify-center w-8 rounded-[5px]">
              <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-15.svg" alt="Icon" className="h-6 w-6" />
            </span>
          </button>
          <button type="button" className="relative text-white font-[450] items-center bg-indigo-600 flex h-8 justify-items-center tracking-[0.05504px] max-w-full text-center p-0 rounded-[5px] font-inter">
            <span className="items-center flex max-w-full overflow-hidden mx-3">
              <span className="block grow text-ellipsis text-nowrap overflow-hidden">Share</span>
            </span>
          </button>
        </div>
      </div>

      <div className="items-stretch flex basis-[0%] grow w-full overflow-hidden">
        <div className="flex flex-col h-full w-full overflow-hidden">
          <div className="basis-0 grow overflow-hidden">
            <div className="h-full w-full">
              <div className="relative basis-[0%] grow h-full w-full overflow-hidden">
                <div className="contents">
                  <div className="contents">
                    <div className="contents">
                      <div className="contents">
                        <div className="contents">
                          <div className="contents">
                            <div className="absolute items-center bg-white flex justify-center inset-0">
                              <div className="relative flex flex-col h-full w-full">
                                <div className="relative bg-white flex flex-col h-full w-full">
                                  <div className="relative h-full w-full">
                                    <div className="absolute box-border flex inset-0">
                                      <div className="overflow-y-auto max-h-[400px] p-4 space-y-4">
                                        {chatMessages.length === 0 ? (
                                          <p className="text-gray-500 italic">No messages yet. Start the conversation!</p>
                                        ) : (
                                          chatMessages.map((msg) => (
                                            <div
                                              key={msg.id}
                                              className={`p-3 rounded-md max-w-[75%] ${
                                                msg.type === 'user' ? 'bg-blue-100 self-end text-right' : 'bg-gray-200 self-start text-left'
                                              }`}
                                            >
                                              <p className="whitespace-pre-wrap">{msg.content}</p>
                                              {msg.attachments && msg.attachments.length > 0 && (
                                                <div className="mt-2 flex flex-wrap gap-2 justify-start">
                                                  {msg.attachments.map((att) => (
                                                    <div key={att.id} className="border rounded p-1 bg-white">
                                                      {att.type === 'image' ? (
                                                        <img
                                                          src={att.url}
                                                          alt={att.name}
                                                          className="max-w-32 max-h-32 object-contain"
                                                        />
                                                      ) : (
                                                        <a
                                                          href={att.url}
                                                          target="_blank"
                                                          rel="noopener noreferrer"
                                                          className="text-blue-600 underline"
                                                        >
                                                          {att.name}
                                                        </a>
                                                      )}
                                                    </div>
                                                  ))}
                                                </div>
                                              )}
                                              <time
                                                dateTime={msg.timestamp.toISOString()}
                                                className="block text-xs text-gray-400 mt-1"
                                              >
                                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                              </time>
                                            </div>
                                          ))
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

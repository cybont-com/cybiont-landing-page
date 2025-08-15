import React from 'react';
import { Header } from './Header';
import { ReasoningSection } from './ReasoningSection';
import { ChatInput } from './ChatInput';
import { reasoningData } from '../data/reasoningData';
import { ChatAttachment } from '../data/chatData';

export function Sidebar() {
  const handleMessageSend = async (message: string, attachments: ChatAttachment[]) => {
    console.log('Sidebar message sent:', message, attachments);
    // Handle message sending logic specific to sidebar context
    // This could trigger AI reasoning, design changes, etc.
  };

  const handleFileAttach = (file: File) => {
    console.log('Sidebar file attached:', file.name);
    // Handle file attachment in sidebar context
    // Could be used for design assets, reference images, etc.
  };

  return (
    <div className="flex flex-col h-full max-w-[500px] w-[368px]">
      <div className="relative bg-white flex flex-col grow overflow-x-hidden overflow-y-auto w-[368px] border-l-black/90 border-r-black/10 border-y-black/90 border-r">
        <Header />
        <div className="h-11 min-h-11"></div>
        
        <div className="flex basis-[0%] flex-col grow w-full break-keep overflow-hidden font-inter">
          <div className="border-t-neutral-200 flex flex-col h-full w-full break-keep mt-1 border-b-black/90 border-x-black/90 border-t">
            <div className="basis-[0%] grow break-keep">
              <div className="flex flex-col h-full w-full break-keep">
                <div className="relative flex flex-col h-full w-full break-keep">
                  <div className="relative flex flex-col h-full w-full break-keep">
                    <div className="relative flex basis-0 flex-col grow break-keep overflow-hidden">
                      <div className="items-start flex h-full overflow-x-hidden overflow-y-scroll overscroll-x-none overscroll-y-none w-full break-keep">
                        <div className="h-full w-full break-keep">
                          <div className="break-keep">
                            <div className="gap-x-6 flex flex-col gap-y-6 break-keep pt-4 pb-3 px-4">
                              {reasoningData.map((reasoning, index) => (
                                <ReasoningSection 
                                  key={reasoning.id}
                                  reasoning={reasoning}
                                  isLatest={index === reasoningData.length - 1}
                                />
                              ))}
                              <div className="break-keep"></div>
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
        
        <div className="relative h-0 break-keep z-[1]">
          <div className="absolute flex justify-end top-[-30px] w-full break-keep right-2.5"></div>
        </div>
        <div className="absolute bg-[linear-gradient(to_top,rgb(255,255,255)_0%,rgba(0,0,0,0)_100%)] h-10 break-keep bottom-0 inset-x-0"></div>
        
        <ChatInput 
          onMessageSend={handleMessageSend}
          onFileAttach={handleFileAttach}
          placeholder="Ask for changes"
        />
      </div>
    </div>
  );
}

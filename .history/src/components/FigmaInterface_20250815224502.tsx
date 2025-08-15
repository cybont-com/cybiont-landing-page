import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';
import { PreviewPanel } from './PreviewPanel';
import { ChatInput } from './ChatInput';
import { HelpButton } from './HelpButton';
import { ChatMessage, ChatAttachment } from '../data/chatData';

export function FigmaInterface() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const handleMessageSend = async (message: string, attachments: ChatAttachment[]) => {
    // Create new message
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content: message,
      timestamp: new Date(),
      type: 'user',
      attachments: attachments.length > 0 ? attachments : undefined
    };

    // Add to messages
    setChatMessages(prev => [...prev, newMessage]);

    // Here you would typically send to your backend/AI service
    console.log('Sending message:', newMessage);
    
    // Simulate AI response (in a real app, this would come from your backend)
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: `I received your message: "${message}". How can I help you with your design?`,
        timestamp: new Date(),
        type: 'ai'
      };
      setChatMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleFileAttach = (file: File) => {
    console.log('File attached:', file.name);
    // Handle file upload logic here
  };

  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto block tracking-[normal] leading-[normal] list-outside list-disc overscroll-x-none overscroll-y-none text-start indent-[0px] normal-case visible overflow-hidden border-separate font-times_new_roman">
      <div className="fixed left-[-1000px] top-[-1000px]">
        <div className="text-[11px] font-inter">a</div>
        <div className="text-[11px] italic font-inter">a</div>
        <div className="text-[11px] font-medium font-inter">a</div>
        <div className="text-[11px] italic font-medium font-inter">a</div>
        <div className="text-[11px] font-semibold font-inter">a</div>
        <div className="text-[11px] italic font-semibold font-inter">a</div>
        <div className="text-white text-[11px] font-inter">a</div>
      </div>
      
      <div>
        <div>
          <div className="text-black/90 text-[11px] leading-4 font-inter">
            <div className="box-border">
              <div className="flex flex-col h-[1000px]">
                <div className="grow">
                  <div className="flex flex-col h-full">
                    <div className="relative grow">
                      <div className="absolute h-[1000px] w-screen overflow-hidden left-0 top-0">
                        <div className="absolute left-0 top-0">
                          <clustered-pins>
                            <div className="relative h-0 translate-x-[-216px] translate-y-[-100px] w-0 left-[400px] top-[294px]"></div>
                          </clustered-pins>
                        </div>
                      </div>
                      
                      <div className="absolute">
                        <div className="absolute">
                          <div className="absolute h-[1000px] w-screen overflow-hidden left-0 top-0"></div>
                        </div>
                      </div>
                      
                      <div className="absolute h-[1000px] w-screen overflow-hidden left-0 top-0">
                        <div className="absolute left-0 top-0">
                          <div className="relative h-0 translate-x-[-3.5px] translate-y-[-306px] w-0 left-[187.5px] top-[500px] md:translate-x-[-456px] md:translate-y-[-306px] md:left-[640px]">
                            <div></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute h-[1000px] w-screen overflow-hidden left-0 top-0"></div>
                      <div></div>
                      
                      <div className="absolute inset-y-0">
                        <div className="absolute z-[6] left-0 inset-y-0">
                          <div>
                            <div className="absolute left-0 inset-y-0">
                              <Sidebar />
                              <div role="separator" className="absolute h-full right-[-3px] w-1.5 z-[6] top-0"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="absolute items-stretch bg-white box-border flex left-[368px] right-0 inset-y-0">
                          <PreviewPanel />
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
      
      <div className="relative bottom-[90px]"></div>
      <div className="fixed flex justify-center z-[8] bottom-3 inset-x-0"></div>
      <div className="fixed text-center w-full z-[11] mt-6 left-0 top-0"></div>
      
      <div className="hidden">
        <iframe 
          name="Shim Plugin Iframe" 
          title="Shim Plugin Iframe" 
          src="/plugin-sandbox" 
          className="hidden h-[200px] w-[300px]"
        />
      </div>
      
      <div className="fixed items-center flex justify-center translate-y-[1000px] w-full z-[11] bottom-3">
        <div className="contents">
          <div role="presentation">
            <div role="group" className="items-center bg-zinc-800 shadow-[rgba(0,0,0,0.4)_0px_1px_3px_0px,rgba(255,255,255,0.3)_0px_0px_0.5px_0px_inset,rgba(255,255,255,0.1)_0px_0.5px_0px_0px_inset,rgba(0,0,0,0.5)_0px_0px_0.5px_0px] inline-flex max-w-[600px] min-h-10 px-2 rounded-[13px]">
              <span className="contents">
                <div role="status" className="text-white font-[550] tracking-[0.05504px] p-2 font-inter">
                  <span></span>
                  <span></span>
                </div>
              </span>
              <span className="absolute block">
                <div role="status" className="text-white font-[550] tracking-[0.05504px] p-2 font-inter"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contents"></div>
      <HelpButton />
      
      <div className="fixed isolate z-[9] inset-0">
        <div className="contents">
          <div role="dialog" className="fixed hidden w-fit z-0 left-0 top-0">
            <div className="relative h-fit w-fit">
              <div className="bg-white shadow-[rgba(0,0,0,0.15)_0px_2px_5px_0px,rgba(0,0,0,0.12)_0px_10px_16px_0px,rgba(0,0,0,0.12)_0px_0px_0.5px_0px] grid [grid-template-areas:'header_header''sidebar_body''sidebar_footer'] grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] h-full max-h-full overflow-hidden rounded-[13px]">
                <div className="items-center shadow-[rgb(230,230,230)_0px_-1px_0px_0px_inset] box-border flex col-end-[header] col-start-[header] row-end-[header] row-start-[header] h-10 pl-2 pr-8">
                  <h2 className="font-[550] tracking-[0.05504px] ml-2 font-inter">
                    <div className="flex justify-between text-center">
                      <div className="items-center flex basis-[0%] grow">
                        <div className="self-center basis-[0%] grow max-w-[180px] text-ellipsis text-nowrap w-[calc(100%_-_40px)] overflow-hidden mr-1 pl-2"></div>
                      </div>
                    </div>
                  </h2>
                  <div className="items-center gap-x-2 flex justify-end gap-y-2 ml-auto"></div>
                </div>
                <div className="font-[450] col-end-[body] col-start-[body] row-end-[body] row-start-[body] tracking-[0.05504px] overflow-auto font-inter">
                  <div className="relative">
                    <iframe 
                      name="Shim Plugin Iframe" 
                      title="Shim Plugin Iframe" 
                      src="/plugin-sandbox" 
                      className="hidden h-[200px] w-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute items-center flex justify-center right-2 top-2">
              <button aria-label="Close" type="button" className="text-black items-center bg-transparent grid h-6 justify-items-center min-w-6 outline-transparent -outline-offset-1 outline outline-1 w-6 p-0 rounded-[5px]">
                <span className="items-center flex fill-black/90 h-6 justify-center min-w-6 w-6 rounded-[5px]">
                  <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-17.svg" alt="Icon" className="h-6 w-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div></div>
      <iframe src="https://sprig.figma.com/" className="fixed h-0 w-0 z-[9] right-0 bottom-0" />
    </div>
  );
}

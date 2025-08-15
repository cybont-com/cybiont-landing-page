import React, { useState, useRef } from 'react';
import { ChatInputProps, ChatAttachment, supportedFileTypes, maxFileSize } from '../data/chatData';

export function ChatInput({ 
  onMessageSend, 
  onFileAttach, 
  placeholder = "Ask for changes",
  disabled = false 
}: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<ChatAttachment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim() && attachments.length === 0) return;
    if (disabled || isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      // Handle message submission
      if (onMessageSend) {
        await onMessageSend(message, attachments);
      } else {
        console.log('Message:', message);
        console.log('Attachments:', attachments);
      }
      
      // Reset form
      setMessage('');
      setAttachments([]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!supportedFileTypes.includes(file.type)) {
      alert('Unsupported file type. Please select an image or document.');
      return;
    }

    // Validate file size
    if (file.size > maxFileSize) {
      alert('File too large. Please select a file smaller than 10MB.');
      return;
    }

    // Create attachment
    const attachment: ChatAttachment = {
      id: Date.now().toString(),
      name: file.name,
      type: file.type.startsWith('image/') ? 'image' : 'file',
      url: URL.createObjectURL(file),
      size: file.size
    };

    setAttachments(prev => [...prev, attachment]);

    if (onFileAttach) {
      onFileAttach(file);
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const removeAttachment = (id: string) => {
    setAttachments(prev => prev.filter(att => att.id !== id));
  };

  return (
    <div className="break-keep">
      <form className="break-keep" onSubmit={handleSubmit}>
        <div className="sticky flex flex-col shrink-0 break-keep mt-0.5 mb-4 mx-4 bottom-0">
          <div className="items-start bg-indigo-600 box-border gap-x-2 flex h-[66px] gap-y-2 break-keep -mb-6 pl-4 pr-3 pt-2 rounded-[13px]">
            <div className="text-white font-[550] items-center flex grow h-6 tracking-[0.055px] break-keep font-inter">
              <span className="block text-ellipsis text-nowrap break-keep overflow-hidden">Sign up to use Figma Make</span>
            </div>
            <div className="gap-x-2 flex shrink-0 justify-end gap-y-2 w-fit break-keep">
              <button type="button" className="font-[550] items-center bg-white flex shrink-0 h-6 justify-items-center tracking-[0.055px] text-center w-fit break-keep px-2 py-1 rounded-[5px] font-inter">Sign up</button>
              <div className="contents break-keep">
                <div className="break-keep">
                  <button aria-label="Continue with Google" type="button" className="relative text-black items-center bg-white inline-flex h-6 justify-items-center break-keep p-0 rounded-[5px]">
                    <span className="items-center flex break-keep px-[3px]">
                      <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-6.svg" alt="Icon" className="h-[18px] w-[18px] break-keep" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative bg-neutral-100 gap-x-3 flex flex-col shrink-0 gap-y-3 break-keep border border-neutral-200 overflow-hidden pt-1 pb-3 rounded-[13px] border-solid bottom-0">
            {/* Attachments preview */}
            {attachments.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2">
                {attachments.map((attachment) => (
                  <div key={attachment.id} className="flex items-center gap-2 bg-gray-100 rounded px-2 py-1 text-sm">
                    <span>{attachment.name}</span>
                    <button
                      type="button"
                      onClick={() => removeAttachment(attachment.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label={`Remove ${attachment.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            <div className="bg-neutral-100 flex basis-0 flex-col grow break-keep">
              <textarea 
                placeholder={placeholder}
                className="text-neutral-600 text-[13px] bg-neutral-100 flex grow h-[61px] min-h-16 overflow-y-hidden break-keep px-4 py-3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={disabled || isSubmitting}
                rows={3}
              />
            </div>
            <div className="items-center flex justify-between break-keep px-3">
              <div className="items-center gap-x-2 flex gap-y-2 break-keep">
                <input 
                  ref={fileInputRef}
                  type="file" 
                  className="items-baseline bg-transparent hidden text-ellipsis text-nowrap break-keep p-0" 
                  onChange={handleFileSelect}
                  accept={supportedFileTypes.join(',')}
                  style={{ display: 'none' }}
                />
                <button 
                  aria-label="Attach image" 
                  type="button" 
                  className="text-black items-center bg-transparent grid h-6 justify-items-center min-w-6 outline-transparent -outline-offset-1 outline outline-1 w-6 break-keep p-0 rounded-[5px]"
                  onClick={handleAttachClick}
                  disabled={disabled || isSubmitting}
                >
                  <span className="items-center flex fill-black/30 h-6 justify-center min-w-6 w-6 break-keep rounded-[5px]">
                    <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-7.svg" alt="Icon" className="h-6 w-6 break-keep" />
                  </span>
                </button>
                <div className="break-keep">
                  <button 
                    aria-label="Select a library" 
                    type="button" 
                    className="text-black items-center bg-transparent grid h-6 justify-items-center min-w-6 outline-transparent -outline-offset-1 outline outline-1 w-6 break-keep p-0 rounded-[5px]"
                    disabled={disabled || isSubmitting}
                  >
                    <span className="items-center flex fill-black/30 h-6 justify-center min-w-6 w-6 break-keep rounded-[5px]">
                      <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-8.svg" alt="Icon" className="h-6 w-6 break-keep" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="items-center gap-x-2 flex gap-y-2 break-keep">
                <div className="shrink-0 break-keep">
                  <div className="items-center flex justify-center break-keep">
                    <button 
                      aria-label="Send" 
                      type="submit" 
                      className="text-stone-950/30 items-center bg-zinc-300 flex shrink-0 h-[25px] justify-start text-center w-[25px] break-keep p-[0.5px] rounded-[100px]"
                      disabled={disabled || isSubmitting || (!message.trim() && attachments.length === 0)}
                    >
                      <div className="relative items-center flex h-6 justify-center w-6 break-keep">
                        <div className="break-keep">
                          <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-9.svg" alt="Icon" className="shrink-0 h-6 w-6 break-keep" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export interface ChatAttachment {
  id: string;
  name: string;
  type: 'image' | 'file';
  url: string;
  size: number;
}

export interface ChatMessage {
  id: string;
  content: string;
  timestamp: Date;
  type: 'user' | 'ai';
  attachments?: ChatAttachment[];
}

export interface ChatInputProps {
  onMessageSend?: (message: string, attachments: ChatAttachment[]) => Promise<void> | void;
  onFileAttach?: (file: File) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const supportedFileTypes = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/gif',
  'image/webp',
  'application/pdf',
  'text/plain',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
];

export const maxFileSize = 10 * 1024 * 1024; // 10MB

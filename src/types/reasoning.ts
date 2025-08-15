export interface ContentItem {
  type: 'text' | 'bold' | 'br';
  text?: string;
}

export interface Paragraph {
  className: string;
  content: ContentItem[];
}

export interface ListItem {
  value: number;
  className: string;
  content: ContentItem[];
}

export interface List {
  className: string;
  items: ListItem[];
}

export interface ReasoningData {
  id: string;
  version: string;
  ariaLabel: string;
  initialContent: Paragraph[];
  list?: List;
  additionalContent?: Paragraph[];
  implementationContent: Paragraph[];
  implementationList?: List;
  finalContent?: Paragraph[];
  cancellation?: string;
}

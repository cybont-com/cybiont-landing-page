import React from 'react';
import { ReasoningData } from '../types/reasoning';

interface ReasoningSectionProps {
  reasoning: ReasoningData;
  isLatest?: boolean;
}

export function ReasoningSection({ reasoning, isLatest = false }: ReasoningSectionProps) {
  return (
    <div role="region" aria-label={reasoning.ariaLabel} className="break-keep">
      <div className="text-[13px] font-[450] gap-x-4 flex flex-col tracking-[0.065px] leading-5 gap-y-4 break-keep">
        <div className="flex flex-col break-keep">
          <button aria-label="Show reasoning" type="button" className="text-black/50 items-center bg-transparent flex justify-items-center text-left w-full break-keep p-0">
            Reasoning
            <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-3.svg" alt="Icon" className="h-6 w-6 break-keep" />
          </button>
          <div className="break-keep overflow-hidden"></div>
        </div>
        
        <div className="break-keep">
          <div className="break-keep">
            <div className="grow">
              {reasoning.initialContent.map((paragraph, index) => (
                <p key={index} className={paragraph.className}>
                  {paragraph.content.map((item, itemIndex) => (
                    <span key={itemIndex}>
                      {item.type === 'text' && <span>{item.text}</span>}
                      {item.type === 'bold' && <strong className="font-bold">{item.text}</strong>}
                      {item.type === 'br' && <br />}
                    </span>
                  ))}
                </p>
              ))}
              
              {reasoning.list && (
                <ol className={reasoning.list.className}>
                  {reasoning.list.items.map((item, index) => (
                    <li key={index} value={item.value} className={item.className}>
                      {item.content.map((contentItem, contentIndex) => (
                        <span key={contentIndex}>
                          {contentItem.type === 'text' && <span>{contentItem.text}</span>}
                          {contentItem.type === 'bold' && <strong className="font-bold">{contentItem.text}</strong>}
                        </span>
                      ))}
                    </li>
                  ))}
                </ol>
              )}
              
              {reasoning.additionalContent?.map((paragraph, index) => (
                <p key={index} className={paragraph.className}>
                  {paragraph.content.map((item, itemIndex) => (
                    <span key={itemIndex}>
                      {item.type === 'text' && <span>{item.text}</span>}
                      {item.type === 'bold' && <strong className="font-bold">{item.text}</strong>}
                      {item.type === 'br' && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-black/50 flex leading-6 break-keep border border-neutral-200 px-3 py-2 rounded-[13px] border-solid">
          <div className="flex flex-col w-full break-keep">
            <div className="items-center flex justify-between w-full break-keep">
              <div title="" className="flex basis-[0%] grow text-ellipsis text-nowrap break-keep overflow-hidden">{reasoning.version}</div>
              <div className="items-center flex shrink-0 break-keep ml-2">
                {isLatest && <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-5.svg" alt="Icon" className="h-6 w-6 break-keep" />}
              </div>
            </div>
          </div>
        </div>
        
        <div className="break-keep">
          <div className="break-keep">
            <div className="grow">
              {reasoning.implementationContent.map((paragraph, index) => (
                <p key={index} className={paragraph.className}>
                  {paragraph.content.map((item, itemIndex) => (
                    <span key={itemIndex}>
                      {item.type === 'text' && <span>{item.text}</span>}
                      {item.type === 'bold' && <strong className="font-bold">{item.text}</strong>}
                      {item.type === 'br' && <br />}
                    </span>
                  ))}
                </p>
              ))}
              
              {reasoning.implementationList && (
                <ol className={reasoning.implementationList.className}>
                  {reasoning.implementationList.items.map((item, index) => (
                    <li key={index} value={item.value} className={item.className}>
                      {item.content.map((contentItem, contentIndex) => (
                        <span key={contentIndex}>
                          {contentItem.type === 'text' && <span>{contentItem.text}</span>}
                          {contentItem.type === 'bold' && <strong className="font-bold">{contentItem.text}</strong>}
                        </span>
                      ))}
                    </li>
                  ))}
                </ol>
              )}
              
              {reasoning.finalContent?.map((paragraph, index) => (
                <p key={index} className={paragraph.className}>
                  {paragraph.content.map((item, itemIndex) => (
                    <span key={itemIndex}>
                      {item.type === 'text' && <span>{item.text}</span>}
                      {item.type === 'bold' && <strong className="font-bold">{item.text}</strong>}
                      {item.type === 'br' && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        {reasoning.cancellation && (
          <div className="items-start gap-x-1 flex flex-col gap-y-1 break-keep border border-neutral-200 rounded-[13px] border-solid">
            <div className="self-stretch flex flex-col break-keep">
              <div className="self-stretch flex break-keep pl-2 pr-4 py-2">
                <div className="items-center gap-x-2 flex gap-y-2 break-keep">
                  <div className="items-center flex h-6 justify-center w-6 break-keep">
                    <span className="block break-keep">
                      <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-4.svg" alt="Icon" className="h-3.5 w-3.5 break-keep" />
                    </span>
                  </div>
                  <p className="font-[550] tracking-[-0.032px] leading-[22px] break-keep font-inter">{reasoning.cancellation}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

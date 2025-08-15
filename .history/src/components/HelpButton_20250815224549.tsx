import React from 'react';

export function HelpButton() {
  return (
    <div className="contents">
      <div className="contents">
        <div role="contentinfo" className="contents">
          <div className="fixed items-end gap-x-2 flex gap-y-2 z-[8] right-3 bottom-3">
            <div className="items-end gap-x-3 flex-col justify-center gap-y-3">
              <section className="text-white items-center bg-stone-900 flex fill-white h-8 w-8 rounded-[32px]">
                <span role="button" aria-label="Help" className="items-center flex fill-white h-8 justify-center w-8 border rounded-[100%] border-solid border-transparent">
                  <img src="https://c.animaapp.com/med4n8puZPF82F/assets/icon-16.svg" alt="Icon" className="h-3.5 w-2" />
                </span>
                <div className="fill-white"></div>
                <div className="absolute bg-stone-900 shadow-[rgba(0,0,0,0.15)_0px_0px_1px_0px,rgba(0,0,0,0.13)_0px_5px_12px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px] hidden fill-white tracking-[0.005px] w-max z-[14] px-3 py-2.5 rounded-[5px] right-0 bottom-11 after:accent-auto after:border-t-stone-900 after:text-white after:block after:fill-white after:text-[11px] after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[0.005px] after:leading-4 after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:top-[calc(100%_-_1px)] after:visible after:w-0 after:border-b-transparent after:border-x-transparent after:border-separate after:border-[6px] after:border-solid after:right-[9.5px] after:font-inter">
                  <i18n-text className="contents fill-white">Help and resources</i18n-text>
                </div>
                <div className="fill-white"></div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

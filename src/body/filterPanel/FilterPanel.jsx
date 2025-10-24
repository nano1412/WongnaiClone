import React, { useState } from "react";

import FilterOptionJSON from '@/mockData/filterOption.json'

const SingleChoice = ({ data }) => {
    const displayOptions = data.maxDisplayOption === -1 ? data.options : data.options.slice(0, data.maxDisplayOption);
    const hiddenCount = data.maxDisplayOption === -1 ? 0 : Math.max(0, data.options.length - data.maxDisplayOption);

    return (
        <>
            {data.title != "" && <div className="OptionTitle">{data.title}</div>}
            <div>
                {displayOptions.map((opt) => (
                    <label className="optionSelection" key={opt}>
                        <div className="optionSelectBox">
                            <input
                                key={opt}
                                type="checkbox"
                                checked={data.selected === opt}
                                onChange={() => data.onChange(data.selected === opt ? null : opt)}>
                            </input>
                            <svg height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className={`${data.selected === opt ? "SelectedOption" : "NotSelectedOption"}`}>
                                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"></circle>
                                <path fillRule="evenodd" clipRule="evenodd" d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <label className="optionText">
                            <div>{opt}</div>
                        </label>
                    </label >
                ))}
                {hiddenCount > 0 && (
                    <div className="MoreOption">
                        <span>ดูเพิ่มเติม ({hiddenCount} ประเภท)</span>
                    </div>
                )}
            </div>
        </>
    );
};

const MultiChoice = ({ data }) => {
    const selected = data.selected || [];

    const displayOptions = data.maxDisplayOption === -1 ? data.options : data.options.slice(0, data.maxDisplayOption);
    const hiddenCount = data.maxDisplayOption === -1 ? 0 : Math.max(0, data.options.length - data.maxDisplayOption);

    const toggle = (opt) => {
        if (data.selected.includes(opt)) {
            data.onChange(data.selected.filter((v) => v !== opt));
        } else {
            data.onChange([...selected, opt]);
        }
    };

    return (
        <>
            {data.title != "" && <div className="OptionTitle">{data.title}</div>}
            <div className="MultiChoiceContainer">
                {displayOptions.map((opt) => (
                    <label className="optionSelection" key={opt}>
                        <div className="optionSelectBox">
                            <input
                                key={opt}
                                type="checkbox"
                                checked={selected.includes(opt)}
                                onChange={() => toggle(opt)}>
                            </input>
                            <svg height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={selected.includes(opt) ? "SelectedOption" : "Hide"} fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.89543 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2Z" fill="currentColor"></path>
                                <path className={selected.includes(opt) ? "SelectedOption" : "NotSelectedOption"} fillRule="evenodd" clipRule="evenodd" d="M16.1797 5.76586L8.24862 13.6969C8.06138 13.8841 7.80276 14 7.51724 14C7.23172 14 6.9731 13.8841 6.78586 13.6969L2.3031 9.21414C2.11586 9.0269 2 8.76828 2 8.48276C2 7.91172 2.46345 7.44828 3.03448 7.44828C3.32 7.44828 3.57862 7.56414 3.76586 7.75138L7.51724 11.5028L14.7169 4.3031C14.9041 4.11586 15.1628 4 15.4483 4C16.0193 4 16.4828 4.46345 16.4828 5.03448C16.4828 5.32 16.3669 5.57862 16.1797 5.76586Z" fill="white"></path>

                                <path className={selected.includes(opt) ? "SelectedOption" : "Frame"} d="M2 1H16C16.5523 1 17 1.44772 17 2V16C17 16.5523 16.5523 17 16 17H2C1.44772 17 1 16.5523 1 16V2C1 1.44772 1.44772 1 2 1Z" stroke="currentColor" strokeWidth="2"></path>
                            </svg>

                        </div>

                        <label className="optionText">
                            <div>{opt}</div>
                        </label>

                    </label>

                ))}
            </div>

            {hiddenCount > 0 && (
                <div className="MoreOption">
                    <span>ดูเพิ่มเติม ({hiddenCount} ประเภท)</span>
                </div>
            )}
        </>
    );
};

const ForceChoice = ({ data }) => {


    const displayOptions = data.maxDisplayOption === -1 ? data.options : data.options.slice(0, data.maxDisplayOption);
    const hiddenCount = data.maxDisplayOption === -1 ? 0 : Math.max(0, data.options.length - data.maxDisplayOption);

    return (
        <>
            {data.title != "" && <div className="OptionTitle">{data.title}</div>}
            <div>
                {displayOptions.map((opt) => (
                    <label className="optionSelection" key={opt}>
                        <div className="optionSelectBox">
                            <input
                                key={opt}
                                type="checkbox"
                                checked={data.selected === opt}
                                onChange={() => data.onChange(opt)}>
                            </input>
                            <svg height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className={`${data.selected === opt ? "SelectedOption" : "NotSelectedOption"}`}>
                                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"></circle>
                                <path fillRule="evenodd" clipRule="evenodd" d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <label className="optionText">
                            <div>{opt}</div>
                        </label>
                    </label >
                ))}
                {hiddenCount > 0 && (
                    <div className="MoreOption">
                        <span>ดูเพิ่มเติม ({hiddenCount} ประเภท)</span>
                    </div>
                )}
            </div>
        </>
    );
};

const TextFill = ({ data }) => {

    return (
        <>
            <div className="mb-4">
                <h3 className="font-semibold">{data.title}</h3>
                <input
                    type="text"
                    defaultValue={data.selected}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            data.onChange(e.target.value);
                        }
                    }}
                    placeholder={data.placeholderText}
                    className="border rounded-lg px-3 py-1 w-full mt-2"
                />
            </div>
        </>
    );
}

const CreateChoice = (f, selected, onChange) => {
    const commonProps = {
        title: f.title || "",
        keyName: f.key,
        options: f.options || [],
        maxDisplayOption: f.maxDisplayOption,
        link: f.link,
        selected,
        onChange: (val) => onChange(f.key, val),

        maxDisplayOption: f.maxDisplayOption,
        placeholderText: f.placeholderText || ""
    };


    switch (f.type) {
        case "single":
            return (
                <SingleChoice
                    data={commonProps}
                />
            );
        case "multi":
            return (
                <MultiChoice
                    data={commonProps}
                />
            );
        case "force":
            return (
                <ForceChoice
                    data={commonProps}
                />
            );
        case "text":
            return (
                <TextFill
                    data={commonProps}
                />
            );
        default:
            return null;
    }
};

export default function FilterPanel() {

    const [selections, setSelections] = useState({ "catagory": "ร้านอาหาร" });

    const handleChange = (key, value) => {
        setSelections((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className="FilterContainer">
            {FilterOptionJSON.map((f) => (
                <div key={f.key}>
                    {CreateChoice(f, selections[f.key], handleChange)}
                </div>
            ))}

            <div className="mt-6 p-4 border rounded bg-gray-50">
                <h3 className="font-semibold mb-2">Current Selections:</h3>
                <pre className="text-sm">{JSON.stringify(selections, null, 2)}</pre>
            </div>
        </div>
    );
}

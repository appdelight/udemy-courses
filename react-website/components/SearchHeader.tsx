import React from 'react'


interface HeaderProps  {
    onChange: (value:string) => void;
    value: string;
    className?: string;
    width?: string;
    placeholder?: string;
}

const SearchHeader = (props: HeaderProps): JSX.Element => {
    return (
        <React.Fragment>
            <div className="header_cont d-flex justify-content-between p-2">
                <input 
                    onChange={(e)=>props.onChange(e.target.value)}
                    value={props.value}
                    className={props.className || "search_input"}
                    width={props.width || "100%"}
                    placeholder={props.placeholder || "Search"}
                    type="text" />
            </div>
            <style>{`
                
                .search_input{
                    width: -webkit-fill-available;
                    height: 69%;
                    background: #232323bd;
                    color: white;
                    padding: 10px;
                    font-size: 16px;
                    border-radius: 12px;
                    border: none !important;
                }
                .search_input:focus-visible{
                    border: none !important;
                    outline: none !important;
                }
            `}</style>
        </React.Fragment>
    )
}

export default SearchHeader

import React from "react";
import breadcrumbItems from '@/mockData/breadcrumbs.json';

const BreadcrumbText = (props) => {
    return (
        <>
            <ol className="BreadcrumbListContainer">
                <div className="BreadcrumbList">
                {props.items.map((item, index) => {
                    const isLast = index === props.items.length - 1;

                    return (
                        <React.Fragment key={item.label}>

                            {isLast ? (
                                <li className="listEntry ">
                                    <span>{item.label}</span>
                                </li>
                            ) : (
                                <li className="listEntry ">
                                    <a href={item.link}>
                                        <span className="textUnderlineHover">{item.label}</span>
                                    </a>
                                    <div className="slash">
                                        <pre> / </pre>
                                    </div>
                                </li>
                            )}

                        </React.Fragment>
                    );
                })}
            </div>
        </ol >
        </>
    )
}

function Breadcrumb() {
    return (
        <>
            <div className="BreadcrumbBG">
                <div className="BreadcrumbContainer">
                    <BreadcrumbText items={breadcrumbItems} />
                    <h1 className="Title">ร้านอาหาร ยอดนิยม</h1>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
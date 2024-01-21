import classNames from "classnames";

function Popup({className: forwardedClass, children}){
    const popupClass = classNames('absolute bubble-menu h-fit w-max p-2', forwardedClass);

    return (
        <div className={popupClass}>
            {children}
        </div>
    )
}

export default Popup
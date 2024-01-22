import classNames from "classnames";

function Popup({className: forwardedClass, children, ...restProps}){
    const popupClass = classNames('absolute bubble-menu h-fit w-max p-2', forwardedClass);

    return (
        <div className={popupClass} {...restProps}>
            {children}
        </div>
    )
}

export default Popup
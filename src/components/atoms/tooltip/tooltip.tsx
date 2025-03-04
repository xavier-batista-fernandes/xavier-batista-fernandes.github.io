import './tooltip.css';
import { Children, FC, isValidElement, ReactNode } from 'react';
import { TooltipProps } from './tooltip.props.ts';

export const Tooltip: FC<TooltipProps> = ({ children }) => {
    const [anchor, popover] = getTooltipElements(children);

    return (
        <div className="container">
            {anchor}
            {popover}
        </div>
    );
};

const getTooltipElements = (children: ReactNode) => {
    const childrenArray = Children.toArray(children);

    // Fetch and validate the ANCHOR element
    const anchor = childrenArray.find(
        (element) =>
            isValidElement(element) && element.props['data-tooltip-anchor'],
    );
    const anchorErrorText =
        '\n[Tooltip Component]:' +
        '\nComponent requires an ANCHOR child element.' +
        '\nThis element must have the "data-tooltip-anchor" property.';
    if (!anchor) throw new Error('\n' + anchorErrorText + '\n');

    // Fetch and validate the POPOVER element
    const popover = childrenArray.find(
        (element) =>
            isValidElement(element) && element.props['data-tooltip-popover'],
    );
    const popoverErrorText =
        '\n[Tooltip Component]: ' +
        '\nComponent requires a POPOVER child element. ' +
        '\nThis element must have the "data-tooltip-popover" property.';
    if (!popover) throw new Error('\n' + popoverErrorText + '\n');

    return [anchor, popover];
};

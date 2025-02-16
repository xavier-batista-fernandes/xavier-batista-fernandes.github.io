import { Children, FC, isValidElement, ReactNode } from 'react';
import { TooltipProps } from './tooltip.props.ts';

export const Tooltip: FC<TooltipProps> = ({ children }) => {
    const [anchor, popover] = getTooltipElements(children);
    validateTooltipElements(anchor, popover);

    return (
        <div id="tooltip-container">
            <div id="anchor">{anchor}</div>
            <div id="popover">{popover}</div>
        </div>
    );
};

const getTooltipElements = (children: ReactNode) => {
    const childrenArray = Children.toArray(children);

    const anchor = childrenArray.find(
        (element) =>
            isValidElement(element) && element.props['data-tooltip-anchor'],
    );

    const popover = childrenArray.find(
        (element) =>
            isValidElement(element) && element.props['data-tooltip-popover'],
    );

    return [anchor, popover];
};

const validateTooltipElements = (anchor: ReactNode, popover: ReactNode) => {
    const anchorErrorText =
        '\n[Tooltip Component]:' +
        '\nComponent requires an ANCHOR child element.' +
        '\nThis element must have the "data-tooltip-anchor" property.';
    if (!anchor) throw new Error('\n' + anchorErrorText + '\n');

    const popoverErrorText =
        '\n[Tooltip Component]: ' +
        '\nComponent requires a POPOVER child element. ' +
        '\nThis element must have the "data-tooltip-popover" property.';
    if (!popover) throw new Error('\n' + popoverErrorText + '\n');
};

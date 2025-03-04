import './extended-tooltip.css';
import { ExtendedTooltipProps } from './extended-tooltip.props.ts';
import { Children, FC, isValidElement, ReactElement, ReactNode } from 'react';

export const ExtendedTooltip: FC<ExtendedTooltipProps> = ({ children }) => {
    const [content, popover] = getTooltipElements(children);

    return (
        <div className="container">
            <div>{content}</div>
            <div>{popover}</div>
        </div>
    );
};

const getTooltipElements = (children: ReactNode) => {
    const childrenArray = Children.toArray(children);

    // Fetch the CONTENT element
    const content: ReactElement<Record<string, any>> = childrenArray.find(
        (element) => isValidElement(element) && element.props['data-content'],
    ) as ReactElement<any, any>;
    const contentErrorText =
        '\n[Extended Tooltip Component]:' +
        '\nComponent requires an CONTENT child element.' +
        '\nThis element must have the "data-content" property.';
    if (!content) throw new Error('\n' + contentErrorText + '\n');

    // Check that CONTENT element has an ANCHOR element
    const anchor = Children.toArray(content.props['children']).find(
        (element) => isValidElement(element) && element.props['data-anchor'],
    );
    const anchorErrorText =
        '\n[Extended Tooltip Component]:' +
        '\nComponent requires the CONTENT child element to have an ANCHOR child element.' +
        '\nThis element must have the "data-anchor" property.';
    if (!anchor) throw new Error('\n' + anchorErrorText + '\n');

    // Fetch the POPOVER element
    const popover = childrenArray.find(
        (element) => isValidElement(element) && element.props['data-popover'],
    );
    const popoverErrorText =
        '\n[Extended Tooltip Component]:' +
        '\nComponent requires an POPOVER child element.' +
        '\nThis element must have the "data-popover" property.';
    if (!popover) throw new Error('\n' + popoverErrorText + '\n');

    return [content, popover];
};

import './hero-title.css';
import { Tooltip } from '../../atoms/tooltip/tooltip.tsx';
import { Text } from '../../atoms/text/text.tsx';
import { InfoIcon } from '../../atoms/icons/info-icon.tsx';
import { useState } from 'react';

export const HeroTitle = () => {
    const tooltipPopoverTexts = [
        'An organism that turns coffee into code.',
        'A highly skilled individual who transforms caffeine into functional software.',
        'A mysterious lifeform that survives on coffee and converts it into code, bugs and last-minute fixes.',
        'A creature that turns caffeine into code, panic into hotfixes and weekends into debugging sessions.',
    ];
    const [index, setIndex] = useState(Math.floor(Math.random() * 4));

    const onTooltipMouseEnter = () => {
        setIndex((prev) => (prev + 1) % tooltipPopoverTexts.length);
    };

    return (
        <div>
            <Text
                color={'black'}
                fontWeight={'bold'}
                textAlign={'center'}
                fontSize={'2.5rem'}
                margin={'0 5%'}
            >
                Hey, I'm Xavier!
            </Text>

            <Text
                color={'black'}
                fontWeight={'bold'}
                textAlign={'center'}
                fontSize={'2.5rem'}
                display={'inline'}
            >
                I'm a Software Engineer
            </Text>
            <Tooltip>
                <span
                    data-tooltip-anchor
                    onMouseEnter={() => onTooltipMouseEnter()}
                >
                    <InfoIcon width="2em" color="#222222" />
                </span>
                <div data-tooltip-popover className="popover">
                    <Text fontWeight={'bold'} fontSize={'1.5rem'}>
                        Software Engineer
                    </Text>
                    <Text
                        padding={'0 5px 0 0'}
                        fontSize={'1.15rem'}
                        fontWeight={'normal'}
                        margin={'5px 0 10px 0'}
                    >
                        [sawft-wair en-juh-neer] noun.
                    </Text>
                    <Text
                        fontSize={'1rem'}
                        fontStyle={'italic'}
                        fontWeight={'lighter'}
                    >
                        {tooltipPopoverTexts[index]}
                    </Text>
                </div>
            </Tooltip>
        </div>
    );
};

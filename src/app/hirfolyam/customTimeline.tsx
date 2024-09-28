"use client";
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineTime, TimelineTitle, TimelineContent, TimelineDescription, TimelineIcon } from '@/components/ui/timeline';
import React, { useState, useEffect } from 'react';

const CustomTimeline = ({ items, className }: { items: { title: string, date: string, description: string }[], className?: string }) => {

    const [sortedItems, setSortedItems] = useState(items.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));

    const CustomTimelineConnector = () => <TimelineConnector className='bg-[#c7c7c7]' />

    const CustomTimelineTime = ({ date }: { date: string }) => <TimelineTime className='text-gray-custom font-light tracking-wider'>{date}</TimelineTime>

    return (
        <Timeline className={className}>
            {sortedItems.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineHeader>
                        {index === 0 ? (
                            <>
                                <TimelineIcon className='bg-gray-custom' />
                                <CustomTimelineConnector />
                                <CustomTimelineTime date={item.date} />
                                <TimelineTitle className='text-xl font-bold'>{item.title.toUpperCase()}</TimelineTitle>
                            </>
                        ) : items[index - 1].date === item.date ? (
                            <><CustomTimelineConnector />
                                <TimelineTitle className='text-xl font-bold'>
                                    {item.title.toUpperCase()}
                                </TimelineTitle>
                            </>
                        ) : (
                            <>
                                <TimelineIcon className='bg-gray-custom' />
                                <CustomTimelineConnector />
                                <CustomTimelineTime date={item.date} />
                                <TimelineTitle className='text-xl font-bold mt-20'>{item.title.toUpperCase()}</TimelineTitle>
                            </>
                        )}
                    </TimelineHeader>
                    <TimelineContent>
                        <TimelineDescription className="break-words text-xl tracking-tight">{item.description}</TimelineDescription>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
};

export default CustomTimeline;

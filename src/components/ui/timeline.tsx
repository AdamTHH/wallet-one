import * as React from "react";
import { cn } from "@/lib/utils";

const Timeline = React.forwardRef<
	HTMLOListElement,
	React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
	<ol ref={ref} className={cn("flex flex-col", className)} {...props} />
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
	HTMLLIElement,
	React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
	<li
		ref={ref}
		className={cn("relative flex flex-col px-6 pt-0", className)}
		{...props}
	/>
));
TimelineItem.displayName = "TimelineItem";

const TimelineTime = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn(
			"absolute translate-x-10 text-3xl lg:-translate-x-[110%] pb-20 lg:text-[2.5vw]",
			className,
		)}
		{...props}
	/>
));
TimelineTime.displayName = "TimelineTime";

const TimelineConnector = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"absolute top-0 bottom-0 -translate-x-1/2 z-[1] w-[2px] lg:w-[0.1vw]",
			className,
		)}
		{...props}
	/>
));
TimelineConnector.displayName = "TimelineConnector";

const TimelineHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-center gap-4", className)}
		{...props}
	/>
));
TimelineHeader.displayName = "TimelineHeader";

const TimelineTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn(
			"pl-10 pt-10",
			className,
		)}
		{...props}>
		{children}
	</h3>
));
TimelineTitle.displayName = "CardTitle";

const TimelineIcon = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("absolute -translate-x-1/2 -translate-y-10 size-3 z-[2] rounded-full", className)}
		{...props}
	/>
));
TimelineIcon.displayName = "TimelineIcon";

const TimelineDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn("text-lg text-muted-foreground max-w-md p-5", className)}
		{...props}
	/>
));
TimelineDescription.displayName = "TimelineDescription";

const TimelineContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col items-start p-6 pt-0", className)}
		{...props}
	/>
));
TimelineContent.displayName = "TimelineContent";

export {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineTitle,
	TimelineIcon,
	TimelineDescription,
	TimelineContent,
	TimelineTime,
};

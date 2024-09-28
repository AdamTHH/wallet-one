export const dynamic = 'force-dynamic'

import { Timeline, TimelineConnector, TimelineContent, TimelineDescription, TimelineHeader, TimelineItem, TimelineTime, TimelineTitle } from "@/components/ui/timeline";
import { db } from "@/db";
import { newsTable, productsTable } from "@/db/schema";
import CustomTimeline from "./customTimeline";
import { defaultNews, defaultProducts } from "@/constants";
import PageContainer from "@/components/PageContainer";
import ColorfulLabel from "@/components/ColorfulLabel";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Hirfolyam() {
    const products = await db.select().from(productsTable);
    const news = await db.select().from(newsTable);

    return (
        <PageContainer className="lg:w-full">
            <div className="w-full mb-10 mx-auto gap-4 grid grid-cols-1 lg:w-11/12 lg:grid-cols-3 lg:pt-16">
                <h1 className="text-5xl font-light m-5 lg:m-0 tracking-wider text-gray-custom col-span-1">
                    Hírfolyam
                </h1>
                <div className="col-span-1">
                    <ColorfulLabel className="text-xl ml-4 lg:ml-16 px-4 py-1">
                        Tartalmi változások
                    </ColorfulLabel>
                    <CustomTimeline className="lg:mx-auto mt-16 lg:mt-0 lg:w-[30vw]" items={products.length > 0 ? products : defaultProducts} />
                </div>
                <div className="col-span-1 gap-4 mt-5 lg:mt-0">
                    <ColorfulLabel className="text-xl ml-4 px-4 py-1">
                        Egyéb új információk
                    </ColorfulLabel>
                    <div className="mt-4"></div>
                    {(news.length > 0 ? news : defaultNews).map((item, index) => (
                        <Button key={index} variant="link" className="text-xl break-words">
                            {item.title}
                        </Button>
                    ))}
                </div>
            </div>
        </PageContainer>
    );
}

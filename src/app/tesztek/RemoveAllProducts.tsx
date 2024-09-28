'use client';

import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";

export function RemoveAllproducts({ onSubmit }: { onSubmit: (formData: FormData) => Promise<void> }) {
    const { toast } = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [imgUrl, setImgUrl] = useState("null");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            await onSubmit(formData);
            toast({
                title: "Termékek sikeresen törölve",
                variant: "success",
            });
            setIsOpen(false);
        } catch (error) {
            toast({
                title: "Hiba a termékek törlésekor",
                variant: "destructive",
            });
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex justify-center items-center h-full">
                <DialogTrigger asChild>
                    <Button variant={"destructive"} className="h-[10vh] w-full text-xl lg:text-3xl lg:w-1/3 mx-auto rounded-xl">Termékek törlése</Button>
                </DialogTrigger>
            </div>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Termékek törlése</DialogTitle>
                    <DialogDescription>
                        Ha nincsenek termékek feltöltve, az alap sablon termékek fognak megjelenni
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <DialogFooter>
                        <Button variant={"destructive"} type="submit">Termékek törlése</Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    );
}
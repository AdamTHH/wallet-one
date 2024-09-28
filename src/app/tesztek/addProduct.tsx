'use client';
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";

export function AddProduct({ onSubmit }: { onSubmit: (formData: FormData) => Promise<void> }) {
    const { toast } = useToast();
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (e: any) => {
        const imageSrcTest = document.getElementById('image-src-test') as HTMLImageElement;
        const image = document.getElementById('image') as HTMLInputElement;
        imageSrcTest.src = image.value
        console.log("imageSrcTest.src: " + imageSrcTest.src)

        e.preventDefault();
        const formData = new FormData(e.target);
        try {

            await onSubmit(formData);
            toast({
                title: "Termék sikeresen hozzáadva",
                variant: "success",
                description: formData.get("title") + " hozzáadva az adatbázishoz.",
            });
            setIsOpen(false);
        } catch (error) {
            toast({
                title: "Hiba a termék hozzáadásakor",
                description: "Hiba történt a termék hozzáadása során. Kérjük, próbálja újra.",
                variant: "destructive",
            });
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <img src="data:image/jpeg;base64,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" id="image-src-test" className="hidden" />

            <div className="flex justify-center items-center h-full">
                <DialogTrigger asChild>
                    <Button className="h-[10vh] w-full lg:w-1/3 mx-auto bg-slate-300 text-xl lg:text-3xl rounded-xl">Új termék</Button>
                </DialogTrigger>
            </div>
            <DialogContent className="w-full">

                <DialogHeader>
                    <DialogTitle>Új termék</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>

                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Termék neve
                            </Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Adja meg a termék címét"
                                className="col-span-3"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Leírás
                            </Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Adja meg a termék leírását"
                                className="col-span-3"
                                rows={4}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">
                                Dátum
                            </Label>
                            <Input
                                id="date"
                                name="date"
                                type="date"
                                className="col-span-3"
                                required
                            />
                        </div>
                        <span>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="image" className="text-right">
                                    Kép
                                </Label>

                                <Input
                                    id="image"
                                    name="image"
                                    placeholder="URL vagy base64"
                                    className="col-span-2"
                                />

                                <Label htmlFor="imageUpload"><FaUpload className="cursor-pointer" /></Label>
                                <Input
                                    id="imageUpload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(event: any) => {
                                        const file = event.target.files[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onload = (e) => {
                                                const base64 = e.target?.result as string;
                                                const image = document.getElementById('image') as HTMLInputElement;
                                                if (image) {
                                                    image.value = base64;
                                                }
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />

                            </div>
                        </span>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Termék hozzáadása</Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    );
}
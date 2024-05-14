import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

interface Details {
    title: string,
    description: string
}

export function ModalBox({details} : {details: Details}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    className='flex gap-1 items-center bg-[var(--primary2)] px-8 py-4 text-black font-semibold rounded-full -mb-9 mt-3 ms-7 transition-all duration-300 ease-in shadow-lg shadow-gray-800'
                >
                    <ArrowRight className='w-0 group-hover:w-7 transition-all duration-200 ease-in' />
                    <span className=''>See Details</span>

                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] bg-gray-800 text-white p-10 rounded-xl">
                <DialogHeader>
                    <DialogTitle>{ details.title }</DialogTitle>
                </DialogHeader>
                <Separator className="bg-slate-400" />
                <div className="">
                    <div className="">
                        <p>{ details.description }</p>
                    </div>
                </div>
                <DialogFooter>
                    {/* <Button type="submit">Close</Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

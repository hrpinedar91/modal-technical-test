"use client";

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTrigger,
    AlertDialogCancel
} from "@/components/ui/alert-dialog"
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

const Modal = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <span className="bg-black text-white rounded-full px-8 tracking-wider">Abrir modal</span>
            </AlertDialogTrigger>
            <AlertDialogContent>
                    <AlertDialogCancel className="bg-[#D9D9D9] w-[28px] h-[28px] flex p-2 place-content-center rounded-full absolute top-4 right-8 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </AlertDialogCancel>
                <ScrollArea className="w-full p-8 h-full max-h-[80vh] relative">
                    <Image src="/TRANSPARENTE-CON-SOMBRA-800w1.png" alt="scooter" width={393} height={251} className="w-9/12 mx-auto md:w-fit md:mx-12" />
                    <h1 className="text-3xl text-center font-extrabold leading-10 tracking-wide" style={{ textWrap: "balance" }}>¡Gana un scooter eléctrico Minca 800W GRATIS!</h1>
                    <form className="mt-4 mx-12">
                        <div className="flex flex-col space-y-4">
                            <input type="email" id="email" name="email" placeholder="Correo electrónico" className="h-14 border border-[#6A7883] rounded-md p-2 pl-5" />
                            <input type="tel" id="phone" name="phone" placeholder="Número de teléfono" className="h-14 border border-[#6A7883] rounded-md p-2 pl-5" />
                        </div>
                        <div className="flex self-center gap-2 mt-4">
                            <Checkbox />
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            > Al suscribirte, aceptas la Política de privacidad y los Términos de uso.
                            </label>

                        </div>
                        <Button type="submit" className="w-full bg-black text-white mt-8 rounded-full p-2 tracking-wider">Suscribir</Button>
                        <p className="text-center mt-8" style={{ textWrap: "balance" }} >Cuando se registra para recibir actualizaciones por correo electrónico, tiene la oportunidad de ganar un scooter eléctricoMinca 800W gratis por un valor de $3.990.000</p>
                    </form>
                </ScrollArea>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default Modal
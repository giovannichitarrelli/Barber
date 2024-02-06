

// import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
// import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
// import Image from "next/image";

interface BarbershopDetailsPage {
    params: {
        id?: string;
    }
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPage) => {

    if (!params.id) {
        // TODO: redirecionar hpme page
        return null
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
    });

    if (!barbershop) {
        // TODO: redirecionar hpme page
        return null
    }

    return <BarbershopInfo barbershop={barbershop} />;
}

export default BarbershopDetailsPage;
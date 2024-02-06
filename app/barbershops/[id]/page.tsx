

// import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
// import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
// import Image from "next/image";

interface BarbershopDetailsPage {
    params: {
        id?: string;
    };
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPage) => {

    if (!params.id) {
        // TODO: redirecionar hpme page
        return null;
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true,
        }
    });

    if (!barbershop) {
        // TODO: redirecionar hpme page
        return null
    }

    return (

        <div>
            <BarbershopInfo barbershop={barbershop} />
            <div className="px-5 py-6 flex flex-col gap-4">
                {barbershop.services.map((service) => (
                    <ServiceItem key={service.id} service={service} />
                ))}

            </div>
        </div>
    )
}

export default BarbershopDetailsPage;
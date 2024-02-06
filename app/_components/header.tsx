"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";


const Header = () => {

    // const { data } = useSession();
    const handleLoginClick = async () => {
        await signIn();
    }

    return (
        <Card  >
            <CardContent className="p-5 justify-between items-center flex flex-row" >
                <Image src="/logo.png" alt="barber" height={22} width={120} />
                {/* <Button variant="outline" size="icon">
                    <MenuIcon size={18}/>
                </Button> */}

                <Button onClick={handleLoginClick}>Login</Button>
                {/* {data?.user ? <h1>{data.user.name}</h1> : <Button onClick={handleLoginClick}>Login</Button>} */}

            </CardContent>
        </Card>
    );
}

export default Header;
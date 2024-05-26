"use client";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";

export const Test = ({ initialCount, children }: { initialCount: number, children: React.ReactNode }) => {
	const [count, setCount] = useState(initialCount);



	return (
        <div className="flex flex-col space-y-16">
            <div> children : { children } </div>
            
            <Button radius="full" onPress={() => setCount(count + 1)}>
                Count is {count}
            </Button>
        </div>
	);
};

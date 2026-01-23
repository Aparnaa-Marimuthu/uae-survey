import { useEffect, useRef } from "react";
import { AppEmbed } from "@thoughtspot/visual-embed-sdk";

const FullApp = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const appEmbed = new AppEmbed(containerRef.current, {
                frameParams: {
                    width: "100%",
                    height: "100%",
                }
            });

            appEmbed.render();

            return () => {
                appEmbed.destroy();
            };
        }
    }, []);

    return (
        <div
            ref={containerRef}
            style={{ width: "100%", height: "100%" }}
        />
    );
};

export default FullApp;

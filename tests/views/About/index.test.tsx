import { cleanup, render, screen } from "@testing-library/react";
import About from "../../../src/views/About";

describe("<About />", () => {
    afterEach(() => {
        cleanup();
    });

    it("Component renders", async () => {
        render(<About />);

        await screen.findByText("Inc0gnit0Dev");
        await screen.findByText("Developer / Gamer");

        await screen.findByText("GitHub");
        await screen.findByText("Discord");
        await screen.findByText("Twitch");

        expect(document.title).toBe("Inc0gnit0Dev | About");
    });
});
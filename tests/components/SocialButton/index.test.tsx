import { cleanup, render, screen } from "@testing-library/react";
import SocialButton, { type SocialButtonIcon } from "../../../src/components/SocialButton";

describe("<SocialButton />", () => {
    afterEach(() => {
        cleanup();
    });

    it.each<[SocialButtonIcon]>([
        ["GitHub"],
        ["Discord"],
        ["Twitch"],
        ["Steam"],
        ["Battle.net"],
        ["Xbox"],
    ])("Component renders", async (
        icon: SocialButtonIcon
    ) => {
        const givenTo = "https://social.com/profile";
        const givenCopyOnClick = "copiedText";

        render(<SocialButton icon={icon} to={givenTo} openInNewTab={true} copyOnClick={givenCopyOnClick} />);

        await screen.findByText(icon);
    });
});
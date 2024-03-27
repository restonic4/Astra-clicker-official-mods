var ClassCollection = Game.Classes.Utility.ClassCollection; //Import.
var UnlockTrigger = Game.Classes.Triggers.Unlocks.UnlockTrigger; //Import.
var Reward = Game.Classes.Triggers.Rewards.Reward; //Import.

function start() {
    const bundle = Game.Main.BundleManager.createBundle(
        "example_simple_creature", //mod id
        "Example mod", //mod name
        "Example mod", //mod description
        "Rest-Studio", //mod authors
        "https://astra-clicker.rest-studio.com/astra_licence.html", //licence
        "https://astra-clicker.rest-studio.com", //website
        "We will release the source code soon!", //source code
        "Soon!", //issues
        "https://patreon.com/restonic4" //donations
    );

    const creatures = bundle.createRegistrar("creatures");

    const dna = creatures.register("restonic4",
        new Creature(
            "A weird furry",
            "https://yt3.googleusercontent.com/M4Dq9RX2EEIeOkzB2ovPZIijTFYCGsf9J_758NpTNPqOf0Iskhq4oHmHDBOQfCJFlCeZtB4bEg=s900-c-k-c0x00ffffff-no-rj",
            25,
            new ClassCollection(
                new UnlockTrigger("prosperity_reached", 0, true),
                new UnlockTrigger("prosperity_reached", 10),
                new UnlockTrigger("on_planet", "earth", true),
                new UnlockTrigger("on_planet", "earth")
            ),
            new ClassCollection(
                new Reward("auto_prosperity", 1),
                new Reward("advancement", "astra_clicker:advancements:dna")
            )
        )
    );
}

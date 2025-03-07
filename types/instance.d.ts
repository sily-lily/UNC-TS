/**
 * Activates a ClickDetector with `event` from `distance` studs away. When
 * absent, `distance` defaults to 0. `event` defaults to `"MouseClick"`.
 * @param detector The ClickDetector to activate.
 * @param distance The distance from the detector.
 * @param event The activation type.
 * @example
 * const clickDetector = game.GetService("Workspace").Part.ClickDetector;
 * fireclickdetector(clickDetector, 50, "MouseClick");
 */
declare function fireclickdetector(
	detector: ClickDetector,
	distance?: number,
	event?: "MouseClick" | "RightMouseClick" | "MouseHoverEnter" | "MouseHoverLeave",
): void;

/**
 * Triggers a ProximityPrompt from any distance.
 * @param ProximityPrompt The ProximityPrompt Instance that's being triggered.
 * @example
 * const prompt: ProximityPrompt = Workspace.FindFirstChild("MyProximityPrompt") as ProximityPrompt;
 * fireproximityprompt(prompt);
 */
declare function fireproximityprompt(
	ProximityPrompt: ProximityPrompt
): void;

/**
 * Fires a TouchInterest, similar to `fireclickdetector`.
 * @param BasePart The part that touches the TouchInterest.
 * @param Part The part being touched.
 * @param isTouching Determines if you're currently touching the part.
 * @example
 * const character: Model = game.GetService("Players").LocalPlayer.Character as Model;
 * const part: Part = workspace.FindFirstChild("Checkpoint") as Part;
 * firetouchinterest(character, part, 0);
 * firetouchinterest(character, part, 1);
 */
declare function firetouchinterest(
	BasePart: BasePart | Part,
	Part: BasePart | Part,
	isTouching: number
): void;

/**
 * Returns the callback assigned to a property of the given instance.
 * @param object The instance to get the callback from.
 * @param property The name of the callback property.
 * @returns The callback assigned to the property.
 * @example
 * const remote = new Instance("RemoteFunction");
 * remote.OnClientInvoke = () => print("Hello, world!");
 *
 * print(remote.OnClientInvoke()); // Throws an error
 * print(getcallbackvalue(remote, "OnClientInvoke")!()); // Prints "Hello, world!"
 */
declare function getcallbackvalue<T extends Instance, K extends keyof T>(object: T, property: K): T[K];
/**
 * @alias getcallbackvalue
 * @hidden
 */
declare const getcallbackmember: typeof getcallbackvalue | undefined;

/**
 * Returns the content and hash of the `PhysicalConfigData` of the given union.
 * @deprecated This function is deprecated. Use `gethiddenproperty(union, "PhysicalConfigData")` instead.
 * @param object The union to get the physical config data from.
 * @returns The content and hash string.
 */
declare function getphysicalconfigdata(object: UnionOperation): LuaTuple<[string, string]>;

/**
 * Sets Roblox Studio's clipboard to the given model data. This allows data
 * from the game to be pasted directly into Roblox Studio.
 * @param data The model data to set the clipboard to.
 */
declare function setrbxclipboard(data: string): void;

/**
 * Returns if you are the network owner.
 * @returns A boolean value
 */
declare function isnetworkowner(part: BasePart): boolean;

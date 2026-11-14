# Four-Quail Coops

Interactive 3D build models of two versions of an outdoor quail coop for four birds, on two tabs. Both are one level, 4′ wide × 2′ deep, with a sleeping box on one half, two front doors (mesh for the run, plywood for the box) and a steel shed roof 6′ off the ground.

- **Outdoor coop** (`#outdoor`, the first and default tab): has its own shed roof (corrugated steel over a 7/16″ OSB deck), an OSB floor and pressure-treated legs, stretchers and leg-zone braces. 6′ to the top of the roof, with the floor about 37″ off the ground.
- **Outdoor coop, 2×4 base** (`#rim`): the same cage on a sturdier base. Pressure-treated 2×4 legs sit inside the corners of a 2×4 floor rim, with two 45° 2×4 knee braces per leg. There are no bottom stretchers, floor rails or lower middle posts. The 2×2 corner posts stop at the bottom of the rim.

Open `index.html` in a browser; it always opens on the first tab. You can drag to rotate the model, open the doors, and switch to framing only to see the frame and every screw. The shopping list, cut list, build steps and weight estimate are generated from the same geometry.

`coop.html` is the same page without the document wrapper, which is the form used for publishing it as a Claude artifact.

## Checklist for changes (for AI assistants and reviewers)

These are the kinds of mistakes that have already slipped into this model. Check each one after any change to the geometry, steps or lists.

### Fasteners: each screw has to fit the wood it lands in
- **Screws must not poke through.** Screw length ≤ total thickness it passes through, plus at least ¾″ of bite in the piece it ends in, without coming out the far side. Thicknesses: 2×2 = 1½″, 1×2 = ¾″ × 1½″, 2×4 = 1½″ × 3½″, ply ½″, OSB 7/16″.
- **Screws must land in the middle of a face, not an edge.** A ¾″ edge (a 1×2 laid flat) is too narrow for a #8 screw. This is why the divider cleats, floor ledgers and door frames are 2×2.
- **Owner's screw sizes:**
  - Already owned: #8 Torx deck screws in 3″ and 1⅝″, roofing screws with neoprene washers, fence staples, and a brad nailer.
  - Bought: #10 × 2½″ and #8 × 1¼″ deck screws.
  - No Phillips wood screws.
  - 1¼″ is the shortest screw available, so any part a hardware screw goes into must be at least 1¼″ thick, counting the ply in front of it.
- **Joints held by one screw get two 2″ brads first**, so they cannot twist.
- **Roofing screws go in the valleys** of the corrugated steel, not on the ridges.
- **Toe-screws** start about 1¼″ from the end and are driven at 45° toward it.
- **Each hinge and latch screw goes into solid wood behind it**, not into hardware cloth, and never into a door stop: that would screw the door shut.

### Gaps, overlaps and rodent-proofing
- **Door stops form one unbroken run** around each opening on the top, bottom and latch side, meeting at the corners. With the door shut, the only gap left is the ⅛″ clearance around the door's edge.
- **With the doors shut, no door part may overlap a stop or the frame.** Check this using bounding boxes in the scene (see Testing).
- **Braces, cleats and stops must reach the parts they butt against.** On the outdoor coop the top side rails slope, so anything that meets them must be cut to the slope, not cut square at a fixed height.

### Structure and materials
- **Pressure-treated parts** (tinted green before painting) are anything low or damp: the legs/corner posts, bottom stretchers, leg-zone braces, and lower middle posts. Everything above the floor is untreated.
- **Every part needs something to attach to.** Latches and hinges need wood behind them; the latch catch goes on the 2×4.
- **No ¼″ plywood** (Lowe's only sells it sanded, which is too expensive). Use ½″ plywood, or 7/16″ OSB for the outdoor floor and roof deck.

### Build order
- **Each step must be doable with only the earlier steps in place.** Fit anything screwed from inside (cleats, door stops) before the walls, roof and hardware cloth close it in.
- **When you add, move or resize a part, update all of these to match:**
  - the step text (both coops)
  - the cut list notes
  - the "uses" text for each lumber size
  - the shopping and "already have" lists
  - the fastener counts

### Display
- **Paint shows only from the Paint step on, and only on outside faces.** The inside, and parts that are entirely inside (divider, cleats, stops, ledgers, joist, box-door frame), stay bare.
- **Framing only mode** shows bare wood and every screw except the door hardware.
- **Check on a phone-width screen.** Nothing should overlap: the step bar, the part info box and the toggles.

### Code and publishing
- **Use only `/* */` comments in generated code.** A `//` comment has broken the page twice.
- **Watch for loops without braces.** Adding a line to a brace-less `for` body breaks the script.
- **The page is built from `coop.html`.** After editing it, regenerate `index.html` from `coop.html` (the doctype wrapper plus `coop.html`), then publish from `coop.html`.

### Testing
- **Load both tabs in a headless browser and confirm there are no page errors.**
- **Render the views affected by a change and look at them:** the relevant build step, framing only, and the doors open and shut.
  - The sandbox cannot reach the three.js CDN. Route the cdnjs `three.min.js` and jsdelivr `OrbitControls.js` URLs to a local npm copy of `three@0.128.0`.
- **For geometry changes, also check numerically:**
  - Expose the scene.
  - Shut the doors.
  - Compare bounding boxes of door parts against stops and the frame, looking for overlaps and gaps.

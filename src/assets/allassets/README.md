# Case study page assets

Pulled from Ballu P.fig. File names match the section numbers in the
structural plan (Case Study Page Plan), so each image drops straight into
the section it belongs to.

| File | Section | Size | Notes |
| --- | --- | --- | --- |
| asap-03b-lofi-01-auth-flow.png | ASAP 03b Lo-fi wireframes | 1294x900 | Getting in |
| asap-03b-lofi-02-home.png | ASAP 03b Lo-fi wireframes | 1420x808 | Home: empty / with task / completed |
| asap-03b-lofi-03-breakdown.png | ASAP 03b Lo-fi wireframes | 1352x1594 | The breakdown (tall board) |
| asap-03b-lofi-04-breakdown-contd.png | ASAP 03b Lo-fi wireframes | 1336x830 | Breakdown continued |
| asap-05-competitive-positioning-map.png | ASAP 05 Competitive analysis | 1322x428 | 2x2 positioning map |
| asap-06-user-flow.png | ASAP 06 User flow | 2720x3512 | Tall portrait flow; cap width ~520px |
| petclear-06-user-flow.png | PetClear 06 User flow | 4096x567 | Wide single-band flow; full breakout |
| returnloop-06-persona-1.png | ReturnLoop 06 Personas | 1440x820 | Card fills left ~65%; crop |
| returnloop-06-persona-2.png | ReturnLoop 06 Personas | 1440x820 | Card fills left ~65%; crop |

All nine are high-resolution and need no re-export. The only prep is
cropping: the four lo-fi boards and both persona exports carry wide white
margins around the artwork.

## optional-other-personas/

The same four lo-fi boards for the three persona groups the plan does not
put on the page (career-changer, ECP, entrepreneur). Keep only if you
decide to show more than the student flow.

## Not in this folder

The UI screens are code, not images: screens/Components.bundle.js holds
13 of them as React components (ASAP1, Container, ASAP3, AIPetScanMidFi,
TripCheckpointMidFi, VaccinationTrackerMidFi, DocumentVaultMidFi,
HomeReturnLoop, ScanLabel, PickupWindow, TrackPickup, ReturnConfirmed,
ChatWithDriver), with their own bitmaps under screens/assets/ and
screens/fig-assets.css. Names and props are in screens/Components.d.ts.

## screens/ — UI screens as 2x PNGs

Rendered from the Figma frames with the real font families loaded. Use
these if you do not want to run the React bundle; the bundle is sharper
and editable, these are drop-in.

### ASAP (440x956 frames, device bezel included)
| File | Screen |
| --- | --- |
| asap-01-assignment-list.png | Your assignments — one at a time |
| asap-02-ai-reasons.png | "How I made these suggestions" |
| asap-03-ai-breakdown.png | The 5-step breakdown, with estimates and confidence |
| asap-04-focus-mode.png | Focus mode |
| asap-05-timer.png | Timer |

### PetClear (390px-wide mid-fi frames)
| File | Screen |
| --- | --- |
| petclear-01-ai-pet-scan.png | AI pet scan |
| petclear-02-build-pet-profile.png | Build pet profile |
| petclear-03-trip-checkpoint.png | Trip checkpoint |
| petclear-04-vaccination-tracker.png | Vaccination tracker |
| petclear-05-document-vault.png | Document vault |
| petclear-06-travel-history.png | Travel history |
| petclear-07-community.png | Community |

### ReturnLoop (390px-wide frames, flow order)
| File | Screen |
| --- | --- |
| returnloop-01-home.png | Home |
| returnloop-02-scan-label.png | Scan label |
| returnloop-03-pickup-window.png | Pickup window |
| returnloop-04-track-pickup.png | Live tracking |
| returnloop-05-return-confirmed.png | Carrier confirmed |
| returnloop-06-chat-with-driver.png | Chat with driver |
| returnloop-07-login.png | Login |
| returnloop-08-signup.png | Sign up |

Two caveats on the screen PNGs:

1. A few photo fills render as solid black — the pet thumbnail and avatar
   in AI pet scan, and similar spots elsewhere. Those bitmaps sit outside
   the frames that were extracted. Drop real photos in when you build.
2. Tall screens are cropped at the frame's own height, exactly as the
   Figma frame clips them. If you need the full scroll length, render
   from the bundle with the height unset.

Re-render any of them from "Screen Renders" in the project — it lays all
20 out at full size for capture.

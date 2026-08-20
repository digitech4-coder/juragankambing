# Accessibility Audit — 2026-08-20

## Validation source

Lighthouse 13.4.1 with axe-core 4.13.0 was run against the current Manus preview homepage:

- https://3000-ii2qwi3h52to2qf6sy8m7-29814c6c.sg1.manus.computer/

## Findings recorded

The first audit found an invalid `aria-label` on the testimonial star-rating `<div>`. This was corrected by assigning `role="img"` to the rating wrapper. The latest audit no longer reports that ARIA-prohibited-attribute failure.

The latest audit still reports the following categories requiring final fixes:

1. `color-contrast`: remaining low-contrast text cases, including some small gold/muted labels.
2. `label-content-name-mismatch`: footer links with explicit `aria-label` values that do not include their visible text, specifically the WhatsApp footer link and Google Maps link.

The latest report also records successful checks for associated form labels, one main landmark, discernible interactive controls, keyboard focusability, valid ARIA roles, and image alternative text. Automated project validation remains successful with 3 Vitest tests passing and the production build completing successfully.

## Follow-up fixes

Remove or revise the conflicting footer `aria-label` values so accessible names include visible link text, then rerun Lighthouse. Continue reducing the remaining low-contrast cases using scoped color changes that preserve the existing Emerald Majlis visual composition.

# Description

This repository exists to demonstrate a potential memory leak in `kong/swrv@v0.9.4-2` caused by the indefinite growth of an item with a given key in the `REF_CACHE`.

## Steps To Observe the Leak

The following instructions are written for use with Chrome, but any browser that provides tools to inspect the memory usage the JavaScript VM should work.

1. Clone this repository.
1. `yarn install`
1. `yarn serve`
1. Navigate to the address output by `yarn serve`, e.g. http://localhost:8080/
1. [Open Chrome DevTools](https://developer.chrome.com/docs/devtools/open/) to the Memory tab.
1. Click the link to **States**.
1. Click the link to **Home**.
1. [Record a heap snapshot](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/)
1. Enter `SWRVCache` in the _Class Filter_ input on the _Memory_ tab's summary view.
1. Click the **arrow** to the left of `SWRVCache` in the results.
1. Hover the first of the three nested `SWRVCache` rows until the popover appears.
1. Click the **arrow** to the left of `items`
1. Click the **arrow** to the left of `0`.
1. Click the **arrow** to the left of `value`.
1. Click the **arrow** to the left of `data`.
1. Observe data contains one element.
1. Click the link to **States**.
1. Click the link to **Home**.
1. Press the **Garbage Can** icon to force garbage collection.
1. [Record a heap snapshot](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/)
1. Enter `SWRVCache` in the _Class Filter_ input on the _Memory_ tab's summary view.
1. Click the **arrow** to the left of `SWRVCache` in the results.
1. Hover the first of the three nested `SWRVCache` rows until the popover appears.
1. Click the **arrow** to the left of `items`
1. Click the **arrow** to the left of `0`.
1. Click the **arrow** to the left of `value`.
1. Click the **arrow** to the left of `data`.
1. Observe data contains two elements.
1. Click the link to **States**.
1. Click the link to **Home**.
1. Press the **Garbage Can** icon to force garbage collection.
1. Record a heap snapshot.
1. Enter `SWRVCache` in the _Class Filter_ input on the _Memory_ tab's summary view.
1. Click the **arrow** to the left of `SWRVCache` in the results.
1. Hover the first of the three nested `SWRVCache` rows until the popover appears.
1. Click the **arrow** to the left of `items`
1. Click the **arrow** to the left of `0`.
1. Click the **arrow** to the left of `value`.
1. Click the **arrow** to the left of `data`.
1. Observe data contains three elements.

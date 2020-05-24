# span-lazy-test
demo: https://span-lazy-test.rusgil.ru/
---

- Enter a positive integer. 
- So many lines with random numbers 0-9 will be printed. 
- Lazy loading of 20 lines. 
- JS Libraries are not used.
- Pure JS.
---
---
During development, I found a bug in the Opera browser. 
Error demonstration: https://span-lazy-test.rusgil.ru/operawrong/
getElementsByTag.length - returns 1 more than it should be. (span-lazy-test.rusgil.ru/operawrong/script.js line 38)
If you enter 10 into input:
in Opera result - 11 // incorrectly:
in other browsers result - 10 // correctly
Generated a bug report message about this error.

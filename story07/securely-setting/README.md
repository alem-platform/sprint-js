# Securely Setting HTML

Demonstrate how to safely set inner HTML content without exposing the page to potential Cross-Site Scripting (XSS) vulnerabilities.

### Instructions:

Write a function called `setSafeHTML` that receives a DOM element ID and a string.
Instead of using innerHTML, create a textNode to ensure the content is safely rendered without executing harmful scripts.

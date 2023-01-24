# Notes

- SRP returns different image sizes, nonetheless I use only one - S, because <480px screen width I decided to economy user a bit traffic, as affected by scale the difference between S & M images quality will not be visible. >480px I always render small images, which height is no bigger than 200px;

# The next steps or how to refactor my code if I had more time

- No error handling. We definitely need some .catch on API requests. Moreove if something is wrong - notiy user as well;
- SRP & PDP are actually pages, not components, structure should be updated;
- make common reusable components, e.g. h1-h6
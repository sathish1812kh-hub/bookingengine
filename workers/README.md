# Background Workers Directory

This directory hosts standalone background Cloudflare Workers:
- `reconciliation-worker`: Scheduled cron execution for 3-way daily financial matching.
- `rate-scraper-worker`: Scheduled cron execution for competitor rate scraping.
- `webhook-retry-worker`: Outbox queue consumer for Stayflexi & TTLock retries.

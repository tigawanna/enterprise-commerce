import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  skipValidation: process.env.NODE_ENV !== "production" || process.env.SKIP_ENV_VALIDATION === "true",
  server: {
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: z.string(),
    SHOPIFY_STORE_DOMAIN: z.string(),
    SHOPIFY_ADMIN_ACCESS_TOKEN: z.string().optional(),
    SHOPIFY_APP_API_SECRET_KEY: z.string().optional(),
    SHOPIFY_HIERARCHICAL_NAV_HANDLE: z.string().optional(),
    ALGOLIA_PRODUCTS_INDEX: z.string(),
    ALGOLIA_CATEGORIES_INDEX: z.string(),
    ALGOLIA_REVIEWS_INDEX: z.string().optional(),
    ALGOLIA_APP_ID: z.string().optional(),
    ALGOLIA_WRITE_API_KEY: z.string().optional(),
    REPLICATE_API_KEY: z.string().optional(),
    OPENAI_API_KEY: z.string().optional(),
    LIVE_URL: z.string().optional(),
    GTM_ID: z.string().optional().default(),
    IS_GTM_ENABLED: z.enum(["true", "false"]).optional(),
    IS_SPEED_INSIGHTS_ENABLED: z.enum(["true", "false"]).optional(),
    IS_VERCEL_ANALYTICS_ENABLED: z.enum(["true", "false"]).optional(),
    IS_DEMO_MODE: z.enum(["true", "false"]).optional(),
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    JUDGE_BASE_URL: z.string().optional(),
    JUDGE_API_TOKEN: z.string().optional(),
    CRON_SECRET: z.string().optional(),
    AZURE_AI_SPEECH_BASE_URL: z.string().optional(),
    AZURE_AI_SPEECH_KEY: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_AZURE_AI_SPEECH_REGION: z.string().optional(),
    NEXT_PUBLIC_AZURE_AI_SPEECH_ENABLED: z.enum(["true", "false"]).optional().default("false"),
    NEXT_PUBLIC_AZURE_AI_SPEECH_LANGUAGE: z.string().optional().default("en-US"),
  },
  runtimeEnv: {
    IS_DEMO_MODE: process.env.NEXT_PUBLIC_IS_DEMO_MODE,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || "demo",
    SHOPIFY_ADMIN_ACCESS_TOKEN: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN || "demo",
    SHOPIFY_APP_API_SECRET_KEY: process.env.SHOPIFY_APP_API_SECRET_KEY || "demo",
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN || "demo",
    SHOPIFY_HIERARCHICAL_NAV_HANDLE: process.env.SHOPIFY_HIERARCHICAL_NAV_HANDLE,
    ALGOLIA_PRODUCTS_INDEX: process.env.ALGOLIA_PRODUCTS_INDEX || "products",
    ALGOLIA_CATEGORIES_INDEX: process.env.ALGOLIA_CATEGORIES_INDEX || "categories",
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID || "demo",
    ALGOLIA_WRITE_API_KEY: process.env.ALGOLIA_WRITE_API_KEY || "demo",
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    ALGOLIA_REVIEWS_INDEX: process.env.ALGOLIA_REVIEWS_INDEX,
    LIVE_URL: process.env.LIVE_URL || "https://commerce.blazity.com",
    ANALYZE: process.env.ANALYZE,
    IS_GTM_ENABLED: process.env.IS_GTM_ENABLED,
    IS_VERCEL_ANALYTICS_ENABLED: process.env.IS_VERCEL_ANALYTICS_ENABLED || "true",
    IS_SPEED_INSIGHTS_ENABLED: process.env.IS_SPEED_INSIGHTS_ENABLED || "true",
    GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    REPLICATE_API_KEY: process.env.REPLICATE_API_KEY,
    JUDGE_BASE_URL: process.env.JUDGE_BASE_URL || "https://judge.me/api/v1",
    JUDGE_API_TOKEN: process.env.JUDGE_API_TOKEN,
    CRON_SECRET: process.env.CRON_SECRET,
    AZURE_AI_SPEECH_BASE_URL: process.env.AZURE_AI_SPEECH_BASE_URL,
    AZURE_AI_SPEECH_KEY: process.env.AZURE_AI_SPEECH_KEY,
    NEXT_PUBLIC_AZURE_AI_SPEECH_REGION: process.env.NEXT_PUBLIC_AZURE_AI_SPEECH_REGION,
    NEXT_PUBLIC_AZURE_AI_SPEECH_ENABLED: process.env.NEXT_PUBLIC_AZURE_AI_SPEECH_ENABLED,
    NEXT_PUBLIC_AZURE_AI_SPEECH_LANGUAGE: process.env.NEXT_PUBLIC_AZURE_AI_SPEECH_LANGUAGE || "en-US",
  },
})

import { Provider } from '@/frontend/stores/APIKeyStore';

export const AI_MODELS = [
  'Deepseek R1 0528',
  'Deepseek V3',
  'Gemini 2.5 Pro',
  'Gemini 2.5 Flash',
  'GPT-4o',
  'GPT-4.1-mini',
  'Llama 3.1 405B',
  'Llama 3.1 70B',
  'Llama 3.1 8B',
  'Llama 3.3 70B',
  'Mixtral 8x7B',
  'Gemma 2 9B',
  'Deepseek R1 Distill 70B',
  'Llama 4 Maverick 17B',
  'Llama 4 Scout 17B',
  'Mistral Saba 24B',
  'Kimi K2 Instruct',
  'Qwen 3 32B',
  'Compound Beta',
  'Compound Beta Mini',
] as const;

export type AIModel = (typeof AI_MODELS)[number];

export type ModelConfig = {
  modelId: string;
  provider: Provider;
  headerKey: string;
  supportsReasoning?: boolean;
};

export const MODEL_CONFIGS = {
  'Deepseek R1 0528': {
    modelId: 'deepseek/deepseek-r1-0528:free',
    provider: 'openrouter',
    headerKey: 'X-OpenRouter-API-Key',
    supportsReasoning: true,
  },
  'Deepseek V3': {
    modelId: 'deepseek/deepseek-chat-v3-0324:free',
    provider: 'openrouter',
    headerKey: 'X-OpenRouter-API-Key',
  },
  'Gemini 2.5 Pro': {
    modelId: 'gemini-2.5-pro-preview-05-06',
    provider: 'google',
    headerKey: 'X-Google-API-Key',
  },
  'Gemini 2.5 Flash': {
    modelId: 'gemini-2.5-flash-preview-04-17',
    provider: 'google',
    headerKey: 'X-Google-API-Key',
  },
  'GPT-4o': {
    modelId: 'gpt-4o',
    provider: 'openai',
    headerKey: 'X-OpenAI-API-Key',
  },
  'GPT-4.1-mini': {
    modelId: 'gpt-4.1-mini',
    provider: 'openai',
    headerKey: 'X-OpenAI-API-Key',
  },
  'Llama 3.1 405B': {
    modelId: 'llama-3.1-405b-reasoning',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
    supportsReasoning: true,
  },
  'Llama 3.1 70B': {
    modelId: 'llama-3.1-70b-versatile',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
  },
  'Llama 3.1 8B': {
    modelId: 'llama-3.1-8b-instant',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
  },
  'Mixtral 8x7B': {
    modelId: 'mixtral-8x7b-32768',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
  },
  'Gemma 2 9B': {
    modelId: 'gemma2-9b-it',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
  },
  'Llama 3.3 70B': {
    modelId: 'llama-3.3-70b-versatile',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
  },
  'Deepseek R1 Distill 70B': {
    modelId: 'deepseek-r1-distill-llama-70b',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
    supportsReasoning: true,
  },
  'Llama 4 Maverick 17B': {
    modelId: 'meta-llama/llama-4-maverick-17b-128e-instruct',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
    supportsReasoning: true,
  },
  'Llama 4 Scout 17B': {
    modelId: 'meta-llama/llama-4-scout-17b-16e-instruct',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
    supportsReasoning: true,
  },
  'Mistral Saba 24B': {
    modelId: 'mistral-saba-24b',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
  },
  'Kimi K2 Instruct': {
    modelId: 'moonshotai/kimi-k2-instruct',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
    supportsReasoning: true,
  },
  'Qwen 3 32B': {
    modelId: 'qwen/qwen3-32b',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
  },
  'Compound Beta': {
    modelId: 'compound-beta',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
  },
  'Compound Beta Mini': {
    modelId: 'compound-beta-mini',
    provider: 'groq',
    headerKey: 'X-Groq-API-Key',
  },
} as const satisfies Record<AIModel, ModelConfig>;

export const getModelConfig = (modelName: AIModel): ModelConfig => {
  return MODEL_CONFIGS[modelName];
};

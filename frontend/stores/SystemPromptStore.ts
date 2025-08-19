import { create, Mutate, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';

export const SYSTEM_PROMPTS = {
  default: `You are Chat0, an ai assistant that can answer questions and help with tasks.
Be helpful and provide relevant information
Be respectful and polite in all interactions.
Be engaging and maintain a conversational tone.
Always use LaTeX for mathematical expressions - 
Inline math must be wrapped in single dollar signs: $content$
Display math must be wrapped in double dollar signs: $$content$$
Display math should be placed on its own line, with nothing else on that line.
Do not nest math delimiters or mix styles.
Examples:
- Inline: The equation $E = mc^2$ shows mass-energy equivalence.
- Display: 
$$\\frac{d}{dx}\\sin(x) = \\cos(x)$$`,
  
  brutal: `You are Chat0, an AI assistant who values brutal honesty above all else.
You will:
- Give direct, unfiltered responses without sugar-coating
- Point out flaws, mistakes, and bad ideas bluntly
- Prioritize truth over politeness
- Challenge assumptions and call out nonsense
- Be straightforward about limitations and problems
- Provide harsh but constructive criticism when needed

Always use LaTeX for mathematical expressions - 
Inline math must be wrapped in single dollar signs: $content$
Display math must be wrapped in double dollar signs: $$content$$
Display math should be placed on its own line, with nothing else on that line.
Do not nest math delimiters or mix styles.
Examples:
- Inline: The equation $E = mc^2$ shows mass-energy equivalence.
- Display: 
$$\\frac{d}{dx}\\sin(x) = \\cos(x)$$`,
} as const;

export type SystemPromptType = keyof typeof SYSTEM_PROMPTS;

type SystemPromptStore = {
  selectedPrompt: SystemPromptType;
  setPrompt: (prompt: SystemPromptType) => void;
  getPromptText: () => string;
};

type StoreWithPersist = Mutate<
  StoreApi<SystemPromptStore>,
  [['zustand/persist', { selectedPrompt: SystemPromptType }]]
>;

export const withStorageDOMEvents = (store: StoreWithPersist) => {
  const storageEventCallback = (e: StorageEvent) => {
    if (e.key === store.persist.getOptions().name && e.newValue) {
      store.persist.rehydrate();
    }
  };

  window.addEventListener('storage', storageEventCallback);

  return () => {
    window.removeEventListener('storage', storageEventCallback);
  };
};

export const useSystemPromptStore = create<SystemPromptStore>()(
  persist(
    (set, get) => ({
      selectedPrompt: 'default',

      setPrompt: (prompt) => {
        set({ selectedPrompt: prompt });
      },

      getPromptText: () => {
        const { selectedPrompt } = get();
        return SYSTEM_PROMPTS[selectedPrompt];
      },
    }),
    {
      name: 'system-prompt',
      partialize: (state) => ({ selectedPrompt: state.selectedPrompt }),
    }
  )
);

withStorageDOMEvents(useSystemPromptStore);
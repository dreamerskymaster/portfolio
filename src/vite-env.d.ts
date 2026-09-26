/// <reference types="vite/client" />
    
declare module '@vercel/analytics/react';

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

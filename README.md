# My Shows

## Aplicação de treinamento para o time de desenvolvimento da Agrione aprimorar os conhecimentos em Front-end e React

### Dependências

- Node.js v20
- Vite
- TypeScript
- Axios
- React v18
- React Router
- React Query
- Tailwind CSS
- shadcn/ui

### Instalação

- **Setup com Vite**
  1. `npm create vite@latest`
  2. `cd my-shows && npm install`
- **Tailwind CSS**
  1. `npm install -D tailwindcss postcss autoprefixer`
  2. `npx tailwindcss init -p`
- **shadcn/ui**

  1. Adicionar o seguinte código ao `tsconfig.json`:

  ```javascript
  {
    // ...
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": [
          "./src/*"
        ]
      }
      //...
    }
  }
  ```

  2. `npm install -D @types/node`
  3. Adicionar o seguinte código ao `vite.config.ts`

  ```javascript
  import path from "path";
  import react from "@vitejs/plugin-react";
  import { defineConfig } from "vite";

  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
  ```

  4. `npx shadcn-ui@latest init`

### Instruções de uso

1. Clone o repositório: `git clone https://github.com/username/my-shows.git` 📥
2. Navegue até o diretório do projeto: `cd my-shows` 📂
3. Instale as dependências: `npm install` ⚙️
4. Inicie o servidor de desenvolvimento: `npm start` 🚀
5. Acesse a aplicação no navegador: `http://localhost:3000` 🌐

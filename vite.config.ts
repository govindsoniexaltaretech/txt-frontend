// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// export default defineConfig({
//   plugins: [react()],
//   base: "/",
//   build: {
//     chunkSizeWarningLimit: 3000,
//   },
//   server: {
//     open: true, // This will open the browser automatically
//   },
// })


import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true, 
  },
});

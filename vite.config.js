import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'mock-aws-s3': path.resolve(__dirname, './src/empty.js'),
      'aws-sdk': path.resolve(__dirname, './src/empty.js'),
      'nock': path.resolve(__dirname, './src/empty.js'),
      'bcrypt': 'bcryptjs'
    }
  }
});

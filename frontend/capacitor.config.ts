import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'scoutify.app',
  appName: 'Scoutify',
  webDir: 'src',
  plugins: {
    android: {
      CAPACITOR_ANDROID_STUDIO_PATH: 'C:\Program Files\Android\Android Studio'
    }
    }
};

export default config;

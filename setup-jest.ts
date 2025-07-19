import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

// Глобальні налаштування для тестів
Object.defineProperty(window, 'CSS', { value: null });

Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
    };
  },
});

// Mock для document.body
if (!document.body) {
  document.body = document.createElement('body');
}

// Mock для HighContrastModeDetector
Object.defineProperty(document.body, 'style', {
  value: {
    backgroundColor: '',
    setProperty: jest.fn(),
    getPropertyValue: jest.fn(() => ''),
  },
  writable: true,
});

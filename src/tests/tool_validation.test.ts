import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { socialCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 7 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(7);
    });

    it('socialCategory should be defined', () => {
      expect(socialCategory).toBeDefined();
      expect(socialCategory.i18n).toBeDefined();
    });
  });
});


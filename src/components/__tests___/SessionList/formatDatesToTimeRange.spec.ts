import { formatDatesToTimeRange } from '@/components/Sessions/functions/formatDatesToTimeRange.ts'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('formatDatesToTimeRange', () => {

  it('SHOULD return time range WHEN dates are equal', () => {
    const expectedStart = new Date('2023-07-15T09:00:00.000Z');
    const expectedEnd = new Date('2023-07-15T10:45:00.000Z');
    const expectedRange = '15.07.2023, 09:00 - 10:45';

    const actualRange = formatDatesToTimeRange(expectedStart, expectedEnd, 'UTC');

    expect(actualRange).toEqual(expectedRange);
  });

  it('SHOULD return date-time range WHEN dates are not equal', () => {
    const expectedStart = new Date('2023-07-15T23:30:00.000Z');
    const expectedEnd = new Date('2023-07-16T00:30:00.000Z');
    const expectedRange = '15.07.2023 23:30 - 16.07.2023 00:30';

    const actualRange = formatDatesToTimeRange(expectedStart, expectedEnd, 'UTC');

    expect(actualRange).toEqual(expectedRange);
  });

})

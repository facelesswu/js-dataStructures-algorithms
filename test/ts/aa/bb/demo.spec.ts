import 'mocha';
import { expect } from 'chai';
import { sum } from '../../../../src/demo';

describe('demo', () => {
  it('数组数值求和', function () {
    const nums = [1, 2, 3];
    expect(sum(nums)).to.be.equal(6);
  });
})

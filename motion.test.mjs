import test from 'node:test';
import assert from 'node:assert/strict';
import { sceneMotion, readingProgress } from './motion.mjs';
test('scene movement is bounded even outside the hero', () => {
 assert.deepEqual(sceneMotion(-100,900),sceneMotion(0,900));
 assert.deepEqual(sceneMotion(2000,900),sceneMotion(900,900));
 assert.equal(sceneMotion(0,900).landscape,0);
 assert.ok(sceneMotion(900,900).wordmark > sceneMotion(900,900).landscape);
});
test('narrow screens use a smaller motion range',()=>{
 assert.ok(sceneMotion(450,900,true).wordmark < sceneMotion(450,900,false).wordmark);
});
test('reading progress handles short pages and invalid geometry',()=>{
 assert.equal(readingProgress(100,500,800),0);
 assert.equal(readingProgress(200,1000,800),1);
 assert.equal(readingProgress(-10,1000,800),0);
 assert.equal(readingProgress(NaN,1000,800),0);
 assert.ok(Number.isFinite(sceneMotion(NaN,0).landscape));
});

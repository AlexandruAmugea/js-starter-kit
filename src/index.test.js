import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', ()=>{
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});

describe('index.html', ()=>{
  it('should say test', (done)=>{
   const index = fs.readFileSync('./src/index.html', "utf-8");
   jsdom.env(index, (err, window)=>{
     const h2 = window.document.getElementsByTagName('h2')[0];
     expect(h2.innerHTML).to.equal('Testing');
     //expect(h2.innerHTML).to.equal('Testingdsad'); //Fail
     done();
     window.close();
   }) // second parameter file js files
  })
});
